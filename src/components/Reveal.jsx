import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal();
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
