import { CloseIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import MenuLinks from './MenuLinks'

interface MobileMenuProps {
  display: string
  changeDisplay: (s: string) => void
}

const MobileButtons = ({ display, changeDisplay }: MobileMenuProps) => {
  return (
    <Flex
      w="100vw"
      display={display}
      bgColor="gray.50"
      zIndex={20}
      h="100vh"
      top="0"
      left="0"
      position={'fixed'}
      overflowY="auto"
      flexDir="column"
    >
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay('none')}
        />
      </Flex>

      <Flex flexDir="column" align="center">
        <MenuLinks onClick={() => changeDisplay('none')} />
      </Flex>
    </Flex>
  )
}

export default MobileButtons
