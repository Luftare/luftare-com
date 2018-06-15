import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

export default styled.div`
  background: lightblue;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  ${media.tablet`
    grid-gap: 32px;
    grid-auto-flow: column;
    grid-template-columns: 1fr minmax(100px, 1200px) 1fr;
  `};
`
