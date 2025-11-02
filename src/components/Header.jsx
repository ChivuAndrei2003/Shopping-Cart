import { Link, Outlet } from "react-router-dom";
import cart from "../assets/cart.svg";
import store from "../assets/store.svg";
import home from "../assets/home.svg";
export default function Header({ cartItemsCount = 2 }) {
  return (
    <>
      <div className="flex justify-between -mx-0.5 items-center p-4 bg-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <img src={home} alt="Home" className="w-6 h-6" />
            Home
          </button>

          <Link to="/store">
            <button className="flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <img src={store} alt="Store" className="w-6 h-6" />
              Store
            </button>
          </Link>
        </div>

        <Link to="/cart">
          <button className="flex justify-start gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            <div className="relative inline-block">
              <img src={cart} alt="cart" className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </div>
            Cart
          </button>
        </Link>
      </div>
      <Outlet />
      {/* for rendering homePage,storePage and CartPage*/}
    </>
  );
}
