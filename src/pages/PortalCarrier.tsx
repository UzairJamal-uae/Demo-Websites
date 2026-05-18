import { motion } from "motion/react";
import { User, Shield, Truck, Clock, CheckCircle2, Star, FileText, Package, ChevronRight } from "lucide-react";

const PortalCarrier = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white pb-24">
      {/* Hero */}
      <section className="py-24 container mx-auto px-4 relative overflow-hidden">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-tight"
          >
            Carrier <br />
            <span className="text-accent">Network Command</span>
          </motion.h1>
          <p className="text-xl text-slate-400 font-bold max-w-2xl leading-relaxed mb-10">
            Join the JASS FREIGHT logistics fleet. We partner with reliable, professional carriers who operate with excellence and integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-accent/20 hover:bg-red-600 transition-all">
              Apply to Join Network
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
              Login to Dispatch
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(239,68,68,0.15),transparent_70%)] pointer-events-none"></div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center tracking-tight">Why Haul for JASS FREIGHT?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Payments", desc: "Reliable, transparent payment terms. Get paid for your work on time.", icon: Clock },
              { title: "Dedicated Freight", desc: "Access to high-volume shipping lanes and dedicated contracts.", icon: Package },
              { title: "Compliance Support", desc: "Expert guidance for ELD, safety regulations, and hazmat.", icon: Shield },
              { title: "Mission Focus", desc: "Join a network that values discipline and respect for drivers.", icon: Star }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-14 h-14 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black mb-8">Carrier Onboarding</h2>
            <p className="text-slate-400 mb-12 font-bold italic">
              "We treat our carriers like partners, not commodities. Our mission is to ensure clear communication and fair compensation for professional logistics execution."
            </p>
            <div className="space-y-6">
              {[
                { title: "Vetting Process", desc: "Rigorous safety and insurance verification." },
                { title: "Documentation", desc: "Authority, Insurance (min $1M auto / $100k cargo), W9." },
                { title: "Compliance", desc: "Maintain FMCSA 'Satisfactory' safety rating." }
              ].map(step => (
                <div key={step.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg h-fit"><CheckCircle2 size={20} /></div>
                   <div>
                      <h4 className="font-black text-lg mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 font-bold">{step.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-3xl">
               <div className="flex gap-4 items-center mb-4">
                  <FileText className="text-accent" />
                  <h4 className="text-xl font-black">Broker-Carrier Agreement</h4>
               </div>
               <p className="text-sm text-slate-300 mb-6">Review our standard operating procedures and contracting terms for expedited and flatbed freight.</p>
               <button className="text-accent font-black hover:underline tracking-tight uppercase text-xs flex items-center gap-2">
                  Download Agreement PDF <ChevronRight size={14} />
               </button>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl">
             <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                <Truck className="text-primary" /> Application Form
             </h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                   <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Company Name *</label>
                   <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">MC Number *</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">DOT Number *</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Contact Email *</label>
                   <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Equipment Type</label>
                   <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white outline-none transition-all font-black">
                     <option>Flatbed</option>
                     <option>Box Truck</option>
                     <option>Cargo Van</option>
                     <option>Step Deck</option>
                     <option>Reefer</option>
                   </select>
                </div>
                <div className="pt-4">
                   <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98]">
                      START ONBOARDING
                   </button>
                   <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-tighter">
                      Elite Service & Results Focused Logistics
                   </p>
                </div>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalCarrier;
