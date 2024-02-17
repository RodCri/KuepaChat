import { Routes, Route, Navigate } from "react-router-dom"
import { Chat, Register, Login } from "./pages"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" 
            element={ user 
              ? <Chat /> 
              : <Login/>
            } 
          />
          <Route path="/register" 
            element={ user 
              ? <Chat />
              :<Register />
            } 
          />
          <Route path="/login" 
            element={user
              ? <Chat />
              : <Login />
            } 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
