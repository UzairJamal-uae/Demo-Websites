import { motion } from "motion/react";
import { Building2, Shield, Truck, Calculator, BookOpen, Globe, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PortalShipper = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Hero */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-primary text-white font-black px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
            >
              For Business Shippers
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-primary mb-8 leading-tight tracking-tight"
            >
              Logistics <br />
              <span className="text-accent underline decoration-slate-200">Excellence</span>
            </motion.h1>
            <p className="text-xl text-slate-600 font-bold max-w-xl leading-relaxed mb-10">
              Trusted by manufacturers, medical facilities, and retailers. We provide reliable freight brokerage and expedited courier services for mission-critical shipments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 hover:bg-slate-800 transition-all">
                Request a Delivery Quote
              </Link>
              <button className="bg-white border-2 border-slate-200 text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all flex items-center gap-3">
                Logistics Consultation <ArrowRight size={24} />
              </button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-primary absolute -inset-4 rounded-[4rem] opacity-[0.03] scale-110"></div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              alt="Logistics Warehouse" 
              className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-20 hidden md:block">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white font-black italic">99%</div>
                  <div>
                    <h4 className="font-black text-primary text-lg">On-Time Mission</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Performance Record</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-primary mb-6">Shipper Solutions</h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto">Precision-engineered logistics for high-stakes business operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Expedited Courier",
              desc: "Critical same-day and emergency transport for medical, legal, and manufacturing industries.",
              icon: Clock,
              tags: ["Same-Day", "White Glove", "Expedited"]
            },
            {
              title: "Freight Brokerage",
              desc: "Strategic sourcing of flatbed and box truck capacity through our vetted carrier network.",
              icon: Globe,
              tags: ["Nationwide", "FTL / LTL", "Flatbed"]
            },
            {
              title: "Compliance First",
              desc: "Elite-grade excellence in documentation, insurance verification, and carrier safety audits.",
              icon: Shield,
              tags: ["Owner-Operated", "Bonded", "Insured"]
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-slate-50 group hover:-translate-y-2 duration-500"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-black mb-6 text-primary">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black tracking-widest uppercase bg-slate-100 text-slate-400 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="bg-primary py-32 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <BookOpen size={48} className="text-accent mx-auto mb-10 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-black text-white max-w-4xl mx-auto leading-tight italic">
            "Good Brokers don't allow good truckers nor good customers to be bullied."
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-12 mb-6"></div>
          <p className="text-accent font-black tracking-widest uppercase text-sm">Our Operations Mantra</p>
        </div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-white opacity-[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">Ready to Partner With Us?</h2>
        <p className="text-slate-500 font-bold mb-12 max-w-2xl mx-auto">
          Start your logistics transformation with JASS FREIGHT today. Excellence, Precision, Performance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <Link to="/quote" className="w-full sm:w-auto bg-accent text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-accent/20 hover:scale-105 transition-all">
             Begin Shipper Quote Request
           </Link>
           <Link to="/contact" className="w-full sm:w-auto text-primary px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all underline decoration-accent decoration-4 underline-offset-8">
             Talk to Logistics Specialist
           </Link>
        </div>
      </section>
    </div>
  );
};

export default PortalShipper;
