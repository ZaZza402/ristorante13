import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GalleryPage.css";

const chapters = [
  {
    id: "atmosfera",
    title: "L'Atmosfera",
    subtitle: "Il calore dei nostri spazi e la gioia dei nostri ospiti",
    images: [
      "/img/atmosfera/7.0..4.webp",
      "/img/atmosfera/7.1..5.webp",
      "/img/atmosfera/7.2..6.webp",
      "/img/atmosfera/7.4..7.webp",
    ],
  },
  {
    id: "cucina",
    title: "La Cucina",
    subtitle: "Dove la magia ha inizio: ingredienti e passione",
    images: [
      "/img/la cucina/lacucina.9.webp",
      "/img/la cucina/13.3..11.webp",
      "/img/la cucina/13.6..14.webp",
      "/img/la cucina/13.7..15.webp",
      "/img/la cucina/13.8..16.webp",
      "/img/la cucina/13.11..19.webp",
      "/img/la cucina/13.13..21.webp",
      "/img/la cucina/13.14..22.webp",
      "/img/la cucina/13.16..24.webp",
      "/img/la cucina/13.20..28.webp",
    ],
  },
  {
    id: "piatti",
    title: "I Piatti",
    subtitle: "Il risultato della nostra tradizione",
    images: [
      "/img/i piatti/13.0..8.webp",
      "/img/i piatti/13.2..10.webp",
      "/img/i piatti/13.10..18.webp",
      "/img/i piatti/13.12..20.webp",
      "/img/i piatti/13.15..23.webp",
      "/img/i piatti/13.17..25.webp",
      "/img/i piatti/13.18..26.webp",
      "/img/i piatti/13.19..27.webp",
      "/img/i piatti/13.25..33.webp",
      "/img/i piatti/13.30..38.webp",
      "/img/i piatti/13.31..39.webp",
      "/img/i piatti/13.32..40.webp",
      "/img/i piatti/13.33..41.webp",
      "/img/i piatti/13.35..43.webp",
      "/img/i piatti/13.5..13.webp",
      "/img/i piatti/13.9..17.webp",
    ],
  },
];

const GalleryPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentChapterImages, setCurrentChapterImages] = useState<string[]>(
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (images: string[], index: number) => {
    setCurrentChapterImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      {/* Gallery Page Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/img/atmosfera/7.4..7.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-[#F9F7F2] mb-6 drop-shadow-lg tracking-wider">
            La Nostra Storia in Foto
          </h1>
          <div className="w-32 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 italic font-light">
            Un viaggio attraverso i sapori, i volti e l'atmosfera che rendono
            unico il nostro ristorante
          </p>
        </div>
      </div>

      <div className="py-20 pb-64 space-y-32">
        {chapters.map((chapter) => (
          <section key={chapter.id} className="gallery-page-section">
            <div className="max-w-[1300px] mx-auto px-6">
              <div className="gallery-chapter-header">
                <h2 className="gallery-chapter-title">{chapter.title}</h2>
                <p className="gallery-chapter-subtitle">{chapter.subtitle}</p>
              </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-8 px-6 min-w-max justify-center md:justify-start">
                {chapter.images.map((src, index) => (
                  <div
                    key={index}
                    className="relative w-[280px] h-[210px] md:w-[400px] md:h-[300px] shrink-0 group cursor-pointer"
                    onClick={() => openLightbox(chapter.images, index)}
                  >
                    <div className="gallery-card">
                      <div className="gallery-image-container">
                        <img
                          src={src}
                          alt={`${chapter.title} ${index + 1}`}
                          className="gallery-image"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={currentChapterImages.map((src) => ({ src }))}
      />
    </main>
  );
};

export default GalleryPage;
