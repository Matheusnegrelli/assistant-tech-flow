import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
        <a href="/" className="btn-hero inline-flex items-center">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
