import { useEffect } from "react";
import "./LaStoriaPage.css";

const LaStoriaPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="la-storia-page">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="storia-header">
          <span className="storia-year">Dal 1953</span>
          <h1 className="storia-title">La Nostra Storia</h1>
          <div className="storia-divider"></div>
        </div>

        <div className="storia-grid">
          {/* LEFT: The Image (Vintage Frame Effect) */}
          <div className="storia-image-container">
            {/* Decorative Border behind */}
            <div className="storia-image-border"></div>

            {/* The Image Itself */}
            <div className="storia-image-box">
              <img
                src="/presentation/lastoria.6.webp"
                alt="Francesco e Silvia Colasanti"
                className="storia-image"
              />
            </div>

            {/* Caption Badge */}
            <div className="storia-caption">
              <p>Francesco & Silvia, 1953</p>
            </div>
          </div>

          {/* RIGHT: The Narrative Text */}
          <div className="storia-content">
            {/* Paragraph 1 */}
            <div>
              <h3 className="storia-section-title">Le Origini</h3>
              <p className="storia-text">
                Tutto ha inizio nel lontano <strong>1953</strong>. È l'anno in
                cui Francesco Colasanti e sua moglie Silvia prendono una
                decisione coraggiosa: trasferire la loro storica attività,{" "}
                <em>'Checco alla Madonella'</em>, dal cuore di Roma (Piazza
                Costacuti) verso nuove prospettive sulla Via Aurelia. Non era
                solo un cambio di sede, ma l'inizio di una tradizione che
                avrebbe segnato la ristorazione romana per decenni.
              </p>
            </div>

            {/* Paragraph 2 - The Highlight */}
            <div className="storia-highlight">
              <h3 className="storia-section-title">Il Nome "Checco al 13"</h3>
              <p className="storia-highlight-text">
                "Si stabilirono esattamente al chilometro 13 della Via Aurelia.
                Da qui nasce il nome che è diventato un'istituzione: Checco al
                13. Oggi, quella stessa passione vive attraverso le generazioni
                della famiglia Colasanti, che continuano a custodire e
                tramandare i segreti di un'ospitalità genuina, accogliendo i
                clienti non come ospiti, ma come parte della famiglia."
              </p>
            </div>

            {/* Paragraph 3 */}
            <div>
              <h3 className="storia-section-title">La Filosofia Oggi</h3>
              <p className="storia-text">
                La nostra filosofia in cucina è rimasta immutata nel tempo:
                rispetto assoluto per la tradizione e una ricerca ossessiva
                della qualità. La nostra esperienza si fonda sull'uso di
                primizie locali, selezionate quotidianamente solo da fornitori
                di fiducia che condividono i nostri valori. Ogni piatto è un
                omaggio alla genuinità, accompagnato da una cantina curata che
                offre un’ampia scelta di etichette per esaltare i sapori della
                nostra terra.
              </p>
            </div>

            {/* Signature / End Marker */}
            <div className="storia-signature">
              <span>Famiglia Colasanti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaStoriaPage;
