export default function Problem({problemRef, inViewSections}) {
    return (
        <section id='problem' ref={problemRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${inViewSections.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='lg:col-span-5'>
                        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                            Are You Facing These Business Challenges?
                        </h2>
                        <p className='mt-3 text-xl text-gray-500'>
                            Many businesses struggle with inefficient  operations, high customer service costs, and missed sales opportunities.
                        </p>
                    </div>
                    <div className='mt-12 lg:mt-0 lg:col-span-6'>
                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
                            <div className='relative'>
                                <div className='absolute h-12 w-12 rounded-md flex items-center justify-center bg-indigo-50 text-indigo-600'>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>High Customer Service Costs</p>
                                <p className='ml-16 mt-2 text-base text-gray-500'>
                                    Traditional customer support teams require significant investment in hiring, training and infrastructure.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute h-12 w-12 rounded-md flex items-center justify-center bg-indigo-50 text-indigo-600'>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Slow Response Times</p>
                                <p className='ml-16 mt-2 text-base text-gray-500'>
                                    Customers expect instant responses, but manual human agents can't keep up with demand 24/7
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute h-12 w-12 rounded-md flex items-center justify-center bg-indigo-50 text-indigo-600'>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Missed Sales Opportunities</p>
                                    <p className='ml-16 mt-2 text-base text-gray-500'>
                                        Qualified leads are lost when potential customers can't get immediate assistance or schedule appointments easily.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute h-12 w-12 rounded-md flex items-center justify-center bg-indigo-50 text-indigo-600'>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Inefficient Operations</p>
                                <p className='ml-16 mt-2 text-base text-gray-500'>
                                    Manual processes slow down your business and prevent employees from focusing on high-value tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}