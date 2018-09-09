import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";
import "../styles/layout.css";

import Media from "react-media";

const Header = () => (
  <div
    style={{
      background: "#f5f5f5",
      marginBottom: "3rem",
      borderBottom: "2px solid #e6e6e6"
    }}
  >
    <div
      style={{
        background: "#f5f5f5",
        margin: "0 auto",
        maxWidth: 980,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1
        style={{
          background: "#f5f5f5",
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
          Lost Bohemian
        </Link>
      </h1>
      <br />
      <div
        class="home"
        style={{
          background: "#f5f5f5",
          marginBottom: "3rem"
        }}
      >
        <a href="/" id="h1" display="inline" width="20px">
          Home
        </a>
        <a href="/about" id="h2" display="inline">
          About
        </a>
      </div>
    </div>
  </div>
);

const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      maxWidth: 960,
      padding: "0.5rem",
      marginBottom: "25px"
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Lost Bohemian Blog" />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
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
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
