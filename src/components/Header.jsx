import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
      <Button variant={'unstyled'} color={'white'}> <Link to={'/'}>Home</Link> </Button> 
      <Button variant={'unstyled'} color={'white'}> <Link to={'/exchanges'}>exchanges</Link> </Button> 
      <Button variant={'unstyled'} color={'white'}> <Link to={'/coins'}>coins</Link> </Button> 

   </HStack>
  )
}

export default Header