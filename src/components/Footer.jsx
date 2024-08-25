// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-2xl font-semibold mb-4">About Us</h5>
            <p className="text-sm leading-relaxed mb-4">
              We are dedicated to excellence, offering top-tier products and services. Our goal is to exceed expectations and build lasting relationships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-2xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-2xl font-semibold mb-4">Contact Us</h5>
            <p className="text-sm leading-relaxed">
              <a href="mailto:info@example.com" className="hover:text-gray-400 transition-colors">info@itcdistributorships.in</a><br />
              <a href="tel:+1234567890" className="hover:text-gray-400 transition-colors">+1 234 567 890</a>
            </p>
          </div>

          {/* Newsletter Signup Section */}
          <div className="w-full md:w-1/4">
            <h5 className="text-2xl font-semibold mb-4">Newsletter</h5>
            <p className="text-sm leading-relaxed mb-4">
              Subscribe to receive updates and special offers. Stay informed and connected!
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 mb-3 md:mb-0 md:mr-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} itc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
