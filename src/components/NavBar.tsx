import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBRipple,
  MDBIcon,
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
    <MDBNavbar expand="sm" fixed="top" className="py-3 shadow-3-strong navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand tag={NavLink} className="nav-brand">
          <MDBIcon fas icon="microphone-alt" />
          PureVoiceAI
        </MDBNavbarBrand>
        <MDBNavbarNav className="d-flex flex-row ms-auto gap-3 justify-content-end">
          {links.map((link) => (
            <MDBNavbarItem key={link.name}>
              <MDBRipple rippleColor="light" className="rounded-5">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-active px-3 py-2"
                      : "nav-link px-3 py-2 nav-item-hover text-muted"
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
