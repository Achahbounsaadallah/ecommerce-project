import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ searchQuery, onAddToCart }) {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      {!searchQuery && (
        <div className="text-center py-20">
          <span className="inline-block mb-5 text-xs font-bold uppercase tracking-[3px] text-violet-400 bg-violet-400/10 border border-violet-400/25 px-5 py-2 rounded-full">
            ✦ Collection 2025
          </span>

          <h1 className="font-serif font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(38px, 5vw, 66px)" }}>
            Bienvenue sur{" "}
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              MyStore
            </span>
          </h1>

          <p className="text-white/40 text-lg max-w-md mx-auto mb-12 leading-relaxed">
            Smartphones, montres connectées et accessoires premium.
          </p>

          <div className="flex justify-center gap-12 flex-wrap">
            {[["12+", "Produits"], ["3", "Catégories"], ["100%", "Authentique"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="font-serif font-black text-3xl text-violet-400">{val}</div>
                <div className="text-[11px] text-white/30 uppercase tracking-widest mt-1">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="h-px mt-14 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-white/35 text-lg">
            Aucun résultat pour{" "}
            <span className="text-violet-400 font-semibold">"{searchQuery}"</span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} delay={i * 60} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;