import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  GlobeAltIcon,
  BellIcon,
  ChatBubbleLeftIcon as ChatIcon,
  CogIcon,
  PencilIcon,
  ArrowPathIcon,
  ArrowRightStartOnRectangleIcon,
  CameraIcon
} from "@heroicons/react/24/outline";

const MainNavigationBar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col items-center py-6">
      {/* Foto de Perfil */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg" // Cambia esta ruta por la imagen de perfil real
          alt="Foto de Perfil"
          className="w-12 h-12 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">Nombre de Usuario</h2>
        <p className="text-sm text-gray-500 flex items-center">
          <span className="text-green-500 text-lg mr-1">●</span> En línea
        </p>
      </div>

      {/* Botones de Navegación */}
      <nav className="flex flex-col w-full px-4">
         <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Inicio
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <SearchIcon className="w-5 h-5 mr-3" />
          Buscar
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <GlobeAltIcon className="w-5 h-5 mr-3" />
          Descubre
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <BellIcon className="w-5 h-5 mr-3" />
          Notificaciones
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <ChatIcon className="w-5 h-5 mr-3" />
          Mensajes
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <CogIcon className="w-5 h-5 mr-3" />
          Configuración
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
        >
          <PencilIcon className="w-5 h-5 mr-3" />
          Crear Post
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">
            <CameraIcon className="w-5 h-5 mr-3" />
            Crear Historia
        </a>
      </nav>

      {/* Botones adicionales */}
      <div className="flex flex-col w-full px-4 mt-auto">
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium mb-2"
        >
          <ArrowPathIcon className="w-5 h-5 mr-3" />
          Cambiar de Perfil
        </a>
        <a
          href="#"
          className="flex items-center w-full py-2 px-4 rounded-lg text-gray-700 font-medium bg-black text-white hover:bg-gray-800 transition duration-200 mb-2"
        >
          <ArrowRightStartOnRectangleIcon className="w-5 h-5 mr-3" />
          Cerrar Sesión
        </a>
      </div>
    </div>
  );
};

export default MainNavigationBar;