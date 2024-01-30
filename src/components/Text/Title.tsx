'use client'
import { Flex, Box, Heading, List, ListItem, ListIcon, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function Title() {
  return (
    <>
      <Box position={'relative'} top={20}>
        <Flex align="center" flexDir={'column'} my={20}>
          <Heading as="h2" size="2xl" color="red">
            Почему стоит работать именно с нами:
          </Heading>
          <List mt={10} spacing={3}>
            <ListItem>
              <Text fontSize="2xl">
                <ListIcon as={CheckIcon} color="red.500" />
                Мы не разглашаем информацию о наших клиентах
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl">
                <ListIcon as={CheckIcon} color="red.500" />
                Работаем исключительно с профессионалами рекламного рынка
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl">
                
                <ListIcon as={CheckIcon} color="red.500" />У нас низкие цены на разные виды
                продукции
              </Text>
            </ListItem>
          </List>
        </Flex>
      </Box>
    </>
  )
}
