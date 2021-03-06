import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from './grid'
import { media, sizes, slideFromTop, slideFromLeft } from '../styles'

const Sticky = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`

const Logo = styled.div`
  pointer-events: auto;
  background-color: ${props => props.theme.primary};
  display: inline-block;
  color: ${props => props.theme.white};
  padding: 16px;
  animation: ${props => (props.aside ? slideFromLeft : 'none')} 400ms;
  margin-top: ${props => (props.aside ? 0 : props.theme.gutter.l)};
  ${media.desktop`
    margin-top: ${props =>
      props.aside ? props.theme.gutter.m : props.theme.gutter.l};
  `};
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logoAside: false,
      width: 1400,
      hasScrolled: false,
    }
  }

  componentDidMount = () => {
    const handleLogoPositioning = () => {
      const isMobile = innerWidth < sizes.tablet
      const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
      let logoAside = scrollTop > 20

      if (this.state.logoAside !== logoAside) {
        this.setState({ logoAside, hasScrolled: true })
      }

      const width = innerWidth
      if (this.state.width !== width) {
        this.setState({ width })
      }
    }

    window.addEventListener('scroll', handleLogoPositioning)
    window.addEventListener('resize', handleLogoPositioning)
  }

  render() {
    const isDesktop = this.state.width > sizes.desktop
    return (
      <Sticky relative={!this.state.logoAside}>
        <Grid
          col1={this.state.logoAside}
          centerItems={this.state.logoAside && isDesktop}
        >
          <Link to="/">
            <Logo aside={this.state.logoAside}>
              {this.state.logoAside ? 'LF' : 'LUFTARE'}
            </Logo>
          </Link>
        </Grid>
      </Sticky>
    )
  }
}
