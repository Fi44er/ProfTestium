import React from "react"
import './App.css'
//yarn add react-fetch-hook

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home/Home"
import Rates from "./pages/Rates/Rates"
import LogIn from "./pages/LogIn/LogIn"
import Integration from "./pages/Integration/Integration"
import Opportunities from "./pages/Opportunities/Opportunities"
import Reviews from "./pages/Reviews/Reviews"
import Support from "./pages/Support/Support"
import Register from "./pages/Register/Register"

function App() {
  return (
    <>
      <header style={{ display: "flex", gridGap: 20 }}>
        <div className="headerLogo">
          <Link to='/'>ПрофТестиум</Link>
        </div>
        <ul className="headerMenu">
          <li><Link to='/opportunities'>Возможности</Link></li>
          <li><Link to='/rates'>Тарифы</Link></li>
          <li><Link to='/integration'>Внедрение</Link></li>
          <li><Link to='/reviews'>Отзывы</Link></li>
          <li><Link to='/support'>Поддержка</Link></li>
        </ul>
        <div className="logSigIn">
          <Link to="/register">Регистрация</Link>
          <div>|</div>
          <Link to="/login">Авторизация</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}
export default App
