import { useState } from "react";

function ProductCard({ product, showDetails = false, onAddToCart, delay = 0 }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (onAddToCart) onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const stockColor =
    product.quantity > 10 ? "bg-emerald-400" :
    product.quantity > 5  ? "bg-amber-400"   : "bg-red-400";

  const stockText =
    product.quantity > 10 ? "text-emerald-400" :
    product.quantity > 5  ? "text-amber-400"   : "text-red-400";

  const stockLabel =
    product.quantity > 10 ? "En stock" :
    product.quantity > 5  ? "Stock limité" : "Rare";

  return (
    <div
      className="animate-fade-up group flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-emerald-400/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-900/30 transition-all duration-300"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {/* Image */}
      <div className="flex items-center justify-center h-36 bg-gradient-to-br from-violet-900/20 to-emerald-900/10 border-b border-white/5">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <span className="text-5xl">{product.emoji || "📦"}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <span className="self-start text-[10px] font-bold uppercase tracking-widest text-violet-400 bg-violet-400/10 border border-violet-400/20 px-2.5 py-1 rounded-full">
          {product.category}
        </span>

        <h3 className="text-white/90 font-bold text-[15px] leading-snug">
          {product.name}
        </h3>

        {showDetails && product.description && (
          <p className="text-white/40 text-[13px] leading-relaxed">{product.description}</p>
        )}

        {showDetails && (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${stockColor}`} />
            <span className={`text-xs font-semibold ${stockText}`}>
              {stockLabel} · {product.quantity} unités
            </span>
          </div>
        )}

        <div className="flex-1" />

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <span className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
            {Number(product.price).toFixed(2)} €
          </span>
          <button
            onClick={handleAdd}
            className={`text-white text-[13px] font-bold px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
              added
                ? "bg-indigo-500 shadow-indigo-500/30"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-emerald-500/40"
            }`}
          >
            {added ? "✓ Ajouté" : "+ Panier"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;