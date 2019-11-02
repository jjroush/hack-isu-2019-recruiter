import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const NewText = styled.h1`
  text-align: center;
  color: red;
  background-color: blue;
`

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Git a Dev</h1>
      <p className='description'>
        Use the power of Github to find good developers and learn what makes a good profile.
      </p>

      <div className='row'>
        <Link href='/insight' className="card">
          <NewText>{'Insight'}</NewText>
        </Link>
        <Link href='/search'>
          <NewText>{'Search'}</NewText>
        </Link>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
