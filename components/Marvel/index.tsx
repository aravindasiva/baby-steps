import { Box, Center, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { type } from 'os';
import React from 'react';
import MarvelCard, { IHero } from './MarvelCard';

type MarvelProps = {
  heros?: IHero[],
  selectedOption?: IHero
}

const Marvel = ({ heros, selectedOption }: MarvelProps) => {

  return (
    <SimpleGrid scrollBehavior='smooth' columns={1} spacingX='5%' spacingY='4%'>

      {selectedOption !== null ?
        <MarvelCard key={selectedOption.author} image={selectedOption.image} quote={selectedOption.quote} author={selectedOption.author} />
        :
        <>
          {heros.map((hero) => (
            <MarvelCard key={hero.author} image={hero.image} quote={hero.quote} author={hero.author} />
          ))
          }
        </>

      }


    </SimpleGrid>
  )
}

export default Marvel;
