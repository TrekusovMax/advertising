'use client'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import Map from './Map'

export default function Contact() {
  return (
    <>
      <Box position={'relative'}>
        <Flex align="center" flexDir={'column'} mt={20}>
          <Heading as="h2" size="2xl" color="red">
            Наши контакты:
          </Heading>
          <Text as={'p'} align={'center'} mt={5} fontSize="2xl">
            141800, Московская область.,г. Дмитров ул.Бирлово поле, дом
            11,помещ. 11
          </Text>
          <Text as={'p'} align={'center'} fontSize="2xl">
            E-mail:{' '}
            <a href="mailto:info@reklamnye-r.ru"> info@reklamnye-r.ru</a>
          </Text>
          <Text as={'p'} align={'center'} fontSize="2xl">
            <a href="tel:+79030012338">Телефон: +7 (903) 001-23-38</a>
          </Text>
          <Map />
        </Flex>
      </Box>
    </>
  )
}
