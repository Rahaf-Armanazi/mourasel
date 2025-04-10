import { useState, useEffect } from 'react';
import axios from 'axios';

const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('/api/faqs');
                const filteredFaqs = response.data.filter(faq => faq.slug !== 'top');
                setFaqs(filteredFaqs);
            } catch (err) {
                setError('Failed to fetch FAQs');
                console.error('Error fetching FAQs:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="tp-support__area pt-120 pb-120 grey-bg p-relative">
            <div className="tp-support__bg">
                <img 
                    src="/assets/frontend/img/faq/faq-bg-shape.png" 
                    alt="FAQ background"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-support__title-box text-center mb-70">
                            <h3 className="tp-section-title">
                                Frequently asked questions 📣
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-support__faq">
                            <div className="tp-custom-accordio-2">
                                <div className="accordion">
                                    {faqs.map((faq, index) => (
                                        <div className="accordion-items" key={faq.id || index}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${activeIndex !== index ? 'collapsed' : ''}`}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    {faq.title}
                                                </button>
                                            </h2>
                                            <div
                                                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                            >
                                                <div className="accordion-body">
                                                    {faq.excerpt?.value || ''}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
