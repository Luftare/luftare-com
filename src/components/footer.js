import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from './grid'

export default styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.grey};
  padding: ${props => props.theme.gutter.l} 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .some-icon {
    height: 40px;
  }

  > *:not(:last-child) {
    margin-right: 16px;
  }
`
