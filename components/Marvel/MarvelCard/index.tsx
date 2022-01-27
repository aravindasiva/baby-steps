import { Box, Divider, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export type IHero = {
  id ?: number,
  image: string,
  quote: string,
  author: string,
}

const MarvelCard = ({ image, author, quote }: IHero) => {
  return (
    <Box m={4} padding={4}>
      <HStack h={40}  borderRadius={10} border='solid' borderColor='lightgrey' >
        <Image borderRadius={8} h='100%' w='20%' fit='contain' src={image} />
        <Divider orientation='vertical' />

        <VStack w='full'>
          <Box w='full' fontSize='x-large' fontFamily='Inter' fontWeight='semibold'>
            <Text>{quote}</Text>
          </Box>
          <Divider bgColor='black' />
          <Box w='full' pr={10} align='right' fontSize='lg' fontWeight='semibold'>
            <Text>-{author}</Text>
          </Box>
        </VStack>

      </HStack>
    </Box>
  )
};

export default MarvelCard;
