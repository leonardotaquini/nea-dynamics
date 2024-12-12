import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/shadcn/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleScroll?: () => void;
}


export const Navbar = ({ handleScroll }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutClick = () => {
    setIsOpen(false); 
    setTimeout(() => handleScroll!(), 300); 
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="ml-auto">
        <MenuIcon className="text-slate-100 min-h-8 min-w-8 m-3" />
      </SheetTrigger>
      <SheetContent className="bg-slate-900 border-none text-white flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="title text-2xl text-center text-white">
            NEA DYNAMICS
          </SheetTitle>
          <SheetDescription className="text-slate-300 text-center">
            Automatizando el presente, transformando el futuro
          </SheetDescription>
        </SheetHeader>
        <ul className="h-3/4 flex flex-col justify-around items-center">
          <li className="text-center">
            <Link
              to="/"
              className="text-2xl hover:text-cyan-700"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/services"
              className="text-2xl hover:text-cyan-700"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li className="text-center">
            <Link
              to=""
              className="text-2xl hover:text-cyan-700"
              onClick={handleAboutClick} 
            >
              Nosotros
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/contact"
              className="text-2xl hover:text-cyan-700"
              onClick={() => setIsOpen(false)} 
            >
              Contacto
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted text-gray-300 text-sm">
          © NEA Dynamics. All rights reserved.
        </p>
      </SheetContent>
    </Sheet>
  );
};

