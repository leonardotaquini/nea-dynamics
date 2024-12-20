import { Card } from "@/components/shadcn/ui/card";
import { NavbarUI } from "@/components/ui/NavbarUI";
import { useAppStore } from "@/store/app.store";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Service = () => {
  const serviceSelected = useAppStore((state) => state.serviceSelected);
  const navigate = useNavigate();

  if (!serviceSelected) {
    return <Navigate to="/services" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUI />
      <ArrowLeft className="w-8 h-8 m-4 cursor-pointer" onClick={ ()=> navigate('/services')} />
      <main className="flex-grow grid grid-cols-12 shadow">
        <section className="col-span-12 h-full sm:col-span-6 order-2 hidden sm:flex flex-col items-center justify-center">
          <img
            src={serviceSelected?.imageUrl}
            alt="service"
            className="sm:w-9/12 sm:h-5/6 object-cover rounded-lg"
          />
        </section>
        <Card className="col-span-12 h-full sm:col-span-6 flex flex-col px-3 items-center justify-center space-y-6">
          <h2 className="text-2xl mt-4 font-medium text-blue-900">
            {serviceSelected?.title}
          </h2>
          <h3 className="text-center">{serviceSelected?.subtitle}</h3>
          <span className="text-justify px-4 leading-loose">
            {serviceSelected?.descriptionComplete}
          </span>
          {(serviceSelected?.features !== null && serviceSelected?.features?.length! > 0 ) && (
            <>
              <ul className="leading-loose ">
                {serviceSelected?.features.map((feature, index) => (
                  <li key={index} className="flex flex-col justify-center items-start">
                      <h4 className="font-bold text-blue-900 flex space-x-2 justify-center items-center">
                      <CheckCircle size={16} className="text-green-700" />
                      <p>{feature.title}:</p>
                      </h4>
                    <p className="">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <span className="text-justify px-4 pb-4 leading-loose">
            {serviceSelected?.motivation}
          </span>
        </Card>
      </main>
    </div>
  );
};
