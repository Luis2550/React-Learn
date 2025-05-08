import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../Journal/routes/JournalRoutes"


export const AppRouter = () => {
  return (

    <Routes>

      {/* login register */}

      <Route path="/auth/*" element={ <AuthRoutes /> } />


      {/* Journal App */}

    <Route path="/*" element={ <JournalRoutes />} />

    </Routes>

  )
}
