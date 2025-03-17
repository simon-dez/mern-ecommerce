import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="img"
          aria-label="Payment Failed"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 13.41L13.41 12l3.18-3.18-1.41-1.41L12 10.59 8.82 7.41 7.41 8.82 10.59 12l-3.18 3.18 1.41 1.41L12 13.41l3.18 3.18 1.41-1.41z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">Payment Failed</h2>
        <p className="text-gray-600 mt-2">
          Oops! Something went wrong while processing your payment. Please try
          again.
        </p>
        <div className="flex flex-col items-center gap-3 mt-6">
          <Link
            to="/checkout"
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
            aria-label="Retry Payment"
          >
            Retry Payment
          </Link>
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-700 transition"
            aria-label="Back to Home"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Failure;
