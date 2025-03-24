import { Routes, Route, Navigate } from "react-router-dom"

import { MarvelPage, DcPage } from "../heroes"
import { LoginPage } from "../auth/components/LoginPage"
import { NavBar } from "../ui"

export const AppRouter = () => {
  return (
    <>

      <NavBar/>

      <Routes>

        <Route path="/" element={ <Navigate to="/marvel" /> } />
        <Route path="marvel" element={ <MarvelPage/> } />
        <Route path="dc" element={ <DcPage /> } />
        <Route path="login" element={ <LoginPage/> } />

      </Routes>
    </>
  )
}
