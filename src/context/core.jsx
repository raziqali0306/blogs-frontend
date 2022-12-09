import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

export default function AppWrapper({ children }) {
    
    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [accessToken, setAccessToken] = useState('')

    const storeLoginDetails = (data) => {
        if (data === "") return;
        console.log("appContext updated?")
        setUserId(data._id)
        setUsername(data.username);
        setEmail(data.email);
        setAccessToken(data.access_token);
        setUsername(data.username);

        localStorage.setItem("blogs-user", JSON.stringify(data))
    }

    const clearLoginDetails = () => {
        localStorage.removeItem('blogs-user');
        window.location.reload();
    }
    
    useEffect(() => {
        if (localStorage.getItem("blogs-user") !== null) {
            storeLoginDetails(JSON.parse(localStorage.getItem('blogs-user')));
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                userId, username, email, accessToken, storeLoginDetails, clearLoginDetails
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}