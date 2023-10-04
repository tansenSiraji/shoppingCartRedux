import { useSelector } from "react-redux/es/hooks/useSelector";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  // Create an empty object to track unique products by ID
  const uniqueProducts = {};

  // Filter the products array to keep only unique products by ID
  const filteredProducts = products.filter(product => {
    if (!uniqueProducts[product.id]) {
      uniqueProducts[product.id] = true;
      return true;
    }
    return false;
  });

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} / ${total}</h1>
        {filteredProducts.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
