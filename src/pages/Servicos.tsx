import { Users, Settings, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Servicos = () => {
  const services = [
    {
      title: "Site Institucional",
      description: "Presença online profissional, rápida e confiável.",
      details: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Formulário de contato",
        "Integração com redes sociais",
        "SSL e segurança inclusos"
      ],
      icon: Users,
    },
    {
      title: "Sistemas",
      description: "Automações, sistemas personalizados",
      details: [
        "Sistemas personalizados",
        "Automação de processos",
        "Integração com APIs",
        "Painel administrativo",
        "Escalabilidade e manutenção"
      ],
      icon: Settings,
    },
    {
      title: "Landing Page",
      description: "Páginas de alta conversão para campanhas e captação de leads.",
      details: [
        "Foco em conversão",
        "Formulários otimizados",
        "Integração com ferramentas de marketing",
        "Testes A/B",
        "Analytics e métricas"
      ],
      icon: Target,
    },
    {
      title: "SEO & Performance",
      description: "Ajustes técnicos para velocidade, ranqueamento e experiência do usuário.",
      details: [
        "Otimização de velocidade",
        "Estruturação técnica de SEO",
        "Compressão de imagens",
        "Cache e CDN",
        "Relatórios de performance"
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-manrope text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que podemos criar para você
            </h1>
            <p className="font-inter text-lg lg:text-xl text-muted-foreground">
              Soluções digitais completas para fazer seu negócio crescer online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-manrope text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                  <p className="font-inter text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="font-inter text-sm flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Como trabalhamos
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Um processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Conversa inicial",
                description: "Entendemos suas necessidades e objetivos"
              },
              {
                step: "02",
                title: "Desenvolvimento",
                description: "Criamos seu site com foco em qualidade e performance"
              },
              {
                step: "03",
                title: "Entrega e suporte",
                description: "Seu site no ar com suporte contínuo"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-manrope text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-manrope text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;