import React, { useContext } from 'react';

export default function UseContext() {
    const AppContext = useContext();
    const userData = {
        name: "React",
        Data: 2.0,
    }
    const Appprovider = ({ children }) => {
        return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
    }

    return (
        <div>
            <h1>Hello Use Context</h1>
        </div>
    )
}
