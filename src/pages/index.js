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
    width: ${props => (props.wide ? '100%' : '50%')};
    height: 40vw;
  `}
`

const TextBox = styled.span`
  box-sizing: border-box;
  font-size: 2em;
  color: ${props => props.theme.black};
  padding: ${props => (props.noPaddingX ? '16px 0' : '16px 24px')};
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  ${media.tablet`
    font-size: 2.2em;
    padding: ${props => (props.noPaddingX ? '16px 0' : '16px 24px')};
  `} ${media.desktop`
    font-size: 3em;
    padding: ${props => (props.noPaddingX ? '24px 0' : '24px 36px')};
  `};
`

const projects = [
  {
    title: 'Cloud Bunny game',
    description:
      'I wanted to see how close to native mobile gaming feel I could get with a browser game. Vue is used to render the menu on top of an html canvas.  I have produced all the graphics and sounds.',
    link: 'https://luftare.tk/bunny/',
    icons: ['html5', 'vue', 'howler'],
    imageSrc: cloudbunnySrc,
  },
  {
    title: 'AI rocket landing',
    description:
      'I programmed this machine learning demo to visualize the learning process of a neural network. A genetic algorithm is applied to train a space rocket to smoothly land with the minimum possible fuel consumption.',
    link: 'https://luftare.github.io/AI-space-ship/',
    icons: ['html5', 'synaptic'],
    imageSrc: spaceship,
  },
  {
    title: 'AI pong player',
    description:
      'I have programmed a few games featuring "AI" opponents to play against and the opponents are just following simple if/else heuristics. The problem is that the opponent is then only as good as it was programmed to be. In this demo machine learning is applied to train the opponent\'s neural networks.',
    link: 'https://luftare.github.io/ai-pong-paper/',
    icons: ['html5', 'synaptic'],
    imageSrc: aipong,
  },
  {
    title: '3d',
    description:
      'I wrote a 3d rendering engine out of curiosity. The rendering is powered by 2d canvas leaving all the trigonometry and geometry puzzles to be handled with vanilla JS.',
    link: 'https://luftare.tk/3d/',
    icons: ['html5'],
    imageSrc: threed,
  },
  {
    title: 'Real-time multiplayer',
    description:
      'It is a real-time multiplayer game powered by websocket connection. It attempts to challenge the common consensus that TCP is not applicable for real-time multiplayer games. It also experiments combining canvas and css animations to produce performant graphics.',
    link: 'http://www.lfbg.tk/',
    icons: ['html5', 'node', 'socketio', 'digitalocean'],
    imageSrc: lfbg,
  },
  {
    title: 'Disc golf app',
    description:
      'A web app aiming to produce native mobile app user experience for disc golf players. Offline features make it possible to use the app with limited network connectivity.',
    link: 'https://pirkko.tk/',
    icons: ['react', 'mobx'],
    imageSrc: pirkko,
  },
  {
    title: 'Hearing test',
    description:
      "How well can you hear? The test generates a report of both ears' relative spectral sensitivity as a graph. The test has proven to produce similar results compared to tests conducted by healthcare professionals.",
    link: 'https://www.heartest.tk/',
    icons: ['html5', 'audio'],
    imageSrc: hearing,
  },
  {
    title: 'Minigolf adventure game',
    description:
      "What comes when a minigolf game and an RPG game is crossbred? I wanted to build a game with lots of levels that aren't too coupled with the game engine. A dedicated level editor made it easy to write the story and add new levels to the game.",
    link: 'https://luftare.github.io/wall-bounce/',
    icons: ['vue'],
    imageSrc: minigolf,
  },
  {
    title: 'Drum machine',
    description:
      'A simple drum sampler. Tap the pads to trigger drum sounds or record a beat on the fly. It features a metronome, undo and changing of tempo.',
    link: 'https://luftare.tk/drum/',
    icons: ['react', 'audio'],
    imageSrc: drum,
  },
  {
    title: 'Wacky music generator',
    description:
      'In order to produce bonkers music you need equivalent instruments for the job. Create beat, draw  riffs just like in paint and write lyrics to a textbox to hear the next UG hit. Its cool how much browser(s) can do nowadays.',
    link: 'https://trusting-sinoussi-6c3faf.netlify.com/',
    icons: ['react', 'audio'],
    imageSrc: noisebox,
  },
]

const IndexPage = () => (
  <Grid>
    <Section airy>
      <HeroText>
        a <b>musical developer</b> at your service
      </HeroText>
    </Section>
    <Section wide>
      {projects.map(project => <Project key={project.title} {...project} />)}
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
