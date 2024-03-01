import { RiSearchLine, RiCloseCircleLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 border-b border-[#E4EBED] text-sm">
      <nav className="flex justify-around gap-6 mx-[300px]">
        <a href="#" className="">
          Zapatos
        </a>
        <a href="#" className="flex whitespace-nowrap">
          Precios reducidos %
        </a>
        <a href="#" className="">
          Deportes
        </a>
        <a href="#" className="">
          Ropa
        </a>
        <a href="#" className="">
          Accesorios
        </a>
        <a href="#" className="">
          Marcas
        </a>
      </nav>
      <form className="relative flex mx-[300px]" onSubmit="">
        <RiSearchLine className="absolute ml-5 mt-[10px] text-[#818788] text-lg" />
        <input
          type="search"
          className="pl-14 bg-[#F7F8F8] h-10 w-80 text-base"
          value=""
          onChange=""
          placeholder="Buscar"
        />
        <RiCloseCircleLine className="absolute right-0 mr-2 mt-2 text-2xl text-[#818788]" />
      </form>
    </header>
  );
};

export default Navbar;
