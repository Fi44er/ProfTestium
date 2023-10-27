import React from "react"
//yarn add react-fetch-hook

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home/Home"
import Rates from "./pages/Rates/Rates"
import LogIn from "./pages/LogIn/LogIn"

function App() {
  return (
    <>
      <header style={{ display: "flex", gridGap: 20 }}>
        <ul>
          
        </ul>
        <Link to="/">Главная</Link>
        <Link to="/rates">Тарифы</Link>
        <div>
          <Link to="/login">Регистрация</Link> |
          <Link to="/login">Авторизация</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}
export default App
