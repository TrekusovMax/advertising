'use client'
import { useState } from 'react'
import { Flex, IconButton, Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import MenuLinks from './MenuLinks'
import MobileButtons from './MobileButtons'

export default function Header() {
  const [display, changeDisplay] = useState('none')

  return (
    <Box>
      <Flex position="absolute" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']} paddingRight={10}>
          <MenuLinks onClick={() => changeDisplay('none')} />
        </Flex>
        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
          background={'none'}
          _hover={{ background: 'orange.500' }}
        />
      </Flex>
      {/* Mobile Content */}
      <MobileButtons display={display} changeDisplay={changeDisplay} />
    </Box>
  )
}
