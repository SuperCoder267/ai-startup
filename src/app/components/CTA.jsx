export default function CTA({ inViewSections = {}, ctaRef }) {
    return (
        <section id='cta' ref={ctaRef} className={`py-16 bg-indigo-600 transition-all duration-1000 ${inViewSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y=10'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                        Ready To Transform Your Business?
                    </h2>
                    <p className='mt-4 max-w-2xl text-xl text-indigo-200 mx-auto'>
                        Join thousands of businesses already automating their operations with AIAutomate.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className='inline-flex rounded-md shadow'>
                            <a href='#signup' className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                                Start Free Trial
                            </a>
                        </div>
                        <div className="ml-3 inline-flex">
                            <a href='#demo' className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                                Request Demo
                            </a>
                        </div>
                    </div>
                    <p className='mt-3 text-sm text-indigo-200'>No credit card required. 14-day free trial</p>
                </div>
            </div>
        </section>
    )
}