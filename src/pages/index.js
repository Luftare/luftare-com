import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/grid'
import Section from '../components/section'
import MusicBox from '../components/musicbox'
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

const Image = styled.div`
  vertical-align: bottom;
  display: inline-block;
  width: 100%;
  height: 80vw;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.tablet`
    width: 50%;
    height: 40vw;
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
    <Section >
      <MusicBox />
    </Section>
  </Grid>
)

export default IndexPage
