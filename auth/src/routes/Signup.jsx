import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../authen/AuthProvider';
import DefaultLayout from '../Layout/DefaultLayout';
import { API_URL } from "../authen/contants"; 
import React, { useState } from 'react';

export default function Login() {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    
    const auth = useAuth();
    const goTo = useNavigate();

    if (auth.isAuthenticated) return <Navigate to="/dashboard" />;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, username, password })
            });

            if (response.ok) {
                console.log("User created successfully");
                setErrorResponse("");

                goTo("/");
            } else {
                console.log("Something went wrong");
                const json = await response.json();
                setErrorResponse(json.body.error);
                return;
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DefaultLayout>
            <form 
                onSubmit={handleSubmit}
                style={{ display: "grid", padding: "20px", justifyContent: "center", alignItems: "center" }}
            >
                <h1>Signup</h1>
                {!!errorResponse && <div style={{padding: "10px", backgroundColor: "#FF8A92"}}><p style={{color: "#D1000E "}}>{errorResponse}</p></div>}
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} />

                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassWord(e.target.value)} />

                <button>Iniciar Sesion</button>
            </form>
        </DefaultLayout>
    );
}
