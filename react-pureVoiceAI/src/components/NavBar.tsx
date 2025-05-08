import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/pureVoiceAI-frontend" },
  { name: "About", path: "/pureVoiceAI-frontend/about" },
  { name: "Upload Audio", path: "/pureVoiceAI-frontend/upload" },
  { name: "Results", path: "/pureVoiceAI-frontend/results" },
  { name: "Overview", path: "/pureVoiceAI-frontend/overview" },
  { name: "Use Cases", path: "/pureVoiceAI-frontend/use-cases" },
  { name: "Contact", path: "/pureVoiceAI-frontend/contact" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm py-3 border-bottom border-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NAV
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav d-flex gap-5 ">
            {links.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  className="nav-link rounded-2 nav-item-hover py-1 px-2 "
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
