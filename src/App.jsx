import React from "react"
import "./App.css"
//yarn add react-fetch-hook

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home/Home"
import Rates from "./components/Home/Rates/Rates"
import LogIn from "./pages/LogIn/LogIn"
import Integration from "./components/Home/Integration/Integration"
import Opportunities from "./components/Home/Opportunities/Opportunities"
import Reviews from "./components/Home/Reviews/Reviews"
import Support from "./components/Home/Support/Support"
import Register from "./pages/Register/Register"

function App() {
  return (
    <>
      <header style={{ display: "flex", gridGap: 20 }}>
        <div className="headerLogo">
          <Link to="/">ПрофТестиум</Link>
        </div>
        <ul className="headerMenu">
          <li>
            <a>Возможности</a>
          </li>
          <li>
            <a>Тарифы</a>
          </li>
          <li>
            <a>Внедрение</a>
          </li>
          <li>
            <a>Отзывы</a>
          </li>
          <li>
            <a>Поддержка</a>
          </li>
        </ul>
        <div className="logSigIn">
          <Link to="/register">Регистрация</Link>
          <div>|</div>
          <Link to="/login">Авторизация</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}
export default App
