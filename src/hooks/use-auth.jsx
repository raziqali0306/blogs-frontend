import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/core";
import { BASE_URL } from "../utils/constants";

function useAuth() {
    const navigate = useNavigate();
    const appContext = useAppContext();

    const signUp = async (username, email, password) => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password })

        })
        const data = await response.json();
        return data.data;
    }

    const signIn = async (username, email, password) => {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password })
        })
        const data = await response.json();
        appContext.loadUser({
            userId: data.data._id,
            username: data.data.username,
            email: data.data.email,
            accessToken: data.data.access_token
        });
        navigate('/');
    }

    return {
        signUp,
        signIn
    }
}

export default useAuth;