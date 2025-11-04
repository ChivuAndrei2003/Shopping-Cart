import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full w-full h-full object-contain"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-medium text-gray-900 mb-3 line-clamp-2 h-12 leading-6">
          {product.title}
        </h3>

        <div className="mb-3">
          <span className="text-xl font-semibold text-gray-900 block mb-1">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500 capitalize line-clamp-1">
            {product.category}
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <label
              htmlFor={`quantity-${product.id}`}
              className="text-sm text-gray-700"
            >
              Qty:
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={handleDecrement}
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                id={`quantity-${product.id}`}
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 text-center border-x border-gray-300 h-8 focus:outline-none text-sm"
              />
              <button
                onClick={handleIncrement}
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-900 text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
