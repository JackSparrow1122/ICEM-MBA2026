import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Users,
  DollarSign,
  Briefcase,
  Building2,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("about");



  const faqData = {
    about: {
      title: "About ICEM",
      icon: HelpCircle,
      questions: [
        {
          id: 1,
          question: "Is ICEM Pune autonomous and SPPU affiliated?",
          answer:
            "Yes, Indira College of Engineering and Management (ICEM) is an Autonomous Institute. It is approved by AICTE, New Delhi, recognized by the Government of Maharashtra, and permanently affiliated with Savitribai Phule Pune University (SPPU). Autonomous status allows us to design and update our curriculum dynamically to meet industry requirements.",
        },
        {
          id: 2,
          question:
            "What are the benefits of studying at an Autonomous college for MBA?",
          answer:
            "Autonomy allows ICEM to offer an industry-aligned syllabus, incorporate emerging business practices (like Digital Marketing, Fintech, and Business Analytics) into the core coursework, conduct exams on time, publish results quickly, and offer flexible credit-based choice systems that enhance employment readiness.",
        },
        {
          id: 3,
          question:
            "Where is the ICEM campus located and when was it established?",
          answer:
            "ICEM was established in 2007 under the prestigious Indira Group of Institutes (IGI). The campus is located in a scenic, pollution-free environment in Parandwadi, near Somatne Phata, Pune, Maharashtra, which is highly accessible from both Pune city and Mumbai.",
        },
      ],
    },
    admissions: {
      title: "Admissions",
      icon: Users,
      questions: [
        {
          id: 5,
          question:
            "Is there a lateral entry or direct admission option for MBA?",
          answer:
            "No, lateral entry or direct admission to the second year of MBA is not permitted. Admissions are only for the first year of the two-year program through the Centralized Admission Process (CAP) rounds conducted by the State Common Entrance Test Cell, Maharashtra.",
        },
        {
          id: 6,
          question:
            "Can I visit the campus and consult the admission team in person?",
          answer:
            "Absolutely! We highly encourage students and parents to visit the campus for a guided tour of our classrooms, library, and hostels. Our admission counselling center is open Monday to Saturday from 9:30 AM to 5:30 PM. You can also connect with us online.",
        },
      ],
    },
    eligibility: {
      title: "Eligibility",
      icon: ClipboardCheck,
      questions: [
        {
          id: 4,
          question:
            "What is the eligibility criteria for MBA admissions?",
          answer:
            "Candidates must have passed a minimum three-year Bachelor's degree in any discipline from a recognized university with at least 50% aggregate marks (45% for backward class categories and PWD belonging to Maharashtra State). In addition, candidates must have appeared and scored in management entrance tests like MAH-MBA/MMS-CET, CAT, CMAT, MAT, XAT, or ATMA.",
        },
        {
          id: 4.5,
          question: "What is the eligibility criteria for First Year Engineering (B.E.) admissions?",
          answer: (
            <span className="space-y-4 block text-left">
              <span className="block mb-2">For details about First Year Engineering Admission and Eligibility Criteria, refer to the official competent authority: <a href="https://cetcell.mahacet.org/" target="_blank" rel="noopener noreferrer" className="text-[#F37121] hover:underline font-bold">CET Cell Website</a>.</span>

              <span className="block mb-3">
                <strong className="text-gray-900 block mb-1">A. Maharashtra State Candidature Candidates:</strong>
                <span className="list-disc pl-5 block space-y-1 text-xs md:text-sm text-gray-600">
                  <span className="block">• The Candidate should be an Indian National.</span>
                  <span className="block">• Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of Chemistry, Biotechnology, Biology, Technical Vocational, Computer Science, IT, Informatics Practices, Agriculture, Engineering Graphics, or Business Studies, obtaining at least 45% marks (at least 40% marks for backward class categories, EWS, and PWD category candidates belonging to Maharashtra State) in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain a non-zero score in CET conducted by the Competent Authority.</span>
                  <span className="block">• Or, Passed Diploma in Engineering and Technology with at least 45% marks (at least 40% marks for backward class categories, EWS, and PWD category candidates belonging to Maharashtra State).</span>
                </span>
              </span>

              <span className="block mb-3">
                <strong className="text-gray-900 block mb-1">B. All India / Union Territory of J&K and Union Territory of Ladakh Migrant Candidates:</strong>
                <span className="list-disc pl-5 block space-y-1 text-xs md:text-sm text-gray-600">
                  <span className="block">• The Candidate should be an Indian National.</span>
                  <span className="block">• Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of Chemistry, Biotechnology, Biology, Technical Vocational, Computer Science, IT, Informatics Practices, Agriculture, Engineering Graphics, or Business Studies, obtaining at least 45% marks (at least 40% marks for backward class categories, EWS, and PWD category candidates belonging to Maharashtra State) in the above subjects taken together; and obtain a non-zero positive score in JEE (Main) B.E./B.Tech or a non-zero score in CET. Preference is given to JEE (Main).</span>
                  <span className="block">• Or, Passed Diploma in Engineering and Technology with at least 45% marks (at least 40% marks for backward class categories, EWS, and PWD category candidates belonging to Maharashtra State).</span>
                </span>
              </span>

              <span className="block mb-3">
                <strong className="text-gray-900 block mb-1">C. NRI / OCI / PIO, Children of Gulf Workers, and Foreign Nationals:</strong>
                <span className="block text-xs md:text-sm text-gray-600">Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of Chemistry, Biotechnology, Biology, Technical Vocational, Computer Science, IT, Informatics Practices, Agriculture, Engineering Graphics, or Business Studies, and obtained at least 45% marks in the above subjects taken together.</span>
              </span>

              <span className="block">
                <strong className="text-gray-900 block mb-1">D. Additional Information:</strong>
                <span className="block text-xs md:text-sm text-gray-600">Any other criterion declared from time to time by the appropriate authority as defined under the Act.</span>
              </span>
            </span>
          )
        },
      ],
    },
    fees: {
      title: "Scholarships & Fees",
      icon: DollarSign,
      questions: [
        {
          id: 7,
          question: "What government scholarships and schemes are available?",
          answer:
            "Students admitted through CAP rounds can avail of various government scholarships, including Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Yojna (EBC), hostel allowance (Dr. Punjabrao Deshmukh scheme), and fee concessions for SC, ST, NT, VJ, SBC, and OBC categories as per Maharashtra state rules.",
        },
        {
          id: 8,
          question:
            "What is the Tuition Fee Waiver Scheme (TFWS) and how do I apply?",
          answer:
            "TFWS is a merit-based scheme for students with a family income of less than ₹8 LPA. Eligible candidates receive a 100% waiver on tuition fees. Applications must be submitted through the DTE CAP registration portal by selecting the TFWS option during choice filling.",
        },
        {
          id: 9,
          question:
            "Are there flexible fee payment options or installment facilities?",
          answer:
            "Yes, to support families, ICEM allows the payment of academic and hostel fees in structured installments. Parents can request installment options by submitting a formal request to the administrative department during admission.",
        },
      ],
    },
    placements: {
      title: "Placements & Internships",
      icon: Briefcase,
      questions: [
        {
          id: 10,
          question:
            "What is the placement record and packages offered for MBA?",
          answer:
            "ICEM has a robust placement record. For the MBA program, the Training & Placement Cell provides extensive training, mock interviews, and corporate grooming. Our graduates are placed in top-tier multinational companies, financial institutions, marketing agencies, and consulting firms.",
        },
        {
          id: 11,
          question: "Who are the primary recruiters visiting the ICEM campus?",
          answer:
            "Our regular campus recruiters include industry giants and tech leaders such as Emerson, Tetra Pak, Forbes Marshall, TCS, Capgemini, Cognizant, Wipro, Infosys, and Tech Mahindra, recruiting for diverse business and analyst roles.",
        },
        {
          id: 12,
          question:
            "How does the Training & Placement Cell prepare students for recruitment?",
          answer:
            "Our dedicated T&P Cell conducts structured grooming programs starting from the first year. This includes training in soft skills, business communication, mock group discussions, aptitude solving, resume-building workshops, and mock interview drills conducted by industry experts.",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure & Labs",
      icon: Building2,
      questions: [
        {
          id: 13,
          question: "What specialized facilities are available for MBA students?",
          answer:
            "ICEM provides MBA students with smart classrooms, advanced computer labs equipped with analytical and business software, a fully-stocked library, a modern seminar hall for corporate guest lectures, group discussion and brainstorming rooms, and campus sports/hostel facilities.",
        },
        {
          id: 14,
          question: "What are the on-campus hostel facilities like?",
          answer:
            "We offer separate, secure hostels for boys and girls on campus. Facilities include 24/7 security with CCTV surveillance, high-speed Wi-Fi, clean drinking water, hot water geysers, dedicated study halls, recreational rooms, and a clean mess serving nutritious, hygienic vegetarian food.",
        },
        {
          id: 15,
          question: "Does the institute run bus services for daily commuters?",
          answer:
            "Yes, ICEM operates a dedicated fleet of college buses that cover major routes across Pune city, Pimpri-Chinchwad (PCMC), Talegaon, and surrounding suburbs, ensuring safe and hassle-free transit for students and staff.",
        },
      ],
    },
  };

  const categories = [
    { id: "about", label: "About ICEM", icon: HelpCircle },
    { id: "admissions", label: "Admissions", icon: Users },
    { id: "eligibility", label: "Eligibility", icon: ClipboardCheck },
    { id: "fees", label: "Scholarships & Fees", icon: DollarSign },
    { id: "placements", label: "Placements", icon: Briefcase },
    { id: "infrastructure", label: "Infrastructure", icon: Building2 },
  ];

  const currentCategory = faqData[activeCategory];
  const CategoryIcon = currentCategory ? currentCategory.icon : HelpCircle;

  const filteredQuestions = currentCategory ? currentCategory.questions : [];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#FCFAEE] to-[#F7F3EF] px-4 sm:px-6 lg:px-8 border-t border-[#e2e8f0]"
      id="faq"
    >
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find detailed answers regarding admissions, autonomy, academic
            programs, scholarship schemes, and student career placements at ICEM
            Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-8 items-start">
          {/* Categories Left Rail */}
          <div className="lg:sticky lg:top-24 w-full lg:w-auto">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-xl border border-gray-100/80 backdrop-blur-md">
              <h3 className="text-gray-800 font-extrabold text-xs lg:text-sm uppercase tracking-wider px-3 mb-3 items-center gap-2 hidden lg:flex">
                <BookOpen className="w-4 h-4 text-[#F37121]" />
                Admission Topics
              </h3>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-none py-1 lg:py-0">
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
                      className={`flex items-center gap-2 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3.5 rounded-xl lg:rounded-2xl transition-all duration-300 group shrink-0 lg:w-full lg:text-left ${isActive
                          ? "bg-gradient-to-r from-[#F37121] to-[#D75A13] text-white shadow-md shadow-[#F37121]/15"
                          : "text-gray-600 bg-gray-50/50 lg:bg-transparent hover:bg-gray-50 hover:text-[#F37121] border border-gray-100 lg:border-0"
                        }`}
                    >
                      <IconComponent
                        className={`w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#F37121]"
                          }`}
                      />
                      <span className="font-semibold text-xs lg:text-sm whitespace-nowrap">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Accordion Questions Right Section */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Category Title Header */}
              <div className="bg-gradient-to-r from-[#F37121] via-[#D75A13] to-[#F37121] p-5 md:p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CategoryIcon className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <h3 className="text-base md:text-lg font-bold">
                      {currentCategory.title}
                    </h3>
                    <p className="text-white/80 text-[11px] md:text-xs font-medium mt-0.5">
                      Showing {filteredQuestions.length}{" "}
                      {filteredQuestions.length === 1
                        ? "question"
                        : "questions"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-gray-100">
                {filteredQuestions.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-300 ${isOpen ? "bg-slate-50/50" : "hover:bg-slate-50/30"
                        }`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-5 md:px-8 py-5 text-left flex items-start justify-between gap-4 group focus:outline-none"
                      >
                        <div className="flex-1">
                          <h4
                            className={`text-sm md:text-base font-bold transition-colors duration-300 leading-snug ${isOpen
                                ? "text-[#F37121]"
                                : "text-gray-800 group-hover:text-[#F37121]"
                              }`}
                          >
                            {item.question}
                          </h4>
                        </div>
                        <div
                          className={`flex-shrink-0 mt-0.5 p-1 rounded-full bg-slate-100 text-gray-500 transition-all duration-300 ${isOpen
                              ? "rotate-180 bg-[#F37121]/10 text-[#F37121]"
                              : "group-hover:bg-slate-200"
                            }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Modern Smooth Height CSS Grid Transition */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-8 pb-5 pt-1">
                            <div className="border-l-2 border-[#F37121] pl-4 md:pl-5 py-1">
                              <div className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
