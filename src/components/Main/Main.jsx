import React from 'react';
import { Box } from '@chakra-ui/react';
import { Hero, Sobremi, Misservicios, Miportfolio, Contacto } from '../../index'
const Main = () => {
    return(
        <Box as={'main'} margin={'0 auto'}>
            <Hero /> 
            <Sobremi /> 
            <Misservicios />
            <Miportfolio />
            <Contacto /> 
        </Box>
    )
}

export { Main }