import { Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return(
        <Box as='footer'width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'} py={12} color={'white'}>
            © 2023 Todos los derechos reservados
        </Box>
    )
}

export { Footer }