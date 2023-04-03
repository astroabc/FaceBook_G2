import Login from "./Component/Auth/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./Component/Auth/Register";
import Dashboard from "./Component/Main/Blog/MainPage/Dashboard";

function App() {
  return (
    <div className="App w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/main"} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
