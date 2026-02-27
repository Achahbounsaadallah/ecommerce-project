import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0713] to-[#1a0f2e] pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">📦 Mes Commandes</h1>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 space-y-6">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold">Commande #12345</p>
                <p className="text-white/60 text-sm">25 février 2026</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 font-bold">✓ Livrée</p>
                <p className="text-white/60 text-sm">99,99 €</p>
              </div>
            </div>
            <button className="text-violet-400 text-sm font-semibold hover:underline">Voir les détails →</button>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold">Commande #12344</p>
                <p className="text-white/60 text-sm">20 février 2026</p>
              </div>
              <div className="text-right">
                <p className="text-orange-400 font-bold">📦 En cours de livraison</p>
                <p className="text-white/60 text-sm">149,99 €</p>
              </div>
            </div>
            <button className="text-violet-400 text-sm font-semibold hover:underline">Voir les détails →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
