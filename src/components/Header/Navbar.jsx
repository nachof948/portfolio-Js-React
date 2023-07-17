import React, { useState } from 'react';
import { Box, Link, useMediaQuery } from '@chakra-ui/react';

const Navbar = () => {
  const [separacionEnlaces] = useMediaQuery("(max-width: 1280px)");
  const [ocultarNav] = useMediaQuery("(max-width: 1023px)");
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navEstilo = {
    display: 'flex',
    gap: separacionEnlaces ? '3.5rem' : '6.5rem',
  };


const enlacesNav = {
  position: "relative",
  textDecoration: "none",
  display: ocultarNav ? 'none' : 'flex',
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "0%",
    height: "3px",
    backgroundColor: "#F26C4F",
    transition: "width 250ms"
  },
  _hover: {
    "&::before": {
      width: "50%",
    },
  },
};

const enlaceActivo = {
  position: "relative",
  textDecoration: "none",
  display: ocultarNav ? 'none' : 'flex',
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "50%",
    height: "3px",
    backgroundColor: "#F26C4F",
    transition: "width 250ms"
  },
  _hover: {}, 
};


  return (
    <Box as="nav" sx={navEstilo}>
      
      <Link
        sx={activeLink === 'Inicio' ? enlaceActivo : enlacesNav}
        href="#"
        onClick={() => handleLinkClick('Inicio')}
      >
        Inicio
      </Link>
      <Link
        sx={activeLink === 'Acerca' ? enlaceActivo : enlacesNav}
        href="#sobre-mi"
        onClick={() => handleLinkClick('Acerca')}
      >
        Acerca
      </Link>
      <Link
        sx={activeLink === 'Servicios' ? enlaceActivo : enlacesNav}
        href="#mis-servicios"
        onClick={() => handleLinkClick('Servicios')}
      >
        Servicios
      </Link>
      <Link
        sx={activeLink === 'Portfolio' ? enlaceActivo : enlacesNav}
        href="#portfolio"
        onClick={() => handleLinkClick('Portfolio')}
      >
        Portfolio
      </Link>
    </Box>
  );
};

export { Navbar };
