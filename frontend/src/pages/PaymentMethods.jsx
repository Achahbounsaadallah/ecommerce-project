import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentMethods() {
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
        <h1 className="text-4xl font-bold text-white mb-8">💳 Mes Moyens de Paiement</h1>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 space-y-6">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">💳</div>
                <div>
                  <p className="text-white font-semibold">Visa Mastercard</p>
                  <p className="text-white/60 text-sm">•••• •••• •••• 1234</p>
                  <p className="text-white/40 text-xs mt-1">Expire le 12/25</p>
                </div>
              </div>
              <button className="text-red-400 hover:text-red-300 text-sm font-semibold">Supprimer</button>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200">
            + Ajouter un moyen de paiement
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
