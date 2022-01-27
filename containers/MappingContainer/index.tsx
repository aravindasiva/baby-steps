import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/690f7ab7-9b53-4308-b997-629e00d3a62e/d1tjm0g-75c77085-01fc-4536-970c-f442cb476a2c.jpg/v1/fill/w_594,h_800,q_75,strp/black_widow_by_manji675_d1tjm0g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNjkwZjdhYjctOWI1My00MzA4LWI5OTctNjI5ZTAwZDNhNjJlXC9kMXRqbTBnLTc1Yzc3MDg1LTAxZmMtNDUzNi05NzBjLWY0NDJjYjQ3NmEyYy5qcGciLCJ3aWR0aCI6Ijw9NTk0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PoYwGP7onETYMouUtT0AgQ59aQbY8zIRuU7NU9cLAYE",
    quote: "This Is Just Like Budapest All Over Again.",
    author: "Black Widow"
  },
  {
    id: 7,
    image: "https://miro.medium.com/max/564/1*1R2Yt-uMk3k--vi7bWOqSA.jpeg",
    quote: "You have my respect, stark. When I'm done, half of humanity will still be alive. I hope they remember you.",
    author: "Thanos"
  }
]

const MappingContainer = () => {
  return (
    <SiteLayout>
      <Center>
        <Menu >
          <MenuButton bgColor='teal.200' as={Button} rightIcon={<BsArrowDownShort />}>
            Marvel
          </MenuButton>
          <MenuList bgColor='teal.200'>
            {heros.map((hero) => (

              <MenuItem> {hero.author}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Center>
      <Box maxW='100vw'>
        <Marvel heros={heros} />
      </Box>

    </SiteLayout>
  )
};

export default MappingContainer;
