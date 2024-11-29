import { Button } from "@/components/shadcn/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/shadcn/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="ml-auto">
        <Button variant={'ghost'} className=" hover:bg-transparent">
            <MenuIcon className=" text-slate-100 min-h-8 min-w-8"/>
        </Button>
        </SheetTrigger>
        <SheetContent className="bg-slate-900 border-none text-white">
          <SheetHeader>
            <SheetTitle className="title text-center text-white">Nea Dynamics</SheetTitle>
            <SheetDescription className="text-slate-300">
            Automatizando el presente, transformando el futuro 
            </SheetDescription>
          </SheetHeader>
          <ul className="h-3/4 flex flex-col justify-around items-center">
            <li className="text-center">
                <Link to='/' className="text-2xl hover:text-cyan-700">Inicio</Link>
            </li>
            <li className="text-center">
                <Link to='/' className="text-2xl hover:text-cyan-700">Nosotros</Link>
            </li>
            <li className="text-center">
                <Link to='/' className="text-2xl hover:text-cyan-700">Servicios</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};
