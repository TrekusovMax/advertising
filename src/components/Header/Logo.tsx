import React from 'react'
import Image from 'next/image'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Title } from '../Text'

export default function Logo() {
  return (
    <>
      <Box position={'relative'} top={20} paddingX={50} display={['none', 'none', 'flex', 'flex']}>
        <Flex ml={10} flexDir={'column'}>
          <Flex ml={10} flexDir={'row'} mt={4}>
            <Image alt="logo" src={'/logo.png'} width={'500'} height={'250'} />
            <Spacer />
            <Heading mt={2} as="h2" size="3xl" color="red">
              ШВЕЙНАЯ КОМПАНИЯ
              <br /> ПОЛНОГО ЦИКЛА
            </Heading>
            <Spacer />
          </Flex>
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <Image
              width={0}
              height={0}
              alt="header"
              src={'/header.png'}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Flex>
        </Flex>
      </Box>
      <Box position={'relative'} top={20} paddingX={0} display={['flex', 'flex', 'none', 'none']}>
        <Flex flexDir={'column'}>
          <Flex flexDir={'column'} mt={4}>
            <Image alt="logo" src={'/logo.png'} width={'500'} height={'250'} />
            <Spacer />
            <Heading mt={3} as="h2" size="2xl" textAlign={'center'} color="red">
              ШВЕЙНАЯ КОМПАНИЯ
              <br /> ПОЛНОГО ЦИКЛА
            </Heading>
          </Flex>
          <Flex mt={10} display={['flex', 'flex', 'none', 'none']}>
            <Image
              width={0}
              height={0}
              alt="header"
              src={'/header.png'}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
