import {
  RiMapPin2Line,
  RiUserLine,
  RiHeart3Line,
  RiShoppingBagLine,
  RiSearchLine,
} from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-center mx-6 2xl:mx-0">
      <header className=" flex justify-between py-6 w-[1280px]">
        <nav className="lg:flex justify-around gap-6 hidden">
          <a href="#" className="border-b-2 border-black">
            MUJER
          </a>
          <a href="#" className="hover:border-b-2 border-black">
            HOMBRE
          </a>
          <a href="#" className="hover:border-b-2 border-black">
            NIÑOS
          </a>
        </nav>
        <div className="flex gap-2">
          <IoReorderThree className="lg:hidden text-3xl cursor-pointer" />
          <img
            className="w-8 lg:hidden cursor-pointer"
            src="./img/favicon.ico"
            alt=""
          />
        </div>
        <img
          className="hidden lg:block w-64 cursor-pointer mr-28"
          src="./img/logo-deichmann.png"
          alt="logo deichmann"
        />

        <nav className="flex justify-around gap-6 text-2xl">
          <div className="lg:flex gap-2 cursor-pointer hidden">
            <img
              src="./img/spain-flag.svg"
              alt="spain flag"
              className="w-8 h-6 object-cover"
            ></img>
            <a href="#" className="font-bold text-lg">
              ES
            </a>
          </div>
          <a href="#" className="lg:hidden">
            <RiSearchLine />
          </a>
          <a href="#">
            <RiMapPin2Line />
          </a>
          <a href="#">
            <RiUserLine />
          </a>
          <a href="#">
            <RiHeart3Line />
          </a>
          <a href="#">
            <RiShoppingBagLine />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
