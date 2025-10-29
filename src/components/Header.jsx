import { Link, Outlet } from "react-router-dom";
import cart from "../assets/cart.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/store">
          <button>Store</button>
        </Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
          </div>
          <Outlet />{ /* for rendering homePage,storePage and CartPage*/}
    </>
  );
}
