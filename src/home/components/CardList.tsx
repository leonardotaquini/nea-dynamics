import { CardItem } from "@/components/CardItem";
import Foto3 from "@/assets/images/foto03.webp";
import Foto7 from "@/assets/images/foto07.webp";
import Pbc from "@/assets/images/pcb.webp";
export const CardList = () => {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center">
        <CardItem
          title="La Empresa"
          content="Nuestra misión es proporcionar innovación tecnológica
                            para mejorar la eficiencia, la productividad y la calidad
                            de vida. Guiados por la excelencia y la creatividad, buscamos
                            ser líderes en el desarrollo de soluciones automatizadas que
                            superen las expectativas de nuestros clientes, contribuyendo 
                            al progreso y la sostenibilidad."
          image={Foto3}
        />

        <CardItem
          title="Soluciones"
          content="Nos destacamos por proporcionar soluciones personalizadas en automatización, orientadas siempre a satisfacer las necesidades específicas de nuestros clientes. Nos dedicamos a ofrecer respuestas a medida para los desafíos particulares que enfrentan, asegurándonos de comprender a fondo sus objetivos y problemáticas."
          image={Foto7}
          end={true}
        />

        <CardItem
          title="Nosotros"
          content="Nos enorgullece ser un equipo de profesionales altamente calificados, provenientes de diversas ramas de la ingeniería y unidos por nuestra apasionada dedicación a la tecnología. Nos consideramos innovadores comprometidos con el desarrollo de soluciones avanzadas que transforman ideas en realidades tangibles."
          image={Pbc}
        />
      </div>
    </>
  );
};
