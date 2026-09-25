import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/token';
import Reveal from './Reveal';
import './FAQ.css';

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const panelId = useId();
  const buttonId = useId();
  const isOpen = openIndex === index;

  return (
    <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
      <h3>
        <button
          type="button"
          id={buttonId}
          className="faq__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          <span>{item.question}</span>
          <ChevronDown
            className="faq__chevron"
            size={18}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq__panel"
        hidden={!isOpen}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq section" aria-labelledby="faq-heading">
      <div className="container faq__layout">
        <Reveal>
          <div className="faq__intro">
            <p className="section-label">FAQ</p>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-lead">
              Answers based on publicly available project information. Unannounced
              details remain placeholders.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="faq__list">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
