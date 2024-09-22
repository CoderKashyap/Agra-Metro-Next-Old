// import "./happyCustomerCounter.css"
import CountUp from 'react-countup';

export default function NumericCounterInfo() {

    return (
        <>

            <div className="antialiased">

                <main className="flex flex-col justify-center overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">


                        <section className="font-quando grid gap-12 md:grid-cols-3 md:gap-10">

                            <article className='flex justify-center items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-slate-900 text-3xl font-bold mb-2 duration-[3s] ease-out" >
                                        <span className="text-green-600"><CountUp end={27} enableScrollSpy /></span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex font-semibold text-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Inception</span> */}
                                <p className="text-md text-gray-600 text-center">Total no. of Stations</p>
                            </article>

                            <article className='flex justify-center items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-slate-900 text-3xl font-bold mb-2 duration-[3s] ease-out" >
                                        <span className="text-green-600"><CountUp end={2} enableScrollSpy /></span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Events</span> */}
                                <p className="text-md text-gray-600 text-center">Total no. of Lines</p>
                            </article>


                            <article className='flex justify-center items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-slate-900 text-3xl font-bold mb-2 duration-[3s] ease-out" >
                                        <span className="text-green-600"><CountUp end={30} enableScrollSpy /></span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Excellence</span> */}
                                <p className="text-md text-gray-600 text-center">Total Network Length (km)</p>
                            </article>

                        </section>


                        <div className="mx-1 px-2 mb-6 text-center font-quando">
                            <div className="text-gray-600 p-2 font-semibold text-sm rounded-lg">
                            The Agra Metro efficiently links Taj East Gate and Mankameshwar, spanning six key stations.
                            </div>
                        </div>

                    </div>

                </main>


            </div>



        </>)
}

// Connecting Taj East Gate and Mankameshwar, the Agra Metro operates across six pivotal stations.