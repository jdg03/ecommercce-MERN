

const NewsletterBox = () => {

    const onSubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Email enviado");
    }

  return (
    <section className="text-center" onSubmit={onSubmitHandler}>
        <p className="text-2xl font-medium text-gray-800">Subscribete para enterarte de nuestras novedades</p>
        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <form className="w-full sm:1/2 flex items-center gap3 mx-auto my-6 border pl-3">
            <input type="email" placeholder="Ingresa tu correo" className="w-full sm:flex-1 outline-none" required/>
            <button type="submit" className="bg-[black] text-white text-xs px-10 py-4">Suscribirme</button>
        </form>
    </section>
  )
}

export default NewsletterBox