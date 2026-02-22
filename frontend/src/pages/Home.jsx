import products from "../data/products";
import "../assets/products.css";

function Home({ searchQuery }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">

      <h1>Bienvenue sur MyStore</h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Découvrez nos meilleurs produits
      </p>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray", marginTop: "40px" }}>
          Aucun produit trouvé pour "{ searchQuery }"
        </p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="price">{product.price} €</p>

              <p style={{ fontSize: "13px", color: "gray" }}>
                Catégorie : {product.category}
              </p>

              <button>Ajouter au panier</button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;