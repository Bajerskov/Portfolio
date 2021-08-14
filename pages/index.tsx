import Hero from '../components/index/Hero'
import PersonalItems from '../components/index/PersonalItems'
import AnimatedButton from '../components/AnimatedButton'
import Trisplit from '../components/TriSplit'
import { GetStaticProps } from 'next'

import { getPosts } from '../lib/api'
import { ProjectType } from '../models/project.prop'
import { infoTileType } from '../models/infoTile.prop'


type props = {
  heroData: ProjectType[] | null;
  tileData: ProjectType[] | null;
}

export default function Home(props:props) {

  const heroPost = props.heroData;
  const tiles = props.tileData;

  //handle if undefined props

  if(!heroPost) {
    /**
     * 
     * Draw placeholder items and try loading again.
     */
    console.log("Heropost is undefined");
  }
  if(!tiles) {
    console.log("Tiles is undefined");
  }

  const personalItemsData = [
    {
      svg: 'duo-graduation',
      bg: 'rgb(110, 231, 183)',
      title: 'I\'m an Interaction Designer',
      content: 'I have a Master\'s degree in Interaction Design from Aalborg university and I love everything about doing UX to create and improve products and the users lifes.  '
    },
    {
      svg: 'duo-rocket',
      bg: 'rgb(147, 197, 253)',
      title: 'Front-End design is what i do',
      content: 'I have been involved in webdevelopment for more than 10 years (owned this website for 9) where i have worked mostly with creating small projects thinking I could start a business! I even naively thought i could make a social network!'
    },
    {
      svg: 'duo-heart',
      bg: 'rgb(252, 165, 165)',
      title: 'Music is my passion',
      content: 'I\'ve played Bass for a long time, studied music in High School and even sang in the local church choir. I also love listening to music. floating away on a cloud of good sound from my prized AKG K701.'
    },
    {
      svg: 'duo-stars',
      bg: 'rgb(252, 211, 77)',
      title: 'Sailing the world is my dream',
      content: 'My life goal is to have sailed around the globe atleast once, prefferably forever! Sailling to new exotic places, meeting new cultures, enjoying tropical beaches and taking a step back from a hectic world.'
    },
  ]
return (<>

{/* Hero section */ }
    <section id='hero' className='pb-20'>
      <div id='hero-container' >
        {
        
        heroPost && heroPost.map((item:ProjectType, index:number ) => <Hero key={index} data={item} />)
      
        } 
      </div>
    </section>

{/* Other projects section */}
    {
            
               (tiles && tiles.length > 0) && <Trisplit tiles={tiles} title='Here are some other cool projects🔥' /> 
    }

{/* Personal details section */}
    <section id="personal-intro" className='container-space'>
      <div className='prose-lg md:prose-xl lg:prose-2xl text-center py-10'>
        <h2>Should I be your next employee?</h2>
      </div>
      <div className='md:flex flex-row rounded-3xl bg-white'>
        <div className='w-full md:w-2/3 p-5 flex-grow md:flex flex-wrap'>
          {personalItemsData.map((item: infoTileType, index:number) => <PersonalItems key={index} item={item} />)}
        </div>
      </div>
    </section>

{/* Direct to more about me info */}
    <section id="contact-leader" className='container-space prose-lg md:prose-xl lg:prose-2xl py-20 xl:py-36'>
      <h2 className='text-center'> Want to know more about me ?</h2>
      <div className='flex flex-col md:flex-row md:justify-center md:space-x-8 md:items-center text-center items-center justify-center'>
        <AnimatedButton url="/cv" text="Read my CV"
         />
        <span className='block text-gray-500 leading-loose align-middle'>Or</span>
        <AnimatedButton url="#Contact" text="Contact me!" />
      </div>
    </section>
</>);
 
}

export const getStaticProps: GetStaticProps = async context => {
  let heroData:ProjectType[] | null = await getPosts({limits: "limit:2", filters: "isHero:1", select: "title,slug,heroIntro,heroImageUrl,heroColor"});
  let tileData:ProjectType[] | null = await getPosts({limits: "limit:3", filters: "isHero:0"});

  //The ajax request already has been json parsed, except for the child nodes.

  return { props: { heroData, tileData }}

}