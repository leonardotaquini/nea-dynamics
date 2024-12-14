import Lottie from "react-lottie";
import { NavbarUI } from "@/components/ui/NavbarUI";
import { Contact } from "../components/Contact";
import ContactAnimation from "@/assets/contact-animation2.json";
import { Footer } from "@/home/components/Footer";

export const ContactPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <main className=" h-screen grid grid-cols-12">
        <div className="col-span-12">
          <NavbarUI />
        </div>
        <div className="col-span-12 sm:col-span-6  flex justify-center items-center shadow">
          <Contact />
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center sm:col-span-6 ">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="col-span-12">
          <Footer />
        </div>
      </main>
    </>
  );
};
