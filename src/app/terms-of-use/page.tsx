"use client";
import { useRouter } from "next/navigation";

const TermsOfUse: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-white text-[#860E13]">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-8">Privacy Policy</h2>
        <p>Coming Soon!</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
