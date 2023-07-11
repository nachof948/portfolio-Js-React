import React from 'react';
import { Box,Flex, useMediaQuery } from '@chakra-ui/react';
import { Imgsobremi, Textosobremi,Cv } from '../../index';

const Sobremi = () => {
    const [agrandarAncho] = useMediaQuery('(max-width:1023px)')
const Sectionsobremi ={
    bg:'#262626',
    width:'100%',
    py:'5rem'
}
const Sobremicontenedor={
    width: agrandarAncho ? '94vw' :'80vw',
    margin: '0 auto',
    justifyContent:'center'
}
    return(
        <Box as='section' sx={Sectionsobremi} id='sobre-mi'>
            <Flex sx={Sobremicontenedor} flexDirection={{lg:'row', sm:'column' }} alignItems={'center'} gap={{xl:'5rem', lg:'1rem', sm:'2.5rem'}}>
                <Imgsobremi flexBasis={'20%'}/>
                <Flex direction={'column'} align={'start'} gap={9} flexBasis={'80%'}>
                    <Textosobremi/>
                    <Cv section='sobremi' />
                </Flex>
            </Flex>
        </Box>
    )
}

export { Sobremi }