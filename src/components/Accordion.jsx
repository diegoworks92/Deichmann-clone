"use client";
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";

export const AccordionComponent = () => {
  return (
    <Accordion className="lg:hidden ">
      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Atención al cliente</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
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
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Nuestras tiendas</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <p className="flex items-center gap-1 text-[#00AA7A]">
            <RiMapPin2Line />
            Buscar una tienda
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Ayuda</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <ul className="">
            <li className="cursor-pointer">Ayuda y contacto</li>
            <li className="cursor-pointer">Mi cuenta</li>
            <li className="cursor-pointer">Pedidos</li>
            <li className="cursor-pointer">Pago</li>
            <li className="cursor-pointer">Entrega</li>
            <li className="cursor-pointer">Devoluciones y reembolsos</li>
            <li className="cursor-pointer">Tabla de tallas</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Información corporativa</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <ul className="">
            <li className="cursor-pointer">Empresa</li>
            <li className="cursor-pointer">Prensa</li>
            <li className="cursor-pointer">Newsletter</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Blog</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <img src="./img/mag1.webp" alt="" />
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Información jurídica</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <ul className="">
            <li className="cursor-pointer">Menciones Legales</li>
            <li className="cursor-pointer">Condiciones generales</li>
            <li className="cursor-pointer">Política de privacidad</li>
            <li className="cursor-pointer">Gestión de cookies</li>
            <li className="cursor-pointer">Canal de reporte</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="bg-[#F7F8F8]">
        <Accordion.Container>
          <Accordion.Title>Síguenos en</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          <div className="flex gap-2">
            <img className="cursor-pointer" src="./img/instagram.webp" alt="" />
            <img className="cursor-pointer" src="./img/facebook.webp" alt="" />
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
