import "./Footer.css";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Plane,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contatti">
      <div className="footer-container">
        {/* Map Section */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.8397543678597!2d12.398973315434944!3d41.893240979222415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132591a06ebfe66f%3A0x8f7f9e3a8b1b1b1b!2sVia%20Aurelia%2C%201249%2C%2000166%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1632432432432!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ristorante R13 Location"
          ></iframe>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Ristorante da Checco R13</h3>
            <p className="footer-tagline">Tradizione Italiana dal 1953</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contatti</h4>
            <ul className="footer-list">
              <li>
                <MapPin className="footer-icon" size={18} />
                Via Aurelia, 1249
                <br />
                00166 Roma (RM)
              </li>
              <li>
                <Phone className="footer-icon" size={18} />
                <a href="tel:+39061234567">+39 06 1234567</a>
              </li>
              <li>
                <Mail className="footer-icon" size={18} />
                <a href="mailto:info@checcoR13.it">info@checcoR13.it</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Orari</h4>
            <ul className="footer-list">
              <li>
                <Clock className="footer-icon" size={18} />
                Lunedì - Venerdì: 12:00 - 23:00
              </li>
              <li>
                <Clock className="footer-icon" size={18} />
                Sabato - Domenica: 11:00 - 24:00
              </li>
              <li className="footer-note">Chiuso il Martedì</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Seguici</h4>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" size={20} />
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" size={20} />
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link" aria-label="TripAdvisor">
                <Plane className="social-icon" size={20} />
                <span>TripAdvisor</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Ristorante da Checco R13. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
