import React from 'react'

const Headling = () => {
  return (
    <div>
      
      {/* Marquee Text for Admissions Open */}
      <div className="overflow-hidden mt-2 w-full border-t border-b">
        <div className="flex animate-marquee">
          <p className="text-3xl font-semibold text-[#135783] whitespace-nowrap mr-8">
            Admissions Open for 2025 – Don’t wait, apply now and take your first step toward a brighter future!
          </p>
          <p className="text-3xl font-semibold text-[#135783] whitespace-nowrap">
            Admissions Open for 2025 – Don’t wait, apply now and take your first step toward a brighter future!
          </p>
        </div>
      </div>

      {/* Tailwind CSS for Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Headling
