import React, { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserContextProvider(props) {

    const testContext = 'context set successfuly';
    const [amount, setAmount] = useState(0);

    return (
        <UserContext.Provider value={{ amount, setAmount, testContext }}>
            {props.children}
        </UserContext.Provider>
    )
}