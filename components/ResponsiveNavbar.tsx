/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import { Fragment } from 'react'
import { useRouter } from 'next/router';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const ContactMenu = [
    // {
    //     label: 'About me',
    //     url: '/about-me',
    //     active: false
    // },
    {
        label: 'CV',
        url: '/cv',
        active: true
    },
    {
        label: 'Contact',
        url: '#Contact',
        active: true
    }
];

const ContentMenu = [
    {
        label: 'Home',
        url: '/',
        active: true
    },
    {
        label: 'My projects',
        url: '/projects',
        active: true
    },
    {
        label: 'Github',
        url: 'http://github.com/bajerskov',
        active: true
    }
];

export default function ResponsiveNavbar() {
    const router = useRouter();
    

  return (
      <Disclosure as="nav" id="Navbar">
        {({ open }) => (
          <>
            <div className="container-space mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                   
                        <Link href='/'>
                            <a className='md:prose'>
                                <h2 className='prose'>Anders <br />Fejerskov <br />Portfolio</h2>
                            </a>
                        </Link>
                     
                  </div>
                  <div className="hidden md:block ml-10 space-x-4">
                   
                        {ContentMenu.map((item, itemIdx) => 
                                <Fragment key={itemIdx}>
                                    <Link href={item.url}>
                                        <a  className={`mx-5 text-lg 
                                            ${ router.asPath === item.url ? "font-semibold border-b-2 border-green-600  " : ""}`}
                                        >
                                            {item.label}
                                        </a>
                                    </Link>
                                </Fragment>
                        )}
                    
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {ContactMenu.map((item, itemIdx) => 
                            <Fragment key={itemIdx}>
                                <Link href={item.url}>
                                    <a  className={`mx-5 text-lg 
                                        ${ router.asPath === item.url ? "font-semibold border-b-2 border-green-600  " : ""}`}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            </Fragment>
                    )}
                  </div>
                </div>
                
                <div className="flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden bg-gray-50 shadow-inner">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">

              {ContentMenu.map((item, itemIdx) => 
                                <Fragment key={itemIdx}>
                                    <Link href={item.url}>
                                        <a  className={`text-black hover:bg-gray-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium
                                            ${ router.asPath === item.url ? "bg-gray-500 text-white " : ""}`}
                                        >
                                            {item.label}
                                        </a>
                                    </Link>
                                </Fragment>
                        )}

              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">

                <div className="mt-3 px-2 space-y-1">
                {ContactMenu.map((item, itemIdx) => 
                                <Fragment key={itemIdx}>
                                    <Link href={item.url}>
                                        <a  className={`text-black hover:bg-gray-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium
                                            ${ router.asPath === item.url ? "bg-gray-900 text-white " : ""}`}
                                        >
                                            {item.label}
                                        </a>
                                    </Link>
                                </Fragment>
                        )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}


      </Disclosure>

  )
}
