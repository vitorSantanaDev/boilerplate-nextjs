import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobaStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />
        <meta
          name="description"
          content="A simple project started to work with Typescript, React, NextJs and Styled Components"
        />
      </Head>
      <GlobaStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
