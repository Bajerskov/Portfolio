import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app';

// function MyApp(props: AppProps) {
function MyApp(props: AppProps) {

  const { Component, pageProps} = props;

  return <Layout> 
            <Component {...pageProps} />
         </Layout>
  
  
}

export default MyApp
