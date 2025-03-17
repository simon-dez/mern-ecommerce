import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <svg
          className="w-16 h-16 text-[#6C6A61] mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L6.41 12 5 13.41l6 6 10-10L19.59 8 11 16.59z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase at the DEDSV store. Your order has been
          processed successfully.
        </p>
        <Link
          to="/account"
          className="mt-6 inline-block bg-[#45423D] text-white py-2 px-6 rounded-lg hover:bg-[#C5C7CA] transition"
        >
          View Orders
        </Link>
        <Link
          to="/"
          className="mt-3 block text-gray-500 hover:text-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
