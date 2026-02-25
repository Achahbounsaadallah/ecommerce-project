function ContactPage() {
  return (
    <div className="max-w-lg mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="inline-block mb-4 text-xs font-bold uppercase tracking-[3px] text-violet-400 bg-violet-400/10 border border-violet-400/25 px-5 py-2 rounded-full">
          Nous joindre
        </span>
        <h1 className="font-serif font-black text-4xl text-white">Contactez-nous</h1>
        <p className="text-white/40 mt-3">Notre équipe répond sous 24h</p>
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8">
        {[
          { icon: "📧", label: "Email",     value: "contact@mystore.com" },
          { icon: "📞", label: "Téléphone", value: "+33 1 23 45 67 89" },
          { icon: "📍", label: "Adresse",   value: "15 Rue du Commerce, Paris 75015" },
          { icon: "🕐", label: "Horaires",  value: "Lun–Ven · 9h00 – 18h00" },
        ].map((item, i, arr) => (
          <div key={item.label} className={`flex items-center gap-4 py-4 ${i < arr.length - 1 ? "border-b border-white/5" : ""}`}>
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-violet-400/10 border border-violet-400/20 text-lg">
              {item.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-0.5">{item.label}</p>
              <p className="text-white/80 font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-base py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30">
        Envoyer un message →
      </button>
    </div>
  );
}

export default ContactPage;