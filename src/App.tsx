import { HashRouter, Routes, Route } from "react-router-dom";
// ... your imports ...
import "./App.css";
import "./styles/components.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Upload } from "./pages/Upload";
import { Results } from "./pages/Results";
import { Overview } from "./pages/Overview";
import { UseCase } from "./pages/UseCase";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/results" element={<Results />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/use-cases" element={<UseCase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
