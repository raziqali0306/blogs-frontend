import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export default function AppWrapper({ children }) {
    
    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [accessToken, setAccessToken] = useState('')

    const logout = () => {
        localStorage.removeItem('blogs');
        window.location.reload();
    }
    
    const fetchLocalStorage = () => {
        if (localStorage.getItem('blogs') === null) return null;
        return JSON.parse(localStorage.getItem('blogs'));
    }
    
    const loadLocalStorage = (user) => {
        setUserId(user?.userId || '')
        setUsername(user?.username || '');
        setEmail(user?.email || '');
        setAccessToken(user?.accessToken || '');
        const data = {}
        if (user) {
            data.user = user;
        }
        localStorage.setItem('blogs', JSON.stringify(data));
    }
    
    const getAccessToken = () => {
        if (accessToken !== '') return accessToken;
        return JSON.parse(localStorage.getItem('blogs'))?.user.accessToken || null;
    }
    
    const getUser = () => {
        if (accessToken) {
            return { userId, username, email, accessToken };
        }
        return fetchLocalStorage()?.user || null;
    }

    const loadUser = (user) => {
        return loadLocalStorage(user);
    }

    return (
        <AppContext.Provider
            value={{
                getAccessToken,
                getUser,
                loadUser,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}