import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, Users, DollarSign, Briefcase, Building2, Globe } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('about');
    const [searchTerm, setSearchTerm] = useState('');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const faqData = {
        about: {
            title: 'About ICEM',
            icon: HelpCircle,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 1,
                    question: 'Is ICEM affiliated and approved?',
                    answer: 'Yes, ICEM is an Autonomous Institute affiliated to Savitribai Phule Pune University (SPPU) and approved by AICTE, New Delhi.'
                }
            ]
        },
        admissions: {
            title: 'Admissions Process',
            icon: Users,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 2,
                    question: 'Can I visit the campus before applying?',
                    answer: 'Absolutely. ICEM welcomes prospective students and parents to visit the campus. Please contact the admission office to schedule a campus tour.'
                }
            ]
        },
        fees: {
            title: 'Scholarships',
            icon: DollarSign,
            color: 'from-[#135783] to-[#135783]',
            questions: [
                {
                    id: 3,
                    question: 'Are there scholarships available?',
                    answer: 'Yes, scholarships are available for eligible students under government schemes and merit-based scholarships offered by the institute.'
                }
            ]
        },
        placements: {
            title: 'Placements & Career',
            icon: Briefcase,
            color: 'from-[#259CA8] to-[#135783]',
            questions: [
                {
                    id: 4,
                    question: 'What is the placement record at ICEM?',
                    answer: 'ICEM has a consistent placement record with top recruiters including Emerson, CrowdStrike, Tetra Pak, Infosys, TCS, Accenture, and many more. The highest package offered has been up to 27 LPA.'
                },
                {
                    id: 5,
                    question: 'Does ICEM have a dedicated placement cell?',
                    answer: 'Yes, ICEM has a proactive Training and Placement Cell that provides soft skills training, aptitude preparation, technical grooming, and connects students with recruiters throughout the year.'
                },
                {
                    id: 6,
                    question: 'Are internships mandatory?',
                    answer: 'Yes, students are required to complete internships during their course of study. The placement cell assists in securing internships with reputed organizations.'
                }
            ]
        },
        infrastructure: {
            title: 'Infrastructure & Facilities',
            icon: Building2,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 7,
                    question: 'What facilities are available on campus?',
                    answer: 'ICEM offers state-of-the-art infrastructure including - Apple Labs and high-performance computing labs, smart digital classrooms, central library with online resources, indoor and outdoor sports facilities, separate hostels for boys and girls, canteen, gym, and transport facilities'
                }
            ]
        },
        studentlife: {
            title: 'Campus Life & Support',
            icon: Globe,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 8,
                    question: 'Does ICEM organize events and fests?',
                    answer: 'Yes, ICEM hosts annual cultural and technical fests along with sports meets, hackathons, and guest lectures throughout the year.'
                }
            ]
        }
    };

    const categories = [
        { id: 'about', label: 'About ICEM', icon: HelpCircle },
        { id: 'admissions', label: 'Admissions', icon: Users },
        { id: 'fees', label: 'Scholarships', icon: DollarSign },
        { id: 'placements', label: 'Placements', icon: Briefcase },
        { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
        { id: 'studentlife', label: 'Student Life', icon: Globe }
    ];

    const currentCategory = faqData[activeCategory];
    const CategoryIcon = currentCategory.icon;

    // Filter questions based on search term
    const filteredQuestions = useMemo(() => {
        if (!searchTerm.trim()) return currentCategory.questions;

        return currentCategory.questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, activeCategory, currentCategory.questions]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="py-8 md:py-12 bg-gradient-to-b from-white via-[#F1F5F9] to-[#F1F5F9] px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-5 md:mb-7">
                    <div className="inline-block mb-1.5">
                        <div className="bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] p-1.5 rounded-full inline-block shadow-md">
                            <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-1.5 font-poppins bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xs md:text-sm text-[#111827] max-w-xl mx-auto leading-relaxed">
                        Find answers to common questions about Indira College of Engineering and Management (ICEM)
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">

                    {/* Category Selector */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl lg:rounded-2xl shadow-md overflow-hidden lg:sticky lg:top-24 border border-[#E5E7EB]">
                            <div className="hidden lg:block bg-gradient-to-r from-[#135783] to-[#0d3f61] p-3">
                                <h2 className="text-white font-bold text-sm tracking-wide">Categories</h2>
                            </div>
                            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible divide-x lg:divide-x-0 lg:divide-y divide-[#F0F0F0] scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                {categories.map((cat) => {
                                    const IconComp = cat.icon;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setSearchTerm('');
                                                setActiveIndex(0);
                                            }}
                                            className={`flex-shrink-0 lg:w-full px-4 py-2.5 lg:py-2 text-left flex items-center gap-2 transition-all duration-300 group text-xs ${activeCategory === cat.id
                                                ? 'bg-gradient-to-r from-[#259CA8]/10 to-[#259CA8]/5 text-[#135783] border-b-2 lg:border-b-0 lg:border-l-4 border-[#259CA8] font-semibold'
                                                : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                                                }`}
                                        >
                                            <IconComp className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300 ${activeCategory === cat.id ? 'text-[#259CA8]' : 'text-[#9CA3AF] group-hover:text-[#259CA8]'}`} />
                                            <span className="font-medium whitespace-nowrap">{cat.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* FAQ Accordion Section */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl lg:rounded-2xl shadow-md overflow-hidden border border-[#E5E7EB]">

                            {/* Category Header */}
                            <div className="bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] p-3 md:p-4 text-white">
                                <div className="flex items-center gap-2">
                                    <CategoryIcon className="w-5 h-5 md:w-6 h-6" />
                                    <h2 className="text-base md:text-lg font-bold">{currentCategory.title}</h2>
                                </div>
                                <p className="text-white/90 text-[10px] md:text-xs font-medium ml-7 md:ml-8 mt-0.5">
                                    {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'} available
                                </p>
                            </div>

                            {/* Accordion Items */}
                            <div className="divide-y divide-[#F0F0F0]">
                                {filteredQuestions.length > 0 ? (
                                    filteredQuestions.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="transition-all duration-300 hover:bg-[#FAFBFC]"
                                        >
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full px-4 py-3 text-left flex items-start justify-between gap-3 group focus:outline-none focus:bg-[#F0F9FA]"
                                            >
                                                <div className="flex-1">
                                                    <h3 className="text-xs md:text-sm font-semibold text-[#1F2937] group-hover:text-[#259CA8] transition-colors duration-300 leading-snug">
                                                        {item.question}
                                                    </h3>
                                                </div>
                                                <div className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                                    <ChevronDown className={`w-3.5 h-3.5 md:w-4 h-4 transition-colors duration-300 ${activeIndex === index ? 'text-[#259CA8]' : 'text-[#D1D5DB] group-hover:text-[#259CA8]'}`} />
                                                </div>
                                            </button>

                                            {/* Answer Section */}
                                            <div
                                                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                                                    }`}
                                            >
                                                <div className="px-4 pb-3 pt-0">
                                                    <div className="border-l-4 border-[#259CA8] pl-3">
                                                        <p className="text-[#4B5563] leading-relaxed text-[11px] md:text-xs font-medium">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center">
                                        <Search className="w-10 h-10 text-[#259CA8]/20 mx-auto mb-2" />
                                        <p className="text-[#6B7280] text-sm font-medium mb-2">No questions match your search.</p>
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="text-[#259CA8] hover:text-[#135783] font-semibold underline transition-colors duration-300 text-xs"
                                        >
                                            Clear search
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional CTA */}
                        <div className="mt-4 bg-gradient-to-r from-[#259CA8]/10 via-white to-[#135783]/10 rounded-xl md:rounded-2xl border border-[#259CA8]/20 p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                            <div className="text-center sm:text-left">
                                <p className="text-[#1F2937] text-sm font-semibold">Can't find your answer?</p>
                                <p className="text-[#4B5563] text-xs font-medium">Our team is here to help you with any questions.</p>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="w-full sm:w-auto bg-gradient-to-r from-[#259CA8] to-[#135783] text-white font-bold py-2 px-5 rounded-lg md:rounded-xl hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs md:text-sm whitespace-nowrap"
                            >
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;