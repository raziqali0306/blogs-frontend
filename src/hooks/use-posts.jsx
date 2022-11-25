import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function usePosts() {

  const navigate = useNavigate();

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

  return {
    getPostById,
    createPost,
    editPost
  }
}

export default usePosts