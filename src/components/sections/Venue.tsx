import "./Venue.css";
import { Users } from "lucide-react";

const Venue = () => {
  return (
    <section className="venue" id="locale">
      <div className="venue-header">
        <h2 className="venue-main-title">I Nostri Spazi</h2>
        <p className="venue-subtitle">
          Tre ambienti unici, ognuno con la propria anima
        </p>
      </div>

      <div className="venue-container">
        {/* First Space - Text Left, Image Right (Z-pattern) */}
        <div className="venue-row venue-row-right">
          <div className="venue-image-wrapper">
            <div className="venue-image-border"></div>
            <img
              src="/presentation/6.0.SALA.1.webp"
              alt="Sala Principale"
              className="venue-img"
              loading="lazy"
            />
          </div>
          <div className="venue-content border border-[#1A4031]/10 shadow-sm">
            <div className="venue-number-badge">01</div>
            <h3 className="venue-name">Sala Principale</h3>
            <div className="venue-accent-line"></div>
            <p className="venue-desc">
              Atmosfera calda e accogliente con parete affrescata che racconta
              decenni di storia. Il cuore pulsante del ristorante.
            </p>
            <div className="venue-capacity">
              <Users className="w-5 h-5 text-[#c5a059]" />
              <span>70-80 persone</span>
            </div>
          </div>
        </div>

        {/* Second Space - Image Left, Text Right (Z-pattern) */}
        <div className="venue-row venue-row-left">
          <div className="venue-image-wrapper">
            <div className="venue-image-border"></div>
            <img
              src="/presentation/6.1.VERANDA.2.webp"
              alt="Veranda"
              className="venue-img"
              loading="lazy"
            />
          </div>
          <div className="venue-content border border-[#1A4031]/10 shadow-sm">
            <div className="venue-number-badge">02</div>
            <div className="venue-badge">Preferita</div>
            <h3 className="venue-name">Veranda</h3>
            <div className="venue-accent-line"></div>
            <p className="venue-desc">
              Luminosa con ampie vetrate che incorniciano il verde. Ideale per
              pranzi di lavoro e cene romantiche.
            </p>
            <div className="venue-capacity">
              <Users className="w-5 h-5 text-[#c5a059]" />
              <span>60 persone</span>
            </div>
          </div>
        </div>

        {/* Third Space - Text Left, Image Right (Z-pattern) */}
        <div className="venue-row venue-row-right">
          <div className="venue-image-wrapper">
            <div className="venue-image-border"></div>
            <img
              src="/presentation/6.2.TERRAZZA.3.webp"
              alt="Terrazza"
              className="venue-img"
              loading="lazy"
            />
          </div>
          <div className="venue-content border border-[#1A4031]/10 shadow-sm">
            <div className="venue-number-badge">03</div>
            <h3 className="venue-name">Terrazza</h3>
            <div className="venue-accent-line"></div>
            <p className="venue-desc">
              All'aperto sotto l'ombra di platani secolari. Il rifugio perfetto
              nelle serate estive romane.
            </p>
            <div className="venue-capacity">
              <Users className="w-5 h-5 text-[#c5a059]" />
              <span>60 persone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
