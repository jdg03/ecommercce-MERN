
import { assetsVariables, textVariables } from "../assets/variables_assets/assetsVariables"
import Title from "../components/ui/Title"

const About = () => {
  return (
    <section >
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="Sobre" text2="Nosotros" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assetsVariables.about_img} alt="about" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Encontrarás la mejor variedad de productos de la mejor calidad, con los mejores precios y la mejor experiencia de compra.</p>
          <p>Siempre estamos buscando mejorar para brindarte la mejor experiencia posible.</p>
          <b className="text-gray-800 ">Nuestra misión</b>
          <p>{textVariables.vision}</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="Porque" text2="Elegirnos" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Calidad garantizada:</b>
          <p className="text-gray-600">{textVariables.whyChooseUs}</p>
        </div>
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Convenienciia:</b>
          <p className="text-gray-600">{textVariables.whyChooseUs}</p>
        </div>
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Excelente servicio:</b>
          <p className="text-gray-600">{textVariables.whyChooseUs}</p>
        </div>

      </div>



    </section>
  )
}

export default About