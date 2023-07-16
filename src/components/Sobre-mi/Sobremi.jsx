import React from 'react';
import { Box,Flex} from '@chakra-ui/react';
import { Imgsobremi, Textosobremi,Cv } from '../../index';

const Sobremi = () => {

const Sectionsobremi ={
    bg:'#262626',
    py:'5rem',
    width:'100vw'
}
const Sobremicontenedor={
    margin: '0 auto',
    justifyContent:'center'
}
    return(
        <Box as='section' sx={Sectionsobremi} id='sobre-mi'>
            <Flex sx={Sobremicontenedor} width={{ lg: '80vw', sm: '90vw' }} flexDirection={{lg:'row', sm:'column' }} alignItems={'center'} gap={{xl:'5rem', lg:'1rem', sm:'2.5rem'}}>
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