import { Box, Button, Center, Divider, Image, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';

type QuoteResponse = {
  fact: string,
  length: number
}

const CatApi = () => {

  const [image, setImage] = useState("");

  // const [quote, setQuotes] = useState("");
  // const [loadingQuote, setloadingQuote] = useState(true);
  // const [loadingError, setLoadingError] = useState("");

  // useEffect(() => {
  //   fetchQuote();
  // }, []);

  // const fetchQuote = async () => {
  //   try {
  //     setloadingQuote(true)
  //     setLoadingError("")
  //     const { data } = await axios.get('https://catfact.ninja/fact')
  //     setQuotes(data.fact)
  //     setloadingQuote(false)
  //     console.log(data.fact)
  //   }
  //   catch (error) {

  //     setLoadingError(error.message)
  //     setloadingQuote(false)

  //   }

  // }


  const [{ data, loading, error }, refetch] = useAxios(

    "https://catfact.ninja/fact"

  );

  useEffect(() => {
    getImage()
  }, [data]);

  const getImage = async () => {
    const imageSource = "https://cataas.com/cat/gif"
    const data = await axios.get(imageSource)
    console.log(data)
     setImage(imageSource)
  }


  return (

    <Center>
      <Box padding={2} border='solid' borderColor='teal' borderRadius={14} w='lg' rowGap={4} marginTop={10}>
        <Box boxSize='m' align='center' marginBottom={4} >
          <Image borderRadius={10} content='fit' src={image} alt='Dan Abramov' />
        </Box>
        <Divider />
        {loading ?
          <Box align='center'>
            <Spinner color='teal.500' />
          </Box>
          :
          <Box align='center' marginBottom={5} fontSize={20}>
            {error ?
              <Text>{error}</Text>
              :
              <Text> {data.fact} </Text>
            }
          </Box>
        }
        <Divider />
        <Box align='center' padding={2}>
          <Button onClick={() => refetch()} colorScheme='teal' variant='solid' w='full'>
            Get Facts
          </Button>
        </Box>

      </Box>
    </Center>
  )

}

export default CatApi;
