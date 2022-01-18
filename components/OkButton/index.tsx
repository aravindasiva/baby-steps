import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

const OkButton = () => {
  return (

    <Stack direction={'row'} spacing={4}>
      <Button colorScheme='teal' variant='solid'>
        Okay
      </Button>
    </Stack>
  )
}

export default OkButton
