import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logor from '../../assets/logor.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Get a Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  const isTransparent = location.pathname === "/" && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!isTransparent ? "bg-white/95 backdrop-blur-lg shadow-xl py-2" : "bg-transparent py-4 md:py-6 text-white"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg border border-white/10 shrink-0">
             <img src= {logor} alt="J" />
          </div>
          <div className="text-left">
            <h1 className={`text-sm md:text-xl font-black leading-none ${!isTransparent ? "text-primary" : "text-white"}`}>
              JASS FREIGHT
            </h1>
            <p className={`text-[8px] md:text-[10px] font-black tracking-widest mt-1 ${!isTransparent ? "text-slate-500" : "text-slate-300"}`}>ELITE LOGISTICS SOLUTIONS</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.path} 
               className={`text-sm font-bold tracking-wide hover:text-accent transition-all relative group ${!isTransparent ? "text-slate-700" : "text-white"}`}>
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all group-hover:w-full ${location.pathname === item.path ? "w-full" : "w-0"}`}></span>
            </Link>
          ))}
          <div className="relative group/portal">
            <button className={`text-sm font-bold transition-colors ${!isTransparent ? "text-slate-700" : "text-white"} hover:text-accent flex items-center gap-1 cursor-default group-hover/portal:text-accent`}>
              Portals <ChevronDown size={14} className="mt-0.5 group-hover/portal:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover/portal:opacity-100 group-hover/portal:visible transition-all py-2 translate-y-2 group-hover/portal:translate-y-0 text-slate-800">
              <Link to="/portal/shipper" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">Shipper Portal</Link>
              <Link to="/portal/carrier" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">Carrier Portal</Link>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/quote" className="bg-primary text-white px-8 py-2.5 rounded-xl text-sm font-black hover:bg-[#2a3d6a] transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
            Request a Load
          </Link>
          <Link to="/portal/carrier" className="bg-accent text-white px-8 py-2.5 rounded-xl text-sm font-black hover:bg-[#dc2626] transition-all shadow-lg hover:shadow-accent/20 active:scale-95">
            Join Network
          </Link>
        </div>

        <button className="lg:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X size={28} className="text-slate-900" />
          ) : (
            <Menu size={28} className={!isTransparent ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden border-t border-slate-100"
          >
            <div className="py-8 px-6 flex flex-col gap-8 text-slate-800">
              <nav className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link key={item.name} to={item.path} 
                    className="text-lg font-bold hover:text-accent py-3 border-b border-slate-50 transition-colors flex items-center justify-between group">
                    {item.name}
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-accent transition-colors" />
                  </Link>
                ))}
                <Link to="/portal/shipper" className="text-lg font-bold hover:text-accent py-3 border-b border-slate-50 transition-colors flex items-center justify-between group">
                  Shipper Portal
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-accent transition-colors" />
                </Link>
                <Link to="/portal/carrier" className="text-lg font-bold hover:text-accent py-3 border-b border-slate-50 transition-colors flex items-center justify-between group">
                  Carrier Portal
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-accent transition-colors" />
                </Link>
              </nav>
              <div className="flex flex-col gap-4">
                <Link to="/quote" className="w-full bg-primary text-white py-4 rounded-xl font-black shadow-lg hover:bg-slate-800 transition-all text-center">Request a Load</Link>
                <Link to="/portal/carrier" className="w-full bg-accent text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-all text-center">Sign Up</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
