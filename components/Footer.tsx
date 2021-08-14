import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link  from 'next/link'
import FooterStyle from '/styles/Footer.module.scss'

export default function Footer() {
    const controls = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0 })

    useEffect(() => {
        if(inView) {
            controls.start('visible');
            console.log("is visible");
        }
    
        if(!inView)
            controls.start('hidden');
    }, [controls, inView]);

    const iconVariants = {
        hidden: {
          pathLength: 0,
        },
        visible: {
          pathLength: 1,
        }
      }
    
    return(
        <footer className='relative container-space bg-black text-white py-10 h-screen '>
            <div className='z-10 relative flex justify-between flex-col h-full'>
                <div className='md:py-8 lg:16 xl:py-24 prose-2xl'>
                    <h1 id="Contact">Reach out to me here </h1>
                </div>
                <ul className='m-0 prose-2xl'>
                    <li>    
                        <Link href='http://facebook.com/anders.linde'>
                            <a className='footer-link'> Facebook</a>
                        </Link>
                    </li>
                    <li>    
                        <Link href='https://www.linkedin.com/in/anders-fejerskov/'>
                            <a className='footer-link'>Linked-In</a>
                        </Link>
                    </li>
                    <li>    
                        <Link href='https://github.com/Bajerskov'>
                            <a className='footer-link'>Github</a>
                        </Link>
                    </li>
                    
                </ul>
                <div  >
                    <ul className='space-y-5'>
                        <li className='prose-2xl'>
                            <a href="mailto:mail@anderslf.dk" className='footer-link'>mail@anderslf.dk</a> 
                        </li>
                        <li>
                            <a href="https://github.com/Bajerskov/portfolio" className='footer-link text-base text-gray-400 hover:text-gray-100'>Carefully crafted by Anders Linde Fejerskov &copy; 2021</a>
                        </li>
                    </ul>
                </div>
            </div>
       
            <div className="overflow-hidden absolute z-0 top-0 left-0 right-0 opacity-50 bottom-0 ">
                <div className='flex justify-end h-full w-full'>

                    {/* Technique borrowed from: https://codepen.io/yoksel/pen/MKgppV */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" className='svg-item overflow-visible w-1/3 pr-5' ref={ref}>
                    <defs>
                        <mask id="mask" maskUnits="userSpaceOnUse"
                            maskContentUnits="userSpaceOnUse">
                            <motion.path 
                                variants={iconVariants} 
                                initial='hidden' 
                                animate={controls}
                                transition={{ default: { duration: 3, ease: 'easeInOut' } }}
                                d="M0,35 m7,-5 c 1,0 -3.5,1 -1,6 l28,28 c 0,0 4,3 7,-2 l25,-50 c 2,-5 -2,-7 -5-5 z M22,53 l20,-24 -25,19 l0,15 z"/>
                        </mask>
                        <linearGradient id="gr-1" x1="0" y1="0" x2="100%" y2="100%">
                            <stop offset="15%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--1"]} />
                            <stop offset="45%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--2"]} />
                            <stop offset="55%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--2"]} />
                            <stop offset="85%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--3"]} />
                        </linearGradient>
                        <linearGradient id="gr-2" x1="0" y1="100%" x2="100%" y2="0%">
                            <stop offset="15%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--4"]} />
                            <stop offset="45%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--5"]}  stopOpacity="0"/>
                            <stop              className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--5"]}  stopOpacity="0"/>
                            <stop offset="85%" className={FooterStyle["stop-color"] + " " + FooterStyle["styles.stop-color--6"]} />
                        </linearGradient>
                    </defs>
                        <g mask="url(#mask)">
                            <rect 
                                fill="url(#gr-1)" 
                                width="100%" height="100%"
                            ></rect>
                            <rect 
                                fill="url(#gr-2)" 
                                width="100%" height="100%"
                            ></rect>
                        </g>
                    </svg>
                </div>  
            </div>
        </footer>
    );
}