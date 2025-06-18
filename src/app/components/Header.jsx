"use client"
import { useState } from 'react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
            <header className='fixed w-full bg-white shadow-sm z-50 transition-all duration-300'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4 md:justify-start md:space-x-10'>
                        <div className='flex justify-start lg:w-0 lg:flex-1'>
                            <a href='#' className='flex items-center group'>
                                <div className='relative'>
                                    <div className="absolute inset-0 bg-indigo-200 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <svg className='h-8 w-auto text-indigo-600 relative' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.3 14.3 0 0 0 8 2.3 14.3 14.3 0 0 1-8 2.3 14.3 14.3 0 0 1-8-2.3A14.3 14.3 0 0 0 12 2z"></path>
                                    </svg>
                                </div>
                                <span className='ml-2 text-xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300'>AIAutomate</span>
                            </a>
                        </div>

                        {/* Navigation */}
                        <nav className='hidden md:flex space-x-10'>
                            <a href='#problem' className='text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors-300'>The Problem</a>
                            <a href="#solution" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">Our Solution</a>
                            <a href="#features" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">Features</a>
                            <a href="#usecases" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">Use Cases</a>
                            <a href="#testimonials" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">Testimonials</a>
                            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">Pricing</a>
                        </nav>
                        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                            <a href='#signup' className='whitespace-nowrap text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300'>Sign In</a>
                            <a href="#signup" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 transform hover:-translate-y-1">Start Free Trial</a>
                        </div>
                        <div className='md:hidden'>
                            <button type="button" className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' onClick={() => setMobileMenuOpen(true)}>
                                <span className='sr-only'>Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden fixed inset-0 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='absolute inset-0 bg-gray-600 bg-opacity-75' onClick={() => setMobileMenuOpen(false)}></div>
                    <div className='relative flex flex-col w-full max-w-xs bg-white h-full overflow-y-auto shadow-xl'>
                        <div className='absolute top-0 right-0 -mr-12 pt-2'>
                            <button type='button' className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={() => setMobileMenuOpen(false)}>
                                <span className='sr-only'>Close menu</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='pt-5 pb-6 px-4'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <a href='#' className='flex items-center'>
                                        <svg className="h-8 w-auto text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.3 14.3 0 0 0 8 2.3 14.3 14.3 0 0 1-8 2.3 14.3 14.3 0 0 1-8-2.3A14.3 14.3 0 0 0 12 2z"></path>
                                        </svg>
                                        <span className='ml-2 text-xl font-bold text-indigo-600'>AIAutomate</span>
                                    </a>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <nav className='grid gap-y-8'>
                                    <a href='#problem' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        The Problem
                                    </a>
                                    <a href='#solution' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        Our Solution
                                    </a>
                                    <a href='#features' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        Features
                                    </a>
                                    <a href='#usecases' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        Use Cases
                                    </a>
                                    <a href='#testimonials' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        Testimonials
                                    </a>
                                    <a href='#pricing' className='-m-3 p-3 flex items-center text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors duration-300'>
                                        Pricing
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className='py-6 px-5 space-y-6'>
                            <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                <a href='#signup' className='text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300'>
                                    Sign In
                                </a>
                                <a href='#signup' className='text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300'>
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}
