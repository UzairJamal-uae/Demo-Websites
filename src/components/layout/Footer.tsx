import { Phone, Mail, Shield, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logor from '../../assets/logor.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary font-extrabold text-2xl shadow-xl"><img src= {logor} alt="JF" /></div>
              <div className="text-left">
                <h1 className="text-xl font-extrabold leading-none">JASS FREIGHT</h1>
                <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] mt-1 uppercase">JASS FREIGHT BROKERAGE</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              JASS FREIGHT BROKERAGE is a trusted freight brokerage specializing in refrigerated and temperature-controlled transportation solutions, we deliver dependable cold chain logistics services for food, frozen goods, and other temperature-sensitive freight with compliance, and care.
            </p>
            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 shadow-inner">
               <p className="text-xs italic text-slate-400 leading-relaxed">"Reliable brokerage connecting top-tier carriers with professional shippers."</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Services</Link></li>
              <li><Link to="/quote" className="hover:text-white hover:translate-x-1 inline-block transition-all">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
              <li><Link to="/portal/carrier" className="hover:text-white hover:translate-x-1 inline-block transition-all">Carrier Portal</Link></li>
              <li><Link to="/portal/shipper" className="hover:text-white hover:translate-x-1 inline-block transition-all">Shipper Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4 group">
                 <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all h-fit shadow-lg shadow-accent/5"><Phone size={18} /></div>
                 <div className="text-left">
                    <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase mb-1">For Emergency</p>
                    <p className="font-bold text-white text-lg tracking-tight">(952) 201-8217</p>
                 </div>
              </div>
              <div className="flex gap-4 group">
                 <div className="bg-white/5 p-3 rounded-xl text-white group-hover:bg-primary transition-all h-fit shadow-xl"><Mail size={18} /></div>
                 <div className="text-left">
                    <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase mb-1">Email Support</p>
                    <p className="font-bold text-white group-hover:text-accent transition-colors">sales@jassfreightbrokerage.com</p>
                 </div>
              </div>
              <div className="pt-2">
                 <div className="inline-flex items-center gap-3 bg-accent/20 text-accent px-6 py-3 rounded-2xl font-bold text-xs border border-accent/20 shadow-lg shadow-accent/5">
                    <Shield size={16} /> FMCSA REGISTERED
                 </div>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
             <h3 className="text-lg font-bold mb-8 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h3>
             <div className="flex flex-wrap gap-4 mb-12">
                {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all text-white border border-white/5 shadow-xl">
                    <Icon size={20} />
                  </a>
                ))}
             </div>
             <div className="space-y-2 opacity-50">
               <p className="text-[10px] font-bold tracking-widest uppercase">MC# 1820689</p>
               <p className="text-[10px] font-bold tracking-widest uppercase">DOT# 4575688</p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 text-center">
          <p className="text-xs text-slate-500 font-medium tracking-wide">© 2026 JASS FREIGHT BROKERAGE. All Rights Reserved. | Licensed & Bonded Freight Broker</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 text-[10px] text-slate-600 font-bold tracking-[0.3em] uppercase">
             <span className="hover:text-white transition-colors cursor-default">Compliance-Driven</span>
             <span className="hover:text-white transition-colors cursor-default transition-colors">Owner-Operated</span>
             <span className="hover:text-white transition-colors cursor-default">Mission-Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
