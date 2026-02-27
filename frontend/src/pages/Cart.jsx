import { useEffect } from "react";

function Cart({ cart, fetchCart }) {
  // fetchCart might be passed to allow manual refresh if needed
  useEffect(() => {
    if (fetchCart) fetchCart();
  }, [fetchCart]);

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Votre panier</h2>
      {cart && cart.items && cart.items.length > 0 ? (
        <div className="space-y-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="pb-2">Produit</th>
                <th className="pb-2">Quantité</th>
                <th className="pb-2">Prix unitaire</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.productId} className="border-b border-white/10">
                  <td className="py-2">{item.productName}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">{Number(item.price).toFixed(2)} €</td>
                  <td className="py-2">{(item.price * item.quantity).toFixed(2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-right font-bold text-xl">
            Total : {Number(cart.totalPrice || 0).toFixed(2)} €
          </p>
        </div>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  );
}

export default Cart;
