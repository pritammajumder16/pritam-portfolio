import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-md text-center">
        <img
          src="/error-illustration.jpg"
          alt="Error Illustration"
          className="w-full h-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">
          We can't seem to find the page you're looking for. It might have been
          moved or deleted.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
