import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="http://wa.me/+905524114748"
      className="fixed bottom-4 right-4 z-10 bg-primary text-white p-3 animate-bounce shadow-xl rounded-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsappButton;
