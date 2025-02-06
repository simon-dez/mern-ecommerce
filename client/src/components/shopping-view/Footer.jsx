import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Footer  ()  {
  return (
    <footer className="bg-[#C5C7CA] text-[#181A1B] py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/about" className="mx-2 hover:underline">About</a>
          <a href="/contact" className="mx-2 hover:underline">Contact</a>
          <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
        </div>
        <div className="mb-4 flex justify-center">
          <a href="https://facebook.com" className="mx-2" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="mx-2" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="mx-2" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="mx-2" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;