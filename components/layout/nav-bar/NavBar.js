import Link from "next/link";
import { NavBarWrapper, NavBarLinkGroup, NavBarLink } from "./NavBarStyles";

const NavBar = () => {
  const links = [
    { url: "/", routeName: "Home", id: 1 },
    { url: "/about", routeName: "About", id: 2 },
    { url: "/tech-stack", routeName: "Tech Stack", id: 3 },
    { url: "/work", routeName: "Work", id: 4 },
    { url: "/contact", routeName: "Contact", id: 5 },
  ];

  return (
    <NavBarWrapper>
      <NavBarLinkGroup>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            <NavBarLink>{link.routeName}</NavBarLink>
          </Link>
        ))}
      </NavBarLinkGroup>
    </NavBarWrapper>
  );
};

export default NavBar;
