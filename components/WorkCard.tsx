/*eslint import/no-unresolved: 2*/
import Link from 'next/link'
import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import { ProjectProps, ProjectType} from '../models/project.prop'

export default function WorkCard({data}:ProjectProps) {
    
    const controls = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0 })

    useEffect(() => {
        if(inView)
            controls.start('visible');

        if(!inView)
            controls.start('hidden');
    }, [controls, inView]);

    const cardVariants = {
        hidden: { 
            scale: 0.8,
            opacity: 0.5
           
         },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
            type: "spring",
            stiffness: 260,
            damping: 20
        },
    };
    const cardTransition = {
        
            type: "spring",
            stiffness: 260,
            damping: 20
          
    };
    
    const urlSlug = `/project/${data.slug}`;

    return (
        <motion.div className='py-6 flex flex-col justify-center items-center' ref={ref} initial='hidden' animate={controls} variants={cardVariants} >
            <Link href={urlSlug} >
                <a>
                    <div className='overflow-hidden'>
                        <Image 
                        width='500' 
                        height='500' 
                        priority
                        blurDataURL={`/img/${data.slug}/placeholder/${data.thumbnailUrl}`}
                        placeholder="blur"
                        src={`/img/${data.slug}/${data.thumbnailUrl}`} 
                        alt={`${data.title} – ${data.details}`} 
                        className='max-w-full mx-auto transform hover:scale-110 transition duration-200'/>
                    </div>
                </a>
            </Link>
            
            
            <div className='caption text-center md:pb-5 md:pt-2 md:px-8 w-5/6'>
                    <Link href={`/project/${data.slug}`}>
                        <a className='prose md:prose-lg '>
                            <b className='font-semibold'> {data.title} – {data.details}</b> 
                        </a>
                    </Link>
                    
                  
                  
            </div>
            
        </motion.div>
    );
}