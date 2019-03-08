import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import Header from './../components/organisms/header';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>about</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="about granturismo world" />
        </Head>
        <Header />
        <Jumbotron fluid>
          <Container>
            <h1 className="display-3">about</h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
