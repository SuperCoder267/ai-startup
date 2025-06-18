export default function Pricing({ pricingPlans = [], inViewSections = {}, pricingRef }) {
    return (
        <section id='pricing' ref={pricingRef} className={`py-16 transition-all duration-1000 ${inViewSections.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 mx-auto'>
                        Choose the plan that fits yoru business needs. All plans include our core features.
                    </p>
                </div>
                <div className='mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:max-w-4xl lg:mx-auto'>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`rounded-lg shadow-sm divide-y divide-gray-200 ${plan.popular ? 'border-2 border-indigo-500 shadow-lg' : 'border border-gray-200'} transform hover:-translate-y-2 transition-transform duration-300`}>
                            <div className='p-6'>
                                <h3 className='text-lg font-medium text-gray-900'>{plan.name} Plan</h3>
                                <div className='mt-4 flex items-baseline text-gray-900'>
                                    <span className='text-5xl font-extrabold tracking-tight'>{plan.price}</span>
                                    <span className='ml-1 text-xl font-medium text-gray-500'>/month</span>
                                </div>
                                <p className='mt-6 text-gray-500'>Perfect for {plan.name.toLowerCase()} businesses looking to automate operations.</p>
                            </div>
                            <div className='px-6 pt-6 pb-8'>
                                <h4 className='text-sm uppercase font-semibold text-gray-900 tracking-wide'>What's included</h4>
                                <ul className='mt-6 space-y-4'>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className='flex items-start'>
                                            <div className='flex-shrink-0'>
                                                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className='ml-3 text-sm text-gray-700'>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className='mt-8'>
                                    <a href='#signup' className={`block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'} transition-colors duration-300`}>
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-8 text-center'>
                    <a href='#contact' className='text-indigo-600 hover:text-indigo-500 font-medium'>
                        Need a custom plan? Contact our sales team
                        <svg className="inline ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}