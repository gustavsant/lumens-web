import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  text?: string;
}

const WhatsAppButton = ({ 
  size = "default", 
  variant = "default", 
  className, 
  text = "Falar no WhatsApp" 
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    // Placeholder WhatsApp number - replace with actual number
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Lumens Web.");
    const whatsappNumber = "5584886766426"; // Updated contact number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size={size}
      variant={variant}
      className={cn("font-inter font-medium", className)}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};

export default WhatsAppButton;