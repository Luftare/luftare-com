import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from './grid'

export default styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.grey};
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon-bar {
    margin-bottom: 24px;
  }

  .some-icon {
    height: 40px;
    margin-right: 16px;
    filter: grayscale(100%);

    :hover {
      filter: unset;
    }
  }
`
