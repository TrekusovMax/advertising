'use client'

import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

import CardImage from './CardImage'

export default function Gallery() {
  const imagesId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <Heading
        as="h2"
        size="2xl"
        color="red"
        top={10}
        px={100}
        id="examples"
        textAlign={'start'}
        display={['none', 'none', 'flex', 'flex']}
      >
        Наши работы:
      </Heading>
      <Heading
        as="h2"
        size="2xl"
        color="red"
        top={10}
        px={0}
        id="examples"
        textAlign={'center'}
        display={['flex', 'flex', 'none', 'none']}
      >
        Наши работы:
      </Heading>
      <Box
        mt={10}
        paddingX={100}
        position={'relative'}
        display={['none', 'none', 'flex', 'flex']}
      >
        <SimpleGrid columns={3} spacing={10}>
          {imagesId.map((id) => (
            <CardImage key={id} id={id} />
          ))}
        </SimpleGrid>
      </Box>
      <Box
        mt={10}
        position={'relative'}
        display={['flex', 'flex', 'none', 'none']}
      >
        <SimpleGrid columns={1} spacing={5}>
          {imagesId.map((id) => (
            <CardImage key={id} id={id} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}
