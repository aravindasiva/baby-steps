import { Box, Flex, Link, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

const SiteHeader = () => {
  return (
   <Flex p={4}>
     <Box>
       Baby Steps
     </Box>
     <Spacer/>
     <Stack direction={'row'} spacing={6}>
       <Link href='/'>
         Home
       </Link>
       <Link href='/hooks'>
         Hooks
       </Link>
     </Stack>
   </Flex>
  )
}

export default SiteHeader