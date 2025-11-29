import { lazy, Suspense, useState } from "react";

// Lazy load the PDF components
const PDFDownloadLink = lazy(() => 
  import("@react-pdf/renderer").then(module => ({ 
    default: module.PDFDownloadLink 
  }))
);

const ResumeDocument = lazy(() => import("./ResumeDocument"));

interface LazyResumePDFProps {}

const LazyResumePDF: React.FC<LazyResumePDFProps> = () => {
  const [showDownload, setShowDownload] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4">
      {!showDownload ? (
        <button
          onClick={() => setShowDownload(true)}
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
        >
          📄 Download Resume as PDF
        </button>
      ) : (
        <Suspense fallback={
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Loading PDF generator...</span>
          </div>
        }>
          <PDFDownloadLink 
            document={<ResumeDocument />} 
            fileName="BDevC_Resume.pdf"
            className="bg-linear-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            {({ loading }) =>
              loading ? "Generating PDF..." : "⬇️ Download Now"
            }
          </PDFDownloadLink>
        </Suspense>
      )}
    </div>
  );
};

export default LazyResumePDF;