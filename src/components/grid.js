import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

export default styled.div`
  z-index: -1;
  display: grid;
  width: 100%;
  grid-template-columns: ${props =>
    props.wide ? '0 auto 0' : '80px auto 8px'};
  grid-auto-flow: column;
  ${media.tablet`
    grid-template-columns: ${props =>
      props.wide ? '0 auto 0' : '80px auto 80px'};
  `}
  ${media.desktop`
    grid-template-columns: ${props =>
      props.wide ? '0 auto 0' : '1fr 6fr 1fr'};
  `};

  > * {
    grid-column: 2 / 3;
  }

  ${props =>
    props.col1
      ? `
        > * {
          grid-column: 1 / 2;
        }`
      : ''};

  ${props => (props.centerItems ? 'justify-items: center;' : '')};
`
