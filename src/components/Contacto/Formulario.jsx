import React from 'react';
import { FormControl, Input,Textarea, Button} from '@chakra-ui/react';
const Formulario = () => {
    const formularioEstilo={
        display:'flex', 
        flexDirection:'column',
        alignItems:'start',
        gap:2,
        boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
        py:'2rem',
        borderRadius: '5px',
    }
    const inputEstilo = {
        bg:'white',
        py:'1.8rem',
        px: '0.6rem',
        color: "#F26C4F",
        fontWeight:600,
        cursor:'pointer',
        "&::placeholder": {
            color: "#F26C4F",
            fontWeight:600,
            fontSize:'1.1rem'
            },
    }
    const textareaEstilo ={
        resize:'none', 
        px: '0.6rem',
        bg:'white',
        color: "#F26C4F",
        fontWeight:600,
        cursor:'pointer',
        "&::placeholder": {
            color: "#F26C4F",
            fontWeight:600,
            fontSize:'1.1rem'
            },
    }
    const btnFormulario ={
        bg:'transparent',
        border:'1px solid white',
        color:'white',
        p:'0.7rem 2rem',
        fontWeight:400,
        letterSpacing:'1px',
        mt:'0.5rem',
        alignSelf:'end',
        transition:'all 250ms',
        _hover:{
            bg:'white',
            color:'#F26C4F'
        }
    }
    return(
        <>
        <FormControl isRequired sx={formularioEstilo} 
        order={{lg:'2', sm:'1'}} 
        flexBasis={{xl1:'90%', lg:'80%',md:'80%', sm:'100%'}} 
        p={{xl: '2rem 2.4rem', lg:'1.4rem 1rem', sm:'1.4rem 1rem'}}>
            <Input sx={inputEstilo} focusBorderColor='white' placeholder='Tu Nombre' required/>
            <Input sx={inputEstilo} focusBorderColor='white' placeholder='Tu Correo Electronico' required/>
            <Textarea sx={textareaEstilo} focusBorderColor='white'  height={{md:'13rem', sm:'10rem'}} placeholder="Mensaje..." required />
            <Button sx={btnFormulario} type='submit'>Enviar</Button>
        </FormControl>
        </>
    )
}

export { Formulario }