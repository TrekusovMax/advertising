//import dynamic from 'next/dynamic'
//const Header = dynamic(() => import('@/components/Header'))

import { Header, Logo } from '@/components/Header'
import {
  Box,
  Container,
  Flex,
  Link,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack
      direction={'column'}
      height="100svh"
      paddingX={4}
      paddingY={3}
      bg="orange.100"
    >
      <Header />

      <Logo />
    </Stack>
  )
}

