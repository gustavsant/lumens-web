import { ExternalLink, Users, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Portfolio = () => {
  // Real project
  const realProject = {
    title: "Amanda Baliana",
    subtitle: "Psicóloga",
    category: "Site Institucional",
    description: "Criar um site acolhedor e profissional que transmitisse confiança para pacientes.",
    solution: "Desenvolvimento de site institucional com design limpo, integração de formulário de contato e SEO básico.",
    url: "www.amandabaliana.com",
    image: "/api/placeholder/600/400",
    tags: ["Psicologia", "Site Institucional", "SEO"]
  };

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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Projeto Destacado</Badge>
              <h2 className="font-manrope text-3xl font-bold text-foreground mb-4">
                Case de Sucesso
              </h2>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-muted p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <p className="font-inter text-muted-foreground">
                      Projeto real em produção
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{realProject.category}</Badge>
                  </div>
                  <CardTitle className="font-manrope text-2xl font-bold mb-2">
                    {realProject.title}
                  </CardTitle>
                  <p className="font-inter text-muted-foreground mb-4">
                    {realProject.subtitle}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-inter font-semibold mb-2">Desafio:</h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        {realProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold mb-2">Solução:</h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        {realProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {realProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a
                      href={`https://${realProject.url}`}
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
        </div>
      </section>

      {/* Mock Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-manrope text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Outros projetos
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                Exemplos de soluções que desenvolvemos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <project.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="mb-2">{project.category}</Badge>
                    <CardTitle className="font-manrope text-xl font-bold">
                      {project.title}
                    </CardTitle>
                    <p className="font-inter text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="font-inter text-xs text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;