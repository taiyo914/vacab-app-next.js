import { FaFacebook, FaTwitter, FaInstagram,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div 
        className="
          flex items-center justify-between
          xs:flex-col xs:gap-y-2
          px-6 xs:px-5 py-6 xs:py-4"
      >
        <p className="text-gray-400 xs:text-sm">&copy; Created by Taiyo Suzuki</p>
        <div className="flex items-center justify-end space-x-3" >
          <p className="xs:text-sm text-gray-400">Share on</p>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter  />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
