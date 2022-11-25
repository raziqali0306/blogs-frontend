import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function usePosts() {

  const navigate = useNavigate();

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

  return {
    createPost,
  }
}

export default usePosts