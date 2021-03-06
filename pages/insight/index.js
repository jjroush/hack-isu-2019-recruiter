import React from 'react'
import Head from 'next/head'
import UserCard from '../../components/userCard'
import { Layout, Column } from '../../components/layoutStyles'
import Item from '../../components/item'

let props = {
  avatar_url: "https://picsum.photos/200/300",
  html_url: "https://github.com/octocat",
  repos_url: "https://api.github.com/users/octocat/repos",
  name: "Monalisa Octocat",
  company: "GitHub",
  blog: "https://github.com/blog",
  location: "San Francisco",
  email: "octocat@github.com",
  hireable: false,
  bio: "There once was...",
  public_repos: 2,
  followers: 20,
  following: 0,
};

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <Column>
        <UserCard {...props} />
      </Column>
      <Column>
        <Item status={0} />
      </Column>
    </Layout>

  </div>
)

export default Home