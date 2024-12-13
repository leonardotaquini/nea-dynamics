import { NavbarUI } from "@/components/ui/NavbarUI";
import { CardList } from "../components/CardList";
import { Footer } from "@/home/components/Footer";

export const AboutPage = () => {
  return (
    <main className="h-screen">
      <NavbarUI />
      <h2 className="text-4xl my-10 text-center font-medium">Acerca de nosotros</h2>
      <CardList />
      <Footer />
    </main>
  );
};
