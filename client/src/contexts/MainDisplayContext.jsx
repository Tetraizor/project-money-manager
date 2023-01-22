import { useState, createContext, useEffect } from 'react';

export const MainDisplayContext = createContext();

export default function MainDisplayProvider({ children, onWindowChange }) {
    const [windowState, setWindowState] = useState("mid");

    useEffect(() => {
        onWindowChange(windowState);
    }, [windowState])

    return (
        <MainDisplayContext.Provider value={[windowState, setWindowState]}>
            {children}
        </MainDisplayContext.Provider>
    );
}