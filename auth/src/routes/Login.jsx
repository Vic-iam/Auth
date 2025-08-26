import React from 'react'
import DefaultLayout from '../Layout/DefaultLayout'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authen/AuthProvider'; 


export default function Login() {

        const [username, setUserName] = useState("");
        const [password, setPassWord] = useState("");


    return (
        <DefaultLayout>
            <form
            style={{ display: "grid", padding: "20px" , justifyContent:"center", alignItems:"center"
             }}>
                <h1>Login</h1>

                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}  />

                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassWord(e.target.value)}/>

                <button>Iniciar Sesion</button>
            </form>
        </DefaultLayout>

    )
}