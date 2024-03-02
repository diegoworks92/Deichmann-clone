import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { TbShoe } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { AccordionComponent } from "./Accordion";

const Footer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1280px]">
        <header className="bg-[#F7F8F8] text-center p-20 lg:p-20">
          <h3 className="font-bold text-xl mb-6">
            Tradición, experiencia y calidad: DEICHMANN
          </h3>
          <div className="flex flex-col lg:flex-row justify-center gap-4 ">
            <p className="lg:border-r-2 border-[#E4EBED] py-4 pr-4 flex">
              <HiOutlineShoppingBag className="text-4xl mr-3" /> Más de 75
              tiendas físicas en España
            </p>
            <p className="lg:border-r-2 border-[#E4EBED] py-4  pr-4 flex">
              <IoPricetagOutline className="text-4xl mr-3" /> Las últimas
              tendencias a los mejores precios
            </p>
            <p className="flex py-4 ">
              <TbShoe className="text-4xl mr-3" /> Amplia selección de modelos,
              marcas y tallas
            </p>
          </div>
        </header>
        {/*   formas de pago */}
        <div className="text-center flex flex-col lg:flex-row justify-center font-bold lg:gap-20 m-10">
          <div className="flex flex-col lg:items-start">
            <p className="mb-3">Formas de pago</p>
            <div className="flex justify-center">
              <img src="./img/MasterCard-light_512.webp" alt="" />
              <img src="./img/Visa-card-light_512.webp" alt="" />
              <img src="./img/Icon_paypal.webp" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-3">Envío</p>
            <img className="w-min" src="./img/Icon_SEUR.webp" alt="" />
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <p className="mb-3">Premios</p>
            <img src="./img/Icon_award.webp" alt="" />
          </div>
        </div>

        <AccordionComponent />

        <footer className="hidden lg:grid grid-cols-4 bg-[#F7F8F8] text-center gap-10 p-10">
          {/* Atención al cliente */}
          <div className="text-start">
            <h4 className="text-lg font-bold mb-6">Atención al cliente</h4>
            <ul>
              <li>Lu - Ju 9:00 a 18:00</li>
              <li>Vi 9:00 a 16:00</li>
              <li className="cursor-pointer flex items-center gap-1">
                <MdOutlineHeadsetMic /> 900 878 158
              </li>
              <li className="cursor-pointer flex items-center gap-1">
                <CiMail /> onlineshop-es@deichmann.com
              </li>
              <li className="cursor-pointer flex items-center gap-1">
                <FaFacebookF /> Síguenos
              </li>
            </ul>
          </div>
          {/*    Nuestras tiendas */}
          <div className="text-start cursor-pointer">
            <h4 className=" text-lg font-bold mb-6">Nuestras tiendas</h4>
            <p className="flex items-center gap-1 text-[#00AA7A]">
              <RiMapPin2Line />
              Buscar una tienda
            </p>
          </div>
          {/* Ayuda */}
          <div className="text-start">
            <h4 className=" text-lg font-bold mb-6">Ayuda</h4>
            <ul className="">
              <li className="cursor-pointer">Ayuda y contacto</li>
              <li className="cursor-pointer">Mi cuenta</li>
              <li className="cursor-pointer">Pedidos</li>
              <li className="cursor-pointer">Pago</li>
              <li className="cursor-pointer">Entrega</li>
              <li className="cursor-pointer">Devoluciones y reembolsos</li>
              <li className="cursor-pointer">Tabla de tallas</li>
            </ul>
          </div>
          {/* Información corporativa */}
          <div className="text-start">
            <h4 className="text-lg font-bold mb-6">Información corporativa</h4>
            <ul className="">
              <li className="cursor-pointer">Empresa</li>
              <li className="cursor-pointer">Prensa</li>
              <li className="cursor-pointer">Newsletter</li>
            </ul>
          </div>
          {/*    Blog */}
          <div className="text-start cursor-pointer">
            <h4 className="text-lg font-bold mb-6">Blog</h4>
            <img src="./img/mag1.webp" alt="" />
          </div>
          {/* Información jurídica */}
          <div className="text-start">
            <h4 className="text-lg font-bold mb-6">Información jurídica</h4>
            <ul className="">
              <li className="cursor-pointer">Menciones Legales</li>
              <li className="cursor-pointer">Condiciones generales</li>
              <li className="cursor-pointer">Política de privacidad</li>
              <li className="cursor-pointer">Gestión de cookies</li>
              <li className="cursor-pointer">Canal de reporte</li>
            </ul>
          </div>
          {/*         Síguenos en */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-start">Síguenos en</h4>
            <div className="flex gap-2">
              <img
                className="cursor-pointer"
                src="./img/instagram.webp"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="./img/facebook.webp"
                alt=""
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
