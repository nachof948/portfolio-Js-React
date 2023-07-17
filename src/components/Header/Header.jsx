import React, { useState, useEffect } from 'react';
import { Logo, Cv, Navbar } from '../../index';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Menuresponsive } from './Menu-responsive';

const Header = () => {
  const [agrandarAncho] = useMediaQuery({ query: '(max-width: 1023px)' });
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [paddingTop, setPaddingTop] = useState('4rem');
  
  const handleMenuClick = () => {
    setMenuDesplegado(!menuDesplegado);
  };
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newPaddingTop = scrollY > 0 ? '1rem' : '4rem';
    setPaddingTop(newPaddingTop);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const header = {
    bg: '#222222',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    pt: paddingTop,
    zIndex: 9,
  };
  const headerContenido = {
    bg: '#222222',
    color: 'white',
    alignItems: 'start',
    justifyContent: 'space-between',
  };
  const headerNav = {
    alignItems: 'center',
  };

  return (
    <Box as="header" sx={header}>
      <Flex sx={headerContenido} width={{ lg: '80vw', sm: '90vw' }}>
        <Flex sx={headerNav} gap={{ xl: '5.9rem', lg: '3.5rem' }}>
          <Logo />
          {agrandarAncho && !menuDesplegado ? null : <Navbar />}
        </Flex>
        <Cv section='header'/>
        <Menuresponsive menuDesplegado={menuDesplegado} onClick={handleMenuClick} />
      </Flex>
    </Box>
  );
};

export { Header };
