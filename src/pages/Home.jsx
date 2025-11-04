import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Shop smarter, not harder
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Browse our curated collection of quality products. Everything you need, all in one place.
          </p>
          <Link
            to="/store"
            className="inline-block bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors font-medium"
          >
            Start Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-gray-900 pl-6 py-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              From electronics to fashion, find exactly what you need
            </p>
          </div>

          <div className="border-l-4 border-gray-900 pl-6 py-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Every item carefully selected for reliability and value
            </p>
          </div>

          <div className="border-l-4 border-gray-900 pl-6 py-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Easy Shopping</h3>
            <p className="text-gray-600">
              Simple checkout process with real-time cart updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
