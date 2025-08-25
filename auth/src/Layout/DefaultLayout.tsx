import { Children } from "react"
import { Link } from "react-router-dom"


interface DefaultLayoutProps {
  children: ReactNode;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}


interface DefaultLayoutProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <>
            <header style={{backgroundColor: "silver", height: "80px"}}>
                <nav style={{padding: "20px"}}>
                    <ul style={{fontSize: "2rem", display: "flex",listStyle: "none", gap:"10px"}}>
                        <li>
                            <Link style={{color: "black", textDecoration: "none"}} to="/">Home</Link>
                        </li>
                        <li>
                            <Link style={{color: "black", textDecoration: "none"}} to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <main>{children}</main>
        </>
    )
}