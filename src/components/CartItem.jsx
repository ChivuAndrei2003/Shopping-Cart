import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(item.id, value);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-2 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 capitalize">{item.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border border-gray-300 rounded py-1 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              onClick={handleIncrement}
              className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={handleRemove}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

