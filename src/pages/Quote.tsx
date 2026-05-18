import { motion } from "motion/react";
import { MapPin, Info } from "lucide-react";

const Quote = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-24">
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Get a Logistics Quote
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Provide your shipment details and our professional team will provide a tailored solution within minutes.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 p-8 lg:p-14">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg shrink-0">1</div>
                <h3 className="text-xl font-bold text-primary">Contact Details</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Your Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Company Name *</label>
                  <input type="text" placeholder="Business Name LLC" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Work Email *</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Phone Number *</label>
                  <input type="tel" placeholder="(555) 123-4567" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* Step 2: Route Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg shrink-0">2</div>
                <h3 className="text-xl font-bold text-primary">Route Information</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Pickup Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="City, State / Zip" className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Delivery Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="City, State / Zip" className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Freight Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg shrink-0">3</div>
                <h3 className="text-xl font-bold text-primary">Shipment Details</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {["Flatbed", "Box Truck", "Cargo Van", "Courier", "Reefer", "LTL"].map(type => (
                  <label key={type} className="flex items-center gap-3 border-2 border-slate-100 p-4 rounded-xl cursor-pointer hover:border-primary transition-all group">
                    <input type="radio" name="freight_type" className="w-5 h-5 accent-primary" />
                    <span className="text-xs font-black text-slate-700 tracking-wider uppercase">{type}</span>
                  </label>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Total Weight</label>
                  <input type="text" placeholder="e.g. 15,000 lbs" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Dimensions</label>
                  <input type="text" placeholder="L x W x H" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 italic">Hazmat?</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 italic">Additional Notes / Handling Instructions</label>
                <textarea placeholder="Tell us more about the load..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl h-32 focus:bg-white focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <div className="flex gap-4 mb-6">
                <Info size={24} className="text-accent shrink-0" />
                <p className="text-sm text-slate-300">
                  By submitting this request, you agree to our terms of service. Our team will review the details and contact you via phone or email within 15-30 minutes during business hours.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent py-6 rounded-2xl font-black text-xl shadow-2xl shadow-accent/20 transition-all"
              >
                REQUEST PROFESSIONAL QUOTE
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;
