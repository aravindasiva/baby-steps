import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import Marvel from '../../components/Marvel';
import SiteLayout from '../../components/SiteLayout';
import { BsArrowDownShort } from 'react-icons/bs';


const heros = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg",
    quote: "“I love you 3000.” ...",
    author: "Ironman"
  },
  {
    id: 2,
    image: "https://secure.img1-ag.wfcdn.com/im/23918422/resize-h800-w800%5Ecompr-r85/6411/64115132/Captain+America+Avengers+Animated+Standup.jpg",
    quote: "Avengers Assemble!!!!",
    author: "Captain America"
  },
  {
    id: 3,
    image: "https://wallpaperaccess.com/full/6874917.jpg",
    quote: "I Went For The Head",
    author: "Thor"
  },
  {
    id: 4,
    image: "https://www.citypng.com/public/uploads/preview/-101609926174y7pdsmsame.png",
    quote: " With Great power, Comes Great Responsiblities",
    author: " Spiderman"
  },
  {
    id: 5,
    image: "https://pbs.twimg.com/media/E7kC3xIWUAIpNAZ.jpg",
    quote: "Dormammu, I've Come To Bargain",
    author: "Doctor Strange"
  },
  {
    id: 6,
    image: "https://static.wikia.nocookie.net/marvelcrossroads/images/9/90/Black_Widow_%28Natalia_Romanova%29_%28Marvel_Resuited%29.png/revision/latest?cb=20190422020657",
    quote: "This Is Just Like Budapest All Over Again.",
    author: "Black Widow"
  },
  {
    id: 7,
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0e/Warrior_Thanos.jpg/revision/latest?cb=20210818013102",
    quote: "You have my respect, stark. When I'm done, half of humanity will still be alive. I hope they remember you.",
    author: "Thanos"
  }
]

const MappingContainer = () => {
  return (
    <SiteLayout>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
          Marvel
        </MenuButton>
        <MenuList>
          {heros.map((hero)=>(
            
            <MenuItem> {hero.author}</MenuItem>
          ))}

        </MenuList>
      </Menu>
      <Box maxW='100vw'>
        <Marvel heros={heros} />
      </Box>

    </SiteLayout>
  )
};

export default MappingContainer;
