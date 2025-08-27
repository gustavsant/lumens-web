import { ExternalLink, Users, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import amandaImage from '/lovable-uploads/amanda_printscreen.png';
import wordsImage from '/lovable-uploads/words-printscreen.png';


const Portfolio = () => {
  // Real project
  const projects = [
    {
      title: "Amanda Baliana",
      subtitle: "Psicóloga",
      category: "Site Institucional",
      description: "Criar um site acolhedor e profissional que transmitisse confiança para pacientes.",
      solution: "Desenvolvimento de site institucional com design limpo, integração de formulário de contato e SEO básico.",
      url: "www.amandabaliana.com",
      image: amandaImage,
      tags: ["Psicologia", "Site Institucional", "SEO"]
    },
    {
      title: "Words AI",
      subtitle: "Jogo mobile",
      category: "Landing page",
      description: "Landing page para um jogo da forca desenvolvido com IA.",
      tags: ["Jogo", "Android", "Landing page"],
      image: wordsImage,
      features: ["Redirecionamento para Play Store", "QR Code scan"],
      url: "www.words-ai.app",
    }
  ]


  // Mock projects
  const mockProjects = [
    {
      title: "Clínica Odontológica",
      subtitle: "Mockup",
      category: "Site Institucional",
      description: "Site institucional moderno com integração de agendamento.",
      features: ["Agendamento online", "Galeria de procedimentos", "Blog informativo"],
      icon: Users,
      tags: ["Saúde", "Agendamento", "Blog"]
    },
    {
      title: "Loja de Moda",
      subtitle: "Mockup",
      category: "E-commerce",
      description: "E-commerce completo com catálogo e checkout seguro.",
      features: ["Carrinho de compras", "Meios de pagamento", "Painel administrativo"],
      icon: ShoppingBag,
      tags: ["Moda", "E-commerce", "Pagamentos"]
    },
    {
      title: "Startup Tech",
      subtitle: "Mockup",
      category: "Landing Page",
      description: "Landing page de lançamento com foco em geração de leads.",
      features: ["Formulário de leads", "CTA otimizada", "Analytics integrado"],
      icon: TrendingUp,
      tags: ["Startup", "Leads", "Conversão"]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-manrope text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Alguns projetos que já entregamos
            </h1>
            <p className="font-inter text-lg lg:text-xl text-muted-foreground">
              Conheça alguns dos trabalhos que desenvolvemos para nossos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Featured Real Project */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {projects.map((project, index) => (
                      <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-muted flex items-center justify-center">
                  <img src={project.image} alt="Amanda Site Imagem" className="object-cover w-full h-full" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="font-manrope text-2xl font-bold mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="font-inter text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-inter font-semibold mb-2">Desafio:</h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold mb-2">Solução:</h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar site
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          ))}

        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;