import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Nav, NavItem } from "reactstrap";

const GREY = "#efefef";
const styles = {
  card: {
    boxShadow: `3px 3px 10px ${GREY}`,
  },
};

export default function Layout(props) {
  const title = "Welcome to Nextjs";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        {/* <script src="https://js.stripe.com/v3" /> */}
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: dark;
            }
          `}
        </style>
        <Nav className="navbar" style={styles.card}>
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/login">
              <a className="nav-link">Sign In</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/register">
              <a className="nav-link"> Sign Up</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}
