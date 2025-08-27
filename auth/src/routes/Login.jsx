import React from 'react'
import DefaultLayout from '../Layout/DefaultLayout'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../authen/AuthProvider';
import { API_URL } from "../authen/contants";


export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [errorResponse, setErrorResponse] = useState("");


    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                console.log("Login successful");
                setErrorResponse("");

                goTo("/dashboard");
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

    if (auth.isAuthenticated) return <Navigate to="/dashboard" />;

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit}
                style={{
                    display: "grid", padding: "20px", justifyContent: "center", alignItems: "center"
                }}>
                <h1>Login</h1>
                {!!errorResponse && <div style={{ padding: "10px", backgroundColor: "#FF8A92" }}><p style={{ color: "#D1000E " }}>{errorResponse}</p></div>}

                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} />

                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassWord(e.target.value)} />

                <button>Iniciar Sesion</button>
            </form>
        </DefaultLayout>

    )
}