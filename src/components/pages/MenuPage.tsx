import { useState } from "react";
import type { Category } from "../../data/menuData";
import { menuData } from "../../data/menuData";
import "./MenuPage.css";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Antipasti");
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showGlutenFree, setShowGlutenFree] = useState(false);

  const categories: Category[] = [
    "Antipasti",
    "Primi",
    "Secondi Carne",
    "Secondi Pesce",
    "Contorni",
    "Dolci",
  ];

  const scrollToCategory = (category: Category) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="menu-page">
      {/* Sticky Header */}
      <div className="menu-header-sticky">
        <div className="menu-header-content">
          <h1 className="menu-page-title">Il Nostro Menu</h1>

          {/* Category Navigation */}
          <nav className="category-nav">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => scrollToCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Dietary Filters */}
          <div className="dietary-filters">
            <button
              className={`filter-btn ${showVegetarian ? "active" : ""}`}
              onClick={() => setShowVegetarian(!showVegetarian)}
            >
              <span className="filter-icon">🌱</span>
              Vegetariano
            </button>
            <button
              className={`filter-btn ${showGlutenFree ? "active" : ""}`}
              onClick={() => setShowGlutenFree(!showGlutenFree)}
            >
              <span className="filter-icon">🌾</span>
              Senza Glutine
            </button>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="menu-page-content">
        {categories.map((category) => {
          const categoryItems = menuData.filter(
            (item) => item.category === category
          );
          const visibleItems = categoryItems.filter((item) => {
            if (showVegetarian && !item.isVegetarian) return false;
            if (showGlutenFree && !item.isGlutenFree) return false;
            return true;
          });

          return (
            <section
              key={category}
              id={`category-${category}`}
              className="menu-category-section"
            >
              <h2 className="category-title">{category}</h2>
              <div className="category-divider"></div>
              {visibleItems.length > 0 ? (
                <div className="menu-items-list">
                  {visibleItems.map((item) => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-header-row">
                        <h3 className="menu-item-name">
                          {item.name}
                          {item.isHighlight && (
                            <span className="classic-star">★</span>
                          )}
                        </h3>
                        <div className="grow border-b-2 border-dotted border-brand-green/20 mx-2 mb-1"></div>
                        {item.price && (
                          <span className="menu-item-price">€{item.price}</span>
                        )}
                      </div>
                      {item.description && (
                        <p className="menu-item-description">
                          {item.description}
                        </p>
                      )}
                      <div className="menu-item-badges">
                        {item.isVegetarian && (
                          <span className="badge badge-vegetarian">🌱</span>
                        )}
                        {item.isGlutenFree && (
                          <span className="badge badge-gluten-free">🌾</span>
                        )}
                      </div>
                      <div className="menu-item-border"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-items-message">
                  Nessun piatto trovato con i filtri selezionati.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
