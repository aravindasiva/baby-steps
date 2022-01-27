import { Box, Center, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import MarvelCard from './MarvelCard';

const Marvel = ({ heros }) => {

  return (
    <SimpleGrid columns={2} spacingX='5%' spacingY='5%'>
      
          {heros.map((hero) => (
            <MarvelCard image={hero.image} quote={hero.quote} author={hero.author} />
          ))}
        
      
    </SimpleGrid>
  )
}

export default Marvel;
