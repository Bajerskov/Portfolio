import { ArticleProp } from '../../models/project.prop'


export default function ArticleHead ({data}:ArticleProp) {
    return         <section className='article-heading container-space'>
                        <div className='prose-2xl py-36 space-y-10 w-full'>
                            <h4>{data.subtitle}</h4>
                            <h1>{data.title}</h1>
                        </div>
                    </section>
}