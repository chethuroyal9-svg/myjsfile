import { useState, useEffect, useRef } from "react";

// ─── CUSTOM SVG POSTERS ────────────────────────────────────────────────────────
// Each poster is a unique SVG illustration telling the story of that movie/show

const POSTERS = {

  // 1. Neon Requiem - Cyberpunk detective in rain-soaked city
  NeonRequiem: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#050510"/>
      {/* Rain streaks */}
      {[15,28,42,55,68,80,95,108,120,135,148,162,175,188,202,215].map((x,i)=>(
        <line key={i} x1={x} y1={i%3*20} x2={x-4} y2={i%3*20+30} stroke="#1a2a4a" strokeWidth="0.7" opacity="0.7"/>
      ))}
      {/* City buildings silhouette */}
      <rect x="0" y="80" width="30" height="50" fill="#0a0a1a"/>
      <rect x="25" y="65" width="20" height="65" fill="#0d0d20"/>
      <rect x="40" y="75" width="25" height="55" fill="#090915"/>
      <rect x="60" y="55" width="18" height="75" fill="#0a0a1a"/>
      <rect x="73" y="70" width="22" height="60" fill="#0d0d20"/>
      <rect x="150" y="60" width="25" height="70" fill="#0a0a1a"/>
      <rect x="170" y="72" width="20" height="58" fill="#090915"/>
      <rect x="185" y="50" width="18" height="80" fill="#0d0d20"/>
      <rect x="198" y="65" width="22" height="65" fill="#0a0a1a"/>
      {/* Neon signs on buildings */}
      <rect x="27" y="70" width="14" height="3" fill="#ff2060" opacity="0.9" rx="1"/>
      <rect x="62" y="62" width="10" height="3" fill="#00ffcc" opacity="0.8" rx="1"/>
      <rect x="152" y="68" width="16" height="3" fill="#ff2060" opacity="0.9" rx="1"/>
      <rect x="187" y="58" width="12" height="3" fill="#7b2fff" opacity="0.9" rx="1"/>
      {/* Neon glow reflections on wet street */}
      <rect x="0" y="108" width="220" height="22" fill="#07070f"/>
      <ellipse cx="45" cy="118" rx="18" ry="5" fill="#ff2060" opacity="0.2"/>
      <ellipse cx="160" cy="116" rx="22" ry="4" fill="#ff2060" opacity="0.15"/>
      <ellipse cx="190" cy="119" rx="12" ry="3" fill="#7b2fff" opacity="0.2"/>
      {/* Detective figure - coat and hat */}
      <rect x="96" y="58" width="28" height="52" fill="#111122" rx="2"/>
      {/* Coat */}
      <rect x="93" y="70" width="34" height="40" fill="#0d0d22" rx="1"/>
      {/* Wide-brim hat */}
      <ellipse cx="110" cy="60" rx="20" ry="4" fill="#0a0a18"/>
      <rect x="99" y="51" width="22" height="12" fill="#0a0a18" rx="2"/>
      {/* Face - barely visible in shadow */}
      <rect x="103" y="56" width="14" height="10" fill="#1a1a30" rx="1"/>
      {/* Cigarette glow */}
      <circle cx="117" cy="63" r="2" fill="#ff6600" opacity="0.9"/>
      <ellipse cx="122" cy="62" rx="6" ry="2" fill="#ff6600" opacity="0.15"/>
      {/* Title */}
      <text x="110" y="17" textAnchor="middle" fill="#ff2060" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="2">NEON</text>
      <text x="110" y="28" textAnchor="middle" fill="#cc1040" fontSize="7" fontFamily="monospace" letterSpacing="3">REQUIEM</text>
      {/* Rain over everything */}
      {[20,35,50,65,78,92,105,118,130,145,158,170,183,196,210].map((x,i)=>(
        <line key={`r${i}`} x1={x+(i%5)} y1={25+i%15} x2={x+(i%5)-3} y2={45+i%15} stroke="#1530508a" strokeWidth="0.5"/>
      ))}
    </svg>
  ),

  // 2. Crimson Tide - Family drama, stormy sea symbolism
  CrimsonTide: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#0d0508"/>
      {/* Dark stormy sky */}
      <rect x="0" y="0" width="220" height="75" fill="#1a0810"/>
      {/* Storm clouds */}
      <ellipse cx="50" cy="30" rx="45" ry="20" fill="#2a0f18" opacity="0.8"/>
      <ellipse cx="110" cy="20" rx="60" ry="22" fill="#250d15" opacity="0.9"/>
      <ellipse cx="175" cy="35" rx="50" ry="18" fill="#2a0f18" opacity="0.8"/>
      <ellipse cx="130" cy="10" rx="40" ry="15" fill="#1e0b12" opacity="0.7"/>
      {/* Red lightning bolt */}
      <polyline points="140,5 128,38 136,38 122,68" stroke="#cc1a2a" strokeWidth="1.5" fill="none" opacity="0.85"/>
      <ellipse cx="130" cy="36" rx="30" ry="18" fill="#aa1020" opacity="0.08"/>
      {/* Crimson sea waves */}
      <path d="M0,75 Q22,68 44,75 Q66,82 88,75 Q110,68 132,75 Q154,82 176,75 Q198,68 220,75 L220,130 L0,130 Z" fill="#3d0a10"/>
      <path d="M0,83 Q25,76 50,83 Q75,90 100,83 Q125,76 150,83 Q175,90 200,83 Q210,80 220,83 L220,130 L0,130 Z" fill="#2e0810"/>
      <path d="M0,92 Q30,87 60,92 Q90,97 120,92 Q150,87 180,92 Q200,97 220,92 L220,130 L0,130 Z" fill="#200508"/>
      {/* Three silhouette figures on shore */}
      {/* Father */}
      <rect x="85" y="58" width="8" height="20" fill="#0d0508" rx="1"/>
      <circle cx="89" cy="55" r="5" fill="#0d0508"/>
      {/* Mother */}
      <rect x="105" y="60" width="7" height="18" fill="#120608" rx="1"/>
      <circle cx="108" cy="57" r="4.5" fill="#120608"/>
      {/* Child */}
      <rect x="120" y="63" width="6" height="15" fill="#0d0508" rx="1"/>
      <circle cx="123" cy="60" r="4" fill="#0d0508"/>
      {/* Hands reaching - tension */}
      <line x1="93" y1="66" x2="104" y2="67" stroke="#0d0508" strokeWidth="2"/>
      {/* Red glow on water from lightning */}
      <ellipse cx="130" cy="80" rx="60" ry="12" fill="#cc1a2a" opacity="0.08"/>
      {/* Title */}
      <text x="110" y="16" textAnchor="middle" fill="#cc2030" fontSize="10" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="3">CRIMSON</text>
      <text x="110" y="28" textAnchor="middle" fill="#aa1020" fontSize="8" fontFamily="Georgia,serif" letterSpacing="4">TIDE</text>
    </svg>
  ),

  // 3. Stardust Carnival - Magical circus under stars
  StardustCarnival: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#080518"/>
      {/* Night sky with stars */}
      {[12,28,42,58,72,88,102,118,132,148,162,178,192,206,15,35,55,75,95,115,135,155,175,195].map((x,i)=>(
        <circle key={i} cx={x} cy={5+i*4%35} r={i%3===0?1.2:0.7} fill="#fff" opacity={0.4+i%5*0.12}/>
      ))}
      {/* Big top tent - iconic striped carnival */}
      <polygon points="110,8 30,65 190,65" fill="#c01038"/>
      {/* Red/white stripes on tent */}
      <polygon points="110,8 30,65 50,65" fill="#e8143c"/>
      <polygon points="110,8 70,65 90,65" fill="#e8143c"/>
      <polygon points="110,8 110,65 130,65" fill="#e8143c"/>
      <polygon points="110,8 150,65 170,65" fill="#e8143c"/>
      <polygon points="110,8 190,65 170,65" fill="#c01038"/>
      {/* Tent base */}
      <rect x="30" y="63" width="160" height="10" fill="#a00c30" rx="1"/>
      {/* Tent flags */}
      <line x1="110" y1="8" x2="110" y2="0" stroke="#888" strokeWidth="1"/>
      <polygon points="110,0 120,4 110,8" fill="#ffcc00"/>
      <line x1="30" y1="65" x2="30" y2="55" stroke="#888" strokeWidth="1"/>
      <polygon points="22,52 32,52 27,62" fill="#ffcc00"/>
      <line x1="190" y1="65" x2="190" y2="55" stroke="#888" strokeWidth="1"/>
      <polygon points="182,52 192,52 187,62" fill="#ffcc00"/>
      {/* Ferris wheel */}
      <circle cx="175" cy="48" r="18" fill="none" stroke="#ffcc00" strokeWidth="1.5"/>
      <circle cx="175" cy="48" r="3" fill="#ffcc00"/>
      {[0,45,90,135,180,225,270,315].map((a,i)=>{
        const rad = a*Math.PI/180;
        return <g key={i}>
          <line x1="175" y1="48" x2={175+17*Math.cos(rad)} y2={48+17*Math.sin(rad)} stroke="#ffcc00" strokeWidth="0.8" opacity="0.6"/>
          <circle cx={175+16*Math.cos(rad)} cy={48+16*Math.sin(rad)} r="2.5" fill={["#e8143c","#7b2fff","#00ccff","#ffcc00","#e8143c","#7b2fff","#00ccff","#ffcc00"][i]}/>
        </g>
      })}
      {/* Acrobat silhouette */}
      <circle cx="55" cy="45" r="5" fill="#1a0830"/>
      <rect x="52" y="50" width="6" height="14" fill="#1a0830" rx="1"/>
      {/* Juggling balls */}
      <circle cx="46" cy="36" r="3" fill="#e8143c"/>
      <circle cx="52" cy="30" r="3" fill="#ffcc00"/>
      <circle cx="60" cy="34" r="3" fill="#00ccff"/>
      {/* Ground lights */}
      {[35,60,85,110,135,160,185].map((x,i)=>(
        <circle key={i} cx={x} cy="80" r="3" fill={["#ffcc00","#e8143c","#7b2fff","#ffcc00","#00ccff","#e8143c","#ffcc00"][i]} opacity="0.9"/>
      ))}
      {/* Stardust sparkles */}
      {[25,55,80,145,165,200,40,130].map((x,i)=>(
        <text key={i} x={x} y={15+i%4*15} fontSize="7" fill="#ffcc0099">✦</text>
      ))}
      {/* Title */}
      <text x="110" y="100" textAnchor="middle" fill="#ffcc00" fontSize="9" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="1">STARDUST</text>
      <text x="110" y="112" textAnchor="middle" fill="#ff8c00" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3">CARNIVAL</text>
    </svg>
  ),

  // 4. Hollow Depths - Ocean abyss horror
  HollowDepths: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <defs>
        <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#001428"/>
          <stop offset="100%" stopColor="#000205"/>
        </linearGradient>
      </defs>
      <rect width="220" height="130" fill="url(#ocean)"/>
      {/* Deep water layers */}
      <rect x="0" y="0" width="220" height="40" fill="#00162e" opacity="0.4"/>
      <rect x="0" y="40" width="220" height="40" fill="#000e20" opacity="0.3"/>
      {/* Submarine silhouette */}
      <ellipse cx="110" cy="38" rx="45" ry="12" fill="#0a1a2a"/>
      <rect x="68" y="30" width="84" height="16" fill="#0d1e30" rx="8"/>
      {/* Submarine tower */}
      <rect x="102" y="18" width="16" height="14" fill="#0a1a2a" rx="2"/>
      <rect x="107" y="14" width="6" height="6" fill="#0d2035" rx="1"/>
      {/* Porthole lights - ominous dim */}
      <circle cx="88" cy="38" r="3" fill="#003355" opacity="0.7"/>
      <circle cx="100" cy="38" r="3" fill="#002244" opacity="0.5"/>
      <circle cx="112" cy="38" r="3" fill="#003355" opacity="0.7"/>
      <circle cx="124" cy="38" r="3" fill="#002244" opacity="0.5"/>
      {/* Sonar beam */}
      <path d="M110,38 L60,110 L160,110 Z" fill="#00ff8855" opacity="0.06"/>
      <path d="M110,38 L75,110 L145,110 Z" fill="#00ff88" opacity="0.04"/>
      {/* The ancient creature - barely visible, enormous tentacles */}
      <path d="M0,100 Q30,80 20,120" stroke="#0a1520" strokeWidth="18" fill="none" strokeLinecap="round" opacity="0.9"/>
      <path d="M10,90 Q50,70 40,130" stroke="#0a1520" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M200,95 Q175,75 185,125" stroke="#0a1520" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.9"/>
      <path d="M215,85 Q185,68 195,130" stroke="#0a1520" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.8"/>
      {/* Creature eye - glowing faintly */}
      <circle cx="58" cy="88" r="8" fill="#000810"/>
      <circle cx="58" cy="88" r="5" fill="#001a10"/>
      <circle cx="58" cy="88" r="3" fill="#004422" opacity="0.6"/>
      <circle cx="60" cy="86" r="1" fill="#00ff44" opacity="0.4"/>
      {/* Bioluminescent particles */}
      {[30,65,90,130,155,180,200,40,80,120,160].map((x,i)=>(
        <circle key={i} cx={x} cy={50+i%5*12} r="1" fill="#00ffcc" opacity={0.1+i%4*0.08}/>
      ))}
      {/* Depth bubbles from sub */}
      <circle cx="95" cy="48" r="1.5" fill="none" stroke="#003355" strokeWidth="0.5"/>
      <circle cx="105" cy="44" r="1" fill="none" stroke="#002a44" strokeWidth="0.5"/>
      <circle cx="115" cy="50" r="2" fill="none" stroke="#003355" strokeWidth="0.5"/>
      {/* Title */}
      <text x="110" y="14" textAnchor="middle" fill="#006644" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="2" opacity="0.9">HOLLOW</text>
      <text x="110" y="25" textAnchor="middle" fill="#004433" fontSize="7" fontFamily="monospace" letterSpacing="3">DEPTHS</text>
    </svg>
  ),

  // 5. The Last Signal - Radio telescope, dying star, space
  TheLastSignal: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#020408"/>
      {/* Deep space - stars */}
      {[10,22,35,48,62,75,88,102,115,128,142,155,168,182,195,208,18,40,58,80,98,120,140,162,185].map((x,i)=>(
        <circle key={i} cx={x} cy={2+i*5%50} r={i%4===0?1.5:0.8} fill="#fff" opacity={0.2+i%6*0.1}/>
      ))}
      {/* Dying star - far upper right, collapsing red giant */}
      <circle cx="175" cy="22" r="18" fill="#ff4400" opacity="0.25"/>
      <circle cx="175" cy="22" r="12" fill="#ff6600" opacity="0.3"/>
      <circle cx="175" cy="22" r="7" fill="#ffaa00" opacity="0.5"/>
      <circle cx="175" cy="22" r="3" fill="#fff8e0" opacity="0.8"/>
      {/* Star corona rays */}
      {[0,40,80,120,160,200,240,280,320].map((a,i)=>{
        const rad = a*Math.PI/180;
        return <line key={i} x1={175+7*Math.cos(rad)} y1={22+7*Math.sin(rad)} x2={175+22*Math.cos(rad)} y2={22+22*Math.sin(rad)} stroke="#ff6600" strokeWidth="0.5" opacity="0.25"/>
      })}
      {/* Signal waves emanating from star - arcs */}
      <path d="M155,22 Q155,5 175,5 Q195,5 195,22" fill="none" stroke="#ff6600" strokeWidth="0.6" opacity="0.3" strokeDasharray="3,3"/>
      <path d="M145,22 Q145,0 175,0 Q205,0 205,22" fill="none" stroke="#ffaa00" strokeWidth="0.5" opacity="0.2" strokeDasharray="4,4"/>
      {/* Signal travelling to radio telescope - line across stars */}
      <path d="M165,28 Q130,50 90,65 Q60,78 45,90" stroke="#00aaff" strokeWidth="0.8" fill="none" strokeDasharray="5,4" opacity="0.5"/>
      <path d="M163,30 Q125,52 85,67 Q55,80 40,92" stroke="#0088ff" strokeWidth="0.5" fill="none" strokeDasharray="3,5" opacity="0.3"/>
      {/* Earth horizon */}
      <rect x="0" y="95" width="220" height="35" fill="#06090d"/>
      <path d="M0,95 Q55,88 110,95 Q165,102 220,95" fill="#080c12" stroke="#0d1520" strokeWidth="0.5"/>
      {/* Radio telescope dish */}
      <path d="M30,95 Q45,70 60,95" fill="#1a2535" stroke="#2a3a50" strokeWidth="1"/>
      <line x1="45" y1="95" x2="45" y2="80" stroke="#2a3a50" strokeWidth="2"/>
      <line x1="42" y1="95" x2="45" y2="80" stroke="#1a2535" strokeWidth="1.5"/>
      <line x1="48" y1="95" x2="45" y2="80" stroke="#1a2535" strokeWidth="1.5"/>
      {/* Large telescope */}
      <path d="M55,95 Q80,55 105,95" fill="#1a2535" stroke="#2a3a50" strokeWidth="1.2"/>
      <line x1="80" y1="95" x2="80" y2="68" stroke="#2a3a50" strokeWidth="2.5"/>
      <rect x="74" y="68" width="12" height="5" fill="#2a3a50" rx="1"/>
      {/* Signal arrival glow at dish */}
      <ellipse cx="80" cy="72" rx="12" ry="5" fill="#00aaff" opacity="0.12"/>
      {/* Stars scattered top */}
      <circle cx="25" cy="15" r="2" fill="#ffaa00" opacity="0.6"/>
      <circle cx="50" cy="8" r="1.5" fill="#fff" opacity="0.5"/>
      <circle cx="140" cy="12" r="1.5" fill="#fff" opacity="0.4"/>
      {/* Title */}
      <text x="155" y="108" textAnchor="middle" fill="#0088ff" fontSize="8" fontWeight="bold" fontFamily="monospace" letterSpacing="1" opacity="0.9">THE LAST</text>
      <text x="155" y="120" textAnchor="middle" fill="#0066cc" fontSize="9" fontFamily="monospace" letterSpacing="3">SIGNAL</text>
    </svg>
  ),

  // 6. Desert Kings - Wasteland with three silhouettes and sun
  DesertKings: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0800"/>
          <stop offset="60%" stopColor="#8b2500"/>
          <stop offset="100%" stopColor="#cc4400"/>
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4500a"/>
          <stop offset="100%" stopColor="#6b2800"/>
        </linearGradient>
      </defs>
      <rect width="220" height="130" fill="url(#sky2)"/>
      {/* Massive sun setting */}
      <circle cx="110" cy="72" r="35" fill="#ff6600" opacity="0.9"/>
      <circle cx="110" cy="72" r="28" fill="#ff8800" opacity="0.8"/>
      <circle cx="110" cy="72" r="20" fill="#ffaa00" opacity="0.9"/>
      {/* Sun rays */}
      {[0,22,45,67,90,112,135,157,180,202,225,247,270,292,315,337].map((a,i)=>{
        const rad=a*Math.PI/180;
        return <line key={i} x1={110+30*Math.cos(rad)} y1={72+30*Math.sin(rad)} x2={110+45*Math.cos(rad)} y2={72+45*Math.sin(rad)} stroke="#ff8800" strokeWidth="0.8" opacity="0.35"/>
      })}
      {/* Desert dunes */}
      <path d="M0,90 Q40,75 80,90 Q120,105 160,85 Q190,75 220,88 L220,130 L0,130Z" fill="url(#sand)"/>
      <path d="M0,100 Q35,90 70,100 Q105,110 140,95 Q175,85 220,98 L220,130 L0,130Z" fill="#7a3008"/>
      <path d="M0,112 Q55,105 110,112 Q165,119 220,110 L220,130 L0,130Z" fill="#4a1e05"/>
      {/* Cracked earth texture lines */}
      <path d="M20,115 L35,120 L25,125" stroke="#3a1804" strokeWidth="0.5" fill="none"/>
      <path d="M80,110 L95,115 L85,122" stroke="#3a1804" strokeWidth="0.5" fill="none"/>
      <path d="M160,108 L175,114" stroke="#3a1804" strokeWidth="0.5" fill="none"/>
      {/* Three warlord silhouettes on ridge */}
      {/* Left figure - spear */}
      <rect x="60" y="70" width="7" height="22" fill="#0d0500" rx="1"/>
      <circle cx="63" cy="67" r="5" fill="#0d0500"/>
      <line x1="55" y1="58" x2="63" y2="92" stroke="#0d0500" strokeWidth="1.5"/>
      {/* Center figure - most imposing */}
      <rect x="105" y="65" width="10" height="27" fill="#0d0500" rx="1"/>
      <circle cx="110" cy="61" r="6.5" fill="#0d0500"/>
      {/* Crown silhouette */}
      <polygon points="104,61 107,55 110,60 113,55 116,61" fill="#0d0500"/>
      {/* Right figure - hunched with weapon */}
      <rect x="153" y="72" width="7" height="20" fill="#0d0500" rx="1"/>
      <circle cx="156" cy="69" r="5" fill="#0d0500"/>
      <line x1="160" y1="62" x2="165" y2="82" stroke="#0d0500" strokeWidth="2"/>
      {/* Heat shimmer lines */}
      <path d="M70,60 Q75,56 80,60 Q85,56 90,60" stroke="#ff8800" strokeWidth="0.4" fill="none" opacity="0.3"/>
      <path d="M130,58 Q135,54 140,58 Q145,54 150,58" stroke="#ff8800" strokeWidth="0.4" fill="none" opacity="0.3"/>
      {/* Title */}
      <text x="110" y="14" textAnchor="middle" fill="#ffcc44" fontSize="11" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="3">DESERT</text>
      <text x="110" y="28" textAnchor="middle" fill="#ff8800" fontSize="9" fontFamily="Georgia,serif" letterSpacing="5">KINGS</text>
    </svg>
  ),

  // 7. Laugh Factory - Comedy stage spotlight
  LaughFactory: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#0a0508"/>
      {/* Stage curtains - red velvet */}
      <rect x="0" y="0" width="55" height="130" fill="#3d0a10"/>
      <rect x="165" y="0" width="55" height="130" fill="#3d0a10"/>
      {/* Curtain folds */}
      <path d="M0,0 Q10,20 5,40 Q0,60 10,80 Q15,100 5,120" stroke="#550d16" strokeWidth="8" fill="none"/>
      <path d="M20,0 Q30,20 25,40 Q20,60 30,80 Q35,100 25,120" stroke="#550d16" strokeWidth="8" fill="none"/>
      <path d="M40,0 Q50,20 45,40 Q40,60 50,80" stroke="#550d16" strokeWidth="6" fill="none"/>
      <path d="M220,0 Q210,20 215,40 Q220,60 210,80 Q205,100 215,120" stroke="#550d16" strokeWidth="8" fill="none"/>
      <path d="M200,0 Q190,20 195,40 Q200,60 190,80 Q185,100 195,120" stroke="#550d16" strokeWidth="8" fill="none"/>
      <path d="M180,0 Q170,20 175,40 Q180,60 170,80" stroke="#550d16" strokeWidth="6" fill="none"/>
      {/* Stage floor */}
      <rect x="55" y="85" width="110" height="45" fill="#1a0d08"/>
      {/* Stage boards */}
      {[60,70,80,90,100,110,120,130,140,150,160].map((x,i)=>(
        <line key={i} x1={x} y1="85" x2={x} y2="130" stroke="#150b06" strokeWidth="0.5"/>
      ))}
      {/* Spotlight from above */}
      <path d="M88,0 L55,85 L165,85 L132,0 Z" fill="#ffee88" opacity="0.07"/>
      <path d="M98,0 L65,85 L155,85 L122,0 Z" fill="#ffee88" opacity="0.1"/>
      {/* Microphone stand */}
      <line x1="110" y1="50" x2="110" y2="85" stroke="#888" strokeWidth="2"/>
      <line x1="95" y1="85" x2="125" y2="85" stroke="#888" strokeWidth="1.5"/>
      <line x1="95" y1="85" x2="100" y2="78" stroke="#888" strokeWidth="1.5"/>
      {/* Mic head */}
      <ellipse cx="110" cy="48" rx="6" ry="8" fill="#aaa"/>
      <ellipse cx="110" cy="48" rx="4" ry="6" fill="#ccc"/>
      {/* Comedian figure - arms spread wide */}
      <rect x="100" y="58" width="20" height="28" fill="#ffcc88" rx="2"/>
      <circle cx="110" cy="53" r="8" fill="#f4b070"/>
      {/* Big smile - exaggerated */}
      <path d="M104,56 Q110,61 116,56" stroke="#c04820" strokeWidth="1.5" fill="none"/>
      {/* Arms out - showmanship */}
      <line x1="100" y1="65" x2="82" y2="60" stroke="#ffcc88" strokeWidth="5" strokeLinecap="round"/>
      <line x1="120" y1="65" x2="138" y2="60" stroke="#ffcc88" strokeWidth="5" strokeLinecap="round"/>
      {/* Laugh bubbles */}
      <text x="70" y="38" fontSize="11" fill="#ffcc00" opacity="0.7" fontFamily="Arial">HA!</text>
      <text x="140" y="35" fontSize="10" fill="#ffcc00" opacity="0.6" fontFamily="Arial">HA!</text>
      <text x="85" y="28" fontSize="8" fill="#ffdd44" opacity="0.5" fontFamily="Arial">ha</text>
      <text x="130" y="25" fontSize="8" fill="#ffdd44" opacity="0.5" fontFamily="Arial">ha</text>
      {/* Spotlight circles on floor */}
      <ellipse cx="110" cy="90" rx="40" ry="8" fill="#ffee88" opacity="0.08"/>
      {/* Title */}
      <text x="110" y="110" textAnchor="middle" fill="#ffcc00" fontSize="9" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="2">LAUGH</text>
      <text x="110" y="123" textAnchor="middle" fill="#ff8800" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3">FACTORY</text>
    </svg>
  ),

  // 8. Eclipse Protocol - Spy, two identical women facing each other
  EclipseProtocol: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#05050a"/>
      {/* Solar eclipse - dramatic center */}
      <circle cx="110" cy="55" r="38" fill="#111"/>
      <circle cx="110" cy="55" r="35" fill="#050508"/>
      {/* Eclipse corona - solar flares */}
      {[0,25,50,75,100,125,150,175,200,225,250,275,300,325].map((a,i)=>{
        const rad=a*Math.PI/180;
        const len = 8 + (i%3)*5;
        return <line key={i} x1={110+35*Math.cos(rad)} y1={55+35*Math.sin(rad)} x2={110+(35+len)*Math.cos(rad)} y2={55+(35+len)*Math.sin(rad)} stroke="#cc8800" strokeWidth={0.5+i%2*0.5} opacity={0.4+i%3*0.15}/>
      })}
      <circle cx="110" cy="55" r="37" fill="none" stroke="#cc8800" strokeWidth="1" opacity="0.3"/>
      {/* Two spy silhouettes mirroring each other */}
      {/* Left figure */}
      <rect x="52" y="40" width="10" height="35" fill="#0a0a10" rx="1"/>
      <circle cx="57" cy="36" r="7" fill="#0a0a10"/>
      <line x1="52" y1="55" x2="40" y2="48" stroke="#0a0a10" strokeWidth="4" strokeLinecap="round"/>
      <line x1="40" y1="48" x2="35" y2="55" stroke="#0a0a10" strokeWidth="3" strokeLinecap="round"/>
      {/* Right figure - mirror */}
      <rect x="158" y="40" width="10" height="35" fill="#0a0a10" rx="1"/>
      <circle cx="163" cy="36" r="7" fill="#0a0a10"/>
      <line x1="168" y1="55" x2="180" y2="48" stroke="#0a0a10" strokeWidth="4" strokeLinecap="round"/>
      <line x1="180" y1="48" x2="185" y2="55" stroke="#0a0a10" strokeWidth="3" strokeLinecap="round"/>
      {/* Gun pointing at eclipse center - left */}
      <line x1="62" y1="52" x2="90" y2="52" stroke="#0a0a10" strokeWidth="3" strokeLinecap="round"/>
      <rect x="82" y="50" width="12" height="4" fill="#151520" rx="1"/>
      {/* Gun pointing - right */}
      <line x1="158" y1="52" x2="130" y2="52" stroke="#0a0a10" strokeWidth="3" strokeLinecap="round"/>
      <rect x="126" y="50" width="12" height="4" fill="#151520" rx="1"/>
      {/* Eclipse glow framing heads */}
      <ellipse cx="57" cy="36" rx="12" ry="10" fill="#cc8800" opacity="0.08"/>
      <ellipse cx="163" cy="36" rx="12" ry="10" fill="#cc8800" opacity="0.08"/>
      {/* Reflection - figures in floor */}
      <rect x="52" y="75" width="10" height="20" fill="#0a0a10" rx="1" opacity="0.3"/>
      <rect x="158" y="75" width="10" height="20" fill="#0a0a10" rx="1" opacity="0.3"/>
      {/* Grid floor */}
      {[0,20,40,60,80,100,120,140,160,180,200,220].map((x,i)=>(
        <line key={i} x1={x} y1="100" x2={x} y2="130" stroke="#0f0f18" strokeWidth="0.5"/>
      ))}
      {[100,110,120,130].map((y,i)=>(
        <line key={i} x1="0" y1={y} x2="220" y2={y} stroke="#0f0f18" strokeWidth="0.5"/>
      ))}
      {/* Title */}
      <text x="110" y="112" textAnchor="middle" fill="#cc8800" fontSize="7" fontWeight="bold" fontFamily="monospace" letterSpacing="2">ECLIPSE</text>
      <text x="110" y="124" textAnchor="middle" fill="#886600" fontSize="7" fontFamily="monospace" letterSpacing="3">PROTOCOL</text>
    </svg>
  ),

  // 9. Whispers in the Dark - Victorian manor, window, ghostly face
  WhispersInTheDark: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#04030a"/>
      {/* Dark stormy sky */}
      <rect x="0" y="0" width="220" height="70" fill="#080610"/>
      {/* Clouds */}
      <ellipse cx="40" cy="20" rx="40" ry="15" fill="#0d0b18" opacity="0.9"/>
      <ellipse cx="110" cy="15" rx="55" ry="18" fill="#0a0814" opacity="0.9"/>
      <ellipse cx="180" cy="25" rx="45" ry="14" fill="#0d0b18" opacity="0.9"/>
      {/* Victorian manor silhouette */}
      <rect x="30" y="45" width="160" height="85" fill="#060509"/>
      {/* Roof with peaks */}
      <polygon points="30,45 55,20 80,45" fill="#080610"/>
      <polygon points="80,45 110,15 140,45" fill="#060508"/>
      <polygon points="140,45 165,22 190,45" fill="#080610"/>
      {/* Manor details */}
      <rect x="50" y="42" width="5" height="10" fill="#0a0810" rx="1"/>
      <rect x="160" y="40" width="5" height="10" fill="#0a0810" rx="1"/>
      {/* The lit window - eerie yellowish */}
      <rect x="95" y="52" width="30" height="40" fill="#1a1208" rx="2"/>
      <rect x="97" y="54" width="12" height="18" fill="#332510" rx="1"/>
      <rect x="111" y="54" width="12" height="18" fill="#2e2008" rx="1"/>
      <rect x="97" y="74" width="12" height="16" fill="#2e2008" rx="1"/>
      <rect x="111" y="74" width="12" height="16" fill="#332510" rx="1"/>
      {/* Window frame cross */}
      <line x1="109" y1="54" x2="109" y2="92" stroke="#0d0a06" strokeWidth="2"/>
      <line x1="95" y1="72" x2="125" y2="72" stroke="#0d0a06" strokeWidth="2"/>
      {/* Ghostly face in window - subtle */}
      <ellipse cx="110" cy="68" rx="8" ry="10" fill="#2a2015" opacity="0.7"/>
      <ellipse cx="107" cy="66" rx="2" ry="3" fill="#080608" opacity="0.9"/>
      <ellipse cx="113" cy="66" rx="2" ry="3" fill="#080608" opacity="0.9"/>
      <path d="M107,73 Q110,71 113,73" stroke="#080608" strokeWidth="1" fill="none"/>
      {/* Glow emanating from window */}
      <ellipse cx="110" cy="72" rx="20" ry="15" fill="#332510" opacity="0.12"/>
      {/* Other dark windows */}
      <rect x="40" y="60" width="22" height="28" fill="#0a0810" rx="1"/>
      <rect x="40" y="62" width="10" height="12" fill="#060508"/>
      <rect x="158" y="60" width="22" height="28" fill="#0a0810" rx="1"/>
      <rect x="160" y="62" width="10" height="12" fill="#060508"/>
      {/* Ground / fog */}
      <path d="M0,118 Q55,110 110,118 Q165,126 220,118 L220,130 L0,130Z" fill="#08060f"/>
      <path d="M0,122 Q40,116 80,122 Q120,128 160,122 Q190,118 220,122 L220,130 L0,130Z" fill="#0a0814" opacity="0.5"/>
      {/* Fog wisps */}
      <path d="M0,120 Q25,115 50,120 Q75,125 100,120" stroke="#1a1528" strokeWidth="3" fill="none" opacity="0.4"/>
      <path d="M120,118 Q150,113 180,118 Q200,121 220,118" stroke="#1a1528" strokeWidth="3" fill="none" opacity="0.4"/>
      {/* Title */}
      <text x="110" y="12" textAnchor="middle" fill="#332510" fontSize="7" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="1" opacity="0.9">WHISPERS</text>
      <text x="110" y="23" textAnchor="middle" fill="#221a0b" fontSize="6" fontFamily="Georgia,serif" letterSpacing="2">IN THE DARK</text>
    </svg>
  ),

  // 10. Quantum Hearts - Two figures, physics equations, heart
  QuantumHearts: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#02030f"/>
      {/* Space-time grid fabric */}
      {[0,20,40,60,80,100,120,140,160,180,200,220].map((x,i)=>(
        <line key={`v${i}`} x1={x} y1="0" x2={x} y2="130" stroke="#0d1030" strokeWidth="0.5"/>
      ))}
      {[0,20,40,60,80,100,120].map((y,i)=>(
        <line key={`h${i}`} x1="0" y1={y} x2="220" y2={y} stroke="#0d1030" strokeWidth="0.5"/>
      ))}
      {/* Spacetime warp around heart */}
      <path d="M110,65 Q80,40 60,65 Q50,80 60,90 Q80,100 100,80" fill="none" stroke="#7b2fff" strokeWidth="0.5" opacity="0.3"/>
      <path d="M110,65 Q140,40 160,65 Q170,80 160,90 Q140,100 120,80" fill="none" stroke="#7b2fff" strokeWidth="0.5" opacity="0.3"/>
      {/* Quantum probability cloud */}
      <ellipse cx="110" cy="72" rx="45" ry="35" fill="#3d0d8a" opacity="0.1"/>
      <ellipse cx="110" cy="72" rx="30" ry="22" fill="#5a1acc" opacity="0.1"/>
      {/* Heart - large central */}
      <path d="M110,88 Q85,75 85,62 Q85,50 97,50 Q104,50 110,58 Q116,50 123,50 Q135,50 135,62 Q135,75 110,88 Z" fill="#cc1a55" opacity="0.85"/>
      <path d="M110,85 Q88,73 88,62 Q88,52 98,52 Q105,52 110,60 Q115,52 122,52 Q132,52 132,62 Q132,73 110,85 Z" fill="#ff2060" opacity="0.7"/>
      {/* Two figures */}
      {/* Figure 1 left */}
      <circle cx="62" cy="45" r="7" fill="#1a1040"/>
      <rect x="57" y="52" width="10" height="20" fill="#1a1040" rx="1"/>
      <line x1="62" y1="60" x2="85" y2="68" stroke="#7b2fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6"/>
      {/* Figure 2 right */}
      <circle cx="158" cy="45" r="7" fill="#1a1040"/>
      <rect x="153" y="52" width="10" height="20" fill="#1a1040" rx="1"/>
      <line x1="158" y1="60" x2="135" y2="68" stroke="#ff2060" strokeWidth="1" strokeDasharray="2,2" opacity="0.6"/>
      {/* Physics equations scattered */}
      <text x="18" y="30" fontSize="7" fill="#7b2fff" opacity="0.5" fontFamily="monospace">ψ = e^iθ</text>
      <text x="155" y="25" fontSize="7" fill="#ff2060" opacity="0.5" fontFamily="monospace">∆t = ?</text>
      <text x="20" y="95" fontSize="7" fill="#7b2fff" opacity="0.4" fontFamily="monospace">|∅⟩</text>
      <text x="170" y="98" fontSize="7" fill="#ff2060" opacity="0.4" fontFamily="monospace">5min</text>
      {/* Particle trails */}
      {[0,1,2,3,4].map(i=>(
        <circle key={i} cx={90+i*6} cy={30+i*8} r={1+i%2*0.5} fill="#7b2fff" opacity={0.2+i*0.1}/>
      ))}
      {[0,1,2,3,4].map(i=>(
        <circle key={i} cx={135-i*6} cy={30+i*8} r={1+i%2*0.5} fill="#ff2060" opacity={0.2+i*0.1}/>
      ))}
      {/* Clock - time element */}
      <circle cx="110" cy="18" r="10" fill="none" stroke="#7b2fff" strokeWidth="0.8" opacity="0.5"/>
      <line x1="110" y1="18" x2="110" y2="11" stroke="#7b2fff" strokeWidth="1" opacity="0.5"/>
      <line x1="110" y1="18" x2="115" y2="21" stroke="#ff2060" strokeWidth="1" opacity="0.5"/>
      {/* Title */}
      <text x="110" y="108" textAnchor="middle" fill="#7b2fff" fontSize="9" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="2">QUANTUM</text>
      <text x="110" y="121" textAnchor="middle" fill="#cc1a55" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3">HEARTS</text>
    </svg>
  ),

  // 11. Iron Meridian - War, soldier, cracked earth, weapon at center
  IronMeridian: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#080a08"/>
      {/* Dark sky with smoke */}
      <rect x="0" y="0" width="220" height="70" fill="#0d0f0a"/>
      <ellipse cx="30" cy="25" rx="35" ry="20" fill="#111408" opacity="0.8"/>
      <ellipse cx="100" cy="18" rx="50" ry="22" fill="#0e1006" opacity="0.9"/>
      <ellipse cx="185" cy="30" rx="45" ry="18" fill="#111408" opacity="0.8"/>
      {/* Explosions in background */}
      <circle cx="40" cy="50" r="12" fill="#cc4400" opacity="0.25"/>
      <circle cx="40" cy="50" r="7" fill="#ff6600" opacity="0.2"/>
      <circle cx="180" cy="45" r="15" fill="#cc4400" opacity="0.2"/>
      <circle cx="180" cy="45" r="9" fill="#ff8800" opacity="0.15"/>
      {/* Cracked earth / battleground */}
      <path d="M0,80 Q55,72 110,80 Q165,88 220,80 L220,130 L0,130Z" fill="#1a1a14"/>
      <path d="M0,90 Q40,84 80,90 Q120,96 160,88 Q190,84 220,90 L220,130 L0,130Z" fill="#141410"/>
      <path d="M0,105 Q60,100 120,105 Q180,110 220,105 L220,130 L0,130Z" fill="#0e0e0a"/>
      {/* Cracks in ground */}
      <path d="M50,80 L65,95 L55,110" stroke="#0a0a08" strokeWidth="1.5" fill="none"/>
      <path d="M100,82 L110,90 L105,105 L115,115" stroke="#0a0a08" strokeWidth="1.5" fill="none"/>
      <path d="M165,85 L155,98 L160,112" stroke="#0a0a08" strokeWidth="1.5" fill="none"/>
      {/* Weapon/device at center - glowing */}
      <rect x="95" y="58" width="30" height="25" fill="#1a2018" rx="3"/>
      <rect x="98" y="61" width="24" height="19" fill="#0d1208" rx="2"/>
      <circle cx="110" cy="70" r="6" fill="#004400"/>
      <circle cx="110" cy="70" r="4" fill="#006600"/>
      <circle cx="110" cy="70" r="2" fill="#00aa00" opacity="0.8"/>
      <ellipse cx="110" cy="70" rx="12" ry="10" fill="#00aa00" opacity="0.08"/>
      {/* Soldier silhouettes on either side */}
      {/* Left group */}
      <rect x="28" y="62" width="6" height="18" fill="#0d0f0a" rx="1"/>
      <circle cx="31" cy="59" r="4.5" fill="#0d0f0a"/>
      <line x1="28" y1="68" x2="20" y2="65" stroke="#0d0f0a" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="16" y="64" width="8" height="2" fill="#0d0f0a" rx="1"/>
      <rect x="44" y="64" width="6" height="16" fill="#0d0f0a" rx="1"/>
      <circle cx="47" cy="61" r="4" fill="#0d0f0a"/>
      {/* Right group */}
      <rect x="178" y="62" width="6" height="18" fill="#0d0f0a" rx="1"/>
      <circle cx="181" cy="59" r="4.5" fill="#0d0f0a"/>
      <line x1="184" y1="68" x2="192" y2="65" stroke="#0d0f0a" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="188" y="64" width="8" height="2" fill="#0d0f0a" rx="1"/>
      <rect x="165" y="64" width="6" height="16" fill="#0d0f0a" rx="1"/>
      <circle cx="168" cy="61" r="4" fill="#0d0f0a"/>
      {/* Title */}
      <text x="110" y="14" textAnchor="middle" fill="#556655" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="3">IRON</text>
      <text x="110" y="26" textAnchor="middle" fill="#334433" fontSize="8" fontFamily="monospace" letterSpacing="3">MERIDIAN</text>
    </svg>
  ),

  // 12. Midnight Blossom - Dream romance, cherry blossoms, two figures
  MidnightBlossom: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#040210"/>
      {/* Night sky */}
      {[10,25,40,55,70,85,100,115,130,145,160,175,190,205,18,35,52,68,88,108,128,148,168,188].map((x,i)=>(
        <circle key={i} cx={x} cy={3+i*5%40} r={i%5===0?1.2:0.6} fill="#fff" opacity={0.15+i%6*0.08}/>
      ))}
      {/* Full moon */}
      <circle cx="155" cy="25" r="20" fill="#1a0a28"/>
      <circle cx="155" cy="25" r="17" fill="#2a1040"/>
      <circle cx="155" cy="25" r="14" fill="#3a1855"/>
      <circle cx="155" cy="25" r="11" fill="#4a2060" opacity="0.8"/>
      {/* Moon glow */}
      <ellipse cx="155" cy="25" rx="28" ry="28" fill="#3a1855" opacity="0.15"/>
      {/* Dream bridge */}
      <path d="M40,85 Q110,60 180,85" fill="none" stroke="#8a3a8a" strokeWidth="3" opacity="0.5"/>
      <path d="M40,85 Q110,62 180,85" fill="none" stroke="#aa55aa" strokeWidth="1" opacity="0.4"/>
      {/* Bridge rails */}
      {[50,70,90,110,130,150,170].map((x,i)=>(
        <line key={i} x1={x} y1={84-Math.abs(x-110)*0.12} x2={x} y2={90-Math.abs(x-110)*0.12} stroke="#6a2a6a" strokeWidth="1" opacity="0.6"/>
      ))}
      {/* Two figures on bridge */}
      {/* Figure 1 */}
      <circle cx="96" cy="70" r="5" fill="#1a0828"/>
      <rect x="92" y="75" width="8" height="15" fill="#1a0828" rx="1"/>
      {/* Flowing dress */}
      <path d="M92,80 Q86,90 88,90 Q92,90 96,83" fill="#2a0a3a" opacity="0.8"/>
      {/* Figure 2 */}
      <circle cx="124" cy="70" r="5" fill="#1a0828"/>
      <rect x="120" y="75" width="8" height="15" fill="#1a0828" rx="1"/>
      {/* Hands touching / reaching */}
      <line x1="100" y1="80" x2="120" y2="80" stroke="#cc44aa" strokeWidth="1.5" opacity="0.5"/>
      {/* Cherry blossoms falling */}
      {[30,55,75,95,125,148,168,188,42,68,105,155,180].map((x,i)=>(
        <g key={i} transform={`translate(${x},${15+i%5*12}) rotate(${i*25})`}>
          <path d="M0,-3 Q2,0 0,3 Q-2,0 0,-3" fill="#cc5588" opacity={0.3+i%4*0.15}/>
          <path d="M-3,0 Q0,2 3,0 Q0,-2 -3,0" fill="#dd6699" opacity={0.3+i%4*0.15}/>
        </g>
      ))}
      {/* Floating dream particles */}
      {[45,80,115,150,185,60,100,140,175].map((x,i)=>(
        <circle key={i} cx={x} cy={50+i%5*8} r="1" fill="#aa44cc" opacity={0.15+i%4*0.1}/>
      ))}
      {/* Cherry tree branches at edges */}
      <path d="M0,50 Q15,40 10,30 Q5,20 20,15" stroke="#3a1528" strokeWidth="2" fill="none"/>
      <path d="M0,55 Q12,48 8,38" stroke="#3a1528" strokeWidth="1.5" fill="none"/>
      <path d="M220,48 Q205,38 210,28 Q215,18 200,13" stroke="#3a1528" strokeWidth="2" fill="none"/>
      {/* Ground */}
      <path d="M0,100 Q110,93 220,100 L220,130 L0,130Z" fill="#0a0520"/>
      {/* Title */}
      <text x="110" y="112" textAnchor="middle" fill="#cc44aa" fontSize="8" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="2">MIDNIGHT</text>
      <text x="110" y="124" textAnchor="middle" fill="#9933aa" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3">BLOSSOM</text>
    </svg>
  ),

  // 13. Ghost Protocol: Reborn - Spy, shadowy figure, city
  GhostProtocolReborn: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#05080d"/>
      {/* City night skyline */}
      {[[0,40,30],[25,55,20],[40,35,25],[60,60,18],[75,48,22],[130,52,20],[148,38,28],[162,58,18],[178,44,22],[192,50,18],[205,38,25]].map(([x,h,w],i)=>(
        <rect key={i} x={x} y={130-h} width={w} height={h} fill="#080c12"/>
      ))}
      {/* Building lights */}
      {[15,35,68,135,155,185].map((x,i)=>(
        <rect key={i} x={x+3} y={100-i%4*8} width="3" height="3" fill="#ffee88" opacity="0.4"/>
      ))}
      {/* Rainy reflection on ground */}
      <rect x="0" y="105" width="220" height="25" fill="#060a10"/>
      <path d="M0,107 Q55,102 110,107 Q165,112 220,107" stroke="#0d1520" strokeWidth="0.5" fill="none"/>
      {/* Spy figure - center, looking away */}
      <circle cx="110" cy="42" r="9" fill="#0a0d14"/>
      {/* Trench coat */}
      <path d="M95,51 Q98,85 95,95 L125,95 Q122,85 125,51 Q118,48 110,47 Q102,48 95,51Z" fill="#0d1018"/>
      {/* Coat lapels */}
      <path d="M110,51 L104,60 L110,65" fill="#080c14"/>
      <path d="M110,51 L116,60 L110,65" fill="#080c14"/>
      {/* Belt */}
      <rect x="97" y="72" width="26" height="3" fill="#0a0d14" rx="1"/>
      {/* Arms at sides */}
      <line x1="95" y1="58" x2="84" y2="72" stroke="#0d1018" strokeWidth="5" strokeLinecap="round"/>
      <line x1="125" y1="58" x2="136" y2="72" stroke="#0d1018" strokeWidth="5" strokeLinecap="round"/>
      {/* Ghost effect - translucent double */}
      <circle cx="104" cy="42" r="9" fill="#1a2a3a" opacity="0.2"/>
      <path d="M89,51 Q92,85 89,95 L119,95 Q116,85 119,51 Q112,48 104,47 Q96,48 89,51Z" fill="#1a2a3a" opacity="0.15"/>
      {/* Rain */}
      {[20,38,55,72,90,108,125,140,155,170,185,200].map((x,i)=>(
        <line key={i} x1={x+(i%4)} y1={i%5*20} x2={x+(i%4)-2} y2={i%5*20+15} stroke="#0d2035" strokeWidth="0.6" opacity="0.5"/>
      ))}
      {/* Mission briefcase */}
      <rect x="136" y="76" width="14" height="10" fill="#0d1018" rx="2"/>
      <rect x="139" y="74" width="8" height="4" fill="none" stroke="#151e28" strokeWidth="1" rx="1"/>
      {/* Targeting reticle */}
      <circle cx="58" cy="35" r="12" fill="none" stroke="#00aaff" strokeWidth="0.5" opacity="0.5"/>
      <line x1="46" y1="35" x2="50" y2="35" stroke="#00aaff" strokeWidth="0.5" opacity="0.5"/>
      <line x1="66" y1="35" x2="70" y2="35" stroke="#00aaff" strokeWidth="0.5" opacity="0.5"/>
      <line x1="58" y1="23" x2="58" y2="27" stroke="#00aaff" strokeWidth="0.5" opacity="0.5"/>
      <line x1="58" y1="43" x2="58" y2="47" stroke="#00aaff" strokeWidth="0.5" opacity="0.5"/>
      <circle cx="58" cy="35" r="2" fill="#00aaff" opacity="0.4"/>
      {/* Title */}
      <text x="110" y="14" textAnchor="middle" fill="#00aaff" fontSize="7" fontWeight="bold" fontFamily="monospace" letterSpacing="1" opacity="0.8">GHOST PROTOCOL</text>
      <text x="110" y="25" textAnchor="middle" fill="#0077aa" fontSize="7" fontFamily="monospace" letterSpacing="3">REBORN</text>
    </svg>
  ),

  // 14. The Comedian's Curse - Words coming to life, chaos
  TheComediansCurse: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#0d0510"/>
      {/* Stage spotlight */}
      <path d="M80,0 L40,130 L180,130 L140,0Z" fill="#ffcc00" opacity="0.05"/>
      <path d="M90,0 L55,130 L165,130 L130,0Z" fill="#ffcc00" opacity="0.07"/>
      {/* Words materializing from mic - floating speech */}
      <rect x="60" y="30" width="40" height="16" fill="#ff2060" rx="8" opacity="0.9"/>
      <text x="80" y="42" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial" fontWeight="bold">POOF!</text>
      <rect x="120" y="22" width="48" height="16" fill="#7b2fff" rx="8" opacity="0.9"/>
      <text x="144" y="34" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial" fontWeight="bold">BOOM!</text>
      <rect x="40" y="55" width="35" height="14" fill="#ff8800" rx="7" opacity="0.85"/>
      <text x="57" y="66" textAnchor="middle" fontSize="7" fill="#fff" fontFamily="Arial" fontWeight="bold">ZAP!</text>
      <rect x="148" y="50" width="42" height="14" fill="#00cc88" rx="7" opacity="0.8"/>
      <text x="169" y="61" textAnchor="middle" fontSize="7" fill="#fff" fontFamily="Arial" fontWeight="bold">CRASH!</text>
      {/* Smaller chaos words */}
      <text x="18" y="40" fontSize="7" fill="#ffcc00" opacity="0.6" fontFamily="Arial">heh</text>
      <text x="198" y="38" fontSize="7" fill="#ff6688" opacity="0.6" fontFamily="Arial">lol</text>
      <text x="22" y="75" fontSize="6" fill="#00aaff" opacity="0.5" fontFamily="Arial">oops</text>
      <text x="195" y="80" fontSize="6" fill="#ffcc00" opacity="0.5" fontFamily="Arial">bruh</text>
      {/* Comedian figure - arms raised in shock */}
      <circle cx="110" cy="72" r="8" fill="#ffcc88"/>
      <rect x="104" y="80" width="12" height="22" fill="#1a0828" rx="1"/>
      {/* Arms raised high */}
      <line x1="104" y1="84" x2="88" y2="70" stroke="#ffcc88" strokeWidth="4" strokeLinecap="round"/>
      <line x1="116" y1="84" x2="132" y2="70" stroke="#ffcc88" strokeWidth="4" strokeLinecap="round"/>
      {/* Shocked face */}
      <circle cx="107" cy="70" r="1.5" fill="#333"/>
      <circle cx="113" cy="70" r="1.5" fill="#333"/>
      <path d="M107,75 Q110,78 113,75" stroke="#333" strokeWidth="1" fill="none"/>
      {/* Mic in hand */}
      <line x1="116" y1="84" x2="130" y2="72" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="132" cy="70" rx="3" ry="4" fill="#aaa"/>
      {/* Chaos sparkles */}
      {[35,55,80,160,180,200].map((x,i)=>(
        <text key={i} x={x} y={90+i%3*8} fontSize="10" fill={["#ff2060","#7b2fff","#ffcc00","#00cc88","#ff8800","#00aaff"][i]} opacity="0.7">✦</text>
      ))}
      {/* Floor */}
      <rect x="0" y="102" width="220" height="28" fill="#0a0515"/>
      {/* Title */}
      <text x="110" y="113" textAnchor="middle" fill="#ffcc00" fontSize="7" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="1">THE COMEDIAN'S</text>
      <text x="110" y="125" textAnchor="middle" fill="#ff8800" fontSize="7" fontFamily="Georgia,serif" letterSpacing="3">CURSE</text>
    </svg>
  ),

  // 15. Obsidian Sky - Colony ship in space, stars, dark silhouettes
  ObsidianSky: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#010206"/>
      {/* Dense star field */}
      {[8,16,24,32,40,50,60,70,80,90,102,114,126,138,150,162,174,186,198,210,5,18,30,45,58,72,88,104,120,136,152,168,184,200].map((x,i)=>(
        <circle key={i} cx={x} cy={2+i*4%60} r={i%6===0?1.5:i%3===0?1:0.5} fill="#fff" opacity={0.1+i%7*0.08}/>
      ))}
      {/* Nebula cloud */}
      <ellipse cx="40" cy="30" rx="40" ry="25" fill="#1a0830" opacity="0.4"/>
      <ellipse cx="80" cy="20" rx="50" ry="20" fill="#0a0a28" opacity="0.3"/>
      <ellipse cx="30" cy="40" rx="35" ry="20" fill="#200838" opacity="0.25"/>
      {/* Distant target planet */}
      <circle cx="175" cy="22" r="16" fill="#0a1a2a"/>
      <circle cx="175" cy="22" r="13" fill="#0d2030"/>
      {/* Planet continents */}
      <ellipse cx="170" cy="18" rx="7" ry="5" fill="#0a2818" opacity="0.8"/>
      <ellipse cx="180" cy="25" rx="5" ry="4" fill="#0a2818" opacity="0.6"/>
      <ellipse cx="172" cy="27" rx="4" ry="3" fill="#0d3020" opacity="0.5"/>
      {/* Planet ring */}
      <ellipse cx="175" cy="22" rx="22" ry="7" fill="none" stroke="#1a3040" strokeWidth="1.5" opacity="0.5"/>
      {/* Colony ship - large, detailed */}
      {/* Main hull */}
      <rect x="70" y="52" width="80" height="28" fill="#0d1520" rx="4"/>
      {/* Bridge/nose */}
      <polygon points="150,60 175,65 150,72" fill="#0d1520"/>
      {/* Engine section */}
      <rect x="55" y="58" width="20" height="16" fill="#0a1018" rx="2"/>
      {/* Engine glow */}
      <ellipse cx="55" cy="66" rx="6" ry="5" fill="#0033cc" opacity="0.6"/>
      <ellipse cx="55" cy="66" rx="4" ry="3" fill="#0055ff" opacity="0.5"/>
      <ellipse cx="52" cy="66" rx="8" ry="6" fill="#0044cc" opacity="0.15"/>
      {/* Engine trail */}
      <path d="M52,62 Q30,66 10,60" stroke="#0044cc" strokeWidth="4" fill="none" opacity="0.3" strokeLinecap="round"/>
      <path d="M52,70 Q30,66 8,72" stroke="#0044cc" strokeWidth="3" fill="none" opacity="0.2" strokeLinecap="round"/>
      {/* Habitation rings */}
      <ellipse cx="100" cy="66" rx="5" ry="12" fill="none" stroke="#1a2535" strokeWidth="2"/>
      <ellipse cx="120" cy="66" rx="5" ry="12" fill="none" stroke="#1a2535" strokeWidth="2"/>
      {/* Solar panels */}
      <rect x="85" y="42" width="50" height="8" fill="#0a1525" stroke="#152030" strokeWidth="0.5"/>
      <rect x="85" y="82" width="50" height="8" fill="#0a1525" stroke="#152030" strokeWidth="0.5"/>
      {/* Panel cells */}
      {[88,96,104,112,120,128].map((x,i)=>(
        <rect key={i} x={x} y="44" width="6" height="4" fill="#0d1a2a" stroke="#152030" strokeWidth="0.3"/>
      ))}
      {/* Porthole lights */}
      {[80,92,104,116,128,140].map((x,i)=>(
        <circle key={i} cx={x} cy="66" r="1.5" fill="#336688" opacity="0.7"/>
      ))}
      {/* Red warning light on hull - something wrong */}
      <circle cx="145" cy="58" r="3" fill="#cc0000" opacity="0.8"/>
      <ellipse cx="145" cy="58" rx="6" ry="4" fill="#cc0000" opacity="0.2"/>
      {/* Title */}
      <text x="110" y="104" textAnchor="middle" fill="#336688" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="3">OBSIDIAN</text>
      <text x="110" y="116" textAnchor="middle" fill="#1a3a55" fontSize="8" fontFamily="monospace" letterSpacing="4">SKY</text>
    </svg>
  ),

  // 16. Blood Moon Rising - Hunter silhouette, full moon, werewolf shadow
  BloodMoonRising: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#080202"/>
      {/* Dark red sky */}
      <rect x="0" y="0" width="220" height="85" fill="#100308"/>
      {/* Blood moon */}
      <circle cx="110" cy="42" r="32" fill="#3d0808"/>
      <circle cx="110" cy="42" r="27" fill="#550a0a"/>
      <circle cx="110" cy="42" r="22" fill="#7a0e0e"/>
      <circle cx="110" cy="42" r="17" fill="#9a1212"/>
      <circle cx="110" cy="42" r="12" fill="#cc1515" opacity="0.8"/>
      {/* Moon craters */}
      <circle cx="103" cy="36" r="4" fill="#7a0e0e" opacity="0.7"/>
      <circle cx="118" cy="44" r="3" fill="#7a0e0e" opacity="0.6"/>
      <circle cx="108" cy="50" r="2.5" fill="#7a0e0e" opacity="0.5"/>
      {/* Blood moon corona glow */}
      <ellipse cx="110" cy="42" rx="42" ry="42" fill="#550a0a" opacity="0.15"/>
      <ellipse cx="110" cy="42" rx="55" ry="55" fill="#3d0808" opacity="0.08"/>
      {/* Dark forest treeline */}
      <path d="M0,78 L5,58 L10,72 L15,48 L22,68 L28,42 L35,65 L40,50 L47,70 L52,55 L58,72 L65,50 L70,68 L75,52 L80,78 Z" fill="#0a0204"/>
      <path d="M140,78 L145,55 L150,68 L155,48 L162,65 L168,45 L175,60 L180,50 L186,65 L192,52 L198,68 L204,55 L210,70 L215,48 L220,78 Z" fill="#0a0204"/>
      {/* Werewolf shadow on moon - looming from below */}
      <path d="M85,78 Q90,60 105,55 Q110,52 115,55 Q130,60 135,78" fill="#050101" opacity="0.7"/>
      {/* Werewolf head/horns shape */}
      <path d="M95,56 Q92,45 98,50 Q102,48 105,55" fill="#050101" opacity="0.7"/>
      <path d="M125,56 Q128,45 122,50 Q118,48 115,55" fill="#050101" opacity="0.7"/>
      <ellipse cx="110" cy="58" rx="12" ry="10" fill="#050101" opacity="0.6"/>
      {/* Hunter silhouette - foreground, crossbow raised */}
      <circle cx="42" cy="72" r="6" fill="#060102"/>
      <rect x="37" y="78" width="10" height="20" fill="#060102" rx="1"/>
      {/* Crossbow arm raised */}
      <line x1="42" y1="80" x2="28" y2="68" stroke="#060102" strokeWidth="3" strokeLinecap="round"/>
      <line x1="22" y1="66" x2="36" y2="66" stroke="#060102" strokeWidth="2" strokeLinecap="round"/>
      <line x1="28" y1="68" x2="28" y2="62" stroke="#060102" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Arrow bolt */}
      <line x1="22" y1="66" x2="50" y2="55" stroke="#060102" strokeWidth="0.8" opacity="0.7"/>
      {/* Ground with blood-red soil */}
      <path d="M0,90 Q55,83 110,90 Q165,97 220,90 L220,130 L0,130Z" fill="#110305"/>
      <path d="M0,100 Q40,95 80,100 Q120,105 160,98 Q190,95 220,100 L220,130 L0,130Z" fill="#0a0203"/>
      {/* Blood pools - glistening */}
      <ellipse cx="70" cy="96" rx="12" ry="4" fill="#330508" opacity="0.7"/>
      <ellipse cx="155" cy="94" rx="10" ry="3" fill="#330508" opacity="0.6"/>
      {/* Stars faintly */}
      {[15,42,65,170,195,210,30,182].map((x,i)=>(
        <circle key={i} cx={x} cy={5+i%5*10} r="0.7" fill="#fff" opacity="0.12"/>
      ))}
      {/* Title */}
      <text x="110" y="112" textAnchor="middle" fill="#990a0a" fontSize="8" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="2">BLOOD MOON</text>
      <text x="110" y="125" textAnchor="middle" fill="#660808" fontSize="9" fontFamily="Georgia,serif" letterSpacing="3">RISING</text>
    </svg>
  ),

  // TV Show 101 - Neon Syndicate - Crime family drama
  NeonSyndicate: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#05050a"/>
      {/* City at night */}
      {[[0,60,35],[30,45,22],[50,55,18],[65,50,25],[145,52,20],[162,42,24],[178,58,18],[192,48,22],[205,40,15]].map(([x,h,w],i)=>(
        <rect key={i} x={x} y={130-h} width={w} height={h} fill="#08080f"/>
      ))}
      {/* Neon street signs - green/pink */}
      <rect x="32" y="78" width="18" height="4" fill="#00ff66" opacity="0.8" rx="2"/>
      <rect x="68" y="73" width="16" height="4" fill="#ff2080" opacity="0.8" rx="2"/>
      <rect x="148" y="75" width="18" height="4" fill="#00ff66" opacity="0.7" rx="2"/>
      <rect x="195" y="78" width="14" height="3" fill="#ff2080" opacity="0.7" rx="2"/>
      {/* Three crime family figures - power triangle */}
      {/* Left boss */}
      <circle cx="58" cy="55" r="7" fill="#0a0a15"/>
      <rect x="52" y="62" width="12" height="20" fill="#0a0a15" rx="1"/>
      {/* Suit details */}
      <line x1="58" y1="63" x2="56" y2="72" stroke="#151525" strokeWidth="2"/>
      <line x1="58" y1="63" x2="60" y2="72" stroke="#151525" strokeWidth="2"/>
      {/* Right boss */}
      <circle cx="162" cy="55" r="7" fill="#0a0a15"/>
      <rect x="156" y="62" width="12" height="20" fill="#0a0a15" rx="1"/>
      <line x1="162" y1="63" x2="160" y2="72" stroke="#151525" strokeWidth="2"/>
      <line x1="162" y1="63" x2="164" y2="72" stroke="#151525" strokeWidth="2"/>
      {/* Center figure - most powerful */}
      <circle cx="110" cy="48" r="9" fill="#0d0d1a"/>
      <rect x="103" y="57" width="14" height="25" fill="#0d0d1a" rx="1"/>
      {/* Crown of neon */}
      <path d="M103,48 L105,42 L110,46 L115,42 L117,48" stroke="#ff2080" strokeWidth="1" fill="none" opacity="0.8"/>
      {/* Power lines connecting them */}
      <line x1="70" y1="65" x2="103" y2="60" stroke="#00ff66" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.5"/>
      <line x1="150" y1="65" x2="117" y2="60" stroke="#ff2080" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.5"/>
      <line x1="70" y1="68" x2="150" y2="68" stroke="#7b2fff" strokeWidth="0.5" strokeDasharray="4,3" opacity="0.3"/>
      {/* Cigarette smoke from center */}
      <path d="M116,48 Q120,42 118,36 Q116,30 120,25" stroke="#888" strokeWidth="0.6" fill="none" opacity="0.3"/>
      <path d="M118,47 Q124,41 122,34 Q120,28 124,22" stroke="#888" strokeWidth="0.4" fill="none" opacity="0.2"/>
      {/* Neon glow on ground */}
      <ellipse cx="110" cy="90" rx="70" ry="8" fill="#00ff66" opacity="0.04"/>
      {/* Title */}
      <text x="110" y="102" textAnchor="middle" fill="#00ff66" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="2">NEON</text>
      <text x="110" y="114" textAnchor="middle" fill="#00cc50" fontSize="8" fontFamily="monospace" letterSpacing="3">SYNDICATE</text>
      <text x="110" y="124" textAnchor="middle" fill="#444455" fontSize="6" fontFamily="monospace">SERIES · S1</text>
    </svg>
  ),

  // TV Show 102 - Fracture - Psychology thriller
  Fracture: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#060610"/>
      {/* Cracked mirror effect - the psychologist seeing herself */}
      {/* Main face - left half */}
      <ellipse cx="95" cy="58" rx="28" ry="34" fill="#1a1530"/>
      <ellipse cx="95" cy="50" rx="20" ry="24" fill="#201838"/>
      {/* Face features - professional */}
      <rect x="82" y="46" width="6" height="4" fill="#0a0820" rx="1"/>
      <rect x="102" y="46" width="6" height="4" fill="#0a0820" rx="1"/>
      <path d="M88,60 Q95,64 102,60" stroke="#0a0820" strokeWidth="1.5" fill="none"/>
      {/* Hair */}
      <path d="M67,52 Q70,28 95,26 Q108,26 112,38" fill="#0d0b18" stroke="#0d0b18" strokeWidth="1"/>
      <path d="M67,52 Q65,60 70,70 Q72,78 78,80" fill="#0d0b18" stroke="#0d0b18"/>
      {/* Second face - right, darker, criminal self */}
      <ellipse cx="135" cy="58" rx="28" ry="34" fill="#1a0a10"/>
      <ellipse cx="135" cy="50" rx="20" ry="24" fill="#200810"/>
      {/* More sinister features */}
      <rect x="122" y="44" width="6" height="5" fill="#0a0408" rx="1"/>
      <rect x="142" y="44" width="6" height="5" fill="#0a0408" rx="1"/>
      <path d="M126,62 Q135,58 144,62" stroke="#0a0408" strokeWidth="1.5" fill="none"/>
      {/* Hair - dark and different */}
      <path d="M108,38 Q118,26 135,26 Q148,26 155,38 Q158,50 155,60 Q157,72 152,80" fill="#08050c" stroke="#08050c" strokeWidth="1"/>
      {/* Crack line dividing the two faces */}
      <path d="M110,5 L108,25 L115,45 L105,65 L112,85 L108,110 L111,130" stroke="#cc1a55" strokeWidth="2" fill="none"/>
      <path d="M112,5 L110,25 L117,45 L107,65 L114,85 L110,110 L113,130" stroke="#aa0a40" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Shattered pieces around crack */}
      <line x1="115" y1="30" x2="125" y2="38" stroke="#cc1a55" strokeWidth="0.8" opacity="0.6"/>
      <line x1="107" y1="50" x2="95" y2="42" stroke="#cc1a55" strokeWidth="0.8" opacity="0.5"/>
      <line x1="112" y1="70" x2="125" y2="75" stroke="#cc1a55" strokeWidth="0.8" opacity="0.6"/>
      <line x1="108" y1="85" x2="95" y2="80" stroke="#cc1a55" strokeWidth="0.8" opacity="0.5"/>
      {/* Evidence board in background */}
      <rect x="0" y="0" width="45" height="130" fill="#08080e" opacity="0.6"/>
      <rect x="175" y="0" width="45" height="130" fill="#08080e" opacity="0.6"/>
      {/* Case files */}
      <rect x="5" y="15" width="32" height="20" fill="#0d0d18" stroke="#1a1a28" strokeWidth="0.5" rx="1"/>
      <rect x="5" y="40" width="32" height="20" fill="#0d0d18" stroke="#1a1a28" strokeWidth="0.5" rx="1"/>
      <rect x="5" y="65" width="32" height="20" fill="#0d0d18" stroke="#1a1a28" strokeWidth="0.5" rx="1"/>
      {/* Red string connections */}
      <line x1="20" y1="25" x2="20" y2="40" stroke="#cc1a55" strokeWidth="0.5" opacity="0.6"/>
      <line x1="20" y1="50" x2="20" y2="65" stroke="#cc1a55" strokeWidth="0.5" opacity="0.6"/>
      {/* Title */}
      <text x="110" y="105" textAnchor="middle" fill="#cc1a55" fontSize="11" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="5">FRACTURE</text>
      <text x="110" y="118" textAnchor="middle" fill="#550820" fontSize="6" fontFamily="monospace">SERIES · S2 · 8 EPISODES</text>
    </svg>
  ),

  // TV Show 103 - Meridian - Space station diplomacy
  Meridian: () => (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <rect width="220" height="130" fill="#010308"/>
      {/* Deep space background */}
      {[12,25,38,52,65,78,90,105,118,130,143,158,172,185,198,210,8,30,55,75,95,115,138,160,182,205].map((x,i)=>(
        <circle key={i} cx={x} cy={2+i*5%55} r={i%5===0?1.2:0.6} fill="#fff" opacity={0.08+i%8*0.06}/>
      ))}
      {/* Nebula background */}
      <ellipse cx="50" cy="40" rx="55" ry="35" fill="#0a0520" opacity="0.5"/>
      <ellipse cx="170" cy="50" rx="50" ry="30" fill="#050a20" opacity="0.4"/>
      {/* Space station - ring structure */}
      {/* Outer ring */}
      <ellipse cx="110" cy="58" rx="52" ry="20" fill="none" stroke="#1a2535" strokeWidth="4"/>
      <ellipse cx="110" cy="58" rx="52" ry="20" fill="none" stroke="#253548" strokeWidth="1.5"/>
      {/* Ring habitat sections */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>{
        const rad=a*Math.PI/180;
        return <rect key={i} x={110+50*Math.cos(rad)-4} y={58+19*Math.sin(rad)-4} width="8" height="8" fill={["#0d1a28","#1a2535","#151e2d","#0d1a28","#1a2535","#151e2d","#0d1a28","#1a2535","#151e2d","#0d1a28","#1a2535","#151e2d"][i]} rx="1" transform={`rotate(${a},${110+50*Math.cos(rad)},${58+19*Math.sin(rad)})`}/>
      })}
      {/* Central hub */}
      <circle cx="110" cy="58" r="14" fill="#0d1525"/>
      <circle cx="110" cy="58" r="11" fill="#101a2a"/>
      <circle cx="110" cy="58" r="7" fill="#152030"/>
      {/* Hub windows - 12 alien delegates */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>{
        const rad=a*Math.PI/180;
        const colors=["#00aaff","#ff6600","#00ff66","#ff2060","#ffcc00","#7b2fff","#00cccc","#ff8888","#88ff88","#cc66ff","#ffaa44","#44aaff"];
        return <circle key={i} cx={110+8*Math.cos(rad)} cy={58+8*Math.sin(rad)} r="1.5" fill={colors[i]} opacity="0.8"/>
      })}
      {/* Spokes connecting hub to ring */}
      {[0,90,180,270].map((a,i)=>{
        const rad=a*Math.PI/180;
        return <line key={i} x1={110+7*Math.cos(rad)} y1={58+7*Math.sin(rad)} x2={110+50*Math.cos(rad)} y2={58+19*Math.sin(rad)} stroke="#1a2840" strokeWidth="2"/>
      })}
      {/* Solar panels extending from station */}
      <rect x="58" y="55" width="30" height="6" fill="#0a1525" stroke="#152030" strokeWidth="0.5" rx="1"/>
      <rect x="132" y="55" width="30" height="6" fill="#0a1525" stroke="#152030" strokeWidth="0.5" rx="1"/>
      {/* Planet in background */}
      <circle cx="25" cy="28" r="18" fill="#0a0e1a" opacity="0.6"/>
      <path d="M8,28 Q15,22 25,22 Q32,22 38,28" fill="none" stroke="#1a2840" strokeWidth="0.5"/>
      {/* Communication beam */}
      <path d="M110,58 L175,15" stroke="#00aaff" strokeWidth="0.6" strokeDasharray="4,3" opacity="0.3"/>
      <path d="M110,58 L45,20" stroke="#ff6600" strokeWidth="0.6" strokeDasharray="4,3" opacity="0.3"/>
      {/* Title */}
      <text x="110" y="95" textAnchor="middle" fill="#4488cc" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="5">MERIDIAN</text>
      <text x="110" y="107" textAnchor="middle" fill="#22446688" fontSize="6" fontFamily="monospace" letterSpacing="2">SERIES · S1 · 12 EPISODES</text>
    </svg>
  ),
};

// ─── POSTER COMPONENT ─────────────────────────────────────────────────────────
function MoviePoster({ movie, style = {} }) {
  const posterMap = {
    1: POSTERS.NeonRequiem, 2: POSTERS.CrimsonTide, 3: POSTERS.StardustCarnival,
    4: POSTERS.HollowDepths, 5: POSTERS.TheLastSignal, 6: POSTERS.DesertKings,
    7: POSTERS.LaughFactory, 8: POSTERS.EclipseProtocol, 9: POSTERS.WhispersInTheDark,
    10: POSTERS.QuantumHearts, 11: POSTERS.IronMeridian, 12: POSTERS.MidnightBlossom,
    13: POSTERS.GhostProtocolReborn, 14: POSTERS.TheComediansCurse, 15: POSTERS.ObsidianSky,
    16: POSTERS.BloodMoonRising, 101: POSTERS.NeonSyndicate, 102: POSTERS.Fracture,
    103: POSTERS.Meridian,
  };
  const PosterComp = posterMap[movie.id];
  if (!PosterComp) return <div style={{ width: "100%", height: "100%", background: "#141414", ...style }} />;
  return <div style={{ width: "100%", height: "100%", overflow: "hidden", ...style }}><PosterComp /></div>;
}

// ─── MOVIE DATA ───────────────────────────────────────────────────────────────
const MOVIES = [
  { id: 1, title: "Neon Requiem", year: 2024, rating: 8.7, genre: ["Action", "Sci-Fi"], description: "In a rain-soaked city of 2087, a rogue detective uncovers a conspiracy that blurs the line between human and machine. Every shadow hides a secret, every neon sign a clue.", duration: "2h 18m", cast: ["Aria Chen", "Marcus Webb", "Luna Okafor"], category: "trending", tags: ["action", "scifi"] },
  { id: 2, title: "Crimson Tide", year: 2023, rating: 9.1, genre: ["Drama", "Thriller"], description: "A family torn apart by secrets spanning three generations must confront the truth before it destroys them all. A masterpiece of tension and raw emotion.", duration: "2h 4m", cast: ["Elena Vasquez", "James Holloway", "Priya Sharma"], category: "trending", tags: ["drama", "thriller"] },
  { id: 3, title: "Stardust Carnival", year: 2024, rating: 7.8, genre: ["Comedy", "Fantasy"], description: "When a traveling circus discovers its performers are secretly magical beings, chaos and wonder collide in the most spectacular show on Earth.", duration: "1h 52m", cast: ["Toby Marlowe", "Zoe Patel", "Rico Santos"], category: "comedy", tags: ["comedy", "fantasy"] },
  { id: 4, title: "Hollow Depths", year: 2024, rating: 8.3, genre: ["Horror", "Mystery"], description: "A marine research team descends into an uncharted ocean trench, only to find something ancient has been waiting for them — something that shouldn't exist.", duration: "1h 58m", cast: ["Mara Stein", "Dex Monroe", "Yuki Tanaka"], category: "horror", tags: ["horror", "mystery"] },
  { id: 5, title: "The Last Signal", year: 2023, rating: 9.3, genre: ["Sci-Fi", "Drama"], description: "Earth receives a transmission from a dying star 2000 light years away. The message is not just a warning — it's a map home for something that left long ago.", duration: "2h 31m", cast: ["Nadia Rivers", "Colt Fairfax", "Imara Diallo"], category: "toprated", tags: ["scifi", "drama"] },
  { id: 6, title: "Desert Kings", year: 2024, rating: 8.0, genre: ["Action", "Adventure"], description: "Three rival warlords race across a scorched wasteland to claim the last freshwater source on the planet. Betrayal and brotherhood collide at the edge of survival.", duration: "2h 7m", cast: ["Jax Moreau", "Saffron Ali", "Remy Bouchard"], category: "action", tags: ["action", "adventure"] },
  { id: 7, title: "Laugh Factory", year: 2023, rating: 7.5, genre: ["Comedy"], description: "A down-on-his-luck stand-up comedian accidentally becomes the spokesperson for a billion-dollar corporation. The jokes on everyone — especially him.", duration: "1h 45m", cast: ["Benny Cruz", "Tara Gold", "Ollie Fitch"], category: "comedy", tags: ["comedy"] },
  { id: 8, title: "Eclipse Protocol", year: 2024, rating: 8.9, genre: ["Action", "Thriller"], description: "A sleeper agent is activated by an unknown handler, tasked with eliminating a target she realizes is herself — from a parallel timeline.", duration: "2h 12m", cast: ["Vera Kazakov", "Dante Cross", "Min-Ji Park"], category: "action", tags: ["action", "thriller"] },
  { id: 9, title: "Whispers in the Dark", year: 2024, rating: 8.6, genre: ["Horror"], description: "A family moves into a Victorian manor with a disturbing history. The house doesn't just hold memories — it creates new ones, erasing those who dare to remember.", duration: "1h 55m", cast: ["Callum Nash", "Isadora Bell", "Finn O'Brien"], category: "horror", tags: ["horror"] },
  { id: 10, title: "Quantum Hearts", year: 2023, rating: 8.2, genre: ["Romance", "Sci-Fi"], description: "A physicist discovers she can see five minutes into the future — except when it comes to love. A tender, mind-bending romance for the ages.", duration: "1h 59m", cast: ["Lily Morrow", "Ethan Rao", "Grace Kim"], category: "toprated", tags: ["romance", "scifi"] },
  { id: 11, title: "Iron Meridian", year: 2024, rating: 7.9, genre: ["Action", "War"], description: "In the last days of a fictional world war, a small unit discovers a weapon that could end all conflict — or all life. The hardest choice is who decides.", duration: "2h 22m", cast: ["Riku Tanaka", "Asha Patel", "Bruno Ferreira"], category: "action", tags: ["action", "war"] },
  { id: 12, title: "Midnight Blossom", year: 2023, rating: 8.8, genre: ["Drama", "Romance"], description: "Two strangers meet every night in a dream they share without knowing it's real. When reality blurs, only love can anchor them to the truth.", duration: "2h 1m", cast: ["Sora Yamada", "Leo Marchetti", "Amara Osei"], category: "toprated", tags: ["drama", "romance"] },
  { id: 13, title: "Ghost Protocol: Reborn", year: 2024, rating: 8.1, genre: ["Action", "Spy"], description: "After faking her death, the world's greatest spy is forced out of retirement when the only person she trusts turns out to be the enemy she's been hunting.", duration: "2h 15m", cast: ["Cassie Rowe", "Viktor Hale", "Naomi Osei"], category: "trending", tags: ["action", "thriller"] },
  { id: 14, title: "The Comedian's Curse", year: 2024, rating: 7.6, genre: ["Comedy", "Supernatural"], description: "A stand-up comedian discovers his jokes are literally coming true — and his darkest bits are the most powerful. Now he must save the world with punchlines.", duration: "1h 48m", cast: ["Sam Bridges", "Toni Cruz", "Felix Lane"], category: "comedy", tags: ["comedy", "supernatural"] },
  { id: 15, title: "Obsidian Sky", year: 2023, rating: 9.0, genre: ["Sci-Fi", "Action"], description: "Humanity's last colony ship hurtles toward a new world — but something on board is picking off the crew one by one. The killer might not be human. Or alive.", duration: "2h 28m", cast: ["Ren Nakamura", "Sofia Reyes", "Anton Volkov"], category: "toprated", tags: ["scifi", "action"] },
  { id: 16, title: "Blood Moon Rising", year: 2024, rating: 8.4, genre: ["Horror", "Fantasy"], description: "An ancient pact between hunters and the supernatural world is broken. Now the predator and prey must unite against something older and darker than either imagined.", duration: "2h 5m", cast: ["Dash Harrow", "Cleo Adeyemi", "Ivan Morel"], category: "horror", tags: ["horror", "fantasy"] },
];
const TV_SHOWS = [
  { id: 101, title: "Neon Syndicate", year: 2024, rating: 9.2, genre: ["Crime", "Drama"], description: "A sprawling epic about three crime families fighting for control of a city being rebuilt from the ashes of revolution. Loyalty is the only currency.", duration: "S1 · 10 Episodes", cast: ["Marco De Luca", "Petra Volkov", "Shen Wei"], category: "trending", tags: ["crime", "drama"], isShow: true },
  { id: 102, title: "Fracture", year: 2023, rating: 8.9, genre: ["Thriller", "Mystery"], description: "A brilliant forensic psychologist discovers her best cases have one thing in common: she committed them. A show that rewrites its own rules each episode.", duration: "S2 · 8 Episodes", cast: ["Hana Mori", "Declan Walsh", "Nia Williams"], category: "toprated", tags: ["thriller", "mystery"], isShow: true },
  { id: 103, title: "Meridian", year: 2024, rating: 8.5, genre: ["Sci-Fi", "Drama"], description: "On a space station at the edge of explored space, diplomats from 12 civilizations negotiate a peace that could last millennia — or ignite the final war.", duration: "S1 · 12 Episodes", cast: ["Alys Morgan", "Kiran Patel", "Zhen Liu"], category: "trending", tags: ["scifi", "drama"], isShow: true },
];
const ALL_CONTENT = [...MOVIES, ...TV_SHOWS];
const HERO_CONTENT = [MOVIES[4], MOVIES[0], MOVIES[7], TV_SHOWS[0], MOVIES[14]];

// ─── INJECT STYLES ────────────────────────────────────────────────────────────
const injectStyles = () => {
  if (document.getElementById("cv-styles")) return;
  const s = document.createElement("style");
  s.id = "cv-styles";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    :root { --black:#000; --dark:#141414; --dg:#1f1f1f; --gray:#2d2d2d; --lg:#808080; --red:#E50914; --red2:#b81d24; --white:#fff; }
    *{box-sizing:border-box;margin:0;padding:0;}
    body{background:var(--black);color:var(--white);font-family:'DM Sans',sans-serif;overflow-x:hidden;}
    ::-webkit-scrollbar{width:4px;height:4px;}::-webkit-scrollbar-track{background:var(--dark);}::-webkit-scrollbar-thumb{background:var(--gray);border-radius:2px;}
    .bebas{font-family:'Bebas Neue',cursive;}

    .cv-nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:0 4%;display:flex;align-items:center;gap:24px;height:68px;transition:background 0.3s;}
    .cv-nav.scrolled{background:var(--dark);box-shadow:0 2px 20px rgba(0,0,0,0.8);}
    .cv-nav-grad{background:linear-gradient(to bottom,rgba(0,0,0,0.85) 0%,transparent 100%);}
    .cv-logo{font-family:'Bebas Neue',cursive;font-size:2.4rem;color:var(--red);letter-spacing:2px;cursor:pointer;flex-shrink:0;}
    .cv-nav-links{display:flex;gap:20px;flex:1;}
    .cv-nav-link{font-size:.85rem;color:rgba(255,255,255,.75);cursor:pointer;transition:color .2s;white-space:nowrap;font-weight:500;}
    .cv-nav-link:hover,.cv-nav-link.active{color:#fff;}
    .cv-nav-right{display:flex;align-items:center;gap:16px;margin-left:auto;}
    .cv-search-wrap{position:relative;display:flex;align-items:center;}
    .cv-search-input{background:rgba(0,0,0,.7);border:1px solid rgba(255,255,255,.3);color:white;padding:7px 36px 7px 12px;border-radius:4px;font-size:.82rem;width:220px;outline:none;font-family:'DM Sans',sans-serif;transition:border-color .2s;}
    .cv-search-input:focus{border-color:white;}
    .cv-search-dd{position:absolute;top:100%;left:0;right:0;background:#111;border:1px solid var(--gray);border-radius:4px;max-height:320px;overflow-y:auto;z-index:100;margin-top:4px;}
    .cv-search-item{padding:10px 12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:background .15s;font-size:.83rem;}
    .cv-search-item:hover{background:var(--dg);}
    .cv-search-thumb{width:52px;height:32px;overflow:hidden;border-radius:3px;flex-shrink:0;}
    .cv-avatar{width:34px;height:34px;border-radius:4px;cursor:pointer;overflow:hidden;background:var(--red);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem;}
    .cv-pdrop{position:absolute;right:0;top:calc(100% + 8px);background:rgba(0,0,0,.95);border:1px solid var(--gray);border-radius:4px;min-width:200px;padding:8px 0;z-index:200;}
    .cv-pitem{padding:10px 16px;cursor:pointer;font-size:.83rem;display:flex;align-items:center;gap:10px;transition:background .15s;}
    .cv-pitem:hover{background:var(--dg);}
    .cv-psep{height:1px;background:var(--gray);margin:6px 0;}

    .cv-hero{position:relative;height:100vh;min-height:600px;max-height:900px;overflow:hidden;}
    .cv-hero-bg{position:absolute;inset:0;overflow:hidden;}
    .cv-hero-bg-inner{width:100%;height:100%;transition:opacity .8s;}
    .cv-hero-ov{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,.85) 40%,rgba(0,0,0,.1) 100%),linear-gradient(to top,var(--black) 0%,transparent 50%);}
    .cv-hero-ct{position:absolute;bottom:25%;left:4%;max-width:550px;}
    .cv-hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--red);color:white;font-size:.7rem;font-weight:700;letter-spacing:1.5px;padding:4px 10px;border-radius:2px;margin-bottom:16px;text-transform:uppercase;}
    .cv-hero-title{font-family:'Bebas Neue',cursive;font-size:clamp(3rem,6vw,5.5rem);line-height:.95;margin-bottom:18px;}
    .cv-hero-desc{font-size:.95rem;line-height:1.65;color:rgba(255,255,255,.85);margin-bottom:28px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
    .cv-hero-meta{display:flex;align-items:center;gap:16px;margin-bottom:28px;font-size:.82rem;color:rgba(255,255,255,.7);}
    .cv-hero-btns{display:flex;gap:12px;}
    .cv-dots{position:absolute;bottom:12%;left:4%;display:flex;gap:8px;}
    .cv-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.35);cursor:pointer;transition:all .3s;}
    .cv-dot.on{background:var(--red);transform:scale(1.3);}

    .cv-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;border-radius:4px;font-weight:600;font-size:.9rem;cursor:pointer;border:none;transition:all .2s;font-family:'DM Sans',sans-serif;}
    .cv-btn-play{background:white;color:black;}.cv-btn-play:hover{background:rgba(255,255,255,.85);}
    .cv-btn-info{background:rgba(109,109,110,.7);color:white;backdrop-filter:blur(4px);}.cv-btn-info:hover{background:rgba(109,109,110,.9);}
    .cv-btn-red{background:var(--red);color:white;}.cv-btn-red:hover{background:var(--red2);}

    .cv-section{padding:0 4%;margin-bottom:40px;}
    .cv-sec-title{font-family:'Bebas Neue',cursive;font-size:1.6rem;letter-spacing:1px;margin-bottom:16px;display:flex;align-items:center;gap:12px;}
    .cv-sec-title::after{content:'';flex:1;height:1px;background:linear-gradient(to right,var(--gray),transparent);}
    .cv-row{display:flex;gap:10px;overflow-x:auto;padding-bottom:12px;scroll-behavior:smooth;scrollbar-width:none;}
    .cv-row::-webkit-scrollbar{display:none;}
    .cv-row-wrap{position:relative;}
    .cv-arrow{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;border:none;color:white;font-size:1.8rem;opacity:0;transition:opacity .2s;font-weight:300;}
    .cv-arrow.L{left:0;background:linear-gradient(to right,rgba(0,0,0,.9),transparent);}
    .cv-arrow.R{right:0;background:linear-gradient(to left,rgba(0,0,0,.9),transparent);}
    .cv-row-wrap:hover .cv-arrow{opacity:1;}

    .cv-card{flex-shrink:0;width:220px;border-radius:6px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s;position:relative;background:var(--dg);}
    .cv-card:hover{transform:scale(1.08) translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.9);z-index:50;}
    .cv-card-img{width:100%;height:130px;display:block;overflow:hidden;background:#0a0a0a;}
    .cv-card-hover{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.98) 40%,transparent 80%);opacity:0;transition:opacity .3s;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;}
    .cv-card:hover .cv-card-hover{opacity:1;}
    .cv-card-acts{display:flex;gap:8px;margin-bottom:8px;}
    .cv-cbtn{width:32px;height:32px;border-radius:50%;border:2px solid rgba(255,255,255,.6);background:rgba(0,0,0,.5);color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.8rem;transition:all .2s;}
    .cv-cbtn:hover{border-color:white;background:rgba(255,255,255,.2);}
    .cv-cbtn.play{background:white;color:black;border-color:white;}
    .cv-card-info{padding:10px 12px;}
    .cv-card-name{font-size:.82rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .cv-card-sub{font-size:.72rem;color:var(--lg);margin-top:3px;}
    .cv-badge{display:inline-block;background:var(--red);color:white;font-size:.62rem;font-weight:700;letter-spacing:.5px;padding:2px 6px;border-radius:2px;}
    .cv-badge-g{background:#46d369;}
    .cv-ct{font-size:.82rem;font-weight:600;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .cv-cm{font-size:.72rem;color:rgba(255,255,255,.6);}
    .cv-rating{color:#46d369;font-weight:700;}

    .cv-modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:2000;display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:60px 20px 40px;backdrop-filter:blur(6px);}
    .cv-modal{background:#181818;border-radius:12px;width:100%;max-width:860px;overflow:hidden;position:relative;animation:mIn .3s ease;}
    @keyframes mIn{from{transform:scale(.92) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}
    .cv-modal-banner{width:100%;height:440px;display:block;overflow:hidden;}
    .cv-modal-ov{position:absolute;top:0;left:0;right:0;height:440px;background:linear-gradient(to top,#181818 0%,transparent 60%);}
    .cv-modal-close{position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,.7);border:1px solid var(--gray);color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:background .2s;z-index:10;}
    .cv-modal-close:hover{background:rgba(80,80,80,.9);}
    .cv-modal-ta{position:absolute;bottom:40px;left:0;right:0;padding:0 36px;}
    .cv-modal-title{font-family:'Bebas Neue',cursive;font-size:3rem;line-height:1;margin-bottom:16px;}
    .cv-modal-body{padding:24px 36px 36px;}
    .cv-modal-grid{display:grid;grid-template-columns:1fr 280px;gap:32px;}
    .cv-modal-desc{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.85);margin-bottom:20px;}
    .cv-tag{background:var(--gray);padding:4px 12px;border-radius:20px;font-size:.75rem;display:inline-block;margin:3px;}
    .cv-slabel{font-size:.78rem;color:var(--lg);margin-bottom:6px;}
    .cv-sval{font-size:.85rem;margin-bottom:18px;}
    .cv-sec-lbl{font-family:'Bebas Neue',cursive;font-size:1.3rem;letter-spacing:1px;margin-bottom:16px;margin-top:8px;}

    .cv-auth-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:3000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);}
    .cv-auth-box{background:rgba(20,20,20,.97);border:1px solid var(--gray);border-radius:8px;padding:48px 40px;width:100%;max-width:420px;animation:mIn .3s ease;}
    .cv-auth-title{font-family:'Bebas Neue',cursive;font-size:2.4rem;margin-bottom:8px;}
    .cv-auth-sub{font-size:.85rem;color:var(--lg);margin-bottom:28px;}
    .cv-input{width:100%;background:var(--dg);border:1px solid var(--gray);border-radius:4px;padding:14px 16px;color:white;font-size:.9rem;outline:none;margin-bottom:14px;font-family:'DM Sans',sans-serif;transition:border-color .2s;}
    .cv-input:focus{border-color:rgba(255,255,255,.5);}
    .cv-auth-sw{text-align:center;font-size:.83rem;color:var(--lg);margin-top:20px;}
    .cv-auth-sw span{color:white;cursor:pointer;font-weight:600;}.cv-auth-sw span:hover{color:var(--red);}

    .cv-player-bg{position:fixed;inset:0;background:black;z-index:4000;display:flex;flex-direction:column;}
    .cv-player-vid{flex:1;width:100%;background:black;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;}
    .cv-player-ph{text-align:center;pointer-events:none;}
    .cv-player-ph-icon{font-size:6rem;opacity:.15;margin-bottom:16px;}
    .cv-player-ph-text{font-size:1.1rem;opacity:.4;}
    .cv-player-ctrls{background:linear-gradient(to top,rgba(0,0,0,.95),transparent);padding:20px 32px 28px;position:absolute;bottom:0;left:0;right:0;transition:opacity .3s;}
    .cv-player-prog{width:100%;height:4px;background:rgba(255,255,255,.25);border-radius:2px;cursor:pointer;margin-bottom:14px;position:relative;}
    .cv-player-fill{height:100%;background:var(--red);border-radius:2px;transition:width .3s;position:relative;}
    .cv-player-fill::after{content:'';position:absolute;right:-6px;top:-4px;width:12px;height:12px;background:var(--red);border-radius:50%;}
    .cv-player-btns{display:flex;align-items:center;gap:16px;}
    .cv-player-btn{background:none;border:none;color:white;cursor:pointer;font-size:1.2rem;opacity:.9;transition:opacity .2s;padding:4px;}
    .cv-player-btn:hover{opacity:1;transform:scale(1.1);}
    .cv-player-time{font-size:.82rem;color:rgba(255,255,255,.8);}
    .cv-player-r{margin-left:auto;display:flex;gap:16px;align-items:center;}
    .cv-player-topbar{position:absolute;top:0;left:0;right:0;padding:20px 32px;background:linear-gradient(to bottom,rgba(0,0,0,.85),transparent);display:flex;align-items:center;gap:20px;}

    .cv-admin-bg{position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:2500;overflow-y:auto;}
    .cv-admin-wrap{max-width:1100px;margin:0 auto;padding:80px 40px 60px;}
    .cv-admin-stat{background:var(--dg);border-radius:8px;padding:20px 24px;border:1px solid var(--gray);}
    .cv-admin-snum{font-family:'Bebas Neue',cursive;font-size:2.8rem;color:var(--red);}
    .cv-admin-slabel{font-size:.82rem;color:var(--lg);}
    .cv-admin-form{background:var(--dg);border-radius:8px;padding:28px;border:1px solid var(--gray);}
    .cv-admin-label{display:block;font-size:.78rem;color:var(--lg);margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase;}
    .cv-select{width:100%;background:var(--gray);border:1px solid #444;border-radius:4px;padding:12px 14px;color:white;font-size:.88rem;outline:none;font-family:'DM Sans',sans-serif;margin-bottom:14px;}
    .cv-admin-movies{background:var(--dg);border-radius:8px;border:1px solid var(--gray);overflow:hidden;}
    .cv-admin-mr{display:flex;align-items:center;gap:14px;padding:14px 20px;border-bottom:1px solid var(--gray);transition:background .15s;}
    .cv-admin-mr:last-child{border-bottom:none;}.cv-admin-mr:hover{background:var(--gray);}
    .cv-admin-del{background:none;border:1px solid #444;color:var(--lg);padding:6px 14px;border-radius:4px;cursor:pointer;font-size:.78rem;margin-left:auto;transition:all .2s;}
    .cv-admin-del:hover{border-color:var(--red);color:var(--red);}

    .cv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:0 4%;margin-bottom:60px;}
    .cv-cont-card{flex-shrink:0;width:280px;border-radius:6px;overflow:hidden;cursor:pointer;background:var(--dg);position:relative;transition:transform .2s;}
    .cv-cont-card:hover{transform:scale(1.04);}
    .cv-cont-img{width:100%;height:160px;display:block;overflow:hidden;}
    .cv-cont-ov{position:absolute;top:0;left:0;right:0;height:160px;background:linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 60%);display:flex;align-items:flex-end;padding:10px;}
    .cv-cont-prog{position:absolute;bottom:0;left:0;height:3px;background:var(--red);}
    .cv-cont-info{padding:10px 14px;}
    .cv-cont-title{font-size:.85rem;font-weight:600;margin-bottom:4px;}
    .cv-cont-time{font-size:.72rem;color:var(--lg);}

    .cv-toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:var(--dark);border:1px solid var(--gray);color:white;padding:12px 24px;border-radius:6px;font-size:.85rem;z-index:9999;animation:tIn .3s ease;box-shadow:0 8px 30px rgba(0,0,0,.6);display:flex;align-items:center;gap:10px;}
    @keyframes tIn{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

    .cv-skeleton{background:linear-gradient(90deg,var(--dg) 25%,var(--gray) 50%,var(--dg) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:4px;}
    @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

    .cv-footer{padding:40px 4% 60px;border-top:1px solid var(--dg);}
    .cv-footer-links{display:flex;flex-wrap:wrap;gap:16px 32px;margin-bottom:24px;}
    .cv-footer-link{font-size:.78rem;color:var(--lg);cursor:pointer;transition:color .2s;}.cv-footer-link:hover{color:white;}

    .cv-page{animation:pIn .4s ease;}
    @keyframes pIn{from{opacity:0}to{opacity:1}}

    .cv-card.inlist::after{content:'✓';position:absolute;top:8px;right:8px;width:22px;height:22px;background:#46d369;border-radius:50%;font-size:.65rem;display:flex;align-items:center;justify-content:center;color:black;font-weight:800;}

    @media(max-width:768px){.cv-nav-links{display:none;}.cv-search-input{width:160px;}.cv-hero-ct{max-width:90%;}.cv-modal-grid{grid-template-columns:1fr;}.cv-card{width:160px;}.cv-modal-banner{height:260px;}.cv-modal-ov{height:260px;}.cv-modal-ta{bottom:20px;padding:0 20px;}.cv-modal-title{font-size:2rem;}.cv-modal-body{padding:20px;}}
  `;
  document.head.appendChild(s);
};

// ─── VIDEO PLAYER ─────────────────────────────────────────────────────────────
function VideoPlayer({ movie, onClose }) {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [vol, setVol] = useState(80);
  const [showCtrls, setShowCtrls] = useState(true);
  const timer = useRef();

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => setProgress(p => p >= 100 ? (clearInterval(timer.current), 100) : p + 0.1), 300);
    } else clearInterval(timer.current);
    return () => clearInterval(timer.current);
  }, [playing]);

  useEffect(() => {
    const t = setTimeout(() => setShowCtrls(false), 3500);
    return () => clearTimeout(t);
  }, [showCtrls]);

  const elapsed = Math.floor((progress / 100) * 138);
  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="cv-player-bg" onMouseMove={() => setShowCtrls(true)}>
      <div className="cv-player-vid" onClick={() => setPlaying(p => !p)}>
        <div className="cv-player-ph">
          <div className="cv-player-ph-icon">🎬</div>
          <div className="cv-player-ph-text">{movie.title}</div>
          <div style={{ fontSize: ".78rem", opacity: .35, marginTop: 8 }}>Streaming simulation · {movie.genre?.join(" · ")}</div>
        </div>
        <div className="cv-player-topbar" style={{ opacity: showCtrls ? 1 : 0, transition: "opacity .4s" }}>
          <button className="cv-player-btn" onClick={e => { e.stopPropagation(); onClose(); }} style={{ fontSize: "1rem" }}>← Back</button>
          <div style={{ fontSize: ".9rem", fontWeight: 600 }}>{movie.title}</div>
        </div>
        <div className="cv-player-ctrls" style={{ opacity: showCtrls ? 1 : 0, transition: "opacity .4s" }}>
          <div className="cv-player-prog" onClick={e => { e.stopPropagation(); const r = e.currentTarget.getBoundingClientRect(); setProgress(((e.clientX - r.left) / r.width) * 100); }}>
            <div className="cv-player-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="cv-player-btns" onClick={e => e.stopPropagation()}>
            <button className="cv-player-btn" onClick={() => setProgress(p => Math.max(0, p - 5))}>⏮</button>
            <button className="cv-player-btn" onClick={() => setPlaying(p => !p)} style={{ fontSize: "1.6rem" }}>{playing ? "⏸" : "▶"}</button>
            <button className="cv-player-btn" onClick={() => setProgress(p => Math.min(100, p + 5))}>⏭</button>
            <span className="cv-player-time">{fmt(elapsed)} / {movie.duration || "2:18:00"}</span>
            <div className="cv-player-r">
              <span style={{ fontSize: ".8rem", opacity: .7 }}>🔊 {vol}%</span>
              <input type="range" min="0" max="100" value={vol} onChange={e => setVol(e.target.value)} style={{ width: 80, accentColor: "var(--red)" }} />
              <button className="cv-player-btn">⛶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HERO POSTER ──────────────────────────────────────────────────────────────
function HeroPosterBG({ movie, visible }) {
  return (
    <div className="cv-hero-bg-inner" style={{ opacity: visible ? 1 : 0, position: "absolute", inset: 0 }}>
      <div style={{ width: "100%", height: "100%" }}>
        <MoviePoster movie={movie} style={{ transform: "scale(1.05)", transformOrigin: "center center" }} />
        {/* Zoom/enhance for hero */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.15)" }} />
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onSelect, onPlay }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx(i => (i + 1) % HERO_CONTENT.length); setFade(true); }, 500);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const movie = HERO_CONTENT[idx];

  return (
    <div className="cv-hero">
      {HERO_CONTENT.map((m, i) => <HeroPosterBG key={m.id} movie={m} visible={i === idx && fade} />)}
      <div className="cv-hero-ov" />
      <div className="cv-hero-ct">
        <div className="cv-hero-badge">🔴 Now Streaming</div>
        <div className="cv-hero-title">{movie.title}</div>
        <div className="cv-hero-meta">
          <span className="cv-rating">{movie.rating} ★</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span>{movie.genre?.join(" · ")}</span>
        </div>
        <p className="cv-hero-desc">{movie.description}</p>
        <div className="cv-hero-btns">
          <button className="cv-btn cv-btn-play" onClick={() => onPlay(movie)}>▶ Play</button>
          <button className="cv-btn cv-btn-info" onClick={() => onSelect(movie)}>ℹ More Info</button>
        </div>
      </div>
      <div className="cv-dots">
        {HERO_CONTENT.map((_, i) => (
          <div key={i} className={`cv-dot ${i === idx ? "on" : ""}`} onClick={() => { setFade(false); setTimeout(() => { setIdx(i); setFade(true); }, 300); }} />
        ))}
      </div>
    </div>
  );
}

// ─── MOVIE MODAL ──────────────────────────────────────────────────────────────
function MovieModal({ movie, myList, onToggleList, onPlay, onClose, allContent }) {
  const inList = myList.includes(movie.id);
  const recs = allContent.filter(m => m.id !== movie.id && m.genre?.some(g => movie.genre?.includes(g))).slice(0, 5);

  return (
    <div className="cv-modal-bg" onClick={onClose}>
      <div className="cv-modal" onClick={e => e.stopPropagation()}>
        <div style={{ position: "relative" }}>
          <div className="cv-modal-banner"><MoviePoster movie={movie} /></div>
          <div className="cv-modal-ov" />
          <button className="cv-modal-close" onClick={onClose}>✕</button>
          <div className="cv-modal-ta">
            <div className="cv-modal-title">{movie.title}</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="cv-btn cv-btn-play" onClick={() => onPlay(movie)}>▶ Play</button>
              <button className="cv-btn cv-btn-info" onClick={() => onToggleList(movie.id)}
                style={{ background: inList ? "rgba(80,200,100,.3)" : "rgba(109,109,110,.7)" }}>
                {inList ? "✓ In My List" : "+ My List"}
              </button>
            </div>
          </div>
        </div>
        <div className="cv-modal-body">
          <div className="cv-modal-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, fontSize: ".85rem" }}>
                <span style={{ color: "#46d369", fontWeight: 700 }}>{movie.rating} ★</span>
                <span style={{ color: "var(--lg)" }}>{movie.year}</span>
                <span style={{ color: "var(--lg)" }}>{movie.duration}</span>
                {movie.isShow && <span className="cv-badge">SERIES</span>}
              </div>
              <p className="cv-modal-desc">{movie.description}</p>
              <div style={{ marginTop: 12 }}>{movie.genre?.map(g => <span key={g} className="cv-tag">{g}</span>)}</div>
            </div>
            <div>
              <p className="cv-slabel">Cast</p><p className="cv-sval">{movie.cast?.join(", ")}</p>
              <p className="cv-slabel">Genres</p><p className="cv-sval">{movie.genre?.join(", ")}</p>
              <p className="cv-slabel">Quality</p><p className="cv-sval">4K Ultra HD · HDR · Dolby Atmos</p>
            </div>
          </div>
          {recs.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <div className="cv-sec-lbl">More Like This</div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
                {recs.map(m => (
                  <div key={m.id} style={{ flexShrink: 0, width: 160, borderRadius: 6, overflow: "hidden", cursor: "pointer", background: "var(--gray)" }}>
                    <div style={{ height: 90, overflow: "hidden" }}><MoviePoster movie={m} /></div>
                    <div style={{ padding: "7px 9px" }}>
                      <div style={{ fontSize: ".75rem", fontWeight: 600 }}>{m.title}</div>
                      <div style={{ fontSize: ".68rem", color: "var(--lg)", marginTop: 2 }}>{m.year} · {m.rating}★</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────
function Card({ movie, onSelect, onPlay, onToggleList, myList }) {
  const inList = myList?.includes(movie.id);
  return (
    <div className={`cv-card ${inList ? "inlist" : ""}`} onClick={() => onSelect(movie)}>
      <div className="cv-card-img"><MoviePoster movie={movie} /></div>
      <div className="cv-card-hover">
        <div className="cv-card-acts">
          <button className="cv-cbtn play" onClick={e => { e.stopPropagation(); onPlay(movie); }}>▶</button>
          <button className="cv-cbtn" onClick={e => { e.stopPropagation(); onToggleList(movie.id); }}>{inList ? "✓" : "+"}</button>
          <button className="cv-cbtn" onClick={e => e.stopPropagation()}>👍</button>
        </div>
        <div className="cv-ct">{movie.title}</div>
        <div className="cv-cm"><span style={{ color: "#46d369", fontWeight: 600 }}>{movie.rating}★</span> · {movie.year}{movie.isShow && <> · <span className="cv-badge cv-badge-g" style={{ fontSize: ".58rem" }}>SERIES</span></>}</div>
      </div>
      <div className="cv-card-info">
        <div className="cv-card-name">{movie.title}</div>
        <div className="cv-card-sub">{movie.genre?.slice(0, 2).join(" · ")}</div>
      </div>
    </div>
  );
}

// ─── CONTENT ROW ─────────────────────────────────────────────────────────────
function ContentRow({ title, items, onSelect, onPlay, onToggleList, myList }) {
  const rowRef = useRef();
  return (
    <div className="cv-section">
      <div className="cv-sec-title">{title}</div>
      <div className="cv-row-wrap">
        <button className="cv-arrow L" onClick={() => rowRef.current.scrollLeft -= 700}>‹</button>
        <div className="cv-row" ref={rowRef}>
          {items.map(m => <Card key={m.id} movie={m} onSelect={onSelect} onPlay={onPlay} onToggleList={onToggleList} myList={myList} />)}
        </div>
        <button className="cv-arrow R" onClick={() => rowRef.current.scrollLeft += 700}>›</button>
      </div>
    </div>
  );
}

// ─── SEARCH RESULTS WITH POSTERS ──────────────────────────────────────────────
function SearchResultItem({ movie, onClick }) {
  return (
    <div className="cv-search-item" onClick={onClick}>
      <div className="cv-search-thumb"><MoviePoster movie={movie} /></div>
      <div>
        <div style={{ fontWeight: 500 }}>{movie.title}</div>
        <div style={{ fontSize: ".7rem", color: "var(--lg)" }}>{movie.year} · {movie.genre?.slice(0, 2).join(", ")}</div>
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ user, onAuth, onLogout, page, setPage, onAdmin, allContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (search.length < 2) { setResults([]); return; }
    const q = search.toLowerCase();
    setResults(allContent.filter(m => m.title.toLowerCase().includes(q) || m.genre?.some(g => g.toLowerCase().includes(q))).slice(0, 6));
  }, [search, allContent]);

  return (
    <>
      <nav className={`cv-nav ${scrolled ? "scrolled" : "cv-nav-grad"}`}>
        <div className="cv-logo" onClick={() => setPage("home")}>CINEVAULT</div>
        <div className="cv-nav-links">
          {[["Home","home"],["TV Shows","tv-shows"],["Movies","movies"],["New & Popular","new-popular"],["My List","my-list"]].map(([l, k]) => (
            <span key={k} className={`cv-nav-link ${page === k ? "active" : ""}`} onClick={() => setPage(k)}>{l}</span>
          ))}
        </div>
        <div className="cv-nav-right">
          <div className="cv-search-wrap">
            <input className="cv-search-input" placeholder="Search titles, genres..." value={search}
              onChange={e => setSearch(e.target.value)} onBlur={() => setTimeout(() => setResults([]), 300)} />
            <span style={{ position: "absolute", right: 10, opacity: .6 }}>🔍</span>
            {results.length > 0 && (
              <div className="cv-search-dd">
                {results.map(m => <SearchResultItem key={m.id} movie={m} onClick={() => { setSelected(m); setSearch(""); setResults([]); }} />)}
              </div>
            )}
          </div>
          <span style={{ fontSize: "1.3rem", cursor: "pointer", opacity: .8 }}>🔔</span>
          <div style={{ position: "relative" }}>
            <div className="cv-avatar" onClick={() => setShowProfile(p => !p)}>
              {user ? user.name[0].toUpperCase() : "👤"}
            </div>
            {showProfile && (
              <div className="cv-pdrop" onMouseLeave={() => setShowProfile(false)}>
                {user ? (
                  <>
                    <div className="cv-pitem" style={{ fontWeight: 600, color: "#ccc" }}>{user.name}</div>
                    <div className="cv-psep" />
                    <div className="cv-pitem" onClick={() => { setPage("my-list"); setShowProfile(false); }}>📋 My List</div>
                    <div className="cv-pitem" onClick={() => { onAdmin(); setShowProfile(false); }}>⚙ Admin Panel</div>
                    <div className="cv-psep" />
                    <div className="cv-pitem" onClick={() => { onLogout(); setShowProfile(false); }} style={{ color: "var(--red)" }}>Sign Out</div>
                  </>
                ) : (
                  <div className="cv-pitem" onClick={() => { onAuth(); setShowProfile(false); }}>Sign In</div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      {selected && <MovieModal movie={selected} myList={[]} onToggleList={() => {}} onPlay={() => {}} onClose={() => setSelected(null)} allContent={allContent} />}
    </>
  );
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
function Auth({ onClose, onAuth }) {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false); const [err, setErr] = useState("");

  const submit = () => {
    setErr("");
    if (!email || !pass) { setErr("Please fill all fields."); return; }
    if (mode === "signup" && !name) { setErr("Please enter your name."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onAuth({ name: name || email.split("@")[0], email }); onClose(); }, 1200);
  };

  return (
    <div className="cv-auth-bg" onClick={onClose}>
      <div className="cv-auth-box" onClick={e => e.stopPropagation()}>
        <div style={{ color: "var(--red)", fontFamily: "'Bebas Neue',cursive", fontSize: "1.4rem", marginBottom: 12 }}>CINEVAULT</div>
        <div className="cv-auth-title">{mode === "signin" ? "Welcome Back" : "Join CineVault"}</div>
        <div className="cv-auth-sub">{mode === "signin" ? "Sign in to continue watching" : "Create your account to start streaming"}</div>
        {mode === "signup" && <input className="cv-input" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />}
        <input className="cv-input" placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="cv-input" placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} />
        {err && <div style={{ color: "var(--red)", fontSize: ".82rem", marginBottom: 12 }}>{err}</div>}
        <button className="cv-btn cv-btn-red" style={{ width: "100%", justifyContent: "center" }} onClick={submit} disabled={loading}>
          {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
        </button>
        <div className="cv-auth-sw">{mode === "signin" ? <>New to CineVault? <span onClick={() => setMode("signup")}>Sign up now</span></> : <>Already have an account? <span onClick={() => setMode("signin")}>Sign in</span></>}</div>
      </div>
    </div>
  );
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
function Admin({ onClose, movies, onAdd, onDelete }) {
  const [form, setForm] = useState({ title: "", year: "", rating: "", genre: "", description: "", category: "trending" });
  const [added, setAdded] = useState(false);
  const f = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const handleAdd = () => {
    if (!form.title) return;
    onAdd({ ...form, id: Date.now(), genre: form.genre.split(",").map(s => s.trim()), rating: parseFloat(form.rating) || 7.5, year: parseInt(form.year) || 2024, cast: [], tags: [form.category] });
    setForm({ title: "", year: "", rating: "", genre: "", description: "", category: "trending" });
    setAdded(true); setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="cv-admin-bg">
      <div className="cv-admin-wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div><div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "2.8rem" }}>⚙ Admin Panel</div>
            <div style={{ color: "var(--lg)", fontSize: ".85rem" }}>Manage CineVault content library</div></div>
          <button className="cv-btn cv-btn-info" onClick={onClose}>✕ Close</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 16, marginTop: 28 }}>
          {[["Total", movies.length], ["Movies", movies.filter(m => !m.isShow).length], ["TV Shows", movies.filter(m => m.isShow).length], ["Trending", movies.filter(m => m.category === "trending").length]].map(([l, v]) => (
            <div key={l} className="cv-admin-stat"><div className="cv-admin-snum">{v}</div><div className="cv-admin-slabel">{l}</div></div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 32, marginTop: 32 }}>
          <div className="cv-admin-form">
            <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.4rem", marginBottom: 20 }}>Add Content</div>
            {[["title","Title *"],["year","Year"],["rating","Rating"],["genre","Genres (comma)"]].map(([k,l]) => (
              <div key={k}><label className="cv-admin-label">{l}</label><input className="cv-input" value={form[k]} onChange={e => f(k,e.target.value)} placeholder={l}/></div>
            ))}
            <label className="cv-admin-label">Category</label>
            <select className="cv-select" value={form.category} onChange={e => f("category",e.target.value)}>
              {["trending","toprated","action","comedy","horror"].map(c=><option key={c} value={c}>{c}</option>)}
            </select>
            <label className="cv-admin-label">Description</label>
            <textarea className="cv-input" value={form.description} onChange={e => f("description",e.target.value)} rows={3} style={{resize:"vertical"}}/>
            <button className="cv-btn cv-btn-red" style={{width:"100%",justifyContent:"center",marginTop:4}} onClick={handleAdd}>
              {added ? "✅ Added!" : "+ Add Content"}
            </button>
          </div>
          <div>
            <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.4rem", marginBottom: 16 }}>Library ({movies.length})</div>
            <div className="cv-admin-movies">
              {movies.slice().reverse().map(m => (
                <div key={m.id} className="cv-admin-mr">
                  <div style={{ width: 52, height: 34, overflow: "hidden", borderRadius: 3, flexShrink: 0 }}><MoviePoster movie={m} /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: ".88rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.title}</div>
                    <div style={{ fontSize: ".73rem", color: "var(--lg)" }}>{m.year} · {m.genre?.slice(0,2).join(", ")} · {m.rating}★</div>
                  </div>
                  <button className="cv-admin-del" onClick={() => onDelete(m.id)}>🗑</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SKELETON ─────────────────────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <div style={{ padding: "0 4%", marginBottom: 40 }}>
      <div className="cv-skeleton" style={{ width: 180, height: 26, marginBottom: 16 }} />
      <div style={{ display: "flex", gap: 10 }}>
        {[...Array(6)].map((_, i) => <div key={i} className="cv-skeleton" style={{ width: 220, height: 180, borderRadius: 6, flexShrink: 0 }} />)}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function CineVault() {
  injectStyles();
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [myList, setMyList] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [toast, setToast] = useState(null);
  const [contentLib, setContentLib] = useState([...ALL_CONTENT]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { setTimeout(() => setLoading(false), 1400); }, []);

  const showToast = (msg, icon) => { setToast({ msg, icon }); setTimeout(() => setToast(null), 3000); };

  const toggleList = id => {
    if (!user) { setShowAuth(true); return; }
    setMyList(l => {
      const has = l.includes(id);
      showToast(has ? "Removed from My List" : "Added to My List", has ? "➖" : "✅");
      return has ? l.filter(x => x !== id) : [...l, id];
    });
  };

  const playMovie = movie => {
    if (!user) { setShowAuth(true); return; }
    setPlayingMovie(movie); setSelectedMovie(null);
    if (!watchHistory.find(w => w.id === movie.id))
      setWatchHistory(h => [{ ...movie, progress: Math.floor(Math.random() * 70 + 10), watchedAt: new Date() }, ...h]);
  };

  const getCat = cat => contentLib.filter(m => m.category === cat);

  const pageContent = () => {
    switch (page) {
      case "movies": return contentLib.filter(m => !m.isShow);
      case "tv-shows": return contentLib.filter(m => m.isShow);
      case "new-popular": return [...contentLib].sort((a, b) => b.year - a.year);
      case "my-list": return contentLib.filter(m => myList.includes(m.id));
      default: return null;
    }
  };

  const CP = { onSelect: setSelectedMovie, onPlay: playMovie, onToggleList: toggleList, myList };

  return (
    <div style={{ minHeight: "100vh", background: "var(--black)" }}>
      <Navbar user={user} onAuth={() => setShowAuth(true)} onLogout={() => { setUser(null); showToast("Signed out", "👋"); }}
        page={page} setPage={setPage} onAdmin={() => setShowAdmin(true)} allContent={contentLib} />

      {playingMovie && <VideoPlayer movie={playingMovie} onClose={() => setPlayingMovie(null)} />}
      {showAuth && <Auth onClose={() => setShowAuth(false)} onAuth={u => { setUser(u); showToast(`Welcome, ${u.name}!`, "🎬"); }} />}
      {showAdmin && <Admin onClose={() => setShowAdmin(false)} movies={contentLib}
        onAdd={item => setContentLib(l => [item, ...l])} onDelete={id => setContentLib(l => l.filter(m => m.id !== id))} />}
      {selectedMovie && <MovieModal movie={selectedMovie} myList={myList} onToggleList={toggleList} onPlay={playMovie} onClose={() => setSelectedMovie(null)} allContent={contentLib} />}
      {toast && <div className="cv-toast"><span>{toast.icon}</span><span>{toast.msg}</span></div>}

      {page === "home" && (
        <div className="cv-page">
          <Hero onSelect={setSelectedMovie} onPlay={playMovie} />
          <div style={{ marginTop: -80, position: "relative", zIndex: 10 }}>
            {loading ? <><SkeletonRow /><SkeletonRow /><SkeletonRow /></> : (
              <>
                {watchHistory.length > 0 && (
                  <div className="cv-section">
                    <div className="cv-sec-title" style={{ color: "#46d369" }}>▶ Continue Watching</div>
                    <div className="cv-row">
                      {watchHistory.map(m => (
                        <div key={m.id} className="cv-cont-card" onClick={() => playMovie(m)}>
                          <div className="cv-cont-img"><MoviePoster movie={m} /></div>
                          <div className="cv-cont-ov">
                            <div style={{ background: "rgba(0,0,0,.6)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".9rem" }}>▶</div>
                          </div>
                          <div className="cv-cont-prog" style={{ width: `${m.progress}%` }} />
                          <div className="cv-cont-info">
                            <div className="cv-cont-title">{m.title}</div>
                            <div className="cv-cont-time">{m.duration} · {m.progress}% watched</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <ContentRow title="🔥 Trending Now" items={getCat("trending")} {...CP} />
                <ContentRow title="⭐ Top Rated" items={getCat("toprated")} {...CP} />
                <ContentRow title="💥 Action & Adventure" items={getCat("action")} {...CP} />
                <ContentRow title="😂 Comedy" items={getCat("comedy")} {...CP} />
                <ContentRow title="👻 Horror" items={getCat("horror")} {...CP} />
                <ContentRow title="📺 TV Shows" items={contentLib.filter(m => m.isShow)} {...CP} />
              </>
            )}
          </div>
        </div>
      )}

      {page !== "home" && (
        <div className="cv-page" style={{ paddingTop: 100 }}>
          <div style={{ padding: "0 4%", marginBottom: 32 }}>
            <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "2.4rem" }}>
              {{ movies: "🎬 Movies", "tv-shows": "📺 TV Shows", "new-popular": "✨ New & Popular", "my-list": "📋 My List" }[page]}
            </div>
            {page === "my-list" && myList.length === 0 && (
              <div style={{ marginTop: 60, textAlign: "center", opacity: .5 }}>
                <div style={{ fontSize: "4rem", marginBottom: 16 }}>📭</div>
                <div style={{ fontSize: "1.1rem" }}>Your list is empty</div>
                <div style={{ fontSize: ".85rem", marginTop: 8 }}>Add movies and shows to watch later</div>
                <button className="cv-btn cv-btn-red" style={{ marginTop: 24 }} onClick={() => setPage("home")}>Browse Content</button>
              </div>
            )}
          </div>
          {pageContent()?.length > 0 && (
            <div className="cv-grid">
              {pageContent().map(m => <Card key={m.id} movie={m} {...CP} />)}
            </div>
          )}
        </div>
      )}

      {page === "home" && (
        <footer className="cv-footer">
          <div className="cv-logo" style={{ marginBottom: 24, fontSize: "1.8rem" }}>CINEVAULT</div>
          <div className="cv-footer-links">
            {["FAQ","Help Center","Account","Media Center","Investor Relations","Jobs","Cookie Preferences","Privacy","Terms","Contact Us","Legal Notices","Speed Test"].map(l => (
              <span key={l} className="cv-footer-link">{l}</span>
            ))}
          </div>
          <div style={{ fontSize: ".75rem", color: "#555" }}>© 2024 CineVault. All rights reserved. For demonstration purposes only.</div>
        </footer>
      )}
    </div>
  );
}
