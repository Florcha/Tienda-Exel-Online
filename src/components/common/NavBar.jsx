import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/" className="mr-5 hover:text-gray-900">Inicio</Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">Productos</Link>
          <Link to="/products/Facial" className="mr-5 hover:text-gray-900">Facial</Link>
          <Link to="/products/Corporal" className="mr-5 hover:text-gray-900">Corporal</Link>
          <Link to="/products/Cabello" className="mr-5 hover:text-gray-900">Cabello</Link>
          <Link to="form" className="mr-5 hover:text-gray-900">Contacto</Link>
        </nav>
        <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
          <span className="ml-3 text-xl">ExelBioCosmética</span>
        </Link>
      </div>
    </header>
  )
}

export default NavBar;