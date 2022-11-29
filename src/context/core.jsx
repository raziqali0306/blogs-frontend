import { createContext } from "react";

const AppContext = createContext({});

export default function AppWrapper({ children }) {

    return (
        <AppContext.Provider
            value={{

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useContext() {
    return useContext(AppContext);
}