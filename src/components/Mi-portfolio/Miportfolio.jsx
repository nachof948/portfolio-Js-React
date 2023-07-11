import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Portfolio, Slide } from '../../index';

const Miportfolio = () => {
    const tituloPortfolio ={
        color:'#FFFFFF',
        fontSize:"30",
        fontWeight: 700,
        position:'relative',
        alignSelf:'start',
        "&::before": {
            content: '""',
            position: "absolute",
            top: '3rem',
            left: "0",
            width: "25px",
            height: "4px",
            backgroundColor: "#F26C4F",
        },
    }
    return(
        <Box as={'section'} width={'100vw'} py={70} id='portfolio' >
            <Flex width={{lg:'80vw', sm:'95vw'}} margin={'0 auto'} flexDirection={'column'} gap='60px'py={'35px'}>
            <Text as={'h2'} sx={tituloPortfolio}>Mi Portfolio</Text>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'1rem'} flexWrap={'wrap'}>
                    <Portfolio 
                    imagen={'../../../src/assets/Miportfolio-img/Portfolio-1.png'} 
                    link={'https://nachof948.github.io/Trabajo-Practico-1/'} 
                    titulo={'Aplicaciones Web'} />
                    <Portfolio 
                    imagen={'../../../src/assets/Miportfolio-img/Portfolio-2.png'} 
                    link={'https://nachof948.github.io/Trabajo-Practico-2/'} 
                    titulo={'Diseño UX/UI'} />
                    <Portfolio 
                    imagen={'../../../src/assets/Miportfolio-img/Portfolio-3.png'} 
                    link={'https://nachof948.github.io/Huddle-landing-page-with-a-single-introductory-section/'} 
                    titulo={'Diseño de Marca'} />
                    <Portfolio 
                    imagen={'../../../src/assets/Miportfolio-img/Portfolio-4.png'} 
                    link={'https://nachof948.github.io/Trabajo-Practico-3/'} 
                    titulo={'Desarrollo Web'} />
                </Flex>
                <Flex justifyContent={'center'} gap={15} >
                    <Slide/>
                </Flex>
            </Flex>
        </Box>
    )
}

export { Miportfolio }