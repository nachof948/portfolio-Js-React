import { Box, Flex,Text } from '@chakra-ui/react';
import { CardBlack, Cardbranding} from '../../index'
import React from 'react';
import cardUxImage from '../../../src/assets/Misservicios-img/card-ux.svg';
import cardUxHoverImage from '../../../src/assets/Misservicios-img/card-ux-blanco.svg';
import cardWebImage from '../../../src/assets/Misservicios-img/card-web.svg';
import cardWebHoverImage from '../../../src/assets/Misservicios-img/card-web-blanco.svg';


const Misservicios = () => {
    const sectionServicio = {
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        p:'6rem 0rem 1rem'
    }
    const servicioContenedor ={
        margin:'0 auto',
        gap:'60px',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }
    const tituloServicios ={
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
        <Box as='section' id='mis-servicios' sx={sectionServicio} >
            <Flex sx={servicioContenedor} width={{ lg: '80vw', sm: '90vw' }}>
                <Text as={'h2'} sx={tituloServicios} >Mis Servicios</Text>
                    <Flex gap={{lg:'1.5rem', sm:'3rem'}} flexWrap={{lg:'nowrap', sm:'wrap'}} justifyContent={'center'}>
                        <CardBlack 
                        imagen={cardUxImage} 
                        imagenHover={cardUxHoverImage}
                        servicio={'Diseño UX/UI'}
                        explicacion={'Me centro en crear experiencias digitales atractivas y funcionales para los usuarios. A través de la investigación de usuarios y el análisis de sus necesidades, diseño interfaces intuitivas que facilitan la interacción.'}/>
                        <Cardbranding/>
                        <CardBlack 
                        imagen={cardWebImage} 
                        imagenHover={cardWebHoverImage}
                        servicio={'Desarrollo Web'}
                        explicacion={'Me enfoco en la creación y desarrollo de sitios web funcionales y atractivos. Utilizando HTML, CSS, JavaScript y React. Traduzco diseños y conceptos en código para construir interfaces interactivas y receptivas.'}/>
                    </Flex>
            </Flex>
        </Box>
    )
}

export { Misservicios }