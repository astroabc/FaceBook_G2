import React from "react";
import Login from "./Component/Auth/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./Component/Auth/Register";
import Dashboard from "./Component/Main/MainPage/Dashboard";
import FriendPage from "./Component/FriendPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<Login />} />
        <Route path={"/login"} exact element={<Login />} />
        <Route path={"/register"} exact element={<Register />} />
        <Route path={"/main"} exact element={<Dashboard />} />
        <Route path={"/friends"} exact element={<FriendPage />}>
          <Route path={"/friends/:page"} exact element={<FriendPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
