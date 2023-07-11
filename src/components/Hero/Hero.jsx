import React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Titulos, Redeshero,Imghero } from '../../index'

const Hero = () => {
    const [agrandarAncho] = useMediaQuery('(max-width:1023px)')
    const estiloHero={
        width: agrandarAncho ? '95vw' :'80vw',
        margin:'0 auto',
        justifyContent:'space-between',
        alignItems:'center',
        py:'2rem'
    }
    return(
        <Box as={'section'} width={'100vw'} marginTop={{lg:'7.6rem', sm: '10rem' }}  >
            <Flex sx={estiloHero} 
            flexDirection={{xxl:'row',xl:'row',lg:'row', sm:'column'}}
            gap={{lg:'0.5rem', md:'1.5rem', sm:'2rem'}}>
                <Titulos/>
                <Imghero />
                <Redeshero/>
            </Flex>
            
        </Box>
    )
}

export { Hero }