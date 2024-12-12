import { CardList } from "../../about/components/CardList";
import { Button } from "@/components/shadcn/ui/button";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useRef } from "react";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main-container flex flex-col">
        <Navbar handleScroll={ handleScroll } />
        <Header />
      </div>
      <section className="grid place-items-center">
        <div className="border border-l-0 border-r-0 w-fit p-10 m-5">
          <p className="text-3xl text-center text-gray-500 font-light">
            Transformamos desafíos en oportunidades <br />
            mediante soluciones de automatización <br />
            inteligentes y personalizadas
          </p>
        </div>
      </section>
      <section className="p-10" id="about" ref={aboutRef}>
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
          <Button className="p-4 uppercase bg-green-700 text-white">
            <Link to="/services">Conocé más</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};
