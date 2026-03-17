import React from 'react';
import Link from '../link/Link';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 6,
    name: "Gallery",
    path: "/gallery"
  },
  {
    id: 7,
    name: "FAQ",
    path: "/faq"
  }
];


const Navbar = () => {
  return (
    <div>
      <ul>
        {
          navLinks.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </div>
  );
};

export default Navbar;