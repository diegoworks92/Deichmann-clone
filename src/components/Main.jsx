import { AiOutlineExclamationCircle } from "react-icons/ai";
import Carousel from "./Carousel";
import { shoesOne, shoesTwo, shoesThree } from "./data";
const Main = () => {
  return (
    <div className="mx-[300px]">
      <h2 className="font-bold text-center text-2xl mt-14 mb-10">
        ¿Para quién te gustaría comprar?
      </h2>
      <div className="flex">
        <div className="relative w-full cursor-pointer">
          <img className="w-full" src="./img/entry_women.webp" alt="" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white">
            Mujer
          </span>
        </div>
        <div className="relative w-full cursor-pointer">
          <img className="w-full" src="./img/entry_kids.webp" alt="" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white">
            Niños
          </span>
        </div>
        <div className="relative w-full cursor-pointer">
          <img className="w-full" src="./img/entry_men.webp" alt="" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white">
            Hombre
          </span>
        </div>
      </div>
      <div>
        <div className="relative mt-10 cursor-pointer">
          <img className="w-full" src="./img/format_individual.webp" alt="" />
          <div className="absolute bg-white p-6 h-[416px] m-6 w-[344px] top-0 flex flex-col justify-between">
            <div>
              <p className="text-4xl text-[#00AA7A]">
                Queremos que hagas match{" "}
              </p>
              <p className="text-4xl">
                con Nike, Adidas y Puma a precios irresistibles
              </p>
            </div>
            <span className="underline text-2xl mb-4">Ver colección</span>
          </div>
        </div>

        <div className="flex gap-4 mt-4 mb-20">
          <img className="w-full" src="./img/experiencia.webp" alt="" />
          <img className="w-full" src="./img/envio.webp" alt="" />
          <img className="w-full" src="./img/entrega.webp" alt="" />
          <img className="w-full" src="./img/experiencia.webp" alt="" />
        </div>
      </div>

      <Carousel shoes={shoesOne} titulo="No te puedes perder" clase="h-12" />
      <Carousel shoes={shoesTwo} titulo="¿Qué quieres comprar?" />
      <Carousel shoes={shoesThree} titulo="Más novedades" clase="h-12" />

      <div className="relative cursor-pointer bg-[#0D0D0D] w-full h-[464px]">
        <div className="absolute h-[416px] m-6 w-[800px] top-0 left-[420px] flex items-center flex-col justify-center text-white">
          <p className="text-6xl -mb-16">Las mejores marcas desde</p>
          <p id="price" className="font-bold">
            39,99
          </p>
        </div>
        <div className="absolute bg-white p-6 h-[416px] m-6 w-[344px] top-0 flex flex-col justify-between">
          <div>
            <p className="text-4xl font-semibold">
              Zapatillas y ropa deportiva{" "}
            </p>
            <p className="text-4xl">a los mejores precios</p>
          </div>
          <span className="underline text-2xl mb-4">Ver marcas</span>
        </div>
      </div>

      <div className="relative mt-10 cursor-pointer">
        <img className="w-full" src="./img/gender-entry-women.webp" alt="" />
        <div className="absolute bg-white p-6 h-[416px] m-6 w-[344px] top-0 flex flex-col justify-between">
          <div>
            <p className="text-4xl text-[#00AA7A]">
              !Descuento de bienvenida del 10%!{" "}
            </p>
            <p className="text-4xl">
              Suscríbete a nuestra newsletter y consigue ventajas exclusivas
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="underline text-2xl mb-4">Suscribirme ya</span>{" "}
            <AiOutlineExclamationCircle className="text-2xl mb-2" />
          </div>
        </div>
      </div>
      {/* text */}
      <div className="mt-6 mb-24">
        <h3 className="font-bold text-4xl mb-6">
          Tienda online de calzado DEICHMANN | Compra zapatos online
        </h3>
        <p>
          Encuentra lo último en calzado online en DEICHMANN. En nuestra tienda
          de zapatos online conseguirás el tipo de calzado que necesitas para
          cada momento. Diseño actual, buena calidad y los mejores precios.
          DEICHMANN tiene un claro compromiso con la calidad, por eso la amplia
          variedad de zapatos de nuestra tienda online es tu mejor apuesta.
          Comprar zapatos para toda la familia en el mismo sitio nunca había
          sido tan fácil, tenemos zapatos de mujer, zapatos de hombre, zapatos
          para niños y calzado deportivo.
        </p>
        <h4 className="font-bold text-xl my-6">
          ¿Buscas calzado de mujer de última tendencia?{" "}
        </h4>
        <p>
          En la zapateria online DEICHMANN tenemos los diseños más actuales para
          que puedas completar todos tus looks. Encuentra sandalias, bailarinas,
          cuñas, botas, botines, zapatos de tacón y zapatillas de casa. Los
          hombres también tienen su espacio en nuestra tienda online de zapatos.
          Para ellos tenemos una gran selección de zapatos casual, calzado
          elegante para las ocasiones especiales, modernos slippers y sneakers.
          En DEICHMANN puedes conseguir también calzado para los más pequeños de
          la casa. Sandalias, zapatos de vestir, zapatos con velcro para que
          puedan abrochárselos solitos, deportivas y zapatos para sus primeros
          pasos.
        </p>
        <h4 className="font-bold text-xl my-6">
          Un buen calzado es lo más importante para el día a día y en DEICHMANN
          lo sabemos.
        </h4>
        <p>
          Por eso te ofrecemos una gran variedad de zapatos para toda la familia
          de marcas como{" "}
          <span className="cursor-pointer text-[#00AA7A]">Graceland</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Adidas</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Nike</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Catwalk</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Bench</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Vty</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Agaxy</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">Cupcake</span>,{" "}
          <span className="cursor-pointer text-[#00AA7A]">AM</span> y{" "}
          <span className="cursor-pointer text-[#00AA7A]">Claudio Conti</span>,
          entre otras, que destacan por su compromiso con la calidad. Nos
          importa mucho que puedas conseguir el mejor calzado al mejor precio,
          por eso trabajamos a diario en ello.
          <span className="cursor-pointer text-[#00AA7A]"></span>
        </p>
      </div>
    </div>
  );
};

export default Main;
