import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import CitizenHome from "./pages/citizen/CitizenHome";
import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  if (!introFinished) {
  return (
    <Intro
      onFinish={() => setIntroFinished(true)}
    />
  );
}

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/citizen"
          element={<CitizenHome />}
        />

        <Route
          path="/admin"
          element={<Dashboard />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;