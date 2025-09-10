import { useContext, createContext, useState, ReactNode } from "react";
import type { AuthResponse } from "../types/types";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  getAccessToken: () => string;
  saveUser: (userData: AuthResponse) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  getAccessToken: () => "",
  saveUser: (userData: AuthResponse) => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");


  function getAccessToken() {
    return accessToken;
  }

  function saveUser(userData: AuthResponse) {
    setAccessToken(userData.body.accessToken);
    setRefreshToken(userData.body.refreshToken);
    
    localStorage.setItem("token", JSON.stringify(userData.body.refreshToken))
    setIsAuthenticated(true);
  } 
 
 
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, getAccessToken, saveUser}}>
      {children}
    </AuthContext.Provider> 
  );
}

export const useAuth = () => useContext(AuthContext);
