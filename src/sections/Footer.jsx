import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          <a href="https://github.com/fadwabaali" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/fadwa-ait-baali-580495338/" className="social-icon">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 cursor-pointer" />
          </a>
          <a href="https://github.com/fadwabaali" className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer" />
          </a>
      
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Fadwa Baali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
