import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import logo from "../assets/images/logos/indirafooter.avif";

// Social Icon Component
const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-gray-100 hover:bg-[#259CA8] text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.1)]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">

        {/* COLUMN 1 */}
        <div className="space-y-8 md:col-span-2 lg:col-span-2">
          
          {/* Logo */}
          <div className="w-64">
            <img
              src={logo}
              alt="ICEM Logo"
              className="object-contain"
            />
          </div>

          {/* Contact */}
          <div className="space-y-5 px-1">
            <div className="text-gray-500 leading-relaxed">
              <span className="font-extrabold block mb-1 text-lg text-gray-800">
                Indira Chanakya Campus (ICC)
              </span>
              <p className="max-w-md">
                S.No. 64,65, Gat No. 276 At Post: Parandwadi, Near Somatne
                phata, Tal.: Maval, Dist. Pune – 410 506
              </p>
            </div>

            {/* Phones */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <p className="flex items-center gap-3 text-gray-600 font-semibold">
                <FaPhoneAlt size={14} />
                <a href="tel:+917720010705">+91 77200 10705</a>
              </p>

              <p className="flex items-center gap-3 text-gray-600 font-semibold">
                <FaPhoneAlt size={14} />
                <a href="tel:+917720010706">+91 77200 10706</a>
              </p>
            </div>

            {/* Email */}
            <p className="flex items-center gap-3 text-gray-600 font-semibold">
              <FaEnvelope size={14} />
              <a href="mailto:info@indiraicem.ac.in">
                info@indiraicem.ac.in
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-2">
            <SocialIcon href="https://www.facebook.com/ICEM.AVIRAT/" label="Facebook">
              <FaFacebookF size={18} />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/" label="LinkedIn">
              <FaLinkedinIn size={18} />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/icem_pune/" label="Instagram">
              <FaInstagram size={18} />
            </SocialIcon>

            <SocialIcon href="https://x.com/igipune" label="Twitter">
              <FaTwitter size={18} />
            </SocialIcon>

            <SocialIcon href="https://www.youtube.com/@indirauniversitypune" label="YouTube">
              <FaYoutube size={18} />
            </SocialIcon>

            <SocialIcon href="mailto:admissions@indiraicem.ac.in" label="Email">
              <Mail size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="lg:pl-8">
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b-2 border-[#259CA8] w-max pb-1">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-500">
            {[
              { name: "Career", href: "https://indiraicem.ac.in/career" },
              { name: "Feedback", href: "https://indiraicem.ac.in/Feedback" },
              { name: "Privacy Policy", href: "https://indiraicem.ac.in/privacy-policy" },
              { name: "Fees Regulating Authority", href: "https://indiraicem.ac.in/fees-regulating-authority" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}

            {/* External */}
            <li><a href="https://www.unipune.ac.in" target="_blank" rel="noopener noreferrer">SPPU</a></li>
            <li><a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer">AICTE</a></li>
            <li><a href="https://www.dtemaharashtra.gov.in" target="_blank" rel="noopener noreferrer">DTE</a></li>
            <li><a href="https://mahadbt.maharashtra.gov.in" target="_blank" rel="noopener noreferrer">MahaDBT</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b-2 border-[#259CA8] w-max pb-1">
            Official Documents
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-500">
            {[
              { name: "Staff Grievance Form (PDF)", link: "https://indiraicem.ac.in/pdfs/SGForm.pdf" },
              { name: "Women Welfare Policy (PDF)", link: "https://indiraicem.ac.in/pdfs/WomenWelfarePolicy.pdf" },
              { name: "Anti Ragging Policy (PDF)", link: "https://indiraicem.ac.in/pdfs/code_of_conduct_Anti_Ragging_Policy.pdf" },
              { name: "Faculty Application Form (PDF)", link: "https://indiraicem.ac.in/pdfs/Application-Format.pdf" },
              { name: "Mandatory Disclosure (PDF)", link: "https://indiraicem.ac.in/pdfs/mandatory_disclosure_22012026.pdf" },
              { name: "AICTE Approval (PDF)", link: "https://indiraicem.ac.in/pdfs/AICTE-Approval.pdf" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#259CA8] text-white text-center text-xs sm:text-sm py-4 px-4">
        <p>
          © {new Date().getFullYear()} Indira College of Engineering and Management — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
