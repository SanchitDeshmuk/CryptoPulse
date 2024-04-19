import React from 'react'
import {Box, HStack, Stack,Icon,Text,Heading} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";

function SideNav() {

    const navLinks = [{
        icon:RxDashboard,
        text:"Dashoard",
        link:'/',
    },{
        icon:GrTransaction,
        text:"Transactions",
        link:'/transactions',
    }]

  return (
    <Stack boxShadow="lg" maxW='16rem' h='100vh'> 
    <Heading textAlign='center' fontSize='20px' as='h1' pt='3.5rem'>@CryptoPulse</Heading>
    <Box mt='6' mx='3'>
    {   navLinks.map((nav)=>(
            <HStack key={nav.text} py="3" px="4" color='#797E82' borderRadius='10px' _hover={{bg:"#F3F3F7",color:'#171717'}}>
                <Icon as={nav.icon} />
                <Text fontSize='14px' fontWeight='medium'>{nav.text}</Text>
            </HStack>
        ))}
    </Box>
    </Stack>
  )
}

export default SideNav