import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Upload } from "./pages/Upload";
import { Results } from "./pages/Results";
import { Overview } from "./pages/Overview";
import { UseCase } from "./pages/UseCase";
import { Contact } from "./pages/Contact";

// Page Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/upload",
    element: <Upload />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/results",
    element: <Results />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/overview",
    element: <Overview />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/use-cases",
    element: <UseCase />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>404 Not Found</div>, // Optional: Handle 404 errors
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
