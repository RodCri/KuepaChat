import { Routes, Route, Navigate } from "react-router-dom"
import { Chat, Register, Login } from "./pages"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Chat></Chat>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
