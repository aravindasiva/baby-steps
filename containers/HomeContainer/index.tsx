import { Center, Flex, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import OkButton from '../../components/OkButton'
import ProfileName from '../../components/ProfileName'
import UserModal from '../../components/UserModal'

const HomeContainer = () => {
  return (
    <SimpleGrid>
      <VStack
        spacing={20}
        h={'100vh'}
        justifyContent='center'
        alignItems='center'
      >
        <UserModal />
        <OkButton />
        <ProfileName />
      </VStack>
    </SimpleGrid>
  )
}

export default HomeContainer
