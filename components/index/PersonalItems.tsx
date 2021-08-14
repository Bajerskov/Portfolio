import Image from 'next/image'
import { infoTileProp } from '../../models/infoTile.prop'
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


export default function PersonalItem({item}:infoTileProp) {
    return (
        <div className='lg:w-1/2 p-4 '>
            <div className='bg-gray-100 h-full rounded-lg p-5 mb-5 overflow-hidden'>
                <div className='flex flex-row space-x-4 prose'>
                    <div className='w-16 h-16 rounded-full flex flex-col justify-evenly' style={{background: `${item.bg}`}}>
                        <Image 
                            width='40'
                            height='40'
                            src={`/svg/${item.svg}.svg`}
                            className='w-9/12 mx-auto fill-current text-white'
                            alt='Alt'
                            />
                    </div>
                    <h4 className='inline-block mt-0' >
                        {item.title}
                    </h4>
                </div>
                <div className='text-justify py-5 text-'>
                    {item.content}
                </div>
            </div>

        </div>
    )
}
