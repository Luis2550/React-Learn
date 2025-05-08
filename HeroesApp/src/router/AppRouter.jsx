import { Routes, Route } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth/components/LoginPage"
import { PrivateRoute } from "../heroes/routes/PrivateRoute"
import { PublicRoute } from "../heroes/routes/PublicRoute"

export const AppRouter = () => {
  return (
    <>

      <Routes>


        <Route path="/login/*" element={
          
          <PublicRoute>

              <Routes>
                <Route path="/*" element={ <LoginPage /> } />
              </Routes>

          </PublicRoute>

        } />


        <Route path="/*" element={
          
          <PrivateRoute>
            <HeroesRoutes />
         </PrivateRoute>
        } />


      </Routes>
    </>
  )
}
