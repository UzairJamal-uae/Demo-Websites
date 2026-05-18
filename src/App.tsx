import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import PortalCarrier from "./pages/PortalCarrier";
import PortalShipper from "./pages/PortalShipper";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-slate-900 bg-white selection:bg-accent selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal/carrier" element={<PortalCarrier />} />
            <Route path="/portal/shipper" element={<PortalShipper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
