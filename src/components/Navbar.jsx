import { RiSearchLine, RiCloseCircleLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="bg-blue-600 flex justify-between items-center p-6 border-b border-black text-sm">
      <nav className="flex justify-around gap-6">
        <a href="#" className="">
          Zapatos
        </a>
        <a href="#" className="">
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
      <form className="relative flex " onSubmit="">
        <RiSearchLine className="absolute ml-3 mt-2" />
        <input
          type="search"
          className="pl-10 bg-[#F7F8F8] h-8" // Añade padding a la izquierda para evitar que el texto se superponga con el icono
          value=""
          onChange=""
          placeholder="Buscar"
        />
        <RiCloseCircleLine className="absolute right-0 mr-2 mt-2" />
      </form>
    </header>
  );
};

export default Navbar;
