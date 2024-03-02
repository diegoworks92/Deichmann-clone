import { useState } from "react";
import { RiSearchLine, RiCloseCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar lo que sucede cuando el usuario envía el formulario de búsqueda
    console.log("Buscar:", searchValue);
  };

  return (
    <div className="lg:flex justify-center mx-6 2xl:mx-0 hidden">
      <header className="flex justify-between items-center py-2 text-sm w-[1280px]">
        <nav className="flex justify-around gap-6">
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
        <form className="relative flex" onSubmit={handleSearchSubmit}>
          <RiSearchLine className="absolute cursor-pointer ml-5 mt-[10px] text-[#818788] text-lg" />
          <input
            type="search"
            className="pl-14 bg-[#F7F8F8] h-10 w-80 text-base"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Buscar"
          />
          <RiCloseCircleLine className="absolute cursor-pointer right-0 mr-2 mt-2 text-2xl text-[#818788]" />
        </form>
      </header>
    </div>
  );
};

export default Navbar;
