import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { displayValue, tokenData } from '../data/token';
import Reveal from './Reveal';
import './TokenInfo.css';

const rows = [
  { key: 'tokenName', label: 'Token Name' },
  { key: 'symbol', label: 'Symbol' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'totalSupply', label: 'Total Supply' },
  { key: 'circulatingSupply', label: 'Circulating Supply' },
  { key: 'contractAddress', label: 'Contract Address' },
  { key: 'decimals', label: 'Decimals' },
];

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);
  const address = tokenData.contractAddress;
  const hasAddress = Boolean(address);

  const handleCopy = async () => {
    if (!hasAddress) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="token" className="token section" aria-labelledby="token-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">Token</p>
          <h2 id="token-heading" className="section-title">
            Token Information
          </h2>
          <p className="section-lead">
            Official token parameters will appear here as they are finalized.
            Placeholder fields are marked clearly.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="token__panel">
            <dl className="token__table">
              {rows.map((row) => {
                const raw = tokenData[row.key];
                const value = displayValue(raw);
                const isPlaceholder = raw === null || raw === undefined || raw === '';

                return (
                  <div key={row.key} className="token__row">
                    <dt>{row.label}</dt>
                    <dd className={isPlaceholder ? 'is-placeholder' : ''}>
                      {row.key === 'contractAddress' && hasAddress ? (
                        <code className="token__address">{value}</code>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="token__actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCopy}
                disabled={!hasAddress}
                aria-describedby={!hasAddress ? 'contract-hint' : undefined}
              >
                {copied ? (
                  <>
                    <Check size={16} aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    Copy Contract Address
                  </>
                )}
              </button>
              {!hasAddress && (
                <p id="contract-hint" className="token__hint">
                  Contract address is not available yet.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
