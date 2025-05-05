import { useState, useEffect, useCallback, useMemo } from "react";
import backgroundImage from "../../assets/images/indira.avif";
import { FaLongArrowAltRight } from "react-icons/fa";

function MechHero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const words = useMemo(() => ["Innovation", "Automation", "Precision", "Revolution"], []);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Form submission logic here
  }, []);

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-right md:bg-center px-4 md:px-8 lg:px-16 pt-6 text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10 backdrop-brightness-75" />

      <div className="relative z-20 flex flex-col lg:flex-row py-8 gap-6 items-center">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            Shape Your Future with ICEM’s Top{" "}
            <span className="text-[#259CA8]">Engineering</span> Programmes!
          </h1>

          <p className="text-xl py-4 hidden lg:block">
            2 Decades of Excellence in Education <br />
            <span className="text-[#259CA8] font-bold">
              100% Guaranteed Placement Assistance
            </span>
          </p>

          <p className="text-2xl md:text-3xl py-2 hidden lg:block">
            Build. {text}_ {/* live typing effect */}
          </p>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-2 bg-[#259CA8] rounded-lg font-semibold hover:translate-x-2 transition-all duration-300">
              Apply Now
              <FaLongArrowAltRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] p-6 rounded-md shadow-md space-y-3"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
          >
            <Input type="text" placeholder="Enter your name" />
            <Input type="email" placeholder="Enter your email" />
            <Input type="tel" placeholder="Enter your mobile number" />
            <select
              required
              className="w-full p-2 bg-gradient-to-r from-white via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none"
            >
              <option value="">Select Course</option>
              <option value="Mech">Mechanical Engineering</option>
              <option value="AI">Electronics and Telecommunication Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="CS">Computer Science</option>
              <option value="AIDS">AI and Data Science</option>
            </select>
            <button
              type="submit"
              className="w-full py-2 bg-[#259CA8] text-white rounded-lg hover:bg-[#135783] transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Input = ({ type, placeholder }) => (
  <input
    type={type}
    required
    placeholder={placeholder}
    className="w-full p-2 bg-gradient-to-r from-white via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none"
  />
);

export default MechHero;
