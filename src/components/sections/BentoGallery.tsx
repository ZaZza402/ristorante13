import { Link } from "react-router-dom";
import "./BentoGallery.css";

interface BentoItem {
  id: number;
  src: string;
  alt: string;
  className: string;
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    src: "/img/i piatti/13.30..38.webp",
    alt: "Piatto Gourmet",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/img/la cucina/13.22..30.webp",
    alt: "Pasta Fresca",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "/presentation/lastoria.6.webp",
    alt: "Sala Principale",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    src: "/img/i piatti/13.0..8.webp",
    alt: "Dolci Artigianali",
    className: "md:col-span-1 md:row-span-1",
  },
];

const BentoGallery = () => {
  return (
    <section className="bento-section" id="photo">
      <div className="max-w-[1300px] mx-auto">
        <div className="bento-header">
          <h2 className="bento-title">Momenti</h2>
          <p className="bento-subtitle">I dettagli che fanno la differenza</p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center items-center gap-2 mb-4 text-[#c5a059] opacity-70 text-sm animate-pulse">
          <span>Scorri per vedere</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
          </svg>
        </div>

        <div className="flex justify-center mb-8 md:hidden">
          <Link
            to="/gallery"
            className="flex items-center gap-2 text-brand-red font-semibold uppercase tracking-widest text-sm hover:text-brand-green transition-colors"
          >
            Tutta la Galleria
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Mobile: Horizontal Scroll Snap */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 scrollbar-hide">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[85vw] h-[250px]"
            >
              <div className="bento-card">
                <div className="bento-image-container">
                  <img src={item.src} alt={item.alt} className="bento-image" />
                </div>
              </div>
            </div>
          ))}
          {/* Mobile View More Card */}
          <Link
            to="/gallery"
            className="snap-center shrink-0 w-[85vw] h-[250px] block"
          >
            <div className="bento-card bg-brand-green! border-[#C5A059]! flex flex-col items-center justify-center text-brand-cream p-8 text-center group">
              <span className="font-serif text-3xl mb-4">Scopri di più</span>
              <span className="uppercase tracking-widest text-sm border-b border-brand-cream pb-1">
                Vai alla Galleria
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop: Bento Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 h-[550px] gap-6">
          {bentoItems.map((item) => (
            <div key={item.id} className={`${item.className}`}>
              <div className="bento-card group cursor-pointer">
                <div className="bento-image-container">
                  <img src={item.src} alt={item.alt} className="bento-image" />
                </div>
              </div>
            </div>
          ))}

          {/* Item 5: View More Card */}
          <Link to="/gallery" className="col-span-1 row-span-1 block">
            <div className="bento-card bg-brand-green! border-[#C5A059]! flex flex-col items-center justify-center text-brand-cream p-6 text-center group hover:bg-[#153328] transition-colors">
              <div className="absolute inset-0 border border-brand-cream/10 m-2 rounded-sm"></div>
              <span className="font-serif text-2xl mb-2 relative z-10">
                30+ Foto
              </span>
              <span className="uppercase tracking-widest text-xs border-b border-brand-cream/50 pb-1 group-hover:border-brand-cream transition-colors relative z-10">
                Apri Galleria
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
