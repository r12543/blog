import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Container } from "semantic-ui-react";

import "./index.css";
import "../styles/layout.css";

import Media from "react-media";

const Header = () => (
  <Container>
    <Container>
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          fontSize: "18px"
        }}
      >
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          A Lost Bohemian
        </Link>
      </h1>
      <br />
      <div
        style={{
          marginBottom: "3rem",
          textAlign: "center"
        }}
      >
        <a
          href="/"
          style={{
            color: "black",
            textDecoration: "none",
            marginRight: "15px"
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          About
        </a>
      </div>
    </Container>
  </Container>
);

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      />
      <Helmet title="Lost Bohemian Blog" />
      <Header />
      <Container>
        <Media query={{ maxWidth: 848 }}>
          {matches =>
            matches ? (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 1 }}>{children()}</div>
              </div>
            ) : (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 2.5, paddingRight: "30px" }}>
                  {children()}
                </div>
              </div>
            )
          }
        </Media>
      </Container>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
