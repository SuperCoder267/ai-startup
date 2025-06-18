'use client'
export default function Hero({heroRef, inViewSections}) {
    return (
        <section id='hero' ref={heroRef} className={`py-20 md:py-32 transition-all duration-1000 ${inViewSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
                        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                            <span className='block'>AI Automation for</span>
                            <span className='block text-indigo-600'>Modern Businesses</span>
                        </h1>
                        <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                            Transform your business operations with our powerful AI automation solutions. Increase efficiency, reduce costs, and deliver exceptional customer experiences.
                        </p>
                        <div className='mt-8 sm:max-w-l sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                                <div className='rounded-md shadow'>
                                    <a href='#signup' className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                                        Start Free Trial
                                    </a>
                                </div>
                                <div className='mt-3 sm:mt-0 sm:ml-3'>
                                    <a href='#demo' className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                                        Request a Demo
                                    </a>
                                </div>
                            </div>
                            <p className='mt-3 text-sm text-gray-500'>No credit card required. 14 day free trial</p>
                        </div>
                    </div>
                    <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
                        <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md transform hover:scale-105 transition-transform duration-300'>
                            <div className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                <img className='w-full' src='https://picsum.photos/800/600?random=4' alt='AI Automation Dashboard'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}