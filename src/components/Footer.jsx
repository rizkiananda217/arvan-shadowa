import "../styles/global.css";
import { Instagram, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="footer fade-in anim-delay-2">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Rizki Ananda (Arvan Shadowa).</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/rizkiananda0000/" target="_blank" rel="noreferrer">
            <Instagram />
            <span>Instagram</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin />
            <span>LinkedIn</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Youtube />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
