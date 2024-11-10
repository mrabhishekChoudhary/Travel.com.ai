import React from 'react'
// Importing GitHub Icon from React Icons
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 mt-10">
      {/* Footer Content */}
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">About</h3>
            <p className="text-gray-400 text-sm">
              Created with love by Abhishek Kumar & Rakshit Verma. Passionate about building user-centric experiences.
            </p>
          </div>

          {/* Social Media Links with Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:scale-105 transition-all duration-200 ease-in-out">
                <FaFacebookF size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black hover:scale-105 transition-all duration-200 ease-in-out">
                <FaGithub size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 hover:scale-105 transition-all duration-200 ease-in-out">
                <FaLinkedinIn size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 hover:scale-105 transition-all duration-200 ease-in-out">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Contact</h3>
            <p className="text-gray-400 text-sm">Email: <a href="mailto:contact@abhishek.com" className="text-blue-400 hover:text-white">contact@Travel.com</a></p>
            <p className="text-gray-400 text-sm">Phone: <span className="text-blue-400">+123 456 7890</span></p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Abhishek Kumar & Rakshit Verma. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
