import { useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";
import { Home } from "./Home";
import { Login } from "./Login";


export function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}