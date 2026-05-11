import { useState, useEffect } from 'react';
import type { Product } from './types/product';
import ProductCard from './components/ProductCard';

const productImg = [
  {
    id: 1,
    image:
      'https://www.indianleathercraft.com/cdn/shop/files/indianleathercraft-watch-strap-handmade-casio-watch-strap-1199561640.jpg?v=1761384796&width=800',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/61jigCEYg-L._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/819z1xkAUiL._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/51F0W5mLNjL._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/81F9DRgGG0L._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 7,
    image: 'https://m.media-amazon.com/images/I/51jHQ7dg48L._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 8,
    image: 'https://m.media-amazon.com/images/I/61xDEKn+xkL._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 9,
    image: 'https://m.media-amazon.com/images/I/61KCrV0qHyL._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    id: 10,
    image: 'https://m.media-amazon.com/images/I/71i5MmvaBBL._AC_UL640_FMwebp_QL65_.jpg',
  },
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches',
        );

        const data = await response.json();

        setProducts(data.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Blur Balls */}
        <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-400">
            Luxury Collection
          </p>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl">
            Premium Watch
            <br />
            Showcase
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Explore handcrafted luxury watches with timeless elegance, modern engineering, and
            premium aesthetic design.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
              Explore Collection
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
              View Premium Picks
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Watches</h2>

            <p className="mt-2 text-zinc-400">Curated premium collection for modern style.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

            <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-md">
              {products.length} Products Available
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={productImg[index]?.image ?? product.thumbnail}
              price={product.price}
              brand={product.brand}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
