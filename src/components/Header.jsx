import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  return (
    <>
      <div className="border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/store" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              Store
            </Link>
          </div>

          <Link to="/cart" className="relative">
            <span className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
