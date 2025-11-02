export default function ProductCard({ title, id, image }) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
      <div className="p-4">
        <img src={image} alt={title} id={id} />
        <h1 className="text-xl font-bold capitalize text-slate-800">{title}</h1>
        <button
          className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg
           focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
