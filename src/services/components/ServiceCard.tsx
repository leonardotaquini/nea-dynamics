import { Card } from "@/components/shadcn/ui/card";
import { DataService } from "@/home/helpers/data-service";
import { useAppStore } from "@/store/app.store";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


  
  export const ServiceCard = (service: DataService) => {

    const setServiceSelected = useAppStore((state) => state.setServiceSelected);
    const { imageUrl, title, description, url } = service;
    const navigate = useNavigate();

    const handleServiceClick = () => {
      navigate(url);
      setServiceSelected(service);
    }

    return (
      <Card 
        className="cursor-pointer relative w-96 aspect-square overflow-hidden rounded-xl shadow-lg m-2 transform transition-transform duration-300 hover:scale-105"
        onClick={ handleServiceClick }
        >
        <img
          src={imageUrl}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 p-6">
          <h2 className="xl:text-xl text-3xl font-bold mb-4 text-center">{title}</h2>
          <p className="xl:text-SM text-center max-w-md">{description}</p>
          <ArrowRight className="mt-4 animate-pulse" size={32} />
        </div>
      </Card>
    );
  }
  