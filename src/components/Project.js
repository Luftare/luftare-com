import React from 'react';
import styled from 'styled-components';import { media } from '../styles'
import gatsbyLogo from '../assets/gatsby-logo.png'
import reactLogo from '../assets/react-logo.png'
import audioLogo from '../assets/audio-logo.png'
import howlerLogo from '../assets/howler-logo.png'
import html5Logo from '../assets/html5-logo.png'
import mobxLogo from '../assets/mobx-logo.png'
import nodeLogo from '../assets/node-logo.png'
import socketioLogo from '../assets/socketio-logo.png'
import styledLogo from '../assets/styled-logo.png'
import synapticLogo from '../assets/synaptic-logo.png'
import vueLogo from '../assets/vue-logo.png'
import digitaloceanLogo from '../assets/digitalocean-logo.png'

const allIcons = {
  gatsby: {
    logo: gatsbyLogo,
    label: 'Gatsby'
  },
  react: {
    logo: reactLogo,
    label: 'React'
  },
  audio: {
    logo: audioLogo,
    label: 'Web audio'
  },
  howler: {
    logo: howlerLogo,
    label: 'Howler'
  },
  html5: {
    logo: html5Logo,
    label: 'html5'
  },
  mobx: {
    logo: mobxLogo,
    label: 'Mobx'
  },
  node: {
    logo: nodeLogo,
    label: 'Node'
  },
  socketio: {
    logo: socketioLogo,
    label: 'Socket.IO'
  },
  styled: {
    logo: styledLogo,
    label: 'Styled components'
  },
  synaptic: {
    logo: synapticLogo,
    label: 'Synaptic.js'
  },
  vue: {
    logo: vueLogo,
    label: 'Vue'
  },
  digitalocean: {
    logo: digitaloceanLogo,
    label: 'DigitalOcean'
  }
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: bottom;

  ${media.tablet`
    width: ${props => props.wide ? '100%' : '50%'};
    height: 40vw;
  `}
`

const Image = styled.div`
  align-items: flex-end;
  justify-content: center;
  display: block;
  width: 100%;
  height: 70vw;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet`
  height: 100%;
`}
`

const Overlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  padding-right: 10px;
  box-sizing: border-box;
  background-color: rgba(255,255,255, 0.75);
  transition: opacity 250ms;

  ${media.tablet`
    position: absolute;
    top: 0;
    opacity: 0;
    padding: 80px;
  `}

  h2 {
    margin: 0;
  }

  p {
    margin: 18px 0;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    color: #2b7;
  }

  :hover {
    opacity: 1;
  }
`

const Icons = styled.div`
  display: flex;
  margin-top: 24px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  img {
    height: 16px;
    margin-right: 4px;
  }

  span {
    font-size: 12px;
  }
`;

const Project = ({imageSrc, title, description, icons, link}) => {

  return (
    <Container>
      <Image src={imageSrc}/>
      <Overlay>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank">Demo</a>
        <Icons>
          {icons.map(icon => (
            <IconText key={icon} >
              <img alt="" src={allIcons[icon].logo} />
              <span>{allIcons[icon].label}</span>
            </IconText>
          ))}
        </Icons>
      </Overlay>
    </Container>
  );
}

export default Project;