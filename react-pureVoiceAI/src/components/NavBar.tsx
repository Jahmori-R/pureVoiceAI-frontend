import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Upload Audio", path: "/upload" },
  { name: "Results", path: "/results" },
  { name: "Overview", path: "/overview" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm py-3 border-bottom ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav d-flex gap-5">
            {links.map((link) => (
              <li className="nav-item link-opacity-50-hover" key={link.name}>
                <Link
                  className="link-underline link-dark link-underline-opacity-0"
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
