import React from 'react'
import styled from 'styled-components'
import Grid from '../components/grid'
import Section from '../components/section'
import MusicBox from '../components/musicbox'
import Project from '../components/Project'
import { media } from '../styles'

import daw from '../assets/daw.png'
import ide from '../assets/ide.png'
import instruments from '../assets/instruments.jpeg'

import cloudbunnySrc from '../assets/cloudbunny.png'
import drum from '../assets/drum.png'
import threed from '../assets/threed.png'
import pirkko from '../assets/pirkko.png'
import hearing from '../assets/hearing.png'
import minigolf from '../assets/minigolf.png'
import lfbg from '../assets/lfbg.png'
import noisebox from '../assets/noisebox.png'
import aipong from '../assets/aipong.png'
import spaceship from '../assets/spaceship.png'
import sail from '../assets/sail.png'
import trees from '../assets/trees.png'
import snowboard from '../assets/snowboard.png'
import manager from '../assets/manager.png'

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
  height: ${({ height }) => height || '80vw'};
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.tablet`
    width: ${props => (props.wide ? '100%' : '50%')};
    height: ${({ tabletHeight, height }) => tabletHeight || height || '40vw'};
  `}
`

const TextBox = styled.span`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 4em;
  color: ${props => props.theme.white};
  background-color: ${({ background }) =>
    background || 'rgba(105, 245, 205, 0.9)'};
  width: 100%;
  height: 100%;

  ${media.tablet`
    font-size: 5em;
  `} ${media.desktop`
    font-size: 6em;
  `};
`

const projects = [
  {
    title: 'Cloud Bunny game',
    description:
      'I wanted to see how close to native mobile gaming feel I could get with a browser game. Vue is used to render the menu on top of an html canvas.  I have produced all the graphics and sounds.',
    link: 'https://admiring-meninsky-2e3688.netlify.com/',
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
    link: 'https://luftare.github.io/vanilla-3d/',
    icons: ['html5'],
    imageSrc: threed,
  },
  {
    title: 'Real-time multiplayer',
    description:
      'It is a real-time multiplayer game powered by websocket connection. It attempts to challenge the common consensus that TCP is not applicable for real-time multiplayer games. It also experiments combining canvas and css animations to produce performant graphics.',
    link: 'https://lfbg.herokuapp.com/',
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
    title: 'Project manager',
    description:
      "A simple project management software where users can login and be assigned to projects. Users have profiles and projects have deadlines. It's a project management software so it's grey and a little boring.",
    link: '',
    icons: ['html5', 'vue', 'node', 'mysql'],
    imageSrc: manager,
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
    title: 'Plant evolution',
    description:
      'What makes plants to have unique shapes? Here the process of evolution is demonstrated with virtual plants. Plants interact with underlying plants by shading them and the successful individuals seed more plants. Physical constraints are applied to wither weak structures.',
    link: 'https://luftare.github.io/trees/',
    icons: ['html5'],
    imageSrc: trees,
  },
  {
    title: 'Sailboat physics',
    description:
      'How can you sail into headwind? To fully grasp the idea I wrote this sailboat model featuring procedural islands, seafloor heightmap and a depth sounder.',
    link: 'https://luftare.github.io/sailboat-simulation/',
    icons: ['html5'],
    imageSrc: sail,
  },
  {
    title: 'Snowboard',
    description:
      "As an ex-snowboarder this is one of my favourite game prototypes I've put together. The physics mostly revolve around vector dot and cross products. I also experimented with some fake 3d techniques to boost the immersion of the mostly 2d game.",
    link: 'https://eloquent-wozniak-c9aa9c.netlify.com/',
    icons: ['html5', 'howler'],
    imageSrc: snowboard,
  },
  {
    title: 'Drum machine',
    description:
      'A simple drum sampler. Tap the pads to trigger drum sounds or record a beat on the fly. It features a metronome, undo and changing of tempo.',
    link: 'http://37.139.31.143/drum/',
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

const BackgroundImage = styled.div`
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Split = styled.div`
  display: grid;
  grid-auto-flow: column;

  ${media.tablet`
    grid-auto-flow: dense;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  `};
`

const IndexPage = () => (
  <Grid>
    <Section airy>
      <HeroText>
        a <b>musical developer</b> at your service
      </HeroText>
    </Section>
    <Section wide>
      <Image src={ide} wide height="200px" tabletHeight="350px">
        <TextBox noPaddingX background="rgba(125, 25, 255, 0.6)">
          <Grid>
            <span>dev</span>
          </Grid>
        </TextBox>
      </Image>
      {projects.map((project, i) => (
        <Project key={project.title} {...project} reverse={i % 2 === 0} />
      ))}
      <Image src={daw} wide height="200px" tabletHeight="350px">
        <TextBox noPaddingX background="rgba(255, 185, 22, 0.85)">
          <Grid>
            <span>music</span>
          </Grid>
        </TextBox>
      </Image>
    </Section>
    <Section wide>
      <Split>
        <Grid>
          <MusicBox />
        </Grid>
        <BackgroundImage src={instruments} />
      </Split>
    </Section>
  </Grid>
)

export default IndexPage
