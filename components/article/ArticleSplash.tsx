import Image from 'next/image'
import { ArticleProp } from '../../models/project.prop'


export default function ArticleSplash ({data}:ArticleProp) {
    return(
        <section className='article-splash z-10 block relative h-screen'>
                <Image 
                layout="fill"
                priority
                blurDataURL={`/img/${data.slug}/placeholder/${data.imgUrl}`}
                placeholder="blur"
                src={`/img/${data.slug}/${data.imgUrl}`} 
                className='w-full h-full object-cover' 
                alt='Cover photo'
                 />
    
        </section>
    )
}