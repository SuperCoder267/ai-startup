'use client'
import {useState, useEffect, useRef} from 'react'
import Header from './components/Header.jsx'

export default function App() {
    // State for mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [inViewSection, setInViewSections] = useState({
        hero: true,
        problem: false,
        solution: false,
        features: false,
        useCases: false,
        testimonials: false,
        pricing: false,
        cta: false,
        footer: false,
    })
    
    // Refs for each section
    const heroRef = useRef(null)
    const problemRef = useRef(null);
    const solutionRef = useRef(null);
    const featuresRef = useRef(null);
    const useCasesRef = useRef(null);
    const testimonialsRef = useRef(null);
    const pricingRef = useRef(null);
    const ctaRef = useRef(null);
    const footerRef = useRef(null);

    // Animate on Scroll animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInViewSections(prev => ({
                        ...prev,
                        [entry.target.id]:true
                    }))
                }
            })
        }, observerOptions)

        // Observer all sections
        const sections = [
            heroRef.current,
            problemRef.current,
            solutionRef.current,
            featuresRef.current,
            useCasesRef.current,
            testimonialsRef.current,
            pricingRef.current,
            ctaRef.current,
            footerRef.current
        ]
        sections.forEach(section => {
            if (section) observer.observe(section)
        })

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section)
            })
        }
    }, [])

    // Data for use cases and testimonials
    const useCases = [
        {
            title: 'Customer Service Automation',
            description: 'Deploy AI chatbots to handle customer inquiries 24/7, reducing response times and increasing satisfaction.',
            imageUrl: "https://picsum.photos/800/600?random=10",
        },
        {
            title: 'Sales Lead Qualification',
            description: 'Automate lead qualification with intelligent chatbots that identify high-value prospects and schedule meetings.',
            imageUrl: 'https://picsum.photos/800/600?random=11'
        },
        {
            title: 'Appointment Scheduling',
            description: 'Allow customers to book appointments directly through your website using our AI-powered scheduling assistant.',
            imageUrl: 'https://picsum.photos/800/600?random=12'
        },
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            quote: "Implementing their AI chatbot solution revolutionized our customer service. Response times dropped by 70% and customer satisfaction increased significantly.",
            image: "https://picsum.photos/200/300?random=1"
        },
        {
            name: "Michael Chen",
            role: "Marketing Director, InnovateCo",
            quote: "The AI automation tools have transformed how we engage with potential leads. Our sales team is now focusing on high-value opportunities.",
            image: "https://picsum.photos/200/300?random=2"
        },
        {
            name: "Emma Rodriguez",
            role: "Operations Manager, GlobalShop",
            quote: "With their AI scheduling assistant, we've reduced no-shows by 40% and improved our appointment booking efficiency across all locations.",
            image: "https://picsum.photos/200/300?random=3"
        },
    ]

    const pricingPlans = [
        {
            name: "Starter",
            price: "$49",
            features: [
                "Up to 1,000 interactions/month",
                "Basic chatbot functionality",
                "Email support",
                "1 chatbot instance",
                "Limited analytics"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: '$99',
            features: [
                "Up to 5,000 interactions/month",
                "Advanced chatbot functionality",
                "Priority email support",
                "3 chatbot instances",
                "Comprehensive analytics",
                "Custom integrations"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: '$299',
            features: [
                "Unlimited interactions",
                "Full feature set",
                "Dedicated account manager",
                "Unlimited chatbot instances",
                "Advanced analytics & reporting",
                "Custom development options"
            ],
            popular: false
        }
    ]

    const featureModules = [
        {
            title: 'AI-Powered Chatbots',
            description: 'Deploy intelligent chatbots that learn from customer interactions and provide personalized responses across multiple channels.',
            imageUrl: 'https://picsum.photos/800/600?random=20'
        },
        {
            title: "Customizable Workflows",
            description: 'Create custom automation workflows tailored to your business needs with our intuitive drag-and-drop interface.',
            imageUrl: 'https://picsum.photos/800/600?random=21'
        },
        {
            title: 'Real-Time Analytics',
            description: 'Gain valuable insights into customer behavior and chatbot performance with our comprehensive analytics dashboard.',
            imageUrl: "https://picsum.photos/800/600?random=22"
        },
        {
            title: 'Seamless Integrations',
            description: 'Connect with your existing CRM, helpdesk, and other tools through our extensive API and integration marketplace.',
            imageUrl: 'https://picsum.photos/800/600?random=23'
        }
    ]

    // Components
    return (
        <Header />
    )
}