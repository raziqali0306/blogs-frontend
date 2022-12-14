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

  const getMyPosts = useCallback(async () => {
    const access_token = appContext.getAccessToken();
    const response = await fetch(`${BASE_URL}/posts/myposts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({access_token}),
    });
    const data = await response.json();
    return data.data;
  }, [appContext]);

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
          author: appContext.getUser().userId
          }),
    })
    const data = await response.json();
    navigate(`/posts/${data.data.postId}`)
  }, [appContext, navigate]);

  const editPost = useCallback(async (title, body, tags) => {
    const access_token = appContext.getAccessToken();
    try {
      await fetch(`${BASE_URL}/posts/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, body, tags, access_token}),
      })
      navigate(-1)
    }
    catch (err) {
      console.log(err);
    }
  }, [appContext, id, navigate]);
  
  const deletePost = useCallback(async (postId = id) => {
    const access_token = appContext.getAccessToken();
    await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token
      })
    })
  }, [appContext, id]);

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
    getTags,
    getMyPosts
  }
}

export default usePosts