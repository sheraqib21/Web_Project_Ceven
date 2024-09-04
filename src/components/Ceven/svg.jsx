export function svg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: 'hsl(206, 75%, 49%)', stopOpacity: 1}} />
      <stop offset="100%" style={{stopColor: 'hsl(331, 90%, 56%)', stopOpacity: 1}} />
    </linearGradient>
  </defs>
  <g transform="translate(140, 40)">
    <path id="firstI" d="M0 0 L0 120 M0 0 L40 0 L40 120 L0 120" stroke="url(#lineGradient)" strokeWidth={10} fill="none" strokeLinecap="round" strokeDasharray={200} strokeDashoffset={200} />
    <path id="secondI" d="M80 0 L80 120 M80 0 L120 0 L120 120 L80 120" stroke="url(#lineGradient)" strokeWidth={10} fill="none" strokeLinecap="round" strokeDasharray={200} strokeDashoffset={200} />
  </g>
</svg>

    )
}