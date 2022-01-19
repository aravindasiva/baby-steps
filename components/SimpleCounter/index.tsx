import { Box, Button, Center, Divider, Flex, IconButton, Spacer, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const SimpleCounter = ({ val }) => {

  const [count, setCount] = useState(val);

  const add = () => {
    setCount(c => c + 1);
  }

  const sub = () => {
    setCount(c => Math.max(c - 1, 0));
  }

  return (
    <Center>
      <Box w={60} p={4} maxW='m' borderWidth='1px' borderRadius='lg' boxShadow='xl'>
        <Box
          color='teal.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xl'
          textTransform='uppercase'
          ml='2'
        >
          <Text align='center' ><b>Counter:</b> {count}</Text>
        </Box>
        <Divider variant='solid' borderColor='steelblue' />
        <Box p={4} >
          <Center px={6}>
            <IconButton aria-label='Add' icon={<FiArrowUp />} borderRadius='full' onClick={add} colorScheme='teal' />
            <Spacer />
            <IconButton aria-label='sub' icon={<FiArrowDown />} borderRadius='full' onClick={sub} colorScheme='teal' isDisabled={count === 0 ? true : false} />
          </Center>
        </Box>
      </Box>
    </Center>
  )
}

export default SimpleCounter
