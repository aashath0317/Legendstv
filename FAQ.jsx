import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-800">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-red-600 transition-colors">
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {/* Chevron Icon */}
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-red-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-6 text-gray-400 leading-relaxed text-lg">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Why invest in startups?",
            answer: (
                <p>
                    <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-11" className="text-white underline hover:text-red-600 transition-colors">Regulation CF</a> allows investors to invest in startups and early-growth companies. This is different from helping a company raise money on Kickstarter; with Regulation CF Offerings, you aren’t buying products or merchandise - you are buying a piece of a company and helping it grow.
                </p>
            )
        },
        {
            question: "How much can I invest?",
            answer: (
                <p>
                    <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-3" className="text-white underline hover:text-red-600 transition-colors">Accredited investors</a> can invest as much as they want. But if you are NOT an accredited investor, your investment limit depends on either your annual income or net worth, whichever is greater. If the number is less than $124,000, you can only invest 5% of it. If both are greater than $124,000 then your investment limit is 10%.
                </p>
            )
        },
        {
            question: "How do I calculate my net worth?",
            answer: "To determine your net worth, total all your assets and subtract your liabilities (excluding the value of your primary residence). The resulting number represents your net worth."
        },
        {
            question: "What are the tax implications of an equity crowdfunding investment?",
            answer: "We do not provide tax advice. Please consult your accountant or tax advisor before making any investment decisions."
        },
        {
            question: "Who can invest in a Regulation CF Offering?",
            answer: "Investors must be at least 18 years old to participate."
        },
        {
            question: "What should I know about early-stage investing? Are these investments risky?",
            answer: "Investing in startups or small businesses always carries some risk. Earlier-stage companies typically involve higher risk. If a young company fails, your ownership could become worthless. Voting power may be limited due to dilution over time. Exits via acquisition or IPO may take 5–7 years or longer. Startups are still developing their products, services, and business models, so nothing is guaranteed. Early-stage investments should only be part of a diversified portfolio."
        },
        {
            question: "When will I get my investment back?",
            answer: "LegendsTV Digital (the \"Company\") shares are not publicly traded and cannot be easily sold. Returns typically occur through an acquisition or if the company goes public. In such cases, you receive your pro-rata share or can sell shares on an exchange. These are long-term exits that may take 5–10 years or more, and there is no guarantee of return if the company fails."
        },
        {
            question: "Can I sell my shares?",
            answer: "Shares purchased through a Regulation Crowdfunding offering have a one-year lockup period, after which they may be sold under certain conditions."
        },
        {
            question: "Exceptions to limitations on selling shares during the one-year lockup period:",
            answer: (
                <>
                    <p className="mb-4">In cases of death, divorce, or similar events, shares may be transferred to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The issuing company</li>
                        <li>An accredited investor</li>
                        <li>A family member (including children, stepchildren, grandchildren, parents, stepparents, grandparents, spouses, siblings, in-laws, and adoptive relationships)</li>
                    </ul>
                </>
            )
        },
        {
            question: "What happens if a company does not reach its funding target?",
            answer: "If a company fails to meet its minimum funding goal, all funds will be returned to investors after the offering closes."
        },
        {
            question: "How can I learn more about a company's offering?",
            answer: "Full disclosure information is available on the offering pages of our Regulation Crowdfunding campaign."
        },
        {
            question: "What if I change my mind about investing?",
            answer: "You can cancel your investment at any time, for any reason, up to 48 hours before the offering closes. If funds are already in escrow, they will be promptly refunded. To cancel, please email: info@dealmakersecurities.com"
        },
        {
            question: "How do I stay updated on the company's progress?",
            answer: "The company will file annual reports and certified financial statements with the SEC and post them on its website, typically within 120 days after fiscal year-end. Reporting may change if the company meets certain exemptions or files additional information with the SEC."
        },
        {
            question: "What is the company's relationship with DealMaker Securities?",
            answer: "After the offering, the company may continue working with DealMaker Securities for future offerings. Affiliates of DealMaker Securities may provide ongoing services, but there is no guarantee these services will continue."
        },
        {
            question: "What is LegendsTV Digital?",
            answer: "LegendsTV Digital (LTV) is an innovative sports media company aiming to disrupt the traditional industry hierarchy. Despite being newly formed, the founding team’s expertise makes LTV a formidable player in the sports media landscape."
        }
    ];

    return (
        <section className="bg-black py-24 border-t border-gray-900 text-white">
            {/* UPDATED: Changed from max-w-4xl to max-w-7xl to allow full width for image */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* INNER CONTAINER: Keeps the Text and Header narrow (readable)
                   This mimics the max-w-4xl you had before for the text parts.
                */}
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h4 className="font-bold italic uppercase tracking-wider text-sm mb-4">
                            FAQ
                        </h4>
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-wide leading-none mb-6 font-anton">
                            FREQUENTLY ASKED<br />QUESTIONS
                        </h2>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-2 mb-24">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* IMAGE: Now sits outside the inner container, allowing it to be HUGE (max-w-7xl)
                */}
                <div className="w-full">
                    <img
                        src="/team.webp"
                        alt="LegendsTV Team"
                        className="w-full h-auto object-cover rounded-xl opacity-90 transition-all duration-700"
                    />
                </div>

            </div>
        </section>
    );
};

export default FAQ;