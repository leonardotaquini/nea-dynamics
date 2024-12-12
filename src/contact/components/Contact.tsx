import { Formulario } from "@/contact/components/Formulario";

export const Contact = () => {
  return (
    <>
      <section className="p-10 grid place-items-center space-y-5">
        <h3 className="text-2xl">¡Contactanos!</h3>
        <p className="text-gray-500 text-center">
          Si querés que nos pongamos en contacto con vos para obtener mas
          información, completá el siguiente formulario.
        </p>
        <Formulario />
      </section>
    </>
  );
};
