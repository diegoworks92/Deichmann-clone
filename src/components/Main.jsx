import { AiOutlineExclamationCircle } from "react-icons/ai";
import Carousel from "./Carousel";
import { shoesOne, shoesTwo, shoesThree, info } from "./data";
const Main = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full lg:w-[1024px] xl:w-[1280px] h-full">
        <h2 className="font-bold text-center text-2xl mt-8 mb-8 lg:mt-14 lg:mb-10">
          ¿Para quién te gustaría comprar?
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full cursor-pointer">
            <img
              className="w-full lg:hidden object-cover"
              src="./mobileView/mujer-movil.webp"
              alt="imagen de modelos"
            />
            <img
              className="hidden lg:block w-full"
              src="./mainImages/mujer.webp"
              alt="imagen de modelos"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-[#267550] lg:text-white">
              Mujer
            </span>
          </div>
          <div className="relative w-full cursor-pointer">
            <img
              className="w-full lg:hidden"
              src="./mobileView/niña-movil.webp"
              alt="imagen de modelos"
            />
            <img
              className="hidden lg:block w-full"
              src="./mainImages/niña.webp"
              alt="imagen de modelos"
            />

            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-[#267550] lg:text-white">
              Niños
            </span>
          </div>
          <div className="relative w-full cursor-pointer">
            <img
              className="w-full lg:hidden"
              src="./mobileView/hombre-movil.webp"
              alt="imagen de modelos"
            />
            <img
              className="hidden lg:block w-full"
              src="./mainImages/hombre.webp"
              alt="imagen de modelos"
            />

            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-[#267550] lg:text-white">
              Hombre
            </span>
          </div>
        </div>
        <div>
          <div className="relative mt-10 cursor-pointer">
            <img
              className="w-full  h-full lg:hidden"
              src="./mobileView/mujer-zapatos-movil.webp"
              alt="imagen de modelos"
            />
            <img
              className="hidden lg:block w-full h-full"
              src="./mainImages/mujer-zapatos.webp"
              alt="imagen de modelos"
            />
            {/* movil */}
            <div className=" w-full lg:hidden flex-col justify-between">
              <div className="mb-4 m-6">
                <p className="text-4xl text-[#00AA7A]">
                  Queremos que hagas match{" "}
                </p>
                <p className="text-4xl">
                  con Nike, Adidas y Puma a precios irresistibles
                </p>
              </div>
              <span className="underline text-2xl ml-6">Ver colección</span>
            </div>

            <div className="absolute bg-white p-6 h-[330px] xl:h-[402px] m-6 w-[344px] top-0 hidden lg:flex flex-col justify-between">
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

          {/* movil */}
          <div className="flex flex-col items-center text-center -mb-40">
            <div className="cursor-pointer bg-[#0D0D0D] w-full md:w-[425px] h-full m-6 ">
              <div className="lg:hidden flex items-center flex-col justify-center text-white">
                <p className="text-3xl md:text-5xl text-center m-4">
                  Las mejores marcas desde
                </p>
                <p className="font-bold text-8xl md:text-9xl m-4">39,99</p>
              </div>
            </div>

            <div className="h-[330px] m-6 w-full lg:hidden flex-col justify-between">
              <div className="mb-4">
                <p className="text-4xl text-[#00AA7A]">
                  Zapatillas y ropa deportiva{" "}
                </p>
                <p className="text-4xl">a los mejores precios</p>
              </div>
              <span className="underline text-2xl">Ver marcas</span>
            </div>
          </div>

          <div className="hidden lg:block relative mt-32 mb-4 cursor-pointer bg-[#0D0D0D] w-full h-[380px] xl:h-[416px]">
            <div className="absolute h-[330px] xl:h-[416px] m-6 w-[800px] top-0 left-[270px] xl:left-[420px] flex items-center flex-col justify-center text-white">
              <p className="text-4xl xl:text-6xl -mb-16">
                Las mejores marcas desde
              </p>
              <p id="price" className="font-bold">
                39,99
              </p>
            </div>
            <div className="absolute bg-white p-6 h-[330px] xl:h-[370px] m-6 w-[330px] xl:w-[344px] top-0 flex flex-col justify-between">
              <div>
                <p className="text-4xl font-semibold">
                  Zapatillas y ropa deportiva{" "}
                </p>
                <p className="text-4xl">a los mejores precios</p>
              </div>
              <span className="underline text-2xl mb-4">Ver marcas</span>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 mt-4 mb-20 2xl:mx-0">
            <img
              className="w-full"
              src="./img/experiencia.webp"
              alt="nueva experiencia de compra"
            />
            <img
              className="w-full"
              src="./img/envio.webp"
              alt="Envío gratuito en pedidos superiores a 40€"
            />
            <img
              className="w-full"
              src="./img/entrega.webp"
              alt="Entrega a domicilio con SEUR"
            />
            <img
              className="w-full"
              src="./img/devolucion.webp"
              alt="Devolución gratuita en tiendas"
            />
          </div>
        </div>

        <div className="container mx-auto w-[358px] sm:w-full">
          <Carousel
            shoes={info}
            clase="hidden"
            contenedor="h-full"
            ocultar="block lg:hidden"
            alto="h-full"
            botones="hidden"
          />

          <Carousel
            shoes={shoesOne}
            titulo="No te puedes perder"
            clase="h-12"
            contenedor="h-36"
            alto="h-40"
          />
          <Carousel
            shoes={shoesTwo}
            titulo="¿Qué quieres comprar?"
            contenedor="h-36"
            alto="h-40"
          />
          <Carousel
            shoes={shoesThree}
            titulo="Más novedades"
            clase="h-12"
            contenedor="h-36"
            alto="h-40"
          />
        </div>

        <div className="relative lg:mt-6 cursor-pointer">
          <img
            className="w-full lg:hidden"
            src="./mobileView/mujer-horizontal-movil.webp"
            alt="imagen de modelos"
          />
          <img
            className="hidden lg:block w-full"
            src="./mainImages/mujer-horizontal.webp"
            alt="imagen de modelos"
          />

          {/* movil */}
          <div className="bg-white w-full lg:hidden flex-col justify-between">
            <div className="mb-4 m-6">
              <p className="text-4xl text-[#00AA7A]">
                ¡Descuento de bienvenida del 10%!{" "}
              </p>
              <p className="text-4xl">
                Suscríbete a nuestra newsletter y consigue ventajas exclusivas
              </p>
            </div>
            <span className="underline text-2xl ml-6">Suscribirme ya</span>
          </div>

          <div className="absolute bg-white p-6 h-[330px] xl:h-[401px] m-6 w-[344px] top-0 hidden lg:flex flex-col justify-between">
            <div className="">
              <p className="text-3xl xl:text-4xl text-[#00AA7A]">
                ¡Descuento de bienvenida del 10%!{" "}
              </p>
              <p className="text-3xl xl:text-4x">
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
        <div className="mt-12 lg:mt-6  mb-16 mx-6 2xl:mx-0">
          <h3 className="font-bold text-4xl mb-6">
            Tienda online de calzado HEICHMANN | Compra zapatos online
          </h3>
          <p>
            Encuentra lo último en calzado online en HEICHMANN. En nuestra
            tienda de zapatos online conseguirás el tipo de calzado que
            necesitas para cada momento. Diseño actual, buena calidad y los
            mejores precios. HEICHMANN tiene un claro compromiso con la calidad,
            por eso la amplia variedad de zapatos de nuestra tienda online es tu
            mejor apuesta. Comprar zapatos para toda la familia en el mismo
            sitio nunca había sido tan fácil, tenemos zapatos de mujer, zapatos
            de hombre, zapatos para niños y calzado deportivo.
          </p>
          <h4 className="font-bold text-xl my-6">
            ¿Buscas calzado de mujer de última tendencia?{" "}
          </h4>
          <p>
            En la zapateria online HEICHMANN tenemos los diseños más actuales
            para que puedas completar todos tus looks. Encuentra sandalias,
            bailarinas, cuñas, botas, botines, zapatos de tacón y zapatillas de
            casa. Los hombres también tienen su espacio en nuestra tienda online
            de zapatos. Para ellos tenemos una gran selección de zapatos casual,
            calzado elegante para las ocasiones especiales, modernos slippers y
            sneakers. En HEICHMANN puedes conseguir también calzado para los más
            pequeños de la casa. Sandalias, zapatos de vestir, zapatos con
            velcro para que puedan abrochárselos solitos, deportivas y zapatos
            para sus primeros pasos.
          </p>
          <h4 className="font-bold text-xl my-6">
            Un buen calzado es lo más importante para el día a día y en
            HEICHMANN lo sabemos.
          </h4>
          <p>
            Por eso te ofrecemos una gran variedad de zapatos para toda la
            familia de marcas como{" "}
            <span className="cursor-pointer text-[#00AA7A]">Graceland</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Adidas</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Nike</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Catwalk</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Bench</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Vty</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Agaxy</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">Cupcake</span>,{" "}
            <span className="cursor-pointer text-[#00AA7A]">AM</span> y{" "}
            <span className="cursor-pointer text-[#00AA7A]">Claudio Conti</span>
            , entre otras, que destacan por su compromiso con la calidad. Nos
            importa mucho que puedas conseguir el mejor calzado al mejor precio,
            por eso trabajamos a diario en ello.
            <span className="cursor-pointer text-[#00AA7A]"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
