import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react'

const Topbar =()=>{
  return(
    <Flex bg='gray.100'
    h='81px' w='100%'
    align='center'  p={5}>
     
      <Avatar src='' marginEnd={3}/>
      <Heading size='lg'>user@gmail.com</Heading>
    </Flex>
  )
 
}
const Bottombar=()=>
{
  return(
    <FormControl  p={3}>
      <Input placeholder='Type a msg...'/>
      <Button type="submit" hidden autoComplete='off'>Submit</Button>
    </FormControl>
  )
}

function  Chat() {
  return (
    <Flex h='100vh' >

    <Sidebar/>
    <Flex flex={1} direction='column' >
    <Topbar/>
    <Flex flex={1} direction='column' pt={4} mx={5} overscrollX="scroll" sx={{scrollbarWidth:"none"}}>
    <Flex bg='blue.100' direction='column' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
      <Text>This is a dummy message</Text>
    </Flex>
    <Flex bg='blue.100' direction='column' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
      <Text>a</Text>
    </Flex>
    <Flex bg='blue.100' direction='column' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
      <Text>This is a dummy message</Text>
    </Flex>
    <Flex bg='green.100' direction='column' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf="flex-end">
      <Text>This is a dummy message</Text>
    </Flex>
   
    
    </Flex>
    <Bottombar/>

    </Flex>
    
    
    </Flex>
  )
}

export default  Chat