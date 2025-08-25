import { ArrowRight, Zap, Search, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";
import Layout from "@/components/Layout";
const Home = () => {
  const services = [{
    title: "Site Institucional",
    description: "Para empresas e profissionais que querem presença online sólida.",
    icon: Users
  }, {
    title: "Criação de Sistemas",
    description: "Sistemas web personalizados para automatizar processos do seu negócio.",
    icon: ArrowRight
  }, {
    title: "Landing Page",
    description: "Páginas enxutas e diretas para capturar leads e vender mais.",
    icon: Zap
  }];
  const differentials = [{
    title: "Performance",
    description: "Sites otimizados para velocidade e nota alta no Google PageSpeed.",
    icon: Zap
  }, {
    title: "SEO",
    description: "Estrutura técnica preparada para aparecer no Google.",
    icon: Search
  }, {
    title: "Suporte humano",
    description: "Atendimento próximo, sem complicação.",
    icon: Users
  }];
  const testimonials = [{
    text: "Meu site ficou lindo e já comecei a receber clientes pelo Google!",
    author: "Cliente satisfeito"
  }, {
    text: "Processo super rápido e direto. Recomendo a Lumen Web.",
    author: "Outro cliente"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-manrope text-4xl lg:text-6xl font-bold text-foreground mb-6">Iluminando sua presença digital</h1>
            <p className="font-inter text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Ajudamos a transformar ideias em sites que brilham.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  Ver portfólio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-manrope text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que escolher a Lumen Web?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <differential.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-manrope text-xl font-semibold mb-3">
                  {differential.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {differential.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre nós
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Conheça a equipe por trás da Lumen Web
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gustavo */}
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-muted-foreground" />
                  <span className="sr-only">Foto do Gustavo</span>
                </div>
                <h3 className="font-manrope text-2xl font-bold text-foreground mb-3">
                  Gustavo
                </h3>
                <p className="font-inter text-muted-foreground">
                  Desenvolvedor full-stack apaixonado por criar soluções digitais que fazem a diferença. 
                  Especialista em desenvolvimento web moderno e otimização de performance.
                </p>
              </CardContent>
            </Card>

            {/* Gabriel */}
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-muted-foreground" />
                  <span className="sr-only">Foto do Gabriel</span>
                </div>
                <h3 className="font-manrope text-2xl font-bold text-foreground mb-3">
                  Gabriel
                </h3>
                <p className="font-inter text-muted-foreground">
                  Designer e desenvolvedor front-end focado em experiência do usuário. 
                  Transforma ideias em interfaces bonitas e funcionais que encantam os usuários.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-current" />)}
                  </div>
                  <blockquote className="font-inter text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="font-inter font-medium text-sm text-foreground">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-manrope text-3xl lg:text-4xl font-bold mb-6">Pronto para fazer sua marca brilhar online?</h2>
            <WhatsAppButton size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90" />
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;