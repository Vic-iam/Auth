import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function ProtectRouter(){

  const auth =  useauth();

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" /> 
}