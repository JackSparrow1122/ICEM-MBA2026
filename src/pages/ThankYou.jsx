import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function ThankYou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(6);
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    // 1. If loaded inside an iframe (from NPF widget redirect), break out and load on parent window.
    // We do NOT validate/consume the token yet so that the top-level window can validate it.
    if (window.self !== window.top) {
      window.top.location.href = window.location.href;
      return;
    }

    // 2. Validate token on top-level window load
    const token = new URLSearchParams(window.location.search).get("npf_token");
    const storedToken = sessionStorage.getItem("icem_npf_thank_you_token");
    
    // Consume the token immediately so it cannot be reused
    sessionStorage.removeItem("icem_npf_thank_you_token");

    if (!token || !storedToken || token !== storedToken) {
      // Direct access attempt or invalid token, redirect to homepage
      navigate("/");
      return;
    }

    setIsValidated(true);

    // 3. Track successful form submission using Google Tag Manager dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submission_success",
      page_path: "/thank-you",
    });

    // 4. Setup redirect countdown timer
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  if (!isValidated) {
    return null; // Keep screen clean while checking token validity or breaking out of iframe
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between pt-8 md:pt-16">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          {/* Success Checkmark Icon */}
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 animate-bounce">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-[#003c84] mb-3">
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Your enquiry has been submitted successfully.
            <span className="block mt-1 font-medium text-gray-500">
              We will get back to you soon.
            </span>
          </p>

          {/* Countdown timer */}
          <div className="py-2 px-4 bg-gray-50 rounded-2xl inline-block mb-8">
            <p className="text-sm text-gray-500 font-medium">
              Redirecting to home page in{" "}
              <span className="text-[#259CA8] font-bold text-base">{seconds}</span>{" "}
              seconds...
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => window.history.back()}
              className="w-full bg-[#003c84] hover:bg-[#135783] text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Go Back
            </button>
            <a
              href="/"
              className="block w-full bg-gray-50 hover:bg-gray-100 text-[#003c84] border border-gray-200 py-3 px-6 rounded-xl font-bold transition-all duration-300 cursor-pointer"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;
