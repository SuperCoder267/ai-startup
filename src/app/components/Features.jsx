export default function Features({ featureModules = [], inViewSections = {}, featuresRef }) {
    return (
        <section id='features' ref={featuresRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${inViewSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        Powerful Features to Transform Your Business
                    </h2>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 mx-auto'>
                        Our AI automation platform offers a comprehensive suite of tools to streamline your operations and enhance customer experiences.
                    </p>
                </div>
                <div className='space-y-24'>
                    {featureModules.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                            <div className='mx:w-1/2'>
                                <img src={feature.imageUrl} alt={feature.title} className='rounded-lg shadow-lg w-full transform hover:scale-105 transition-transform duration-300'></img>
                            </div>
                            <div className='md:w-1/2 md:pl-12 md:pr-12'>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{feature.title}</h3>
                                <p className='text-gray-600 text-lg'>{feature.description}</p>
                                <div className='mt-6'>
                                    <div className='inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium'>
                                        Feature {index + 1}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}