import { AcademicCapIcon, CalendarIcon, GlobeIcon } from '@heroicons/react/outline'
import Headshot from '../public/img/headshot.jpg'
import Image from 'next/image'
import Head from 'next/head'

export default function cv() {

return (
    <>
    
    <Head>
        <title>Anders Fejerskov Portfolio - CV</title>
        <meta property="og:title" content="Anders Fejerskov Portfolio - CV" key="title" />
    </Head>
    
<div className="flex flex-col flex-shrink md:flex-row md:space-x-4 md:space-y-4 container-space">
    <div className="py-4 cv-flex-main flex-col">

        <div className="flex flex-col lg:flex-row">

            <div className="px-4">
                {/* Left */}
                <div className="py-4">
                    <h3 className="font-semibold text-lg">Anders Linde Fejerskov</h3>
                    <h4 className="text-gray-700 text-md">Interaction Designer</h4>
                </div>
                <h4 className="font-semibold text-md">Resumé</h4>
                <p className=" border-b pb-5 border-red-400">
                    Jeg motiveres af at løse problemer der har betydning
                    for
                    kunder og som gør en
                    forskel for brugere, Jeg drives af at perfektionere mit arbejde og benytte
                    tværfaglige
                    værktøjer til at opnå mit mål. Jeg foretrækker at arbejde i et team hvor et problem
                    løses i
                    fællesskab, hvor én løsning ikke nødvendigvis er bedre end en anden. Jeg mener at
                    arbejde
                    skal være sjovt og udfordrende, lærerigt og udviklende.
                </p>
            </div>
        </div>

        <div className="flex flex-col sm:mt-8">

            <div className="px-4">
                <h2 className="font-bold text-lg">Kompetencer</h2>

                <ul className="">
                    <li>
                        <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                            Udvikling</h3>

                        <div className="flex border-l-2 border-green-500 ml-1 pl-4">

                            <p>
                                Jeg har arbejdet med webudvikling i mere en 10 år og har derigennem opnået en de
                                nødvendige kompetencer til at kunne planlægge, designe og kode projekter helt fra
                                bunden. Sammen med de kurser jeg har haft igennem universitet har jeg opnået en
                                dybdegående foreståelse for software engineering, software processer og entrepreneuskab
                                i IT.
                            </p>



                        </div>
                    </li>

                    <li>
                        <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                            User Research</h3>

                        <div className="flex border-l-2 border-green-500 ml-1 pl-4">

                            <p>
                                Igennem 6 projekter med behov for klarlægning af bruger behov har jeg
                                lært, øvet og benyttet teknikker til at planlægge og udføre user
                                research.
                                Med brug af metoder som interview, workshop, observation og usability
                                studie har jeg lært hvad det kræver at facilitere user research, med
                                denne erfaring har jeg også lært do&apos;s og don&apos;ts
                            </p>



                        </div>
                    </li>

                    <li>
                        <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                            Prototyping</h3>

                        <div className="flex border-l-2 border-green-500 ml-1 pl-4">

                            <p>
                                Jeg har en stor interesse i at producere noget fra ingenting, specielt
                                kode, fysisk design og fysiske elektriske dimser. Jeg har fået større
                                erfaring med produktion og udvikling af prototyper der er interaktive i gennem
                                mit studie og forstår begrænsinger og muligheder.
                            </p>



                        </div>
                    </li>

                    <li>
                        <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                            Sprog kundskaber</h3>

                        <div className="flex border-l-2 border-green-500 ml-1 pl-4">

                            <p>
                                Dansk(Modersmål), Engelsk(højt nivaeu), Tysk(mellem forståelse) &
                                Spansk(lav forståelse)
                            </p>



                        </div>
                    </li>

                </ul>

            </div>


            <div className="py-6">
                <h2 className="font-bold text-lg px-4 ">Uddannelse</h2>
                <ul className="px-4 space-y-8 md:space-y-4">
                    <li className="flex flex-col space-y-2">
                        <div className="">
                            <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                                Master i Interaktions Design</h3>


                        </div>
                        <div>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <CalendarIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                2019-2021</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <GlobeIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Aalborg University</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <AcademicCapIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Msc. Interaction Design</span>
                        </div>




                        <div className="flex border-l-2 border-blue-500 ml-1 pl-4">

                            <p>
                                Under min kandidat uddannelse har fokuset handlet mere om
                                entreprenurship, software planning in praxis, arbejde i design studie.

                                Mit speciale fokusere på interkations muligheder der kan reducere
                                oplevelsen af stres under daglig pendling i egen bil. Projektet
                                resulterede i et mindre kvalitativt studie der kan støtte arbejede med
                                fremtidig pendler stress.

                            </p>



                        </div>
                    </li>
                    <li className="flex flex-col space-y-2">
                        <div className="">
                            <h3 className="text-md leading-9 pb-2 font-semibold sm:inline pr-4">
                                Bachelor i Interaktions Design</h3>



                        </div>

                        <div>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <CalendarIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                2016-2019</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <GlobeIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Aalborg University</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <AcademicCapIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Bsc. Interaction Design</span>


                        </div>

                        <div className="flex border-l-2 border-blue-500 ml-1 pl-4">

                            <p>
                                Bacheloren havde fokus på at afprøve forskellige metoder og teknikker
                                som usability, User Centered Design, Design methods, Programmering,
                                Prototyping.
                                Med de metoder i tasken har der også været et stort fokus på at få brugt
                                metoderne i semester projekter for at få det hele under neglene.
                            </p>



                        </div>
                    </li>
                    <li className="flex flex-col space-y-2">
                        <div className="">
                            <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                                Gymnasiel uddannelse</h3>


                        </div>
                        <div>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <CalendarIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                2012-2014</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <GlobeIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Skive Gymnasium</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <AcademicCapIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                STX</span>


                        </div>


                        <div className="flex border-l-2 border-blue-500 ml-1 pl-4">

                            <p>
                                Hovedfag: Musik, Historie, Engelsk, Dansk, Spansk
                            </p>



                        </div>
                    </li>



                </ul>
            </div>

            <div className="py-6">
                <h2 className="font-bold text-lg px-4 ">Frivilligt arbejde</h2>
                <ul className="px-4 space-y-8 md:space-y-4">
                    <li className="flex flex-col space-y-2">
                        <div className="">
                            <h3 className="text-md  leading-9 pb-2 font-semibold sm:inline pr-4">
                                F-klubben</h3>



                        </div>

                        <div>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <CalendarIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                2019-2021</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <GlobeIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Aalborg University</span>


                        </div>
                        <div className="flex border-l-2 border-yellow-500 ml-1 pl-4">

                            <p>
                                Medlem af flere udvalg Treo (Indkøb), FooBar (Fredags bar), Initiv
                                (Fest/arrangement) mens jeg studerede i den legendariske <a
                                    className="underline text-blue-400" href="http://fklub.dk"
                                    target="_blank" rel='noreferrer'>F-klub</a>. 

                                Jeg har været aktiv siden 2017 til 2019 hvor jeg blandt andet har været
                                ansvarlig for bestiling af special drikkevare, bestiling af kaffe,
                                fredags bar og har hjulpet til mange andre steder for at holde f-klubben
                                kørende.

                            </p>



                        </div>
                    </li>
                    <li className="flex flex-col space-y-2">
                        <div className="">
                            <h3 className="text-md leading-9 pb-2 font-semibold sm:inline pr-4">
                                Buddy</h3>



                        </div>

                        <div>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <CalendarIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                2018-2020</span>
                            <span
                                className="rounded-full px-3 text-sm py-1 inline-block bg-white m-1 sm:m-0 shadow-inner">
                                <GlobeIcon className="inline h-6 w-6 pr-2" aria-hidden="true" />
                                Aalborg University</span>


                        </div>

                        <div className="flex border-l-2 border-yellow-500 ml-1 pl-4">

                            <p>
                                Fungerede som kontaktperson for udvekslingsstuderende og hjalp med alt
                                fra praktiske ting som akkomodation og sygesikring til det sociale.
                                Det har været utroligt sjovt, lærerigt og givet mig bedre forståelse for
                                andre nationaliteter.
                            </p>



                        </div>
                    </li>




                </ul>
            </div>




        </div>





    </div>


    <div className="cv-flex-side flex-col sm:flex-row md:flex-col">
        { /* Sidebar */}
        <div className=" ">
            { /* Right */ }
            <Image 
                src={Headshot}
                alt='Picture of me!'
                className='px-4 py-4 w-1/2 md:w-full'
                
            />
        </div>

        <div className="flex flex-col px-4 lg:pt-7 ">
            <div className="pb-4 ">
                <h5 className="font-semibold">Om mig</h5>
                Jeg er 27 år og kommer fra en kreativ og musikalsk baggrund, jeg elsker at arbejde på
                ting der giver mening og mister interesse ved meningsløse opgaver. Jeg foretrækker at
                fokusere på mit arbejde lene, men kan ikke undvære at sparre med et team.
            </div>
            { /* Second col */ }
            <h3 className="text-lg font-semibold">Contact information</h3>
            <div className="py-2">
                <h5 className="font-semibold">E-mail</h5>
                <a href="mailto:mail@anderslf.dk" className="underline text-blue-400">mail@anderslf.dk</a>
            </div>

            <div className="py-2">
                <h5 className="font-semibold">Linked-in </h5>
                <a href="https://www.linkedin.com/in/anders-fejerskov/"
                    className="underline text-blue-400">linkedin.com/in/anders-fejerskov/</a>

            </div>

            <div className="py-2">
                <h5 className="font-semibold">Phone. no.</h5>
                (+45) 41 29 49 26
            </div>
            <div className="py-2">
                <h5 className="font-semibold">Bopæl</h5>
                Aalborg. Flytter gerne for job.
            </div>

            <div className="py-2">
                <h5 className="font-semibold">Portfolio</h5>
                <a href="https://anderslf.dk" className="underline text-blue-400">https://anderslf.dk</a>

            </div>
        </div>
    </div>

</div>
</>
)
}