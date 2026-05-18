import { motion } from "motion/react";
import { Phone, Clock, Shield, Globe, Truck, MapPin, Package, Building2, ChevronRight, CheckCircle2, Star, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import img from '../assets/img.jpg';
import robo from '../assets/robo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-40 pb-20 md:pt-56">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src= {img}
          alt="Truck at night" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/80 to-primary/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 max-w-6xl mx-auto leading-[1.1] tracking-tight px-2"
        >
          Fast, Reliable Courier & <br />
          <span className="bg-linear-to-r from-[#e11d48] to-[#fb7185] bg-clip-text text-transparent drop-shadow-sm">
            Expedited Freight Solutions
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white font-medium mb-12 max-w-4xl mx-auto drop-shadow-md px-6"
        >
          We provide professional courier and expedited delivery services for businesses that need fast, dependable transportation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 px-4 max-w-2xl mx-auto"
        >
          {[
            "Same-Day Delivery", "Expedited Freight", "Refrigerated", "Temperature Controlled"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 bg-black/40 px-3 py-2 md:px-6 md:py-3 rounded-full border border-white/10 backdrop-blur-md w-full md:w-auto justify-center md:justify-start">
              <CheckCircle2 size={16} className="text-[#818cf8] shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white tracking-tight md:tracking-wide whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-white font-bold mb-10 flex items-center justify-center gap-3 drop-shadow-lg"
        >
          <span className="text-lg">📦</span> Serving businesses with reliable refrigerated and temperature-controlled shipping expertise for years.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full max-w-lg sm:max-w-none mx-auto px-4"
        >
          <Link to="/quote" className="w-full sm:w-auto bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl shadow-[0_10px_40px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
            Get a Quote <span className="text-xl md:text-2xl">→</span>
          </Link>
          <Link to="/portal/carrier" className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl shadow-[0_10px_40px_rgba(30,58,138,0.3)] transition-all hover:-translate-y-1">
            Carrier Sign Up
          </Link>
          <Link to="/portal/shipper" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1e3a8a] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl shadow-[0_10px_40px_rgba(255,255,255,0.15)] transition-all hover:-translate-y-1">
            Shipper Sign Up
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded text-xs mb-4">ABOUT US</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-tight">
              Welcome to JASS FREIGHT BROKERAGE
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                JASS FREIGHT BROKERAGE is a <span className="font-bold text-primary">premier</span> freight brokerage specializing in refrigerated and temperature-controlled transportation solutions across the United States. Founded by <span className="font-bold text-primary">Ali</span>, we deliver dependable cold chain logistics services for food, fresh produce, frozen goods, and other temperature-sensitive freight with precision, compliance, and care.
              </p>
              <p>
                We do more than move freight. we build strategic logistics partnerships focused on reliability and performance. From refrigerated truckload shipments to time-critical temperature-sensitive deliveries, our commitment to integrity, efficiency, and customer satisfaction ensures your cargo arrives safely and on schedule.
              </p>
            </div>
            <Link to="/contact" className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-all shadow-lg">
              Partner With Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-[12px] border-slate-50 shadow-2xl">
              <img 
                src= {robo} 
                alt="Freight Logistics" 
                className="w-full aspect-video md:aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl border-4 border-white flex flex-col items-center">
               <Shield size={40} className="text-white" />
               <p className="text-white font-bold text-xs mt-2 text-center leading-tight">ELITE<br/>SERVICE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const cards = [
    { title: "Nationwide Coverage", desc: "Seamless transport across the contiguous United States.", icon: Globe },
    { title: "Dedicated Fleets", desc: "Specialized flatbed & box truck capacity ready to roll.", icon: Truck },
    { title: "Real-Time Market Experience", desc: "We have more than 10 years of experience in our niche.", icon: MapPin },
    { title: "Trusted Carriers", desc: "Fully insured and vetted network of professional drivers.", icon: Star },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-primary">Why Choose Us?</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                 <card.icon size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">{card.title}</h3>
              <p className="text-slate-500 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreServices = () => {
  const services = [
    {
      title: "Reefer Freight",
      description: "Specialized solutions for Refrigerated and Temperature Controlled.",
      icon: Truck,
      color: "blue",
      features: ["Refrigerated", "Frozen Foods", "Temperature Controlled", "Medicines"]
    },
    {
      title: "Box Truck Freight",
      description: "Fast, reliable LTL and local delivery solutions.",
      icon: Building2,
      color: "red",
      features: ["Local & regional deliveries", "White-glove transport service", "Time-sensitive expedited shipments", "Warehouse-to-door delivery"]
    },
    {
      title: "Courier & Expedited",
      description: "Same-day and emergency courier solutions for critical items.",
      icon: Clock,
      color: "green",
      features: ["Same-Day Courier Delivery", "Expedited Cargo Van Freight", "Medical & Pharmaceutical Courier", "Final-Mile Delivery Solutions"]
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-slate-400">Specialized solutions for your distinct freight needs</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur rounded-3xl overflow-hidden border border-white/10 group flex flex-col h-full"
            >
              <div className="p-8 flex-grow">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${
                  service.color === "blue" ? "bg-blue-600/20 text-blue-400" :
                  service.color === "red" ? "bg-red-600/20 text-red-400" :
                  "bg-emerald-600/20 text-emerald-400"
                }`}>
                  <service.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className={
                        service.color === "blue" ? "text-blue-400" :
                        service.color === "red" ? "text-red-400" :
                        "text-emerald-400"
                      } />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-slate-800/50">
                <Link to="/services" className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  service.color === "blue" ? "bg-blue-600 hover:bg-blue-500" :
                  service.color === "red" ? "bg-red-600 hover:bg-red-500" :
                  "bg-emerald-600 hover:bg-emerald-500"
                }`}>
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Request a Quote", description: "Submit your shipment details online or give us a call.", icon: Calculator },
    { number: "02", title: "Load Assignment", description: "We match your freight with a vetted, optimal carrier.", icon: Truck },
    { number: "03", title: "Pickup & Transit", description: "Driver arrives for pickup and we track the journey.", icon: MapPin },
    { number: "04", title: "Delivery", description: "Freight is delivered safely and on time, every time.", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-24 text-primary">How It Works</h2>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[64px] left-[10%] right-[10%] h-[2px] bg-slate-100"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative inline-block mb-10">
                  <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mx-auto border border-slate-100 shadow-sm relative z-10 group-hover:bg-primary transition-all duration-300">
                    <step.icon size={44} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-accent text-white font-bold px-4 py-1.5 rounded-full text-sm z-20 shadow-lg">
                    STEP {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-slate-500 text-sm max-w-[240px] mx-auto leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const items = [
    { name: "Meat Supplies", icon: Building2 },
    { name: "Medical & Pharma", icon: Shield },
    { name: "Food Transportation", icon: Truck },
    { name: "Retail & B2B", icon: Package },
    { name: "Cold Chain Freights", icon: Building2 },
    { name: "Pharmaceutical", icon: MapPin },
  ];

  return (
    <section className="py-24 bg-[#1a2b53]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">We serve a wide range of business customers with reliable courier and freight solutions tailored to industry-specific requirements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 hover:bg-white/10 transition-all p-6 md:p-10 rounded-2xl text-center border border-white/5 cursor-pointer flex flex-col items-center gap-6 group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300">
                 <industry.icon size={28} />
              </div>
              <span className="text-white font-semibold text-sm leading-tight">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactAndQuote = () => {
  return (
    <section id="quote" className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Info Side */}
            <div>
              <span className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded text-xs mb-4 uppercase tracking-widest">Connect With Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Whether you have a specific shipment in mind or want to discuss a long-term partnership, our team is standing by to provide expert logistics support.
              </p>
              
              <div className="space-y-10 group">
                <div className="flex items-start gap-6 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Call Our Command Center</h4>
                    <p className="text-slate-500 mb-2">Available 24/7 for critical dispatch</p>
                    <a href="tel:9522018217" className="text-2xl font-black text-accent hover:underline">(952) 201-8217</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">HQ Location</h4>
                    <p className="text-slate-500">1160 FROST AVE APT 518<br />SAINT PAUL, MN 55109</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Operational Hours</h4>
                    <p className="text-slate-500">Monday - Friday: 0800 - 1800<br />Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Form Side */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
              <div className="absolute -top-6 -right-6 bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-center text-[10px] leading-tight rotate-12 shadow-xl border-4 border-white">
                EXPRESS<br/>RESPONSE
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-8">Quick Quote Request</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company</label>
                    <input type="text" placeholder="Business Name" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pickup City</label>
                    <input type="text" placeholder="Origin" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Destination City</label>
                    <input type="text" placeholder="Destination" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message / Notes</label>
                  <textarea placeholder="Describe your shipment..." className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 h-24 focus:bg-white focus:border-primary outline-none transition-all text-sm" />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  SEND MISSION BRIEF <ChevronRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <CoreServices />
      <HowItWorks />
      <Industries />
      <ContactAndQuote />
      {/* Testimonials */}
      
      
      {/* Call to Action */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Truck on road" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Need a Shipment Delivered Quickly?
          </motion.h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Our team is ready to coordinate fast and professional transportation for your time-sensitive shipments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/quote" className="bg-accent text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-accent/90 flex items-center gap-3 transition-all">
              Request a Delivery Quote <ChevronRight size={22} />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-primary hover:border-white flex items-center gap-3 transition-all group">
              <Phone size={22} className="group-hover:rotate-12 transition-transform" /> Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
