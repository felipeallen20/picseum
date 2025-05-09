import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="w-1/3 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <form className="space-y-4">
          {/* Input de Usuario */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
            />
          </div>

          {/* Input de Contraseña */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
            />
          </div>

          {/* Botón de Login */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg transition cursor-pointer hover:bg-gray-800"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">o</div>

        {/* Botón de Login con Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center bg-gray-200 text-black py-2 rounded-lg transition cursor-pointer hover:bg-gray-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.5 0 6.6 1.3 9 3.4l6.7-6.7C35.8 2.7 30.2 0 24 0 14.6 0 6.6 5.8 3 14.2l7.8 6.1C12.4 13 17.7 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.5-.2-3-.5-4.5H24v9h12.7c-.5 2.5-2 4.6-4.2 6l6.7 5.2c3.9-3.6 6.3-8.9 6.3-15.7z"
            />
            <path
              fill="#FBBC05"
              d="M10.8 28.3c-.8-2.5-.8-5.2 0-7.7L3 14.2C.5 19.1.5 24.9 3 29.8l7.8-6.1z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 12-2.1 16-5.7l-7.7-6.1c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.8 6C6.6 42.2 14.6 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          Iniciar sesión con Google
        </button>

        <div className="flex flex-col items-center mt-4">
            <a
                className="text-sm text-black hover:underline mb-2"
                href="#"
            >
                Olvidaste tu contraseña?
            </a>
            <a
                className="text-sm text-black hover:underline mb-2"
                href="#"
            >
                Crear una cuenta
            </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;