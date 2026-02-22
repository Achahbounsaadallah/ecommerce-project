import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import SmartwatchesPage from "./pages/SmartwatchesPage";
import SmartphonesPage from "./pages/SmartphonesPage";
import AccessoiresPage from "./pages/AccessoiresPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/smartphones" element={<SmartphonesPage searchQuery={searchQuery} />} />
        <Route path="/smartwatches" element={<SmartwatchesPage searchQuery={searchQuery} />} />
        <Route path="/accessoires" element={<AccessoiresPage searchQuery={searchQuery} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;