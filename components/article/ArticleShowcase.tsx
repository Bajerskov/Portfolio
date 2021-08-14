import Image from 'next/image'
import { ArticleProp } from '../../models/project.prop'

export default function ArticleShowcase ({data}:ArticleProp) {
    return(
        <section className='article-showcase flex bg-white justify-center'>
                <Image 
                width='1920' 
                height='1080'
                priority
                blurDataURL={`/img/${data.slug}/placeholder/${data.imgUrl}`}
                placeholder="blur"
                src={`/img/${data.slug}/${data.imgUrl}`} 
                className='w-full m-auto' 
                alt='Cover photo'
                 />
        </section>
    )
}