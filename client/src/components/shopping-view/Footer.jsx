
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';



function Footer  ()  {
  return (
    <footer className=" text-gray-900 py-4">
      <div className="container mx-auto text-center">

        <div className="mb-8">
          <a href="/" className="mx-4 hover:text-gray-600">Home</a>
          <a href="/about" className="mx-4 hover:text-gray-600">About</a>
          <a href="/contact" className="mx-4 hover:text-gray-600">Contact</a>
          <a href="/privacy" className="mx-4 hover:text-gray-600">Privacy Policy</a>

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
      </div>
    </footer>
  );
};

//const [currentForm, setCurrentForm] = useState("login");

  //const toggleForm = (formName) => {
 //   setCurrentForm(formName);
  //}

  //{currentForm === "login" ? <AuthLogin onFormSwitch={toggleForm} /> : <AuthRegister onFormSwitch={toggleForm}/>}
export default Footer;

