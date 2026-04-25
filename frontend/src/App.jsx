import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShieldHerLoader from "./Pages/ShieldHerLoader";
import AuthPages from "./pages/AuthPages";
import { Home } from "./Pages/Home";
import PersonalDetailsPage from "./Pages/PersonalDetailsPage";
import HomePage from "./Pages/HomePage";

import ShieldHerFlipbook from "./Pages/ShieldHerFlipbook";
import Dashboard from "./Pages/Dashboard";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ShieldHerLoader />} />

        <Route path="/login" element={<AuthPages />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/details" element={<PersonalDetailsPage />} /> */}

<Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
