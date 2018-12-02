import React from 'react'
import styled from 'styled-components'
import Grid from '../components/grid'
import Section from '../components/section'
import MusicBox from '../components/musicbox'
import Project from '../components/Project'
import { media } from '../styles'

import cloudbunnySrc from '../assets/cloudbunny.png'
import drum from '../assets/drum.png'
import threed from '../assets/threed.png'
import music from '../assets/music.jpg'
import pirkko from '../assets/pirkko.png'
import hearing from '../assets/hearing.png'
import minigolf from '../assets/minigolf.png'
import lfbg from '../assets/lfbg.png'
import noisebox from '../assets/noisebox.png'
import aipong from '../assets/aipong.png'
import spaceship from '../assets/spaceship.png'


const HeroText = styled.div`
  font-size: 2em;
  ${media.tablet`
    font-size: 3em;
  `};
`

const Image = styled.div`
  vertical-align: bottom;
  align-items: flex-end;
  justify-content: center;
  display: inline-flex;
  width: 100%;
  height: 80vw;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.tablet`
    width: ${props => props.wide ? '100%' : '50%'};
    height: 40vw;
  `}
`

const TextBox = styled.span`
  box-sizing: border-box;
  font-size: 2em;
  color: ${props => props.theme.black};
  padding: ${props => props.noPaddingX ? '16px 0' : '16px 24px'};
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  ${media.tablet`
    font-size: 2.2em;
    padding: ${props => props.noPaddingX ? '16px 0' : '16px 24px'};
  `}
  ${media.desktop`
    font-size: 3em;
    padding: ${props => props.noPaddingX ? '24px 0' : '24px 36px'};
  `}
`

const projects = [
  {
    title: 'Cloud Bunny game',
    description: 'I wanted to see how close to native mobile gaming feel I could get with a browser game. Vue is used to render the menu on top of an html canvas.  I have produced all the graphics and sounds.',
    link: 'https://luftare.tk/bunny/',
    icons: ['html5', 'vue', 'howler'],
    imageSrc: cloudbunnySrc,
  },
  {
    title: 'Cloud Bunnyz game',
    description: 'I wanted to see how close to native mobile gaming feel I could get with a browser game. Vue is used to render the menu on top of an html canvas.  I have produced all the graphics and sounds.',
    link: 'https://luftare.tk/bunny/',
    icons: ['html5', 'vue', 'howler'],
    imageSrc: cloudbunnySrc,
  },

]

const IndexPage = () => (
  <Grid>
    <Section airy>
      <HeroText>
        a <b>developer & musician</b> at your service
      </HeroText>
    </Section>
    <Section wide>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
        ))}
      <Image src={cloudbunnySrc}/>
      <Image src={threed}/>
      <Image src={hearing}/>
      <Image src={drum}/>
      <Image src={minigolf}/>
      <Image src={pirkko}/>
      <Image src={noisebox}/>
      <Image src={lfbg}/>
      <Image src={spaceship}/>
      <Image src={aipong}/>
      <Image src={music} wide>
        <TextBox noPaddingX>
          <Grid>
            <span>music</span>
          </Grid>
        </TextBox>
      </Image>
    </Section>
    <Section>
      <MusicBox />
    </Section>
  </Grid>
)

export default IndexPage
