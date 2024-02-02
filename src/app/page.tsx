import { Contact } from '@/components/Contact'
import { Gallery } from '@/components/Gallery'
import { Header, Logo } from '@/components/Header'
import { AboutUs, Title } from '@/components/Text'
import { Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack direction={'column'} paddingX={4} paddingY={3}>
      <Header />
      <Logo />
      <Title />
      <AboutUs />
      <Gallery />
      <Contact />
    </Stack>
  )
}
