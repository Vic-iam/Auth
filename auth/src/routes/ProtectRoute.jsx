import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../authen/AuthProvider";

export default function ProtectRouter(){

  const auth =  useAuth();

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" /> 
}