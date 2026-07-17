import { useState, useEffect, useMemo, useRef } from "react";
import { X } from "lucide-react";

function ApplyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [message, setMessage] = useState("Loading form...");
  const timerRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-apply-modal", handleOpen);
    return () => window.removeEventListener("open-apply-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowSkeleton(true);
    setMessage("Loading form...");
  };

  const iframeSrc = useMemo(() => {
    if (!isOpen) return "";
    if (typeof window !== "undefined") {
      const token = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      
      // Store in sessionStorage (for local fallback)
      window.sessionStorage.setItem("icem_npf_thank_you_token", token);
      
      // Store in cookie with wildcard subdomain
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const cookieDomain = isLocal ? "" : "; domain=.indiraicem.ac.in";
      document.cookie = `icem_npf_thank_you_token=${token}; path=/${cookieDomain}; max-age=120; Secure; SameSite=Lax`;
      
      // Set redirect URL
      const origin = isLocal ? window.location.origin : "https://indiraicem.ac.in";
      const redirectUrl = encodeURIComponent(`${origin}/thank-you?npf_token=${encodeURIComponent(token)}`);
      
      return `https://widgets.nopaperforms.com/register?&r=${redirectUrl}&w=9fa0f32fe4f405fa68dc3df39ef6a11b`;
    }
    return "https://widgets.nopaperforms.com/register?&r=https://indiraicem.ac.in/thank-you/&w=9fa0f32fe4f405fa68dc3df39ef6a11b";
  }, [isOpen]);

  const handleIframeLoad = () => {
    setShowSkeleton(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        if (showSkeleton) {
          setMessage("NPF form not supported on this domain");
        }
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, showSkeleton]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
        onClick={handleClose}
      ></div>

      {/* Modal Card */}
      <div className="bg-white w-full max-w-md rounded-3xl p-5 shadow-2xl relative border border-gray-100 flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200 min-h-[550px]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-all z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h3 className="text-xl font-extrabold text-center mb-4 text-[#F37121] tracking-tight">
          Admissions Open 2026
        </h3>

        {/* Form Container */}
        <div className="relative flex-1 rounded-2xl overflow-hidden min-h-[490px]">
          {showSkeleton && (
            <div className="absolute inset-0 bg-gray-50 rounded-2xl p-4 animate-pulse z-10 flex flex-col justify-center items-center">
              <div className="space-y-4 w-full">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
              </div>
              <div className={`mt-6 text-center text-sm font-semibold ${message === "Loading form..." ? "text-gray-400" : "text-red-500"}`}>
                {message}
              </div>
            </div>
          )}
          <iframe
            src={iframeSrc}
            width="100%"
            height="490"
            frameBorder="0"
            allowFullScreen
            title="NPF Enquiry Form Popup"
            className="rounded-2xl overflow-hidden"
            scrolling="no"
            style={{ overflow: "hidden" }}
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
