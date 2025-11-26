import { Link } from "react-router-dom";
import "./Story.css";

const Story = () => {
  return (
    <section className="story" id="storia">
      <div className="story-container">
        {/* Header */}
        <div className="story-header">
          <h2 className="section-title">Una Storia di Famiglia</h2>
          <p className="story-tagline">
            Dal 1953, serviamo la vera cucina romana. Non è solo cibo, è un
            pezzo di storia che tramandiamo di padre in figlio.
          </p>
        </div>

        {/* Content with Image + Overlapping Text */}
        <div className="story-layout">
          <div className="story-image-wrapper">
            <div className="story-image-border"></div>
            <img
              src="/presentation/lastoria.6.webp"
              alt="Ristorante Checco al 13"
              className="story-image"
              loading="lazy"
            />
          </div>

          <div className="story-content-box">
            <h3 className="story-subtitle">L'autenticità nel piatto</h3>
            <div className="story-accent-line"></div>
            <p className="story-text">
              Dal <strong>1953</strong>, quando Francesco Colasanti e sua moglie
              Silvia trasferirono la loro attività al km 13 di Via Aurelia,
              portiamo avanti una tradizione che celebra l'autenticità della
              cucina romana.
            </p>
            <p className="story-text">
              La nostra filosofia è rimasta immutata: ingredienti poveri ma
              ricchi di sapore, rispetto per la stagionalità e l'amore per la
              convivialità.
            </p>
            <Link to="/storia" className="story-cta">
              Scopri la Storia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
