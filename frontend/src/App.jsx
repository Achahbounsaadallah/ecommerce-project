import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar           from "./components/Header/navbar";
import Home             from "./pages/Home";
import SmartphonesPage  from "./pages/SmartphonesPage";
import SmartwatchesPage from "./pages/SmartwatchesPage";
import AccessoiresPage  from "./pages/AccessoiresPage";
import ContactPage      from "./pages/ContactPage";
import Login            from "./pages/Login";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart]               = useState([]);
  const [toastMsg, setToastMsg]       = useState(null);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setToastMsg(`${product.name} ajouté !`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0b0713]">

        {/* Toast */}
        {toastMsg && (
          <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-2xl shadow-emerald-500/30 animate-fade-up">
            ✓ {toastMsg}
          </div>
        )}

        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartCount={cart.length}
        />

        <main>
          <Routes>
            <Route path="/"             element={<Home          searchQuery={searchQuery} onAddToCart={addToCart} />} />
            <Route path="/smartphones"  element={<SmartphonesPage  onAddToCart={addToCart} />} />
            <Route path="/smartwatches" element={<SmartwatchesPage onAddToCart={addToCart} />} />
            <Route path="/accessoires"  element={<AccessoiresPage  onAddToCart={addToCart} />} />
            <Route path="/contact"      element={<ContactPage />} />
            <Route path="/login"        element={<Login />} />
          </Routes>
        </main>

        <footer className="border-t border-white/[0.06] py-8 text-center mt-10">
          <span className="font-serif font-black text-xl bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
            MyStore
          </span>
          <p className="text-white/20 text-sm mt-2">© 2025 MyStore — Tous droits réservés</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;