import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <h1 className="title">Welcome to Gran Turismo World!</h1>
  </div>
)

export default Home
