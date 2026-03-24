import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] =  useState("eve.holt@reqres.in");
    const [password, setPassword] = useState('cityslicka');

    const { login } = useAuth();
    const navigate  = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();

        const res = await api.post('/login', {email, password});
        login(res.data);
        navigate("/dashborad");
    }
 
    return (
       <form onSubmit={handleSubmit}>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} />
        <input value = {password} onChange = {(e) => setPassword(e.target.value)} />
        <button>Login</button>
       </form>
    );
}

export default Login;