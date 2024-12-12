import { ServiceCard } from "../components/ServiceCard";
import { dataService } from "../../home/helpers/data-service";
import { NavbarUI } from "@/components/ui/NavbarUI";


export const ServicesPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
     <NavbarUI />
      <h2 className="text-center text-4xl p-8 font-semibold uppercase">Nuestros Servicios</h2>
      <p className="text-center leading-loose pt-3 sm:w-3/4 mx-auto px-4 text-slate-600 text-xl">
        Transformamos tus proyectos con soluciones innovadoras. <br /> Ofrecemos
        tecnología avanzada para automatización de riego, climatización de
        piletas y sistemas de cultivo hidropónico. También brindamos servicios
        integrales en ingeniería, automatización y reparación de equipos
        complejos. ¡Llevamos tus ideas al siguiente nivel!
      </p>
      <section className="flex flex-col lg:flex-row justify-around items-center px-2 mt-10">
       {
        dataService.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            imageUrl={service.imageUrl} />
        ))
       }
      </section>
    </main>
  );
};
