import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  // dynamic links
  const services = ["Branding", "Design", "Marketing", "Advertisement"];
  const company = ["About us", "Contact", "Jobs", "Press kit"];
  const legal = ["Terms of use", "Privacy policy", "Cookie policy"];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p>
          STEP AWAY TO YOUR DESIRE JOB.
          <br />
          Providing reliable tech since 1992
        </p>

        <div className="flex space-x-4 mt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-indigo-600 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        {services.map((item, index) => (
          <a key={index} className="link link-hover">
            {item}
          </a>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        {company.map((item, index) => (
          <a key={index} className="link link-hover">
            {item}
          </a>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        {legal.map((item, index) => (
          <a key={index} className="link link-hover">
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
