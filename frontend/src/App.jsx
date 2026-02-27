import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar           from "./components/Header/navbar";
import Home             from "./pages/Home";
import SmartphonesPage  from "./pages/SmartphonesPage";
import SmartwatchesPage from "./pages/SmartwatchesPage";
import AccessoiresPage  from "./pages/AccessoiresPage";
import ContactPage      from "./pages/ContactPage";
import Login            from "./pages/Login";
import Profile          from "./pages/Profile";
import PaymentMethods   from "./pages/PaymentMethods";
import Orders           from "./pages/Orders";
import Cart             from "./pages/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // structure will mirror backend CartResponse
  const [cart, setCart]               = useState({ items: [], totalPrice: 0, totalQuantity: 0 });
  const [toastMsg, setToastMsg]       = useState(null);

  // Fetch current cart from server
  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch("/api/cart", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setCart(data);
      } else {
        console.warn("could not fetch cart", data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");
    
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify({ productId: product._id || product.id, quantity: 1 })
      });
      
      console.log("Response status:", res.status);
      console.log("Response headers:", res.headers.get('content-type'));
      
      // Check response type
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        console.error("Server returned non-JSON response:", text);
        setToastMsg("Erreur serveur: réponse invalide");
        setTimeout(() => setToastMsg(null), 2500);
        return;
      }
      
      const data = await res.json();
      console.log("Cart data:", data);
      
      if (res.ok) {
        setCart(data);
        setToastMsg(`${product.name} ajouté !`);
      } else {
        setToastMsg(data.message || "Erreur lors de l'ajout");
      }
    } catch (err) {
      console.error("addToCart error:", err);
      setToastMsg(`Erreur réseau: ${err.message}`);
    }

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
          cartCount={cart.totalQuantity || 0}
        />

        <main>
          <Routes>
            <Route path="/"             element={<Home          searchQuery={searchQuery} onAddToCart={addToCart} />} />
            <Route path="/smartphones"  element={<SmartphonesPage  onAddToCart={addToCart} />} />
            <Route path="/smartwatches" element={<SmartwatchesPage onAddToCart={addToCart} />} />
            <Route path="/accessoires"  element={<AccessoiresPage  onAddToCart={addToCart} />} />
            <Route path="/contact"      element={<ContactPage />} />
            <Route path="/login"        element={<Login />} />
            <Route path="/profile"      element={<Profile />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/orders"       element={<Orders />} />
            <Route path="/cart"         element={<Cart cart={cart} fetchCart={fetchCart} />} />
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