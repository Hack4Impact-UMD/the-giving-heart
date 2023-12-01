"use client"

import { useRouter } from "next/navigation";
import { Button } from "./button";

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  const handlePreviousPage = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white text-[#860E13]">
      <div className="text-center">
        <p className="text-9xl font-bold mb-4">404</p>
        <h2 className="text-4xl font-semibold mb-8"> Page not found!</h2>
        <div className="flex space-x-4">
          <Button
            variant="destructive"
            size="lg"
            onClick={handleBackToHome}
            className="bg-[#860E13] text-white rounded-md"
          >
            Back to Home
          </Button>
          <Button
            variant="destructive"
            size="lg"
            onClick={handlePreviousPage}
            className="bg-[#860E13] text-white rounded-md"
          >
            Previous Page
          </Button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;


//className="bg-[#860E13] text-white rounded-md"