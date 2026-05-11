type ProductCardProps = {
  title: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
};

function ProductCard({ title, image, price, brand, rating }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_80px_rgba(0,255,255,0.12)]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-purple-500/10" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-[32px]">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-yellow-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
          <span>⭐</span>

          <span className="text-sm font-semibold text-yellow-300">{rating.toFixed(1)}</span>
        </div>

        {/* Brand */}
        <div className="absolute bottom-4 left-4">
          <p className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
            {brand}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6 p-6">
        <div>
          <h2 className="line-clamp-2 text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
            {title}
          </h2>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-zinc-500">Price</p>

            <h3 className="text-3xl font-black text-white">${price.toFixed(2)}</h3>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
