import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-card">
      <div className="mb-4 bg-itcenter-orange/10 rounded-full w-14 h-14 flex items-center justify-center">
        <Icon className="h-7 w-7 text-itcenter-orange" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
