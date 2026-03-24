import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () =>{
  return(
   <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path = "/dashboard"
          element = {<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
      </Routes>
      </BrowserRouter>
   </AuthProvider>
  )
}
export default App;