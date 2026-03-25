import React, { createContext, useEffect, useState } from "react";

export const AuthContext =  createContext();

export const AuthProvider =({children}) =>{
    const [user, setUser] = useState(null);
    
    const login = (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", "admin"); // demo purpose only, in real app, role should come from server
      setUser(data);
    };

    const logout = ()=> {
      localStorage.removeItem("token");
      setUser(null);
    };

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setUser({token});
        }
    }, []);
    return(
        <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
    );
};