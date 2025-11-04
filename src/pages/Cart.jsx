import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, getCartTotal, getCartItemsCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started
          </p>
          <Link
            to="/store"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Items ({getCartItemsCount()})</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-semibold text-gray-900 pt-3 border-t border-gray-200">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium mb-3">
            Proceed to Checkout
          </button>

          <Link
            to="/store"
            className="block text-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}