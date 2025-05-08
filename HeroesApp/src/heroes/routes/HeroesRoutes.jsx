import {NavBar} from "../../ui"
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage } from '../pages'
import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {


  return (
    <>
        <NavBar />

        <Routes>

            <Route path="/marvel" element={ <MarvelPage/> } />
            <Route path="/dc" element={ <DcPage /> } />

            <Route path="/search" element={ <SearchPage /> } />
            <Route path="hero/:HeroId" element={ <HeroPage /> } />
            

            <Route path="/" element={ <Navigate to="/marvel" /> } />

        </Routes>
    </>
  )
}
