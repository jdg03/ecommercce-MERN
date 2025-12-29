import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            COMPANY
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Inicio</li>
            <li>Sobre nosotros</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
       
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>123 Main St, Anytown, USA</li>
            <li>(123) 456-7890</li>
            <li>info@example.com</li>
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
