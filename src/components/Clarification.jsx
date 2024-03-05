import { useState } from "react";

const Clarification = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  if (!mostrarAlerta) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl mb-4">Aclaración</h2>
        <p className="mb-4">
          Este sitio web es un proyecto de demostración creado con fines
          educativos y de portafolio. No tiene fines comerciales ni está
          asociado con ninguna marca o empresa. El diseño del sitio se ha
          replicado para demostrar habilidades de desarrollo web y no pretende
          infringir los derechos de autor o de marca del sitio web original.
          Todos los logotipos, imágenes y textos son ficticios y no deben ser
          utilizados para otros fines.
        </p>
        <button
          className="bg-[#267650] text-white px-4 py-2 rounded"
          onClick={() => setMostrarAlerta(false)}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Clarification;
