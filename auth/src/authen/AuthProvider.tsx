import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({
    isAuhtenticated: false
})

export function AuthProvider({children}: AuthProviderProps){
    
    const [isAuthenticated, setIsAuhtenticated] = useState(false)

    return(
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}  
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);