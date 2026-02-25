import allProducts from "../data/products";
import "../assets/products.css";

function SmartphonesPage() {
  const products = allProducts.filter(p => p.category === "Smartphones");
  


  return (
    <div className="products-container">

      <h1>Nos Smartphones</h1>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p className="price">{product.price} €</p>

            <p>Stock : {product.quantity}</p>

            <button>Ajouter au panier</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SmartphonesPage;
