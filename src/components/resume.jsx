import React, { useState, useEffect } from "react";

const Resume = () => {
  const resumePDF = "/Eddy_resume.pdf";
  const [iframeError, setIframeError] = useState(false);
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Eddy_Gonzalez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 px-4">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <button
            onClick={handleDownload}
            className="text-black bg-[#EACD86] hover:bg-[#dcbf70] px-6 py-3 rounded-lg font-semibold text-[18px] transition-all duration-200 shadow-md z-10"
          >
            Download the Resume
          </button>
          <button
            onClick={handleViewInNewTab}
            className="text-white bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold text-[18px] transition-all duration-200 shadow-md z-10"
          >
            View in New Tab
          </button>
        </div>
        
        {!iframeError ? (
          <div className="w-full h-[calc(100vh-200px)] rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <iframe
              src={resumePDF}
              title="Eddy Gonzalez Resume"
              className="w-full h-full"
              onError={() => setIframeError(true)}
              onLoad={() => setIframeError(false)}
            ></iframe>
          </div>
        ) : (
          <div className="w-full h-[calc(100vh-200px)] rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center bg-gray-800">
            <p className="text-white text-lg mb-4">PDF viewer not supported in this browser</p>
            <button
              onClick={handleViewInNewTab}
              className="text-black bg-[#EACD86] hover:bg-[#dcbf70] px-6 py-3 rounded-lg font-semibold text-[18px] transition-all duration-200 shadow-md"
            >
              Open PDF in New Tab
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
