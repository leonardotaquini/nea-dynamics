import Logo from "@/assets/loguitov2.png";
import { useNavigate } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import Regador from "@/assets/images/regador.png";
import Warmpool from "@/assets/images/warmpool1.webp";

export const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="p-4 shadow">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex space-x-3 items-center w-max"
        >
          <img src={Logo} alt="Logo" className="w-20" />
          <h2 className="title font-bold">NEA DYNAMICS</h2>
        </div>
      </nav>
      <h2 className="text-center text-4xl p-8 title font-semibold">Nuestros Servicios</h2>
      <p className="text-justify leading-loose pt-3 sm:w-1/2 mx-auto px-4 text-slate-600">
        En NEA Dynamics nos dedicamos a transformar tus espacios y proyectos con
        soluciones innovadoras y eficientes. Desde la automatización del riego
        de jardines y la climatización de piletas, hasta el desarrollo de
        sistemas de cultivo hidropónico avanzados, ofrecemos tecnología de
        vanguardia que combina precisión, comodidad y sostenibilidad. Además,
        brindamos un servicio integral en proyectos de ingeniería y
        automatización, así como la reparación de equipos complejos, asegurando
        siempre un enfoque profesional y adaptado a tus necesidades. ¡Llevamos
        tus ideas al siguiente nivel!
      </p>
      <section className="flex flex-col lg:flex-row justify-around items-center px-2 mt-10">
        <ServiceCard
          imageUrl={Regador}
          title="RIEGO"
          description="INSTALACIÓN DE SISTEMAS DE RIEGO AUTOMÁTICO"
        />
        <ServiceCard
          imageUrl={Warmpool}
          title="WARMPOL"
          description="CONTROLADOR AUTOMÁTICO PARA CLIMATIZACIÓN DE PICINAS"
        />
        <ServiceCard
          imageUrl={Regador}
          title="Servicio de Regado"
          description="Automatizamos el riego de tu cultivo"
        />
        <ServiceCard
          imageUrl={Regador}
          title="Servicio de Regado"
          description="Automatizamos el riego de tu cultivo"
        />
        <ServiceCard
          imageUrl={Regador}
          title="Servicio de Regado"
          description="Automatizamos el riego de tu cultivo"
        />
      </section>
    </main>
  );
};
