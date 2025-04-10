import { useState } from 'react';

const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-items">
      <h2 className="accordion-header" id={`heading-${index}`}>
        <button
          className={`accordion-buttons ${!isOpen ? 'collapsed' : ''}`}
          onClick={toggle}
          aria-expanded={isOpen}
        >
          {faq.title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
        <div className="accordion-body">
          {faq.excerpt?.value}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
