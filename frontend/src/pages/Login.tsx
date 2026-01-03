import { useState } from "react"

const Login = () => {

  const [currentState, setCurrentState] = useState<'Login' | 'Register'>('Login')

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center 2-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState === 'Login' ? 'Iniciar Sesión' : 'Registrarse'}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState !== 'Login' ? <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Nombre" required/> : null}
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Correo" required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Contraseña" required/>
      {
        currentState === 'Login' ? 
        <button type="submit" className="w-full px-3 py-2 border bg-black text-white font-light">Iniciar Sesión</button> :
        <button type="submit" className="w-full px-3 py-2 border bg-black text-white font-light">Registrarse</button>
      }

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>¿Olvidaste tu contraseña?</p>
        {
          currentState === 'Login' ? 
          <p onClick={() => setCurrentState('Register')} className="cursor-pointer">¿No tienes una cuenta?</p> : 
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">¿Ya tienes una cuenta?</p>
        }
      </div>
    </form>
  )
}

export default Login