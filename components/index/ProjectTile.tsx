import Link from 'next/link'
import Image from 'next/image'
import { ProjectType } from '../../models/project.prop';

type props = {
    data: ProjectType;
}

export default function OtherProjects(props:props) {
    const data = props.data;
    return (
            <div className='p-6 flex-1 flex flex-col items-center' >
                <Link href={`/project/${data.slug}`} passHref>
                    <a>
                        
                           <Image 
                            width='500'
                            height='500'
                            src={`/img/${data.slug}/${data.thumbnailUrl}`} 
                            alt={data.title} 
                            className='max-w-full mx-auto' />
                     
                    </a>
                </Link>
                <div className='caption text-center md:pb-5 md:pt-2'>
                    <Link href={`/project/${data.slug}`}>
                        <a className='prose md:prose-lg'>
                            <b className='font-semibold'> {data.title} </b> 
                        </a>
                    </Link>
                </div>
            </div>
    );
}