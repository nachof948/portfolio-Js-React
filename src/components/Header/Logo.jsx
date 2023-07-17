import React from 'react';
import imagenLogo from '../../assets/Header-img/Logo.png'
import { Image,Link } from '@chakra-ui/react';

const Logo = ({ setActiveLink }) => {
    
    return(
        <>
            <Link href='#'><Image src={imagenLogo} alt="Logo" /></Link>
        </>
    )
}

export { Logo }