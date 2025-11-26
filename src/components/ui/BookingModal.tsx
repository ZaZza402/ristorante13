import React, { useEffect } from "react";
import { X, Phone, MessageCircle, User } from "lucide-react";
import "./BookingModal.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Grazie per la richiesta! Ti contatteremo a breve per confermare.");
    onClose();
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div
        className="booking-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="booking-modal-close"
          onClick={onClose}
          aria-label="Chiudi"
        >
          <X size={24} />
        </button>

        <h2 className="booking-modal-title">Prenota il Tuo Tavolo</h2>
        <p className="booking-modal-subtitle">
          Un'esperienza culinaria indimenticabile ti attende.
        </p>

        <div className="booking-actions">
          <a href="tel:+39065817018" className="booking-btn booking-btn-call">
            <Phone size={18} />
            Chiama Ora: +39 06 581 7018
          </a>
          <a
            href="https://wa.me/39065817018"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn booking-btn-whatsapp"
          >
            <MessageCircle size={18} />
            Prenota su WhatsApp
          </a>
        </div>

        <div className="booking-divider">
          <span>Oppure invia una richiesta</span>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="flex items-center gap-2 text-[#1a4031] mb-1">
              <User size={16} className="opacity-50" />
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="Nome e Cognome"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="date" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="time" className="form-input" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="number"
                min="1"
                max="20"
                className="form-input"
                placeholder="Ospiti"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-input"
                placeholder="Telefono"
                required
              />
            </div>
          </div>

          <button type="submit" className="booking-submit">
            Invia Richiesta
          </button>
        </form>

        <p className="booking-disclaimer">
          *La prenotazione è confermata solo dopo nostra risposta.
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
