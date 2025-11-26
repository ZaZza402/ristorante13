import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const classics = [
    {
      id: 1,
      image: "/presentation/Tonnarelli.webp",
      title: "Tonnarelli Cacio e Pepe",
      description:
        "Il re dei primi romani. Pasta artigianale avvolta in una cremosa emulsione di pecorino romano e pepe nero.",
      price: "€14",
      badge: "Il Re",
    },
    {
      id: 2,
      image: "/presentation/Bucatini.webp",
      title: "Bucatini all'Amatriciana",
      description:
        "La regina della cucina laziale. Sugo di pomodoro, guanciale croccante e pecorino romano.",
      price: "€14",
      badge: "La Regina",
    },
    {
      id: 3,
      image: "/presentation/Carciofo.webp",
      title: "Carciofo alla Romana",
      description:
        "Il principe dei contorni. Carciofi romaneschi cotti lentamente con mentuccia e aglio.",
      price: "€12",
      badge: "Il Principe",
    },
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">I Classici Romani</h2>
          <p className="menu-subtitle">
            La Trinità della cucina romana. Piatti che raccontano secoli di
            tradizione.
          </p>
        </div>

        <div className="menu-grid">
          {classics.map((dish) => (
            <div key={dish.id} className="menu-card">
              <div className="menu-image-wrapper">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="menu-image"
                  loading="lazy"
                />
                <div className="menu-badge">{dish.badge}</div>
              </div>
              <div className="menu-content">
                <h3 className="menu-dish-title">{dish.title}</h3>
                <p className="menu-description">{dish.description}</p>
                <div className="menu-footer">
                  <span className="menu-price">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta-wrapper">
          <Link to="/menu" className="menu-cta-button">
            Vedi il Menu Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
