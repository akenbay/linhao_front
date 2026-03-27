export function CloudSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="currentColor">
      <path d="M30,60 Q20,60 15,52 Q5,55 5,45 Q5,35 15,33 Q13,20 25,18 Q30,8 42,10 Q50,2 62,8 Q72,2 82,10 Q94,8 98,18 Q110,16 112,28 Q122,28 122,40 Q122,52 110,52 Q108,60 98,60 Z" opacity="0.9"/>
    </svg>
  )
}

export function LanternSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="currentColor">
      <rect x="22" y="0" width="16" height="8" rx="2"/>
      <ellipse cx="30" cy="12" rx="10" ry="4"/>
      <path d="M12,16 Q8,50 12,84 Q20,92 30,92 Q40,92 48,84 Q52,50 48,16 Z"/>
      <ellipse cx="30" cy="88" rx="10" ry="4"/>
      <rect x="27" y="92" width="6" height="8" rx="1"/>
      <line x1="24" y1="92" x2="20" y2="102" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="36" y1="92" x2="40" y2="102" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="20" cy="103" rx="3" ry="1.5"/>
      <ellipse cx="40" cy="103" rx="3" ry="1.5"/>
    </svg>
  )
}

export function CloudKnotSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M40,5 C25,5 15,15 15,28 C15,35 18,40 22,44 L18,48 C10,52 5,60 5,70 C5,82 14,90 25,90 C30,90 35,88 38,85 L40,95 L42,85 C45,88 50,90 55,90 C66,90 75,82 75,70 C75,60 70,52 62,48 L58,44 C62,40 65,35 65,28 C65,15 55,5 40,5 Z"/>
      <circle cx="40" cy="50" r="8"/>
    </svg>
  )
}

export function WaveDivider({ flipped = false, color = '#990808' }: { flipped?: boolean; color?: string }) {
  return (
    <div style={{ transform: flipped ? 'scaleY(-1)' : undefined, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export function MeanderBorder({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 20" className={className} preserveAspectRatio="none">
      <path
        d="M0,10 L10,10 L10,0 L20,0 L20,20 L30,20 L30,10 L40,10 L40,0 L50,0 L50,20 L60,20 L60,10 L70,10 L70,0 L80,0 L80,20 L90,20 L90,10 L100,10 L100,0 L110,0 L110,20 L120,20 L120,10 L130,10 L130,0 L140,0 L140,20 L150,20 L150,10 L160,10 L160,0 L170,0 L170,20 L180,20 L180,10 L190,10 L190,0 L200,0 L200,20 L210,20 L210,10 L220,10 L220,0 L230,0 L230,20 L240,20 L240,10 L250,10 L250,0 L260,0 L260,20 L270,20 L270,10 L280,10 L280,0 L290,0 L290,20 L300,20 L300,10 L310,10 L310,0 L320,0 L320,20 L330,20 L330,10 L340,10 L340,0 L350,0 L350,20 L360,20 L360,10 L370,10 L370,0 L380,0 L380,20 L390,20 L390,10 L400,10"
        fill="none" stroke="#EDC537" strokeWidth="2"
      />
    </svg>
  )
}

export function CornerDecoration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="#EDC537" strokeWidth="2">
      <path d="M0,50 L0,10 Q0,0 10,0 L50,0"/>
      <path d="M8,50 L8,16 Q8,8 16,8 L50,8"/>
      <path d="M16,50 L16,22 Q16,16 22,16 L50,16"/>
    </svg>
  )
}