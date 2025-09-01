import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = memo(({ icon, title, description, href }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl lg:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-base lg:text-lg mb-6 leading-relaxed description">
        {description}
      </p>
      <Link to={href}>
        <Button variant="outline" className="btn-outline-tech w-full group-hover:shadow-md">
          Saiba Mais
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;