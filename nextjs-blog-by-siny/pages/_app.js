import '../styles/globals.css'

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    </Head>
  
    <Component {...pageProps} />
  </>
}

export default MyApp
