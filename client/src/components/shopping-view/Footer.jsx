
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';



function Footer  ()  {
  return (
    <footer className=" text-gray-900 py-4">
      <div className="container mx-auto text-center">
       <div className="mb-8">
          <a href="/home" className="mx-4 hover:text-gray-600">Home</a>
          <a href="/about" className="mx-4 hover:text-gray-600">About</a>
          <a href="/contact" className="mx-4 hover:text-gray-600">Contact</a>
          <a href="/privacy" className="mx-4 hover:text-gray-600">Privacy Policy</a>
          <a href="/ourstores" className="mx-4 hover:text-gray-600">Our Stores</a>

        </div>
        <div className="mb-4 flex justify-center">
          <a href="https://facebook.com" className="mx-2" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="mx-2" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" className="mx-2" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="mx-2" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <p className="text-[#181A1B] text-sm">© {new Date().getFullYear()} DEDSV. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
};


export default Footer;

