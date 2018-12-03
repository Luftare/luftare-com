import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import favicon from '../assets/favicon.png'
import './index.css'

import Header from '../components/header'
import Footer from '../components/footer'
import { theme } from '../styles'

import previewImage from '../assets/preview.png'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: "Luftare's homepage" },
          { name: 'keywords', content: 'Luftare, website' },
          { property: 'og:image', content: previewImage },
          {
            property: 'og:description',
            content: "Luftare's developer portfolio.",
          },
          {
            property: 'og:url',
            content: 'https://luftare.com',
          },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Montserrat}',
          },
        ]}
      />
      <Header />
      <main style={{ zIndex: -1 }}>{children()}</main>
      <Footer>{data.site.siteMetadata.footerText}</Footer>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        footerText
      }
    }
  }
`
