import ProjectTile from './index/ProjectTile'
import { ProjectType, ProjectProps } from '../models/project.prop'

type props = {
    tiles: ProjectType[];
    title: string;
}

export default function trisplit({tiles, title}:props) {


    return (
        <section id="extra-projects" className=' py-20 container-space'>
            <div className='flex justify-center'>
                <div className='prose-xl pb-16'>
                    <h2 className='text-center'>Here are some other cool projects🔥</h2>
                </div>
            </div>
            <div id="trisplit" className='flex flex-col md:flex-row justify-evenly'>
                {tiles.map((item:ProjectType, index:number) => <ProjectTile key={index} data={item} />)}
            </div>
        </section>
    )
}


    