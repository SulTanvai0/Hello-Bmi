import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [openModal, setOpenModal] = useState(false);
    const [MediaModal, setMediaModal,] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);

    const [bmi, setBmi] = useState(0);




    const authInfo = { openModal, setOpenModal, MediaModal, setMediaModal, bmi, setBmi, openSnack, setOpenSnack }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;