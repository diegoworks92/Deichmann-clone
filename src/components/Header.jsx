import {
  RiMapPin2Line,
  RiUserLine,
  RiHeart3Line,
  RiShoppingBagLine,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className=" flex justify-between py-6 border-b border-[#E4EBED]">
      <nav className="flex justify-around gap-6 mx-[300px]">
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

      <img
        src="./img/logo-deichmann.png"
        alt="logo deichmann"
        className="w-64 cursor-pointer"
      />
      <nav className="flex justify-around gap-6 text-2xl mx-[300px]">
        <div className="flex gap-2 cursor-pointer">
          <img
            src="./img/spain-flag.svg"
            alt="spain flag"
            className="w-8 h-6 object-cover"
          ></img>
          <a href="#" className="font-bold text-lg">
            ES
          </a>
        </div>
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
  );
};

export default Header;
