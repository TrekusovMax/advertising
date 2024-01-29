'use client'

import { Button, Heading } from '@chakra-ui/react'

import NextLink from 'next/link'

export default function MenuLinks() {
  return (
    <>
      <NextLink href="#about" passHref>
        <Button
          variant="ghost"
          aria-label="About"
          my={5}
          w="100%"
          onClick={() => console.log('111')}
        >
          <Heading as="h4" size="lg" fontWeight={400}>
            О нас
          </Heading>
        </Button>
      </NextLink>

      <NextLink href="#examples" passHref>
        <Button variant="ghost" aria-label="Examples" my={5} w="100%">
          <Heading as="h4" size="lg" fontWeight={400}>
            Работы
          </Heading>
        </Button>
      </NextLink>

      <NextLink href="#contact" passHref>
        <Button variant="ghost" aria-label="Contact" my={5} w="100%">
          <Heading as="h4" size="lg" fontWeight={400}>
            Контакты
          </Heading>
        </Button>
      </NextLink>
    </>
  )
}
