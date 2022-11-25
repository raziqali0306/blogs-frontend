import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function usePosts() {

  const navigate = useNavigate();

  function getAllPosts(setPosts) {
    fetch(`${BASE_URL}/posts/`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  function getPostById(id, setPost) {
    fetch(`${BASE_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }

  function createPost(title, body, tags) {
    fetch(`${BASE_URL}/posts/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title, body, tags
          }),
    })
    .then((res) => res.json())
    .then((res) => navigate(`/posts/${res.data.postId}`))
    .catch((err) => console.log(err));
  }

  function editPost(id, title, body, tags) {
    fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, body, tags}),
    })
    .then((res) => res.json())
    .then((res) => {
        navigate(`/posts/${id}`)
    })
    .catch((err) => console.log(err));
  }

  function deletePost(id) {
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    })
    .then((data) => {
      navigate('/');
    }).catch((err) => {
      alert("Failed to delete post");
      console.log(err)
    });
  }

  return {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost
  }
}

export default usePosts