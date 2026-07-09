"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000D33] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg inline-flex">
                <Image 
                  src="/images/logo-transparent.png" 
                  alt="Aviation Assets Logo" 
                  width={150} 
                  height={50} 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">AVIATION</h2>
                <p className="text-[10px] tracking-widest text-gray-300">ASSETS</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-200 leading-relaxed max-w-sm">
              Based in New York, USA, Aviation Assets is a Global, Professional, 
              Airline, MRO and Ground Operations, Support, Consulting and Training Company. 
              We offer qualified and experienced Industry professionals and subject matter experts.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-sky-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services & Address */}
          <div className="space-y-8">
            {/* List of Services instead of Academy */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Services</h3>
              <ul className="text-sm text-gray-200 space-y-2">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Aircraft Trading & Leasing</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Aviation Consulting</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Technical Management</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">MRO Support Services</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How to find us</h3>
              <p className="text-sm text-gray-200">
                Please see our contact page for details and location map.
              </p>
              
              <div className="text-sm text-gray-200 space-y-3">
                <p className="font-semibold text-white uppercase tracking-wider">Aviation Assets HQ</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-sky-400" />
                  <span>123 Aviation Boulevard, Suite 400<br/>New York, NY 10001, USA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-sky-400" />
                  <span>contact@aviationassets.demo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-sky-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Accredited Member & Subscribe */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-10 w-10 text-sky-400" />
              <div>
                <h3 className="text-xl font-bold tracking-tight">GLOBAL</h3>
                <p className="text-xs tracking-widest text-gray-300">ACCREDITED MEMBER</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Subscribe</h3>
              <p className="text-sm text-gray-200">
                Please provide your email to subscribe for our newsletters.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border border-gray-400 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-sky-400 text-white placeholder-gray-400"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 rounded p-1.5 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Mock reCAPTCHA */}
                <div className="bg-white text-gray-800 rounded-md p-3 flex items-center justify-between w-[300px] border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="h-6 w-6 border-gray-300 rounded cursor-pointer" />
                    <span className="text-sm font-medium">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RefreshCw className="h-7 w-7 text-blue-600 mb-1" />
                    <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>Copyrights © 2026 Aviation Assets</p>
          <div className="mt-4 md:mt-0 space-x-2">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
