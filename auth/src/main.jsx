import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Signup from './routes/Signup.jsx'
import ProtectRouter from './routes/ProtectRoute.jsx'
import AuthProvider from './authen/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectRouter />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
