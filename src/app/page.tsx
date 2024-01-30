import { Header, Logo } from '@/components/Header'
import { Title } from '@/components/Text'
import { Box, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack direction={'column'} paddingX={4} paddingY={3} >
      <Header />
      <Logo />  <Title />
    </Stack>
  )
}
