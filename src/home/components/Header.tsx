import { useTypewriter, Cursor  } from 'react-simple-typewriter'
import Logo from "@/assets/loguitov2.png";
import Triangle from "@/assets/top-3200.svg";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const [ text ] = useTypewriter({
        words:['Automatizando el presente', 'Transformando el futuro'],
        loop: true,
      });
  return (
    <>

        <main className="flex flex-col m-auto space-y-8">
          <section className="text-white flex flex-col justify-center items-center space-y-4">
            <img
              src={Logo}
              alt="Nea Dynamics Logo"
              className="rounded-full w-56"
            />
            <h1 className="text-3xl sm:text-6xl text-center title ">
              NEA DYNAMICS
            </h1>
            <span className="text-xl">
              {text}
              <Cursor cursorColor="white" />
            </span>
          </section>
        <ArrowRight 
          className="text-white m-auto animate-pulse cursor-pointer" 
          size={32} 
          onClick={ () => navigate('/services') }
          />
        </main>
        <section>
          <img src={Triangle} />
        </section>

    </>
  );
};
