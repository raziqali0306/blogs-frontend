import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function usePosts() {
  const navigate = useNavigate();
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
            title, body, tags
          }),
    })
    const data = await response.json();
    navigate(`/posts/${data.data.postId}`)
  }, [navigate]);

  const editPost = useCallback(async (title, body, tags) => {
    await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, body, tags}),
    })
    navigate(`/posts/${id}`)
  }, [id, navigate]);

  const deletePost = useCallback(async () => {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    })
    navigate('/');
  }, [id, navigate]);

  return {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost
  }
}

export default usePosts