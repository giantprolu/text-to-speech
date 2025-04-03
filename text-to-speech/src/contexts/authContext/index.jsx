import React, { useEffect, useState, useContext } from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    let context = useContext(AuthContext);
    if (!context) {
        context=React.createContext();
    }
    return context;
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                setUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
            {!loading && children}

        </AuthContext.Provider>
    );
    
}