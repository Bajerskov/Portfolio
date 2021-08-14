
import Link from 'next/link'

export default function ToTop() {

    return <>
       
            <Link href='#Navbar'>
             <a className='cursor-pointer'>
                 <div className='p-2 rounded-md bg-gray-700 shadow-sm text-white fixed bottom-3 right-5 z-50'>
                 ☝
                 </div>
             </a>
            </Link>
           
    </>
}