import WorkCard from '../components/WorkCard'
import { GetStaticProps } from 'next'
import { ProjectType } from '../models/project.prop'
import { getPosts } from '../lib/api'
import Head from 'next/head'

type props = {
    projects:ProjectType[];
}
export default function Projects( props:props) {
   
    let data = props.projects;

    const listHalf = Math.ceil(data.length / 2);
    const leftCol = data.slice(0, listHalf);
    const rightCol = data.slice(listHalf, data.length);


    return (
<>


        <Head>
            <title>Anders Fejerskov Portfolio - Projects</title>
            <meta property="og:title" content="Anders Fejerskov Portfolio - Projects" key="title" />
         </Head>
        <section className='space-y-14 h-full'>
            <div className='header container-space'>
                <div className='prose pt-8'>
                    <h2 className='md:font-semibold'>All my projects ↓</h2>
                </div>
            </div>
            <div className='projects-splitshow hidden lg:block'>
                <div className='projects-splitshow-container container-space md:flex md:justify-between space-x-10 xl:space-x-2'>
                    <div className='flex-1 space-y-5 md:flex md:flex-col md:items-center'>

                        { leftCol.map((item:ProjectType, index:number) => {{
                            return <WorkCard key={index} data={item} />
                        }}) }
                      
                    </div>
                    <div className='flex-1 space-y-5 md:flex md:flex-col md:items-center md:pt-40'>
                    { rightCol.map((item:ProjectType, index:number) => {{
                            return <WorkCard key={index} data={item} />
                        }}) }
                    </div>
                </div>
            </div>

            <div className='block lg:hidden'>
                <div>
                { data.map((item:ProjectType, index:number) => {{
                            return <WorkCard key={index} data={item} />
                        }}) }
                </div>
            </div>
        </section>
        </>
    );
};


    
export const getStaticProps: GetStaticProps = async context => {
    let projects:ProjectType[] | null = await getPosts({limits: "limit:10", select: "title,slug,details,thumbnailUrl,"});
  
    //The ajax request already has been json parsed, except for the child nodes.
  
    return { props: { projects }}
}