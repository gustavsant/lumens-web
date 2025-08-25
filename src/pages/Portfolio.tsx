import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Portfolio = () => {
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

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
