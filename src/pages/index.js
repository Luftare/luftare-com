import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/grid'
import { media } from '../styles'

const Button = styled.button`
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primary};
  padding: 16px;
  border: none;

  :hover {
    color: red;
  }

  ${media.desktop`
    padding: 32px;
  `};
`

const IndexPage = () => (
  <Grid>
    <h1>Hi</h1>
    <p>Not so much here.</p>
    <Button>JAU!</Button>
    <Link to="/contact/">Contact</Link>
  </Grid>
)

export default IndexPage
