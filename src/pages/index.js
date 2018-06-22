import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/grid'
import Section from '../components/section'
import { media } from '../styles'

const HeroText = styled.div`
  font-size: 2em;
  ${media.tablet`
    font-size: 3em;
  `};
`

const Iframe = styled.iframe`
  border: none;
  width: 1px;
  min-width: 100%;
  display: block;
  height: 70vh;
  z-index: 1000;
`

const IndexPage = () => (
  <Grid>
    <Section airy>
      <HeroText>
        a <b>developer & musician</b> at your service
      </HeroText>
    </Section>
    <Section wide>
      <Iframe src="https://luftare.tk/bunny" scrolling="no"/>
    </Section>
  </Grid>
)

export default IndexPage
