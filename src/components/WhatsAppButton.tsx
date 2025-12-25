import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/393517326560", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-100 translate-y-0"
      aria-label="Contattaci su WhatsApp"
    >
      <FaWhatsapp size={20} />
    </button>
  );
};

