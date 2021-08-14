import { ArticleProp } from '../../models/project.prop'
 
export default function ArticleDescription({data}:ArticleProp) {
    return(        
    
    <section className='article-description py-36 space-y-20 container-space'>
        <div className='prose-xl md:text-justify'>
            <h3>{data.title}</h3>
            <p className='px-4'>
                {data.text}
                </p>
        </div>
    </section>
);
}