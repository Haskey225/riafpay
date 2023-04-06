import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export default function UserContextProvider(props) {
    const [loadded, setLoadded] = useState(false)
    const [isGLoading, setIsGLoading] = useState(true);

    const setLoading = (bool) => {
        setIsGLoading(bool)
    }
    // Hook for react toggle loading app
    useEffect(() => {

        if (isGLoading) {
            setLoadded(false)
            setTimeout(() => {
                setIsGLoading(false);
            }, 1000)
        } else {
            setLoadded(true)
        }
    }, [isGLoading]);

    return (
        <UserContext.Provider
            value={{
                setLoading,
                loadded
            }}
        >
            {loadded ? props.children : 'Is not loadin'}
        </UserContext.Provider>
    )
}