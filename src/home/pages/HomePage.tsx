import Logo from "@/assets/loguitov2.png";
import Triangle from "@/assets/top-3200.svg";
import { TypewriterText } from "@/components/TypewriterText";
import { CardList } from "../components/CardList";
import { Button } from "@/components/shadcn/ui/button";
import { Formulario } from "../components/Formulario";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <div className="main-container flex flex-col">
        <Navbar />
        <main className="flex flex-col m-auto mt-10">
          <section className="text-white flex flex-col justify-center items-center space-y-4">
            <img
              src={Logo}
              alt="Nea Dynamics Logo"
              className="rounded-full w-72"
            />
            <h1 className="text-3xl sm:text-6xl text-center title ">
              NEA DYNAMICS
            </h1>
            <TypewriterText
              className="text-center px-2 text-lg sm:text-2xl text-gray-200"
              text="Automatizando el presente, transformando el futuro"
            />
          </section>
        </main>
        <section>
          <img src={Triangle} />
        </section>
      </div>
      <section className="grid place-items-center">
        <div className="border border-l-0 border-r-0 w-fit p-10 m-5">
          <p className="text-4xl text-center text-gray-500 font-light">
            Transformamos desafíos en oportunidades <br />
            mediante soluciones de automatización <br />
            inteligentes y personalizadas
          </p>
        </div>
      </section>
      <section className="p-10">
        <CardList />
      </section>
      <section className="grid place-items-center">
        <div className="border border-l-0 border-r-0 w-fit p-10 m-5 grid place-items-center space-y-3">
          <h3 className="text-2xl text-center">¡Conocé nuestro trabajo!</h3>
          <p className=" text-center sm:text-xl text-gray-500 font-light">
            Si querés informarte en detalle sobre los productos y las soluciones
            que <br />
            ofrecemos en NEA Dynamics, hacé clic en el botón de abajo.
          </p>
          <Button className="p-4 uppercase bg-sky-700 text-white" >Conocé más</Button>
        </div>
      </section>
      <section className="p-10 grid place-items-center space-y-5">
        <h3 className="text-2xl">¡Contactanos!</h3>
        <p className="text-gray-500 text-center">Si querés que nos pongamos en contacto con vos para obtener mas información, completá el siguiente formulario.</p>
        <Formulario />
      </section>
    </>
  );
};
