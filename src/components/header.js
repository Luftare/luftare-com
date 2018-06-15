import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  background: gray;
  padding: 16px 16px;
  > a {
    text-decoration: none;
    color: white;
  }
`

export default ({ children }) => (
  <Container>
    <Link to="/">{children}</Link>
  </Container>
)
