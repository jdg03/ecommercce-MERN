import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} alt="logo de la empresa" className="w-36" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>INICIO</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/coleccion" className="flex flex-col items-center gap-1 ">
          <p>COLECCION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/sobre-nosotros"
          className="flex flex-col items-center gap-1"
        >
          <p>SOBRE NOSOTROS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contacto" className="flex flex-col items-center gap-1">
          <p>CONTACTO</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="icono de busqueda"
        />
        <Link to="carrito" className="relative">
          <img src={assets.cart_icon} alt="carrito" className="w-5 w-min-5" />
          <p className="absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 bg bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Mi perfil</p>
              <p className="cursor-pointer hover:text-black">Ordenes</p>
              <p className="cursor-pointer hover:text-black">Salir</p>
            </div>
          </div>
        </div>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="cursor-pointer w-5 sm:hidden"
        />
      </div>

      {/*sidemenu for small screens */}

      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex item-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="menu desplegable"
            />
            <p>Regresar</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/coleccion"
          >
            Colección
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/sobre-nosotros"
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contacto"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
