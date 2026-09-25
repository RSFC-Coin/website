import './CoinVisual.css';

/**
 * Abstract RFS Coin mark — black / dark royal blue metallic disc.
 * Not based on any other cryptocurrency logo.
 */
export default function CoinVisual({ size = 320, className = '' }) {
  return (
    <div
      className={`coin-visual ${className}`}
      style={{ '--coin-size': `${size}px` }}
      aria-hidden="true"
    >
      <div className="coin-visual__glow" />
      <div className="coin-visual__disc">
        <div className="coin-visual__ring coin-visual__ring--outer" />
        <div className="coin-visual__ring coin-visual__ring--mid" />
        <div className="coin-visual__ring coin-visual__ring--inner" />
        <div className="coin-visual__face">
          <span className="coin-visual__mark">RFS</span>
          <span className="coin-visual__sub">COIN</span>
        </div>
        <div className="coin-visual__shine" />
      </div>
    </div>
  );
}
