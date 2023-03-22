import Login from "./Component/Auth/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AuthContextProvider from "./Component/Contexts/AuthContext";
import Register from "./Component/Auth/Register";
import Dashboard from "./Component/Main/Dashboard";

function App() {
  return (
    <div className="App w-screen h-screen">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/main'} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
