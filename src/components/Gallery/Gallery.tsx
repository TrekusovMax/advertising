'use client'

import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import CardImage from './CardImage'

export default function Gallery() {
  const imagesId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [isLargerThan1280] = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      <Heading
        as="h2"
        size="2xl"
        color="red"
        top={10}
        px={isLargerThan1280 ? 100 : 0}
        id="examples"
        textAlign={!isLargerThan1280 ? 'center' : 'start'}
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
