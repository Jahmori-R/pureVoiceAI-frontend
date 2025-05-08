import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Upload } from "./pages/Upload";
import { Results } from "./pages/Results";
import { Overview } from "./pages/Overview";
import { UseCase } from "./pages/UseCase";
import { Contact } from "./pages/Contact";

// Page Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/results" element={<Results />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/use-cases" element={<UseCase />} />
      <Route path="/contact" element={<Contact />} />
    </>
  ),
  // GitHub Pages deployment
  {
    basename: "/pureVoiceAI-frontend", // <-- this is key for GitHub Pages
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
