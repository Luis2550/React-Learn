import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../Journal/routes/JournalRoutes";
import { ChechkingAuth } from "../ui/";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

   
  const status = useCheckAuth();

  if (status === "checking") {
    return <ChechkingAuth />;
  }

  return (
    <Routes>

      {
        status === 'authenticated' ? <Route path="/*" element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />

      }


      {/* login register */}

      {/* Journal App */}

    </Routes>
  );
};
