import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

export default styled.div`
  padding: ${props => (props.airy ? props.theme.gutter.xl : 0)} 0;
  ${props => (props.wide ? 'grid-column: 1 / 4;' : '')};
`
