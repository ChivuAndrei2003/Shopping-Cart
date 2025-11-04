import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import StorePage from "./pages/Store";

const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "store", element: <StorePage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

export default routes;
