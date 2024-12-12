interface ImageCardProps {
    imageUrl: string;
    title: string;
    description: string;
  }
  
  export const ServiceCard = ({ imageUrl, title, description }: ImageCardProps) => {
    return (
      <div className="relative w-96 aspect-square overflow-hidden rounded-xl shadow-lg m-2 transform transition-transform duration-300 hover:scale-105">
        {/* Imagen de fondo */}
        <img
          src={imageUrl}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        {/* Capa de superposición */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 p-6">
          <h2 className="xl:text-xl text-3xl font-bold mb-4 text-center">{title}</h2>
          <p className="xl:text-SM text-center max-w-md">{description}</p>
        </div>
      </div>
    );
  }
  