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
                const json = await response.json();

                if (json.body?.accessToken && json.body?.refreshToken) {
                    auth.saveUser(json);
                    goTo("/dashboard");
                }

                //      goTo("/dashboard");
            } else {
                console.log("Something went wrong");
                const json = await response.json();
                setErrorResponse(json.body.error);
                return;
            }
        } catch (error) {
            console.error(error);
            setErrorResponse("No se pudo conectar con el servidor");
        }
    }

    if (auth.isAuthenticated) return <Navigate to="/dashboard" />;


    return (
        <DefaultLayout>
            <form style={{ display: "grid", justifyContent: "center" }} onSubmit={handleSubmit}>
                <div style={{
                    display: "grid", backgroundColor: "white", height: "300px",
                    justifyContent: "center", margin: "50px", padding: "50px", boxShadow: "0 0 5px white"
                }}>
                    <h1 style={{ padding: "20px", textAlign: "center", color: "black", fontFamily: "arial" }}>Login</h1>
                    {!!errorResponse && <div style={{ padding: "10px", backgroundColor: "#FB2C36" }}><p style={{ color: "white" }}>{errorResponse}</p></div>}

                    <label style={{ color: "black", fontSize: "1.3rem", padding: "1px" }}>Username</label>
                    <input style={{ height: "20px", width: "300px" }} placeholder='Writhe your username' type='text' value={username} onChange={(e) => setUserName(e.target.value)} />

                    <label style={{ color: "black", fontSize: "1.3rem", padding: "1px" }}>Password</label>
                    <input style={{ height: "20px", width: "300px" }} placeholder='Writhe your password' type='password' value={password} onChange={(e) => setPassWord(e.target.value)} />

                    <div style={{ padding: "10px", textAlign: "center" }}>
                        <button style={{
                            width: "150px", height: "30px", backgroundColor: "black", color: "white", border: "none",
                            borderRadius: "10px"
                        }}>Iniciar Sesion</button>
                    </div>
                </div>
            </form>
        </DefaultLayout>

    )
}