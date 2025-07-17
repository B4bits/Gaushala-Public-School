import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-700 mt-8 py-8 border-t border-green-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div>
          <div className="font-bold mb-2">Quick Links</div>
          <ul>
            <li>
              <a href="/admissions" className="hover:underline">
                Admissions
              </a>
            </li>
            <li>
              <a href="/academics" className="hover:underline">
                Academics
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:underline">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="my-4 md:my-0">
          <div className="font-bold mb-2">Connect</div>
          <div className="flex space-x-3">
            <a href="#" title="Facebook">
              <FaFacebook className="text-blue-600 text-xl hover:scale-110" />
            </a>
            <a href="#" title="Instagram">
              <FaInstagram className="text-pink-500 text-xl hover:scale-110" />
            </a>
            <a href="#" title="Twitter">
              <FaTwitter className="text-blue-300 text-xl hover:scale-110" />
            </a>
            <a href="#" title="WhatsApp">
              <FaWhatsapp className="text-green-600 text-xl hover:scale-110" />
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">Contact Info</div>
          <div>Gaushala Public School, Main Road, City</div>
          <div className="text-sm">Email: contact@gpschool.edu</div>
          <div className="text-sm">Phone: +91-90000-90000</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Gaushala Public School. All rights
        reserved.
      </div>
    </footer>
  );
}
