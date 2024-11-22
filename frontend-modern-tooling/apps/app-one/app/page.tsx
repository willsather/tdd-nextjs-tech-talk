import ProductList from "./components/productsList";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-10% from-indigo-500 via-30% via-sky-500 to-90% to-emerald-500 p-6 text-white">
      <div className="w-full max-w-4xl space-y-6 text-center">
        <h1 className="font-extrabold text-5xl tracking-tight drop-shadow-lg md:text-6xl">
          Application #1
        </h1>

        <p className="text-lg text-white/80 leading-relaxed md:text-xl">
          Example Next.js App Router Application
        </p>
        <div className="mt-8">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
