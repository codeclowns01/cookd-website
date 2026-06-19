export default function HpDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="hp-g1" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FFC400" />
          <stop offset=".55" stopColor="#FF7A1A" />
          <stop offset="1" stopColor="#FF4D00" />
        </linearGradient>
        <symbol id="hp-fl" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2c2 4.5 6 6.5 6 11a6 6 0 0 1-12 0c0-2 .8-3.6 2-5 .3 1.6 1 2.6 2 3-.5-3 .5-6.5 2-9z" />
        </symbol>
      </defs>
    </svg>
  );
}
