import FAQItem from "./FAQLayout";

const FAQSection = () => {
  const faqData = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, and documentaries." },
    { question: "How much does Netflix cost?", answer: "Netflix has different plans, starting from basic to premium, with varying prices." },
    { question: "Where can I watch?", answer: "You can watch Netflix on any internet-connected device with the Netflix app, including smart TVs, game consoles, streaming media players, and mobile devices." },
    { question: "How do I cancel?", answer: "You can cancel your membership anytime from your account settings with no cancellation fees." },
    { question: "What can I watch on Netflix?", answer: "Netflix has a massive library of content, including award-winning originals, classic movies, and trending shows." },
  ];

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-center text-[19px] sm:text-4xl text-white font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
