import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <div
          style={{
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: '#666',
          }}
          >
           Freelance Web Developer / Entrepreneur
          </div>
        </>
      )
    } else {
      header = (
        <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <div
        style={{
          ...scale(-0.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: '#666',
        }}
        >
            This is my blog
        </div>
        </>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(23),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
          <form method="post" action="#" data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" id="name" required />
              <input type="text" name="email" id="email" required />
              <textarea name="message" id="message" rows="5" required />
              <input type="submit" value="Send Message" />
          </form>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          | Built by <a href="https://justinwhall.com">Justin W. Hall</a>
        </footer>
      </div>
    )
}

export default Layout
