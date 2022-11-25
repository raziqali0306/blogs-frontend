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

  function editPost(postId, title, body, tags) {
    // TODO
  }

  return {
    getPostById,
    createPost,
    editPost
  }
}

export default usePosts