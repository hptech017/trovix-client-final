import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqData = [
  // Your existing FAQ questions...

  // Plan-related questions
  {
    isTitle: true,
    title: "PLAN & ROI QUESTIONS"
  },
  {
    question: "When will I start receiving ROI?",
    answer: "The ROI depends on the type of plan. Some plans pay monthly rewards, while others pay a lump sum at the end of the plan duration."
  },
  {
    question: "How many levels of plans are available?",
    answer: "Currently, TROVIX offers 3 plan levels — Basic, Pro, and Elite — each with different benefits and ROI rates."
  },
  {
    question: "Is referral income available?",
    answer: "Yes, there is a referral program where you can earn commissions by inviting others. Referral rates vary depending on the plan."
  },
  {
    question: "What are the conditions to earn referral income?",
    answer: "Referral income is earned when your referral makes a valid investment and follows the plan terms. Some plans may have minimum investment requirements."
  },
  {
    question: "How is ROI calculated?",
    answer: "ROI is calculated based on the duration of the plan and the amount invested. A detailed breakdown is available on your dashboard."
  },
  {
    question: "Can I upgrade my plan?",
    answer: "Yes, you can upgrade your existing plan to a higher tier to access additional benefits."
  },
  {
    question: "Are there any hidden charges in the plans?",
    answer: "No, TROVIX follows a transparent fee structure. All fees and charges are disclosed upfront."
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:px-24 bg-black-900">
      <div className="bg-[#171614] rounded-xl border border-gray-700 p-8 w-full max-w-4xl xl:max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) =>
            item.isTitle ? (
              <h3
                key={index}
                className="text-[#FF9F82] uppercase text-sm font-bold mt-6"
              >
                {item.title}
              </h3>
            ) : (
              <div key={index} className="flex flex-col">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer text-white"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <span className="text-[#FF4D4D] text-xl">
                    {openIndex === index ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="text-gray-400 text-sm mt-2 px-2">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
