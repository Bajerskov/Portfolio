import * as React from 'react'
import Head from 'next/head'
import ResponsiveNavbar from './ResponsiveNavbar'
import Footer from './Footer'
import ToTop from './ToTop'
import { BrowserView } from 'react-device-detect'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

 const Layout: React.FunctionComponent = props => { 
    const { scrollYProgress} = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0,1], [0, 100])
    const width = useTransform(scale, (value) => `${value}%`)
    return (
        <>
        <Head>
            <meta name="description" content="Anders Fejerskov portfolio." />
            <meta property="og:title" content="My work — Anders Fejerskov" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Anders Fejerskov portfolio." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0" />
            <meta name="theme-color" content="#ffffff" />
            <title>Anders Fejerskov Portfolio</title>
            <script id="" src="./hotjar.js" type="text/javascript"></script>
        </Head>
        
        {/* Navbar */}
        <ResponsiveNavbar />
 
        {/* Progress bar*/}
        <motion.div className='sticky z-50 top-0 left-0 border-b-8 border-red-600 progress-bar' style={{width: width}} />

        {/* Pages are routed into this main div */}
        <main className='bg-gray-50 h-full pb-10'>
            { props.children }
        </main>

        {/* If on desktop then insert To the Top button*/}
        <BrowserView>
            <ToTop />
        </BrowserView>
            
        {/* Footer */}
        <Footer />
        </>
    )
};

export default Layout;
