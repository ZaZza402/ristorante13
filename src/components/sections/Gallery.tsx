import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Category = "Tutti" | "I Piatti" | "Il Locale" | "Eventi";

interface GalleryItem {
  src: string;
  category: Exclude<Category, "Tutti">;
  alt: string;
}

// Full list of 37 images from public/img
const allImages: GalleryItem[] = [
  { src: "/img/13.0..8.webp", category: "I Piatti", alt: "Piatto Gourmet" },
  { src: "/img/13.1..9.webp", category: "Il Locale", alt: "Sala Principale" },
  { src: "/img/13.2..10.webp", category: "I Piatti", alt: "Pasta Fresca" },
  { src: "/img/13.3..11.webp", category: "Eventi", alt: "Evento Privato" },
  { src: "/img/13.4..12.webp", category: "I Piatti", alt: "Dolci Artigianali" },
  { src: "/img/13.5..13.webp", category: "Il Locale", alt: "Atmosfera Serale" },
  { src: "/img/13.6..14.webp", category: "I Piatti", alt: "Cucina Romana" },
  { src: "/img/13.7..15.webp", category: "Il Locale", alt: "Dettagli Tavola" },
  { src: "/img/lacucina.9.webp", category: "Eventi", alt: "Chef all'opera" },
  { src: "/img/13.8..16.webp", category: "I Piatti", alt: "Specialità" },
  { src: "/img/13.9..17.webp", category: "Il Locale", alt: "Interni" },
  { src: "/img/13.10..18.webp", category: "I Piatti", alt: "Gusto Autentico" },
  { src: "/img/13.11..19.webp", category: "Eventi", alt: "Celebrazioni" },
  { src: "/img/13.12..20.webp", category: "I Piatti", alt: "Sapori Unici" },
  { src: "/img/13.13..21.webp", category: "Il Locale", alt: "Accoglienza" },
  { src: "/img/13.14..22.webp", category: "I Piatti", alt: "Tradizione" },
  { src: "/img/13.15..23.webp", category: "Eventi", alt: "Momenti Speciali" },
  { src: "/img/13.16..24.webp", category: "I Piatti", alt: "Delizie" },
  { src: "/img/13.17..25.webp", category: "Il Locale", alt: "Eleganza" },
  { src: "/img/13.18..26.webp", category: "I Piatti", alt: "Passione" },
  { src: "/img/13.19..27.webp", category: "Eventi", alt: "Feste" },
  { src: "/img/13.20..28.webp", category: "I Piatti", alt: "Arte Culinaria" },
  { src: "/img/13.21..29.webp", category: "Il Locale", alt: "Dettagli" },
  { src: "/img/13.22..30.webp", category: "I Piatti", alt: "Gusto" },
  { src: "/img/13.23..31.webp", category: "Eventi", alt: "Ricordi" },
  { src: "/img/13.24..32.webp", category: "I Piatti", alt: "Eccellenza" },
  { src: "/img/13.25..33.webp", category: "Il Locale", alt: "Stile" },
  { src: "/img/13.26..34.webp", category: "I Piatti", alt: "Qualità" },
  { src: "/img/13.27..35.webp", category: "Eventi", alt: "Emozioni" },
  { src: "/img/13.28..36.webp", category: "I Piatti", alt: "Creatività" },
  { src: "/img/13.29..37.webp", category: "Il Locale", alt: "Atmosfera" },
  { src: "/img/13.30..38.webp", category: "I Piatti", alt: "Sapori" },
  { src: "/img/13.31..39.webp", category: "Eventi", alt: "Gioia" },
  { src: "/img/13.32..40.webp", category: "I Piatti", alt: "Bontà" },
  { src: "/img/13.33..41.webp", category: "Il Locale", alt: "Comfort" },
  { src: "/img/13.34..42.webp", category: "I Piatti", alt: "Freschezza" },
  { src: "/img/13.35..43.webp", category: "Eventi", alt: "Condivisione" },
];

interface GalleryProps {
  isTeaser?: boolean;
}

const Gallery = ({ isTeaser = false }: GalleryProps) => {
  const [activeFilter, setActiveFilter] = useState<Category>("Tutti");
  const [index, setIndex] = useState(-1);

  const filters: Category[] = ["Tutti", "I Piatti", "Il Locale", "Eventi"];

  const filteredImages = allImages.filter(
    (img) => activeFilter === "Tutti" || img.category === activeFilter
  );

  // If teaser, strictly show only first 6. If not, show all filtered.
  const displayImages = isTeaser ? allImages.slice(0, 6) : filteredImages;

  return (
    <section className="pt-20 pb-16 bg-[#F9F7F2]" id="photo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isTeaser && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-4">
              Galleria Fotografica
            </h2>
            <p className="text-gray-600 italic text-lg">
              Un viaggio visivo nella tradizione culinaria romana
            </p>
          </div>
        )}

        {/* Filter Tabs */}
        {!isTeaser && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-sm text-sm uppercase tracking-[0.15em] transition-all duration-300 font-serif ${
                  activeFilter === filter
                    ? "bg-brand-green text-brand-cream shadow-xl border border-brand-green transform -translate-y-1"
                    : "bg-transparent text-brand-green border border-brand-green/30 hover:border-brand-green hover:bg-brand-green/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Masonry Grid */}
        <div
          className={`gap-4 space-y-4 mx-auto ${
            isTeaser
              ? "columns-2 md:columns-3 lg:columns-4"
              : "columns-1 md:columns-2 lg:columns-3"
          }`}
        >
          {displayImages.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay - Always visible on mobile for Teaser, hover for others */}
              <div
                className={`absolute inset-0 bg-black/30 transition-colors duration-300 flex items-end justify-start p-4 md:p-6 ${
                  isTeaser
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 bg-black/0 group-hover:bg-black/20"
                }`}
              >
                <div
                  className={`transition-opacity duration-300 transform ${
                    isTeaser
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  }`}
                >
                  <span className="text-white font-serif text-sm md:text-lg drop-shadow-md font-medium">
                    {item.alt}
                  </span>
                  {isTeaser && (
                    <p className="text-brand-cream/80 text-xs uppercase tracking-wider mt-1">
                      {item.category}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isTeaser && (
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block border-b-2 border-brand-red text-brand-red pb-1 hover:text-brand-green hover:border-brand-green transition-colors uppercase tracking-widest text-sm font-semibold"
            >
              Visualizza Tutta la Galleria
            </Link>
          </div>
        )}

        <Lightbox
          index={index}
          slides={displayImages.map((img) => ({ src: img.src, alt: img.alt }))}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default Gallery;
