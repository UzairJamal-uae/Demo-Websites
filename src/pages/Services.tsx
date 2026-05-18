import { motion } from "motion/react";
import { Truck, Building2, Clock, CheckCircle2, ChevronRight, Calculator, MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Flatbed Freight",
      description: "Specialized solutions for heavy equipment, construction materials, and oversized loads that require open transport.",
      icon: Truck,
      color: "blue",
      features: ["Heavy equipment & machinery", "Oversized & wide loads", "Steel, coil & building materials", "Agricultural equipment"],
      details: "Our flatbed network is managed by experienced dispatchers who understand the complexities of securement and permitting for high-value industrial cargo."
    },
    {
      title: "Box Truck Freight",
      description: "Fast, reliable local and regional delivery solutions for palatized cargo and expedited retail shipments.",
      icon: Building2,
      color: "red",
      features: ["Local & regional deliveries", "White-glove transport service", "Time-sensitive expedited shipments", "Warehouse-to-door delivery"],
      details: "Perfect for urban areas and facilities without loading docks, our box truck solutions offer flexibility for last-mile and regional distribution."
    },
    {
      title: "Courier & Expedited",
      description: "When every minute counts. We provide direct, non-stop courier services for your most critical shipments.",
      icon: Clock,
      color: "green",
      features: ["Same-Day Courier Delivery", "Expedited Cargo Van Freight", "Medical & Pharmaceutical Courier", "Final-Mile Delivery Solutions"],
      details: "From medical samples to critical aircraft parts, our expedited team operates 24/7 to ensure your mission-critical freight never stops moving."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Our Logistics Services
          </motion.h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
            Elite, precise, and professional transportation solutions for every type of cargo.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                    service.color === "blue" ? "bg-blue-600 text-white" :
                    service.color === "red" ? "bg-red-600 text-white" :
                    "bg-emerald-600 text-white"
                  } shadow-2xl`}>
                    <service.icon size={40} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                  <p className="text-slate-500 italic">{service.details}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <CheckCircle2 size={18} className={
                          service.color === "blue" ? "text-blue-600" :
                          service.color === "red" ? "text-red-600" :
                          "text-emerald-600"
                        } />
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/quote" className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all shadow-lg hover:-translate-y-1 ${
                    service.color === "blue" ? "bg-blue-600 shadow-blue-600/20" :
                    service.color === "red" ? "bg-red-600 shadow-red-600/20" :
                    "bg-emerald-600 shadow-emerald-600/20"
                  }`}>
                    Request Quote for {service.title} <ChevronRight size={20} />
                  </Link>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-10 ${
                    service.color === "blue" ? "bg-blue-600" :
                    service.color === "red" ? "bg-red-600" :
                    "bg-emerald-600"
                  }`}></div>
                  <img 
                    src={
                      service.title === "Flatbed Freight" ? "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000" :
                      service.title === "Box Truck Freight" ? "https://images.pexels.com/photos/22147531/pexels-photo-22147531.jpeg?_gl=1*4290c3*_ga*MTQ5NTg3NDQyMy4xNzc5MDY0NjE5*_ga_8JE65Q40S6*czE3NzkwNjQ2MTkkbzEkZzEkdDE3NzkwNjQ2NDMkajM2JGwwJGgw" :
                      "https://plus.unsplash.com/premium_photo-1770135724570-92c68d90485c?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    } 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-24 text-primary">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Booking", icon: Calculator, desc: "Submit your request via our portal or contact our dispatch team directly." },
              { title: "Matching", icon: Truck, desc: "We match your cargo with a vetted, compliant carrier from our trusted network." },
              { title: "In-Transit", icon: MapPin, desc: "Real-time visibility and communication throughout the entire journey." },
              { title: "Delivery", icon: Package, desc: "On-time delivery with full documentation and POD verification." }
            ].map((step, idx) => (
              <div key={step.title} className="text-center group">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-300 relative">
                  <step.icon size={36} className="text-primary group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
