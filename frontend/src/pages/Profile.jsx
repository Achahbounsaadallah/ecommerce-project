import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");

    if (!token) {
      navigate("/login");
      return;
    }

    setUserEmail(email || "");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0713] to-[#1a0f2e] pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête du profil */}
        <div className="bg-gradient-to-r from-violet-500/20 to-emerald-500/20 border border-white/[0.06] rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-400 to-emerald-400 flex items-center justify-center text-4xl">
              👤
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Mon Profil</h1>
              <p className="text-white/60">{userEmail}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/[0.06]">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${
              activeTab === "info"
                ? "text-violet-400 border-violet-400"
                : "text-white/50 border-transparent hover:text-white/80"
            }`}
          >
            📋 Informations
          </button>
          <button
            onClick={() => setActiveTab("payment")}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${
              activeTab === "payment"
                ? "text-violet-400 border-violet-400"
                : "text-white/50 border-transparent hover:text-white/80"
            }`}
          >
            💳 Paiements
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${
              activeTab === "orders"
                ? "text-violet-400 border-violet-400"
                : "text-white/50 border-transparent hover:text-white/80"
            }`}
          >
            📦 Commandes
          </button>
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
          {activeTab === "info" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Informations Personnelles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    disabled
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3 rounded-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-semibold mb-2">Nom Complet</label>
                  <input
                    type="text"
                    placeholder="Entrez votre nom"
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+33 X XX XX XX XX"
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-semibold mb-2">Adresse</label>
                  <input
                    type="text"
                    placeholder="Rue, numéro, code postal"
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
              </div>

              <button className="bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200">
                Mettre à jour
              </button>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Moyens de Paiement</h2>
              
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">💳</div>
                    <div>
                      <p className="text-white font-semibold">Carte Bancaire</p>
                      <p className="text-white/60 text-sm">•••• •••• •••• 1234</p>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm font-semibold">Supprimer</button>
                </div>
              </div>

              <button className="bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200">
                + Ajouter un moyen de paiement
              </button>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Mes Commandes</h2>
              
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
              </div>

              <div className="text-center py-8">
                <p className="text-white/60">Aucune autre commande</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
