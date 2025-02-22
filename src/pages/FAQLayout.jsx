import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-netflixGray">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-white sm:text-2xl  p-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-all"
      >
        {question}
        <span className="text-3xl">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="p-4 sm:text-lg text-gray-300 bg-gray-900">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
