'use client'

import { Flex, Box } from '@chakra-ui/react'
import AboutText from './AboutText'

export default function AboutUs() {
  return (
    <>
      <Box
        position={'relative'}
        top={10}
        paddingX={100}
        display={['none', 'none', 'flex', 'flex']}
      >
        <Flex align={'flex-start'} flexDir={'column'} my={20}>
          <AboutText />
        </Flex>
      </Box>
      <Box
        position={'relative'}
        top={10}
        display={['flex', 'flex', 'none', 'none']}
      >
        <Flex align={'stretch'} flexDir={'column'} my={20}>
          <AboutText />
        </Flex>
      </Box>
    </>
  )
}
