import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Index.module.css'
import { ProjectProps } from '../../models/project.prop'

const Hero = ({data}:ProjectProps) => {
   return <div className={styles['hero-content']}>
        <div className='hero-content-container flex flex-col lg:flex-row'>
        <div className='hero-content-description lg:w-screen-half h-screen py-4 px-20' style={{background: `${data.heroColor}`}}>
            <div className='flex justify-evenly text-center flex-col h-full w-full'>
              <div className='mx-auto prose md:prose-lg lg:prose-2xl'>
                  <h1 className='pb-10 lg:pb-0'>{data.title}</h1>
                  <h3>{data.heroIntro}</h3>
              </div>
                <div className='hero-content-cta'>
                <Link href={`/project/${data.slug}`} passHref>
                  <a className='hero-link text-2xl'>See More →</a>
                </Link>
                </div>
            </div>
          </div>
          <div className='hero-content-description lg:w-screen-half h-screen relative' >
            <Link href={`/project/${data.slug}`} passHref>
              <a>
              <Image 
                layout='fill'
                priority
                objectFit='cover'
                quality="75"
                blurDataURL={`/img/${data.slug}/placeholder/${data.heroImageUrl}`}
                placeholder="blur"
                src={`/img/${data.slug}/${data.heroImageUrl}`} 
                className={`object-cover h-full ${styles['hero-img']}`}
                alt={`${data.title} – ${data.heroIntro}`} 
                />
              </a>

            </Link>

          </div>
        </div>
      </div>
}

export default Hero;