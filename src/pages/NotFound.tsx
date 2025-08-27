import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-manrope text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-manrope text-2xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h2>
          <p className="font-inter text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="font-inter text-primary hover:text-primary/80 underline font-medium"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
