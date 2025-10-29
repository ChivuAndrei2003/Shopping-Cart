import { Link, Outlet } from "react-router-dom";
import cart from "../assets/cart.svg";
import store from "../assets/store.svg";
export default function Header({addToCart}) {
  return (
    <>
      <div className="flex justify-end -mx-0.5 items-center gap-4 p-4 bg-gray-100">
        <Link to="/store">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <img src={store} alt="Store" className="w-6 h-6" />
            Store
          </button>
        </Link>
        <Link to="/cart">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            <img src={cart} alt="cart" className="w-6 h-6" />
            Cart
          </button>
        </Link>
      </div>
      <Outlet />
      {/* for rendering homePage,storePage and CartPage*/}
    </>
  );
}
