import { assetsVariables } from "../../assets/variables_assets/assetsVariables";
import { contactTextVariables } from "../../assets/variables_assets/assetsVariables";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assetsVariables.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            NOSOTROS
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Inicio</li>
            <li>Sobre nosotros</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
       
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONTACTANOS</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>{contactTextVariables.address}</li>
            <li>{contactTextVariables.phone}</li>
            <li>{contactTextVariables.email}</li>
          </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className="py-5 text-sm text-center">© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
