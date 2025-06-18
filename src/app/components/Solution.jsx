export default function Solution({solutionRef, inViewSections}) {
    return (
        <section id='solution' ref={solutionRef} className={`py-16 transition-all duration-1000 ${inViewSections.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className='lg:col-span-6'>
                        <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md transform hover:scale-105 transition-transform duration-300'>
                            <div className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                <img className="w-full" src="https://picsum.photos/800/600?random=5" alt="AI Solution Dashboard" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className='lg:pr-8'>
                            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                                Our AI Automation Solution
                            </h2>
                            <p className='mt-3 text-xl text-gray-500'>
                                AIAutomate provides powerful AI tools that help businesses streamline operations, improve customer service, and boost revenue.
                            </p>
                            <div className='mt-8'>
                                <div className='relative'>
                                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600'>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Intelligent Chatbot</p>
                                    <p className='ml-16 mt-2 text-base text-gray-500'>
                                        Our AI-powered chatbots provide instant responses to customer inquiries, available 24/7 across multiple channels.
                                    </p>
                                </div>
                                <div className='mt-8 relative'>
                                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600'>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Smart Lead Qualification</p>
                                    <p className='ml-16 mt-2 text-base text-gray-500'>
                                        Our AI identifies high-quality leads and qualified them automatically, ensuring your sales team focuses on the most promising opportunities.
                                    </p>
                                </div>
                                <div className='mt-8 relative'>
                                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600'>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Automated Scheduling</p>
                                    <p className='ml-16 mt-2 text-base text-gray-500'>
                                        Allow customers to book appointments directly through your website using our AI-powered scheduling assistant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}