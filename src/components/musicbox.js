import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Grid from './grid'
import { media } from '../styles'

const Container = styled.div`
  padding: 32px 0;
`

const TrackList = styled.div`
  > *:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const Track = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 4px;
  vertical-align: center;
  color: ${props => props.playing ? props.theme.primary : props.theme.black};
  cursor: pointer;
  transition: all 100ms;
  ${media.tablet`
    :hover {
      letter-spacing: 3px;
    }
  `}
}
`

const Play = styled.div`
  font-size: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.primary};
  cursor: pointer;
`

const triangleRotate = keyframes`
  0% {
    transform: rotateZ(0deg) translateX(17%) scaleY(0.6);
  }
  100% {
    transform:  rotateZ(360deg) translateX(17%) scaleY(0.6);
  }
`

const Triangle = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: ${props => props.size ? props.size : '20px'} solid transparent;
  border-bottom: ${props => props.size ? props.size : '20px'} solid transparent;
  border-left: ${props => props.size ? props.size : '20px'} solid ${props => props.accent? props.theme.primary : props.theme.black};
  margin-right: 4px;
  ${props => props.loading ? `
    animation: ${triangleRotate} 1.3s infinite;
    animation-timing-function: linear;
  ` : ''}
  transform: translateX(17%) scaleY(0.6);
`

const Block = styled.div`
  display: inline-block;
  width: 4px;
  height: 18px;
  margin-left: 3px;
  background-color: ${props => props.theme.black};
  transform: translate(-3px, 0%) scaleY(0.6);
`

const Blocks = styled.span`
  display: flex;
`

const TrackText = styled.span`
  margin-left: 12px;
`

const TrackTag = styled.span`
  font-size: 0.7em;
  border-radius: 4px;
  margin-left: 8px;
  padding: 4px 6px;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.white};
`


export default class MusicBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loading: false,
      currentTrackIndex: null,
      tracks: []
    }
  }

  componentDidMount() {
    this.audioElement = this.refs.audio;
    this.audioElement.addEventListener('ended', () => {
      this.setState({ playing: false });
    });
    this.audioElement.addEventListener('canplaythrough', () => {
      if(this.state.loading) {
        this.setState({ playing: true, loading: false });
        this.audioElement.play();
      }
    });
    this.setState({
      tracks: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Chill.wav?alt=media&token=ecce1da8-a433-4940-be00-788fb995d5f4',
          name: 'Amazement',
          tags: ['Chill']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Rough.wav?alt=media&token=6c22fdfb-ec68-438f-bb03-e4e0941cc1d0',
          name: 'Rough Wheels',
          tags: ['Rock']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Thoughts.wav?alt=media&token=d07181a7-f5a5-4a66-b9d3-955cbdec093e',
          name: 'Tragedy',
          tags: ['Piano']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Corporate.wav?alt=media&token=51065fe8-059b-461f-b506-90d09d7ea0ca',
          name: 'Horizons',
          tags: ['Cheerful']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Hybrid.wav?alt=media&token=c64dda47-3a1b-40b6-ba27-ea5679e7d208',
          name: 'Hybrid Mind',
          tags: ['Action']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Black.wav?alt=media&token=52829612-2421-4d35-91cb-1b8df799d0d1',
          name: 'Black Lights',
          tags: ['Metal']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Tavern.wav?alt=media&token=8c4cfa32-2917-473a-ade5-10918acf787e',
          name: 'Tavern',
          tags: ['Folk']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Cave.wav?alt=media&token=132f45cb-40e7-4dc7-b282-92626089e899',
          name: 'Tuesday',
          tags: ['Dubstep']
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/nuxt-list.appspot.com/o/Guitar.wav?alt=media&token=a8bb74ce-66d4-40e8-8fc8-8d2223ffa444',
          name: 'Pathos',
          tags: ['Guitar']
        }
      ]
    })
  }

  toggleTrack = (index) => {
    if(this.state.currentTrackIndex === index) {
      if(this.state.playing) {
        this.audioElement.pause();
        this.setState({ playing: false, loading: false })
      } else {
        if(this.state.loading) {
          this.setState({ playing: false, loading: false })
        } else {
          this.audioElement.play();
          this.setState({ playing: true })
        }
      }
    } else {
      this.setState({ currentTrackIndex: index, playing: false, loading: true })
      setTimeout(() => {
        this.audioElement.load();
      }, 0);
    }
  }

  render () {
    const currentSongSrc = this.state.currentTrackIndex !== null
      ? (this.state.tracks[this.state.currentTrackIndex] && this.state.tracks[this.state.currentTrackIndex].src)
      : '';
    return (
      <Container>
        <TrackList>
          {this.state.tracks.map((track, i) => (
            <Track key={i} playing={this.state.currentTrackIndex === i && this.state.playing} onClick={() => this.toggleTrack(i)}>
              {this.state.currentTrackIndex === i && this.state.playing
                ? <Blocks><Block /><Block /></Blocks>
                : <Triangle size='10px' inline loading={this.state.currentTrackIndex === i && this.state.loading} />
              }
              <TrackText>{track.name}</TrackText>
              {track.tags.map(tag => (
                <TrackTag>{tag}</TrackTag>
              ))}
            </Track>
          ))
          }
        </TrackList>
        <audio ref="audio">
          <source src={currentSongSrc} type="audio/wav" />
        </audio>
      </Container>
    )
  }
}
