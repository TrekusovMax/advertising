'use client'

import { Button, Heading } from '@chakra-ui/react'

import NextLink from 'next/link'
interface MobileMenuProps {
  onClick: (s: string) => void
}
export default function MenuLinks({ onClick }: MobileMenuProps) {
  return (
    <>
      <NextLink href="#about" passHref>
        <Button
          variant="ghost"
          aria-label="About"
          my={5}
          w="100%"
          onClick={() => onClick('none')}
          _hover={{ background: 'orange.300', color: 'white' }}
        >
          <Heading as="h4" size="lg" fontWeight={400}>
            О НАС
          </Heading>
        </Button>
      </NextLink>

      <NextLink href="#examples" passHref>
        <Button
          variant="ghost"
          aria-label="Examples"
          my={5}
          w="100%"
          onClick={() => onClick('none')}
          _hover={{ background: 'orange.300', color: 'white' }}
        >
          <Heading as="h4" size="lg" fontWeight={400}>
            РАБОТЫ
          </Heading>
        </Button>
      </NextLink>

      <NextLink href="#contact" passHref>
        <Button
          variant="ghost"
          aria-label="Contact"
          my={5}
          w="100%"
          onClick={() => onClick('none')}
          _hover={{ background: 'orange.300', color: 'white' }}
        >
          <Heading as="h4" size="lg" fontWeight={400}>
            КОНТАКТЫ
          </Heading>
        </Button>
      </NextLink>
    </>
  )
}
