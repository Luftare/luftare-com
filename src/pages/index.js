import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/grid'
import Section from '../components/section'
import { media } from '../styles'

import cloudbunnySrc from '../assets/cloudbunny.png'
import drum from '../assets/drum.png'
import sail from '../assets/sail.png'
import threed from '../assets/threed.png'

const HeroText = styled.div`
  font-size: 2em;
  ${media.tablet`
    font-size: 3em;
  `};
`

const Image = styled.img`
  width: 100%;
  vertical-align: bottom;
  ${media.tablet`

  `}
`

const IndexPage = () => (
  <Grid>
    <Section airy>
      <HeroText>
        a <b>developer & musician</b> at your service
      </HeroText>
    </Section>
    <Section wide>
      <Image src={cloudbunnySrc}/>
      <Image src={threed}/>
      <Image src={sail}/>
      <Image src={drum}/>
    </Section>
  </Grid>
)

export default IndexPage
