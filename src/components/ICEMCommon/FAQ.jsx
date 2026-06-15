import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, Users, DollarSign, Briefcase, Building2, BookOpen, AlertCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('about');
    const [searchTerm, setSearchTerm] = useState('');

    const scrollToTop = () => {
        const applySection = document.getElementById('apply');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const faqData = {
        about: {
            title: 'About ICEM',
            icon: HelpCircle,
            questions: [
                {
                    id: 1,
                    question: 'Is ICEM Pune autonomous and SPPU affiliated?',
                    answer: 'Yes, Indira College of Engineering and Management (ICEM) is an Autonomous Institute. It is approved by AICTE, New Delhi, recognized by the Government of Maharashtra, and permanently affiliated with Savitribai Phule Pune University (SPPU). Autonomous status allows us to design and update our curriculum dynamically to meet industry requirements.'
                },
                {
                    id: 2,
                    question: 'What are the benefits of studying at an Autonomous engineering college?',
                    answer: 'Autonomy allows ICEM to offer an industry-aligned syllabus, incorporate emerging technologies (like Generative AI, Cloud Computing, and IoT) into the core coursework, conduct exams on time, publish results quickly, and offer flexible credit-based choice systems that enhance employment readiness.'
                },
                {
                    id: 3,
                    question: 'Where is the ICEM campus located and when was it established?',
                    answer: 'ICEM was established in 2007 under the prestigious Indira Group of Institutes (IGI). The campus is located in a scenic, pollution-free environment in Parandwadi, near Somatne Phata, Pune, Maharashtra, which is highly accessible from both Pune city and Mumbai.'
                }
            ]
        },
        admissions: {
            title: 'Admissions & Eligibility',
            icon: Users,
            questions: [
                {
                    id: 4,
                    question: 'What is the eligibility criteria for first-year B.E. admissions?',
                    answer: 'Candidates must have passed 10+2 (HSC) or equivalent with Physics and Mathematics as compulsory subjects, along with Chemistry/Biotechnology/Biology/Technical Vocational subjects, obtaining at least 45% marks (40% for backward class categories/PWD belonging to Maharashtra State). A valid score in MHT-CET or JEE Main is mandatory.'
                },
                {
                    id: 5,
                    question: 'Does ICEM offer Direct Second Year (DSE) admissions for diploma holders?',
                    answer: 'Yes, diploma holders who have completed an AICTE-approved Diploma in Engineering & Technology with at least 45% marks (40% for reserved category/Maharashtra PWD) are eligible for Direct Second Year (DSE) admission through the CAP rounds.'
                },
                {
                    id: 6,
                    question: 'Can I visit the campus and consult the admission team in person?',
                    answer: 'Absolutely! We highly encourage students and parents to visit the campus for a guided tour of our labs, library, and hostels. Our admission counselling center is open Monday to Saturday from 9:30 AM to 5:30 PM. You can also connect with us online.'
                }
            ]
        },
        fees: {
            title: 'Scholarships & Fees',
            icon: DollarSign,
            questions: [
                {
                    id: 7,
                    question: 'What government scholarships and schemes are available?',
                    answer: 'Students admitted through CAP rounds can avail of various government scholarships, including Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC), hostel allowance (Dr. Punjabrao Deshmukh scheme), and fee concessions for SC, ST, NT, VJ, SBC, and OBC categories as per Maharashtra state rules.'
                },
                {
                    id: 8,
                    question: 'What is the Tuition Fee Waiver Scheme (TFWS) and how do I apply?',
                    answer: 'TFWS is a merit-based scheme for students with a family income of less than ₹8 LPA. Eligible candidates receive a 100% waiver on tuition fees. Applications must be submitted through the DTE CAP registration portal by selecting the TFWS option during choice filling.'
                },
                {
                    id: 9,
                    question: 'Are there flexible fee payment options or installment facilities?',
                    answer: 'Yes, to support families, ICEM allows the payment of academic and hostel fees in structured installments. Parents can request installment options by submitting a formal request to the administrative department during admission.'
                }
            ]
        },
        placements: {
            title: 'Placements & Internships',
            icon: Briefcase,
            questions: [
                {
                    id: 10,
                    question: 'What is the placement record and highest package offered at ICEM?',
                    answer: 'ICEM has a robust placement record. The highest package offered is 27 LPA, with average packages ranging between 4.5 LPA and 6 LPA. Our graduates are placed in top-tier multinational companies, core engineering firms, and emerging startups.'
                },
                {
                    id: 11,
                    question: 'Who are the primary recruiters visiting the ICEM campus?',
                    answer: 'Our regular campus recruiters include industry giants and tech leaders such as Emerson, CrowdStrike, Tetra Pak, Forbes Marshall, TCS, Capgemini, Cognizant, Wipro, Infosys, and Tech Mahindra.'
                },
                {
                    id: 12,
                    question: 'How does the Training & Placement Cell prepare students for recruitment?',
                    answer: 'Our dedicated T&P Cell conducts structured grooming programs starting from the second year. This includes training in soft skills, business communication, aptitude solving, programming bootcamps, resume-building workshops, and mock interview drills conducted by industry experts.'
                }
            ]
        },
        infrastructure: {
            title: 'Infrastructure & Labs',
            icon: Building2,
            questions: [
                {
                    id: 13,
                    question: 'What specialized laboratory facilities does ICEM provide?',
                    answer: 'ICEM is equipped with advanced laboratories, including specialized Apple Mac Labs, high-performance computing labs, mechanical engineering workshops, electronics and IoT testbeds, and modern chemistry/physics laboratories designed to encourage research and practical learning.'
                },
                {
                    id: 14,
                    question: 'What are the on-campus hostel facilities like?',
                    answer: 'We offer separate, secure hostels for boys and girls on campus. Facilities include 24/7 security with CCTV surveillance, high-speed Wi-Fi, clean drinking water, hot water geysers, dedicated study halls, recreational rooms, and a clean mess serving nutritious, hygienic vegetarian food.'
                },
                {
                    id: 15,
                    question: 'Does the institute run bus services for daily commuters?',
                    answer: 'Yes, ICEM operates a dedicated fleet of college buses that cover major routes across Pune city, Pimpri-Chinchwad (PCMC), Talegaon, and surrounding suburbs, ensuring safe and hassle-free transit for students and staff.'
                }
            ]
        }
    };

    const categories = [
        { id: 'about', label: 'About ICEM', icon: HelpCircle },
        { id: 'admissions', label: 'Admissions', icon: Users },
        { id: 'fees', label: 'Scholarships & Fees', icon: DollarSign },
        { id: 'placements', label: 'Placements', icon: Briefcase },
        { id: 'infrastructure', label: 'Infrastructure', icon: Building2 }
    ];

    const currentCategory = faqData[activeCategory];
    const CategoryIcon = currentCategory ? currentCategory.icon : HelpCircle;

    // Filter questions based on search term
    const filteredQuestions = useMemo(() => {
        if (!searchTerm.trim()) {
            return currentCategory ? currentCategory.questions : [];
        }
        
        // Search across all categories when search is active
        const allQuestions = [];
        Object.keys(faqData).forEach(cat => {
            faqData[cat].questions.forEach(q => {
                allQuestions.push({
                    ...q,
                    categoryName: faqData[cat].title
                });
            });
        });

        return allQuestions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, activeCategory]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#e2e8f0]" id="faq">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="px-4 py-1.5 bg-[#259CA8]/10 text-[#259CA8] text-xs md:text-sm font-bold tracking-wider uppercase rounded-full inline-block mb-3 border border-[#259CA8]/20 shadow-sm">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#003c84] tracking-tight leading-none mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Find detailed answers regarding admissions, autonomy, academic programs, scholarship schemes, and student career placements at ICEM Pune.
                    </p>

                    {/* Interactive Search Bar */}
                    <div className="mt-8 max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-[#259CA8] transition-colors duration-300" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search keywords (e.g., Placement, Scholarship, Apple Lab...)"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setActiveIndex(0); // reset active index on typing
                            }}
                            className="w-full pl-12 pr-10 py-3.5 md:py-4 bg-white border border-[#cbd5e1] rounded-2xl text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#259CA8]/30 focus:border-[#259CA8] shadow-sm hover:border-[#94a3b8] transition-all duration-300"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Categories Left Rail (Only show if not searching) */}
                    {!searchTerm && (
                        <div className="lg:col-span-4 sticky top-24">
                            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100/80 backdrop-blur-md">
                                <h3 className="text-[#003c84] font-extrabold text-sm uppercase tracking-wider px-3 mb-3 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-[#259CA8]" />
                                    Admission Topics
                                </h3>
                                <div className="space-y-1.5">
                                    {categories.map((cat) => {
                                        const IconComponent = cat.icon;
                                        const isActive = activeCategory === cat.id;
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => {
                                                    setActiveCategory(cat.id);
                                                    setActiveIndex(0);
                                                }}
                                                className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-[#003c84] to-[#135783] text-white shadow-md shadow-[#003c84]/15'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#003c84]'
                                                }`}
                                            >
                                                <IconComponent className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                                                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#259CA8]'
                                                }`} />
                                                <span className="font-semibold text-sm">{cat.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Accordion Questions Right Section */}
                    <div className={searchTerm ? 'lg:col-span-12 w-full' : 'lg:col-span-8 w-full'}>
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            
                            {/* Category Title / Search Status Header */}
                            <div className="bg-gradient-to-r from-[#003c84] via-[#135783] to-[#259CA8] p-5 md:p-6 text-white flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {searchTerm ? (
                                        <Search className="w-5 h-5 md:w-6 h-6 animate-pulse" />
                                    ) : (
                                        <CategoryIcon className="w-5 h-5 md:w-6 h-6" />
                                    )}
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold">
                                            {searchTerm ? `Search Results for "${searchTerm}"` : currentCategory.title}
                                        </h3>
                                        <p className="text-white/80 text-[11px] md:text-xs font-medium mt-0.5">
                                            Showing {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion List */}
                            <div className="divide-y divide-gray-100">
                                {filteredQuestions.length > 0 ? (
                                    filteredQuestions.map((item, index) => {
                                        const isOpen = activeIndex === index;
                                        return (
                                            <div
                                                key={item.id}
                                                className={`transition-all duration-300 ${
                                                    isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'
                                                }`}
                                            >
                                                <button
                                                    onClick={() => toggleAccordion(index)}
                                                    className="w-full px-5 md:px-8 py-5 text-left flex items-start justify-between gap-4 group focus:outline-none"
                                                >
                                                    <div className="flex-1">
                                                        {searchTerm && item.categoryName && (
                                                            <span className="text-[10px] font-bold text-[#259CA8] uppercase tracking-wider block mb-1">
                                                                {item.categoryName}
                                                            </span>
                                                        )}
                                                        <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 leading-snug ${
                                                            isOpen ? 'text-[#003c84]' : 'text-gray-800 group-hover:text-[#259CA8]'
                                                        }`}>
                                                            {item.question}
                                                        </h4>
                                                    </div>
                                                    <div className={`flex-shrink-0 mt-0.5 p-1 rounded-full bg-slate-100 text-gray-500 transition-all duration-300 ${
                                                        isOpen ? 'rotate-180 bg-[#259CA8]/10 text-[#259CA8]' : 'group-hover:bg-slate-200'
                                                    }`}>
                                                        <ChevronDown className="w-4 h-4" />
                                                    </div>
                                                </button>

                                                {/* Modern Smooth Height CSS Grid Transition */}
                                                <div
                                                    className={`grid transition-all duration-300 ease-in-out ${
                                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                    }`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <div className="px-5 md:px-8 pb-5 pt-1">
                                                            <div className="border-l-2 border-[#259CA8] pl-4 md:pl-5 py-1">
                                                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                                                                    {item.answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="px-8 py-16 text-center">
                                        <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500 font-bold text-sm mb-1">No matching FAQs found</p>
                                        <p className="text-gray-400 text-xs mb-4">Try checking your spelling or search another keyword.</p>
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="px-4 py-2 bg-gradient-to-r from-[#259CA8] to-[#003c84] text-white font-bold text-xs rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                                        >
                                            View All FAQs
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Interactive Help Desk Footer */}
                        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-center md:text-left">
                                <h4 className="text-gray-800 font-extrabold text-sm md:text-base">Have more specific queries?</h4>
                                <p className="text-gray-500 text-xs md:text-sm font-semibold">Get assistance with our admission coordinators right now.</p>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="w-full md:w-auto px-6 py-3 bg-[#259CA8] hover:bg-[#135783] text-white font-extrabold text-xs md:text-sm tracking-wide rounded-2xl shadow-lg hover:shadow-[#259CA8]/25 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-300 whitespace-nowrap cursor-pointer"
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;