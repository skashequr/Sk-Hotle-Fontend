import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user , setUser] = useState(null);
    const [lodder , setlodder] = useState(true);
    const createUserWithEmailAndPass =(email, password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const logIn = (email, password) =>{
        setlodder(true);
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    const googleLogin = ()=>{
        setlodder(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setlodder(true);
        return signOut(auth)
          
      };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setlodder(false);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    const authData = {
        createUserWithEmailAndPass,
        logIn,
        googleLogin,
        logOut,
        user,
        lodder
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;