import { getRedirectStatus } from 'next/dist/lib/load-custom-routes'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import { requests } from '../utils/requests'

export const getServerSideProps = async (context) => {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then((response) => response.json())
    
  return {
    props: {
      results: request.results,
    },
  }
}

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu / Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}
