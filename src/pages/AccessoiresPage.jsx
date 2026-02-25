import allProducts from "../data/products";
import ProductCard from "../components/ProductCard";

function AccessoiresPage({ onAddToCart }) {
  const products = allProducts.filter((p) => p.category === "Accessoires");

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-20">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl">🎧</span>
          <h1 className="font-serif font-black text-4xl text-white">Nos Accessoires</h1>
        </div>
        <p className="text-white/35 text-sm pl-16">{products.length} produits disponibles</p>
        <div className="h-px mt-8 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} showDetails onAddToCart={onAddToCart} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}

export default AccessoiresPage;