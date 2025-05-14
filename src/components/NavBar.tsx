import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBRipple,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

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
    <MDBNavbar
      expand="sm"
      light
      bgColor="light"
      className="py-3 shadow-0 border-bottom border-2 sticky-top"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand tag={NavLink}>PureVoiceAI</MDBNavbarBrand>
        <MDBNavbarNav className="d-flex flex-row ms-auto gap-3 justify-content-end">
          {links.map((link) => (
            <MDBNavbarItem key={link.name}>
              <MDBRipple rippleColor="light" className="rounded-3">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white bg-primary px-3 py-2 rounded-3"
                      : "nav-link px-3 py-2 nav-item-hover"
                  }
                >
                  {link.name}
                </NavLink>
              </MDBRipple>
            </MDBNavbarItem>
          ))}
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
