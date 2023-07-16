import React from 'react';
import { Button,useMediaQuery } from "@chakra-ui/react"

const Cv = ({ section }) => {

    const [reducirBtnCv] = useMediaQuery("(max-width: 1120px)");
    const [desaparecerBtnCv] = useMediaQuery("(max-width: 1023px)");


    const downloadCV = () => {
        const link = document.createElement('a')
        link.href = '/public/CV-Ignacio Fernandez.pdf' 
        link.download = 'CV-Ignacio Fernandez.pdf '
        link.click()
    };
    const cvBtn={
        color:'#FFFFFF',
        bg:'#F26C4F',
        border:'1px solid #F26C4F',
        fontWeight:'400',
        p: reducirBtnCv ?  '1.6rem 2.0rem' : '1.6rem 2rem',
        display: section === 'header' && desaparecerBtnCv ? 'none' : 'flex',
        letterSpacing:'1px',
        _hover: {
            bg:'transparent',
            color:'#F26C4F'
        },
    }
    return(
        <>
            <Button sx={cvBtn} onClick={downloadCV}>Descargar CV</Button>
        </>
    )
}

export { Cv }