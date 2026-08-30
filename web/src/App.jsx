import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Foundations from './pages/Foundations';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/foundations" element={<Foundations />} />
    </Routes>
  );
}

export default App;
