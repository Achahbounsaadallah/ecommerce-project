function Login() {
  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <div className="text-center mb-9">
        <div className="text-5xl mb-4 animate-float inline-block">🔐</div>
        <h1 className="font-serif font-black text-4xl text-white">Connexion</h1>
        <p className="text-white/40 mt-2 text-[15px]">Accédez à votre espace MyStore</p>
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-9">
        <div className="flex flex-col gap-5">

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">Adresse Email</label>
            <input type="email" placeholder="vous@email.com"
              className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">Mot de passe</label>
            <input type="password" placeholder="••••••••••"
              className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10 transition-all duration-200"
            />
          </div>

          <div className="flex justify-end -mt-1">
            <span className="text-violet-400 text-[13px] font-medium cursor-pointer hover:underline">Mot de passe oublié ?</span>
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30">
            Se connecter →
          </button>

          <div className="text-center pt-2 border-t border-white/[0.06]">
            <span className="text-white/35 text-sm">Pas encore de compte ? </span>
            <span className="text-emerald-400 font-bold text-sm cursor-pointer hover:underline">S'inscrire</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;