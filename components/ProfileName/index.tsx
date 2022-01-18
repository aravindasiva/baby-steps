import { Avatar, Wrap, Text, Stack } from '@chakra-ui/react'
import { wrap } from 'module'
import React from 'react'

const ProfileName = () => {
  return (
    <>
      <Wrap>
        <Avatar name='Vignesh' src='data:image/jpeg;base64,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' />
        <Stack direction={'column'}>
          <Text fontSize={'small'}> <b>Vignesh Uthrapathy</b></Text>
          <Text fontSize={'xs'}> 12344</Text>
        </Stack>
      </Wrap>
    </>
  )
}

export default ProfileName