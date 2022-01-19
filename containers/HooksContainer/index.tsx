import { Center, Flex, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import SimpleCounter from '../../components/SimpleCounter'
import SiteLayout from '../../components/SiteLayout'

const HooksContainer = () => {
  return (
    <SiteLayout>
      <SimpleCounter val={0}/>

    </SiteLayout>
  )
}

export default HooksContainer
