import Image from 'next/image'
import agraMetroGolLogo from '/public/metroLogoGol.png'
import AgraMetroKeyDetailsUpdates from '/public/blogsImg/Agra Metro Key details & updates.webp'
import expertFirstTimeVisitors from '/public/blogsImg/expert tip for firstTime visitors.jpg'
import agraTourism from '/public/blogsImg/agraTourism.jpg'
import vrindavanMathura from '/public/blogsImg/vrindavanMathura.jpg'

import "./index.css"


export default function LatestBlogs() {


    return (
        <>

            <section className="font-quando xl:px-18 px-4 md:px-6 py-8">

                <div className="lg:p-4 text-center p-2 text-gray-600 font-bold lg:text-3xl text-3xl">Latest Blogs</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 cursor-pointer items-center justify-items-center gap-6 py-6 px-3 md:px-1 w-full">


                    <div className="max-w-sm hover:shadow-md bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <Image className="rounded-t-lg h-44 w-full" src={AgraMetroKeyDetailsUpdates} alt="Blog thumbnail" />

                        {/* Half  */}
                        <div className="flex flex-row ">

                            <div className='m-2'>
                                <Image className="rounded-full w-12" src={agraMetroGolLogo} alt="" />
                            </div>

                            <div className='flex flex-col gap-1 mr-2 my-3'>
                                <h5 className="boNTXXBlogSection text-sm font-semibold tracking-tight text-gray-600 dark:text-white">Agra Metro: Key details & Updates...............</h5>

                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Agra Metro</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">26/06/2024</p>

                                    <a className="inline-flex justify-center items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="max-w-sm hover:shadow-md bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <Image className="rounded-t-lg h-44 w-full" src={expertFirstTimeVisitors} alt="Blog thumbnail" />

                        {/* Half  */}
                        <div className="flex flex-row ">

                            <div className='m-2'>
                                <Image className="rounded-full w-12" src={agraMetroGolLogo} alt="" />
                            </div>

                            <div className='flex flex-col gap-1 mr-2 my-3'>
                                <h5 className="boNTXXBlogSection text-sm font-semibold tracking-tight text-gray-600 dark:text-white">Exploring Agra: Expert Tips for First-Time Visitors</h5>

                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Agra Metro</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">26/06/2024</p>

                                    <a className="inline-flex justify-center items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="max-w-sm hover:shadow-md bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <Image className="rounded-t-lg h-44 w-full" src={agraTourism} alt="Blog thumbnail" />

                        {/* Half  */}
                        <div className="flex flex-row">

                            <div className='m-2'>
                                <Image className="rounded-full h- w-12" src={agraMetroGolLogo} alt="" />
                            </div>

                            <div className='flex flex-col gap-1 mr-2 my-3'>
                                <h5 className="boNTXXBlogSection text-sm font-semibold tracking-tight text-gray-600 dark:text-white">Agra Tourism: Complete Travel Tips and Insider Secrets</h5>

                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Agra Metro</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">6/07/2024</p>

                                    <a className="inline-flex justify-center items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="max-w-sm hover:shadow-md bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <Image className="rounded-t-lg h-44 w-full" src={vrindavanMathura} alt="Blog thumbnail" />

                        {/* Half  */}
                        <div className="flex flex-row ">

                            <div className='m-2'>
                                <Image className="rounded-full w-12" src={agraMetroGolLogo} alt="" />
                            </div>

                            <div className='flex flex-col gap-1 mr-2 my-3'>
                                <h5 className="boNTXXBlogSection text-sm font-semibold tracking-tight text-gray-600 dark:text-white">Mathura-Vrindavan travel guide for First-Time Visitors</h5>

                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Agra Metro</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">16/07/2024</p>

                                    <a className="inline-flex justify-center items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </section >



        </>)
}

