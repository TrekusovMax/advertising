import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Box position={'relative'} top={20} paddingX={50}>
      <Flex
        ml={10}
        flexDir={'row'}
        mt={4}
        display={['none', 'none', 'none', 'flex']}
      >
        <Image alt="logo" src={'/logo.png'} width={'500'} height={'250'} />
        <Spacer />
        <Heading mt={2} as="h2" size="3xl" color="red">
          ШВЕЙНАЯ КОМПАНИЯ
          <br /> ПОЛНОГО ЦИКЛА
        </Heading>
        <Spacer />
      </Flex>
    </Box>
  )
}

export default Logo
