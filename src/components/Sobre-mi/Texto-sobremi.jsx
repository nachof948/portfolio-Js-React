import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Textosobremi = () => {
    const Sobremitexto ={
        width:'100%',
        color:'#818181',
        display:'flex',
        flexDirection:'column',
        fontWeight: 600,
        lineHeight: '1.2'
    }
    const Sobremih2 ={
        color:'#FFFFFF',
        fontWeight: 700,
        position:'relative',
        "&::before": {
            content: '""',
            position: "absolute",
            top: '2.5rem',
            left: "0",
            width: "21px",
            height: "4px",
            backgroundColor: "#F26C4F",
        },
    }
    const Sobreminaranja ={
        color:'#F26C46'
    }
    return(
        <Box sx={Sobremitexto} gap={{xl:'1.3rem', lg:'0.8rem', sm3:'1.3rem', sm:'1.1rem'}} >
            <Text as='h2' sx={Sobremih2} fontSize={ {xxl:"1.9rem", sm:'1.7rem'}}>Sobre Mi</Text>
            <Text sx={Sobreminaranja} fontSize={{xl1:'1.3rem',lg:'1.1rem', md:'1rem', sm1:'0.8rem', sm:'0.7rem'}}>Soy un Desarrollador Front End viviendo en Buenos Aires</Text>
            <Text fontSize={{xl1:'1.1rem',xl:"1rem", lg:'0.85rem',md:'1rem', sm:'0.8rem'}}>Actualmente, estoy cursando una Diplomatura en Programación Web Full Stack y estoy muy entusiasmado por sumergirme en este apasionante campo. Mi interés por la programación web comenzó cuando descubrí la capacidad de crear aplicaciones y sitios web interactivos.</Text>
            <Text fontSize={{xl1:"1.1rem", xl:'1rem',lg:'0.85rem',md:'1rem',sm:'0.8rem'}}>Durante mi formación, he adquirido experiencia en diversos lenguajes como HTML, CSS y JavaScript, así como en el uso de frameworks como React. También a lo largo de la formacion incorporare conocimientos sobre Node Js y tambien aprendere sobre bases de datos, donde utilizare MySQL y MongoDB para gestionar y almacenar datos. Lo que me permitira tener un conocimiento Full Stack acerca del desarrollo de sitios webs interactivos y aplicaciones webs.</Text>
        </Box>
    )
}

export { Textosobremi }