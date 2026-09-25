  /**
   * RFS Coin — Official project data configuration
   * ------------------------------------------------
   * Replace PLACEHOLDER values with official data when available.
   * Do NOT invent contract addresses, market data, or allocations.
   */

  export const siteConfig = {
    name: 'RFS Coin',
    symbol: 'RFS',
    tagline: 'Building a Simple Digital Asset for the Future.',
    description:
      'RFS Coin is a cryptocurrency project focused on building a simple, transparent, and community-oriented digital asset ecosystem.',
    yearStarted: '2026',
    // Social links — replace "#" with official URLs when available
    social: {
      github: '#',
      x: '#',
      telegram: '#',
      discord: '#',
    },
  };

  export const tokenData = {
    tokenName: 'RFS Coin',
    symbol: 'RFS',
    // TODO: Replace with official blockchain network name
    blockchain: null, // PLACEHOLDER — shows "Not available yet"
    // TODO: Replace with official total supply figure
    totalSupply: null, // PLACEHOLDER
    // TODO: Replace with official circulating supply
    circulatingSupply: null, // PLACEHOLDER
    // TODO: Replace with official contract address — never use a fake address
    contractAddress: null, // PLACEHOLDER
    // TODO: Replace with official decimal count
    decimals: null, // PLACEHOLDER
  };

  /**
   * Stats displayed on the landing page.
   * Update values when official data is confirmed.
   */
  export const stats = [
    { value: 'RFS', label: 'Token Symbol' },
    { value: 'RFS Coin', label: 'Project Name' },
    // TODO: Confirm official total supply before treating as final
    { value: '100M', label: 'Total Supply' },
    { value: '2026', label: 'Project Started' },
  ];

  /**
   * Tokenomics allocation — PLACEHOLDER DATA ONLY.
   * Replace percentages with the official RFS Coin allocation.
   */
  export const tokenomics = {
    note: 'Token allocation shown here is placeholder data and should be replaced with the official RFS Coin allocation.',
    segments: [
      { id: 'community', label: 'Community', percent: 30, color: '#001A54' },
      { id: 'development', label: 'Development', percent: 25, color: '#0A2A6E' },
      { id: 'liquidity', label: 'Liquidity', percent: 20, color: '#1A3A7A' },
      { id: 'marketing', label: 'Marketing', percent: 15, color: '#2A4A8A' },
      { id: 'treasury', label: 'Treasury', percent: 10, color: '#3A5A9A' },
    ],
  };

  export const roadmap = [
    {
      phase: '01',
      title: 'Foundation',
      status: 'planned',
      items: ['Project concept', 'Branding', 'Website', 'Initial development'],
    },
    {
      phase: '02',
      title: 'Development',
      status: 'planned',
      items: ['Token development', 'Ecosystem planning', 'Community building'],
    },
    {
      phase: '03',
      title: 'Expansion',
      status: 'planned',
      items: ['Product development', 'Ecosystem expansion', 'Partnerships'],
    },
    {
      phase: '04',
      title: 'Future',
      status: 'planned',
      items: [
        'Additional utilities',
        'Community-driven development',
        'Long-term ecosystem growth',
      ],
    },
  ];

  export const technologies = [
    {
      id: 'blockchain',
      title: 'Blockchain',
      description: 'Distributed ledger infrastructure for the RFS digital asset.',
    },
    {
      id: 'smart-contract',
      title: 'Smart Contract',
      description: 'Programmable logic to support transparent token operations.',
    },
    {
      id: 'web3',
      title: 'Web3',
      description: 'Interfaces designed for decentralized application ecosystems.',
    },
    {
      id: 'wallet',
      title: 'Wallet Integration',
      description: 'Planned support for common Web3 wallet connections.',
    },
    {
      id: 'api',
      title: 'API',
      description: 'Service layers to connect applications with RFS data.',
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Development practices focused on careful, reviewable code.',
    },
  ];

  export const whyRfs = [
    {
      id: 'simple',
      title: 'Simple',
      description:
        'Focused on an experience that is easy to understand — without unnecessary complexity.',
    },
    {
      id: 'transparent',
      title: 'Transparent',
      description:
        'Project and token information is presented clearly as it becomes available.',
    },
    {
      id: 'community',
      title: 'Community',
      description:
        'Development is directed toward building a community-oriented ecosystem.',
    },
    {
      id: 'open',
      title: 'Open Development',
      description:
        'Project progress can be shared openly as milestones are reached.',
    },
  ];

  export const faqItems = [
    {
      question: 'What is RFS Coin?',
      answer:
        'RFS Coin is a cryptocurrency project under development, focused on building a simple, transparent, and community-oriented digital asset ecosystem.',
    },
    {
      question: 'Where can I get RFS Coin?',
      answer: 'Information will be announced officially.',
    },
    {
      question: 'What blockchain does RFS use?',
      answer: 'Information will be announced officially.',
    },
    {
      question: 'What is the total supply?',
      answer: 'Information will be announced officially.',
    },
    {
      question: 'Does RFS have a contract address?',
      answer:
        'A contract address is not available yet. It will be published officially when ready. Never trust unofficial addresses.',
    },
    {
      question: 'Is RFS an investment?',
      answer:
        'RFS Coin is a digital asset project under development. Nothing on this website should be considered financial advice or a guarantee of returns. Always do your own research.',
    },
    {
      question: 'Where can I follow the project?',
      answer:
        'Official channels will be listed on this website when available. Until then, treat any unverified social accounts with caution.',
    },
  ];

  export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#token', label: 'Token' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#technology', label: 'Technology' },
    { href: '#faq', label: 'FAQ' },
  ];

  /** Helper: display placeholder text for missing official data */
  export function displayValue(value, fallback = 'Not available yet') {
    if (value === null || value === undefined || value === '') {
      return fallback;
    }
    return value;
  }
