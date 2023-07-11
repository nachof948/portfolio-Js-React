import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
const Slide = () => {
    const slideEstilo={
        bg:'transparent',
        border:'2px solid #F26C4F',
        borderRadius:'50%',
        width:'1.5rem',
        height:'1.5rem'
    }
    return(
        <Flex color='white' justifyContent={'center'} gap={'1.5rem'} >
                <Box as='span' sx={slideEstilo} ></Box>
                <Box as='span' sx={slideEstilo}></Box>
                <Box as='span' sx={slideEstilo}></Box>
        </Flex>
    )
}

export { Slide }