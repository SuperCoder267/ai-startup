export default function Testimonials({ testimonials = [], inViewSections = {}, testimonialsRef }) {
    return (
        <section id='testimonials' ref={testimonialsRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${inViewSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='max-2-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        What Our Customers Say
                    </h2>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 mx-auto'>
                        Hear from businesses that have transformed their operations with our AI automation solutions.
                    </p>
                </div>
                <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
                            <div className='flex items-center mb-6'>
                                <img className='h-12 w-12 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
                                <div className='ml-4'>
                                    <h4 className='text-lg font-semibold text-gray-900'>{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <blockquote className='text-gray-600 italic'>
                                "{testimonial.quote}"
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}