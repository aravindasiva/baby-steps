import { Box } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../SiteHeader'

const SiteLayout = ({children}) => {
  return (
    <Box>
      <SiteHeader/>
      {children}
    </Box>
  )
}

export default SiteLayout
