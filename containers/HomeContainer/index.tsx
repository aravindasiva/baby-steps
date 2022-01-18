import { Stack } from '@chakra-ui/react'
import React from 'react'
import OkButton from '../../components/OkButton'
import ProfileName from '../../components/ProfileName'
import UserModal from '../../components/UserModal'

const HomeContainer = () => {
  return (
    <div>
      <Stack direction={'row'} spacing={4}>
        <UserModal/>
        <OkButton/>
        <ProfileName/>
      </Stack>
    </div>
  )
}

export default HomeContainer
