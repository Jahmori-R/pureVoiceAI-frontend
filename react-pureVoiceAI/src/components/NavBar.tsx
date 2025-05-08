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
