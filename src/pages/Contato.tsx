import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import Layout from "@/components/Layout";
import { sendContactMessage } from "@/lib/contact";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });

      // Reset form
      setFormData({ name: "", email: "", whatsapp: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Não foi possível enviar",
        description:
          err?.message ||
          "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-manrope text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fale com a gente
            </h1>
            <p className="font-inter text-lg lg:text-xl text-muted-foreground">
              Quer conversar sobre seu projeto? Preencha o formulário abaixo ou 
              clique no WhatsApp para falar direto com a gente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* WhatsApp CTA */}
            <div className="text-center mb-12">
              <div className="bg-muted rounded-2xl p-8 mb-8">
                <h2 className="font-manrope text-2xl font-bold text-foreground mb-4">
                  Prefere falar direto?
                </h2>
                <p className="font-inter text-muted-foreground mb-6">
                  Clique no botão abaixo e fale conosco pelo WhatsApp agora mesmo
                </p>
                <WhatsAppButton size="lg" />
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-manrope text-2xl font-bold">
                  Ou envie uma mensagem
                </CardTitle>
                <p className="font-inter text-muted-foreground">
                  Preencha os campos abaixo e entraremos em contato
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-inter font-medium">
                        Nome *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="font-inter"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-inter font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="font-inter"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="font-inter font-medium">
                      WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="font-inter"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-inter font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="font-inter min-h-[120px]"
                      placeholder="Conte-nos sobre seu projeto. Que tipo de site você precisa? Quais são seus objetivos?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-inter font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-manrope font-semibold text-foreground mb-2">
                    Resposta rápida
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Respondemos em até 2 horas nos dias úteis
                  </p>
                </div>
                <div>
                  <h3 className="font-manrope font-semibold text-foreground mb-2">
                    Orçamento gratuito
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Consulta e orçamento sem compromisso
                  </p>
                </div>
                <div>
                  <h3 className="font-manrope font-semibold text-foreground mb-2">
                    Atendimento humano
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Fale direto com nossa equipe, sem robôs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;