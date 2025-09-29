import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesIndex from "./pages/Services.jsx";
import Cleaning from "./pages/services/Cleaning.jsx";
import Inspection from "./pages/services/Inspection.jsx";
import Sanitation from "./pages/services/Sanitation.jsx";
import Maintenance from "./pages/services/Maintenance.jsx";
import Specialized from "./pages/services/Specialized.jsx";
import CleaningGeorgia from "./pages/services/CleaningGeorgia.jsx";
import CleaningColorado from "./pages/services/CleaningColorado.jsx";
import CleaningIdaho from "./pages/services/CleaningIdaho.jsx";
import CleaningSouthernCalifornia from "./pages/services/CleaningSouthernCalifornia.jsx";
import Contact from "./pages/Contact.jsx";
import Quote from "./pages/Quote.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-slate-800 min-h-dvh flex flex-col">
        <TopBar />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/cleaning" element={<Cleaning />} />
          <Route path="/silo-cleaning-services-atlanta-ga" element={<CleaningGeorgia />} />
          <Route path="/colorado-silo-cleaning-services" element={<CleaningColorado />} />
          <Route path="/idaho-silo-cleaning-services" element={<CleaningIdaho />} />
          <Route path="/southern-california-silo-services" element={<CleaningSouthernCalifornia />} />
          <Route path="/services/inspection" element={<Inspection />} />
          <Route path="/services/sanitation" element={<Sanitation />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/specialized" element={<Specialized />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
