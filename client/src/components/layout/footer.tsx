import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-custom-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold font-serif mb-4">ThriveBridge Malawi</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building a self-reliant generation through youth and family empowerment. 
              Operating as a bridge between ambition and impact across Malawi.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-accent-custom transition-colors duration-200 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-gray-300 hover:text-accent-custom transition-colors duration-200 cursor-pointer">
                    Our Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/stories">
                  <span className="text-gray-300 hover:text-accent-custom transition-colors duration-200 cursor-pointer">
                    Success Stories
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <span className="text-gray-300 hover:text-accent-custom transition-colors duration-200 cursor-pointer">
                    Resources
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-accent-custom transition-colors duration-200 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Lilongwe, Malawi</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+265 1 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@thrivebridgemalawi.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 ThriveBridge Malawi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-accent-custom transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-custom transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-custom transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
