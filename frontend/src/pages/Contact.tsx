import { assetsVariables, contactTextVariables } from "../assets/variables_assets/assetsVariables"
import Title from "../components/ui/Title"

const Contact = () => {
  return (
    <section>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1="Nuestros" text2="Contactos" />
      </div>
      
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
       <img className="w-full md:max-w-[480px]" src={assetsVariables.contact_img} alt="contact_image" />
       <div className="flex flex-col justify-center items-start gap-6">
        <p className="text-xl font-semibold tex-gray-600">Nuestra tienda</p>
        <p className="text-gray-500" >{contactTextVariables.address}</p>
        <p className="text-gray-500" >{contactTextVariables.phone}</p>
        <p className="text-gray-500" >{contactTextVariables.email}</p>
        <p className="text-gray-500" >{contactTextVariables.hours}</p>
        <p className="text-gray-500" >{contactTextVariables.saturday}</p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Trabaja con nosotros</button>
       </div>
      </div>
    </section>
  )
}

export default Contact