import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin, Shield, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 text-center"
          >
            Contact JASS FREIGHT
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto text-center font-bold">
            We are operation-ready 24/7. Reach out to our logistics command center for immediate assistance.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-primary mb-8">Reach Out Directly</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-primary/5 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 tracking-widest uppercase mb-1">Direct Hotline</p>
                    <p className="text-2xl font-black text-primary">(952) 201-8217</p>
                    <p className="text-sm text-slate-500 mt-1">Available 24/7 for urgent freight needs</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-accent/5 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 tracking-widest uppercase mb-1">Email Command</p>
                    <p className="text-2xl font-black text-primary">sales@jassfreightbrokerage.com</p>
                    <p className="text-sm text-slate-500 mt-1">Typical response time: 30 minutes</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl shadow-emerald-500/5 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 tracking-widest uppercase mb-1">Operation Hours</p>
                    <p className="text-2xl font-black text-primary">Mission Ready 24/7</p>
                    <p className="text-sm text-slate-500 mt-1">We operate across all time zones in North America</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="flex items-center gap-4 mb-6">
                  <Shield size={32} className="text-accent" />
                  <h3 className="text-xl font-black text-primary uppercase tracking-tight">Compliance & Safety</h3>
               </div>
               <p className="text-slate-600 leading-relaxed font-medium">
                  JASS FREIGHT BROKERAGE is fully licensed, bonded, and owner-operated. We maintain rigorous vetting standards for all carriers in our network.
               </p>
               <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MC Number</p>
                     <p className="font-black text-primary text-sm mt-1">1820689</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DOT Number</p>
                     <p className="font-black text-primary text-sm mt-1">4575688</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <MessageSquare size={32} className="text-primary" />
              <h2 className="text-3xl font-black text-primary">Send a Message</h2>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wider ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wider ml-1">Company</label>
                  <input type="text" placeholder="Logistics Co" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-600 uppercase tracking-wider ml-1">Work Email</label>
                <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-600 uppercase tracking-wider ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold">
                  <option>General Inquiry</option>
                  <option>Carrier Partnership</option>
                  <option>Shipper Assistance</option>
                  <option>Billing Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-600 uppercase tracking-wider ml-1">Message</label>
                <textarea placeholder="How can our logistics team help you today?" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl h-48 focus:bg-white transition-all outline-none"></textarea>
              </div>
              <button className="w-full bg-primary py-5 rounded-2xl text-white font-black text-lg shadow-xl shadow-primary/20 hover:bg-slate-800 transition-all active:scale-[0.98]">
                EXECUTE MESSAGE SEND
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-slate-200 h-[500px] rounded-[3rem] shadow-inner flex items-center justify-center relative overflow-hidden">
             <div className="text-center z-10">
                <MapPin size={64} className="text-primary mx-auto mb-4" />
                <p className="text-primary font-black text-xl">Nationwide Command Center</p>
                <p className="text-slate-500 font-bold">Headquarters: Saint Paul, MN, USA</p>
             </div>
             {/* Simple grid pattern to simulate map */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
