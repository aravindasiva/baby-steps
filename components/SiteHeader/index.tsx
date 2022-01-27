import { Box, Flex, Link, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

const SiteHeader = () => {
  return (
    <Flex align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bgColor='teal.200'
      fontSize={18}
      fontWeight='semibold'
      textColor='black'
    >
      <Box>
        Baby Steps
      </Box>
      <Spacer />
      <Stack direction={'row'} spacing={6}>
        <Link style={{ textDecoration: 'none' }} href='/'>
          Home
        </Link>
        <Link style={{ textDecoration: 'none' }} href='/hooks'>
          Hooks
        </Link>
        <Link style={{ textDecoration: 'none' }} href='/apitest'>
          Api Examples
        </Link>
        <Link style={{ textDecoration: 'none' }} href='/mapping'>
          Mapping
        </Link>
      </Stack>
    </Flex>
  )
}

export default SiteHeader