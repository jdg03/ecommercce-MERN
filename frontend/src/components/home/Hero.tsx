import { assetsVariables } from "../../assets/variables_assets/assetsVariables";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero left side*/}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className=" font-medium text-sm md:text-base">MÁS VENDIDOS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Últimos productos
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">COMPRAR AHORA</p>
            <p className="w-8 md:11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero right side*/}
     
        <img src={assetsVariables.hero_img} alt="imagen hero" className="w-full sm:w-1/2" />
        
    
    </section>
  );
};

export default Hero;
