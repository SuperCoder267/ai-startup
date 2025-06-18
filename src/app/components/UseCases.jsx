export default function UseCases({ useCases = [], inViewSections = {}, useCasesRef }) {
    return (
        <section id='useCases' ref={useCasesRef} className={`py-16 bg-white transition-all duration-1000 ${inViewSections.useCases ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        Real World Applications
                    </h2>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 mx-auto'>
                        See how our AI automation solutions are transforming businesses across various industries.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {useCases.map((useCase, index) => (
                        <div key={index} className='bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group'>
                            <div className='relative h-48 overflow-hidden'>
                                <img 
                                    src={useCase.imageUrl}
                                    alt={useCase.title}
                                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'>
                                </img>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>{useCase.title}</h3>
                                <p className='text-gray-600 mb-4'>{useCase.description}</p>
                                <a 
                                    href='#signup'
                                    className='inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group-hover:underline'
                                >
                                    Learn More
                                    <svg 
                                        className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-16 text-center'>
                    <a href='#signup' className='inline-flex items-center px- py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                        Explore More Use Cases
                        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}