import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/core";
import { BASE_URL } from "../utils/constants";

function usePosts() {
  
  const navigate = useNavigate();
  const appContext = useAppContext();
  const { id } = useParams();

  const getAllPosts = useCallback(async () => {
    const response = await fetch(`${BASE_URL}/posts/`);
    const data = await response.json();
    return data;
  }, []);

  const getPostById = useCallback(async () => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  }, [id]);

  const createPost = useCallback(async (title, body, tags) => {
    const response = await fetch(`${BASE_URL}/posts/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title, body, tags, 
          author: appContext.userId
          }),
    })
    const data = await response.json();
    navigate(`/posts/${data.data.postId}`)
  }, [appContext.userId, navigate]);

  const editPost = useCallback(async (title, body, tags) => {
    const access_token = appContext.accessToken;
    try {
      await fetch(`${BASE_URL}/posts/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, body, tags, access_token}),
      })
      navigate(`/posts/${id}`)
    }
    catch (err) {
      console.log(err);
    }
  }, [appContext.accessToken, id, navigate]);
  
  const deletePost = useCallback(async () => {
    const access_token = appContext.accessToken;
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token
      })
    })
    navigate('/');
  }, [appContext.accessToken, id, navigate]);

  const getTags = useCallback(async () => {
    const response = await fetch(`${BASE_URL}/posts/tags`);
    const data = await response.json();
    return data;
  }, [])

  return {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    getTags
  }
}

export default usePosts