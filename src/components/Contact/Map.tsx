import { Box, Flex } from '@chakra-ui/react'

export default function Map() {
  return (
    <Flex justifyContent={'center'}>
      <Box display={['none', 'none', 'flex', 'flex']}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecac1bd5be6472133fda0c6b470c556789857d3982ea9949f3a6a492c5a169db&amp;source=constructor"
          width="1000"
          height="505"
        ></iframe>
      </Box>
      <Box display={['flex', 'flex', 'none', 'none']}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecac1bd5be6472133fda0c6b470c556789857d3982ea9949f3a6a492c5a169db&amp;source=constructor"
          width="400"
          height="505"
        ></iframe>
      </Box>
    </Flex>
  )
}
