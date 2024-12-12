import Regador from "@/assets/images/regador_11zon.jpg";
import Warmpool from "@/assets/images/warmpool1_11zon.webp";
import Hydrofuzzy from "@/assets/images/hydrofuzzy_1_11zon.jpg";
import Ingenieria from "@/assets/images/ingenieria_2_11zon.jpg";
import Reparaciones from "@/assets/images/reparaciones1_4_11zon.jpg";

interface DataService {
  imageUrl: string;
  title: string;
  description: string;
}

export const dataService: DataService[] = [
  {
    imageUrl: Regador,
    title: "RIEGO",
    description: "INSTALACIÓN DE SISTEMAS DE RIEGO AUTOMÁTICO",
  },
  {
    imageUrl: Warmpool,
    title: "WARMPOOL",
    description: "CONTROLADOR AUTOMÁTICO PARA CLIMATIZACIÓN DE PICINAS",
  },
  {
    imageUrl: Hydrofuzzy,
    title: "HYDROFUZZY",
    description: "CONTROLADOR CON LÓGICA DIFUSA PARA SISTEMAS HIDROPÓNICOS",
  },

  {
    imageUrl: Ingenieria,
    title: "INGENIERIA",
    description: "DESARROLLO INTEGRAL DE PROYECTOS DE INGENIERÍA",
  },
  {
    imageUrl: Reparaciones,
    title: "REPARACIONES",
    description: "SERVICIO DE REPARACIÓN DE EQUIPOS COMPLEJOS",
  }

];
