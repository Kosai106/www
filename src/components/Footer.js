import React from 'react'
import {Flex, NavLink} from 'rebass'
import { Twitter } from 'react-feather'

export default props => (
  <Flex is='footer' {...props}>
    <NavLink target='_blank' href='http://docs.microlink.io' children='API' />
    <NavLink href='mailto:hello@microlink.io' target='_blank' children='Contact' />

    <NavLink
      ml='auto'
      target='_blank'
      href='http://twitter.com/microlinkio'
      children={<Twitter />}
      />
  </Flex>
)