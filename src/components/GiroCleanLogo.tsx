/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'icon' | 'badge';
  lightText?: boolean;
}

export default function GiroCleanLogo({ 
  className = 'h-10', 
  variant = 'horizontal',
  lightText = false
}: LogoProps) {
  // Common definitions (gradients, filters, etc.)
  const renderDefs = () => (
    <defs>
      {/* Gradients for the main splash G logo matching the attachment */}
      <linearGradient id="main-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0056D2" /> {/* Deep Royal Blue */}
        <stop offset="100%" stopColor="#00A3FF" /> {/* Bright Sky Blue */}
      </linearGradient>
      
      <linearGradient id="cyan-splash-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" /> {/* Light Cyan */}
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.85" /> {/* Mid Blue */}
      </linearGradient>

      <linearGradient id="translucent-back" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" /> {/* Bright Cyan */}
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" /> {/* Cyan opacity */}
      </linearGradient>

      {/* Badge Circular Gradients */}
      <linearGradient id="ring-grad-badge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  );

  // The beautiful fluid "G" water-splash icon matching the attachment
  const renderSplashG = (transform = "") => (
    <g transform={transform}>
      {/* 1. Light cyan backing translucent layer */}
      <path
        d="M 65,30 
           C 95,25 125,50 120,85 
           C 115,115 85,128 55,118 
           C 30,110 15,85 25,55 
           C 30,40 45,32 65,30 Z"
        fill="url(#translucent-back)"
      />

      {/* 2. Top-right cyan-blue splash overlay */}
      <path
        d="M 55,15 
           C 85,12 110,35 115,65 
           C 120,95 95,115 65,115 
           C 48,115 35,102 38,85 
           C 40,72 52,65 65,70 
           C 75,74 85,65 80,50 
           C 75,35 62,32 55,35 Z"
        fill="url(#cyan-splash-grad)"
      />

      {/* 3. Main dark blue fluid wave forming the "G" curve */}
      <path
        d="M 68,25 
           C 88,25 102,38 102,58 
           C 102,78 86,98 62,98 
           C 38,98 22,78 26,52 
           C 28,38 38,28 52,26 
           C 58,25 62,28 60,34 
           C 58,40 52,41 48,45 
           C 42,51 40,61 46,70 
           C 52,80 65,83 74,78 
           C 83,73 87,62 84,52 
           L 62,52 
           C 58,52 55,49 55,45 
           C 55,41 58,38 62,38 
           L 93,38 
           C 94,45 94,52 93,58 
           C 91,75 75,88 58,85 
           C 44,83 34,70 34,55 
           C 34,38 46,25 68,25 Z"
        fill="url(#main-blue-grad)"
      />

      {/* 4. Small water droplets around the splash */}
      {/* Upper-right drop */}
      <path
        d="M 105,25 C 105,21 110,18 114,21 C 114,25 109,29 105,25 Z"
        fill="#0EA5E9"
      />
      {/* Top drop */}
      <path
        d="M 85,15 C 85,11 89,9 92,12 C 91,16 87,18 85,15 Z"
        fill="#38BDF8"
      />
      {/* Left drop */}
      <path
        d="M 18,48 C 14,48 12,44 15,41 C 19,42 20,46 18,48 Z"
        fill="#38BDF8"
      />
      {/* Far-left tiny droplet */}
      <path
        d="M 7,52 C 5,52 4,50 6,48 C 8,48 9,50 7,52 Z"
        fill="#22D3EE"
      />
      {/* Droplet bottom-left (purple accent from attachment) */}
      <circle cx="23" cy="98" r="3.5" fill="#A78BFA" opacity="0.8" />
    </g>
  );

  // 1. HORIZONTAL VARIANT (Matches the attachment perfectly)
  if (variant === 'horizontal') {
    return (
      <svg
        className={className}
        viewBox="0 0 520 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="giro-clean-logo-horizontal"
      >
        {renderDefs()}
        
        {/* Render Splash G Icon on the left */}
        {renderSplashG("translate(5, 2)")}

        {/* Brand Text "GIRO CLEAN" on the right */}
        {/* Built with SVG text using a modern, geometric rounded-feeling font */}
        <text
          x="155"
          y="78"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="56"
          fill={lightText ? "#38BDF8" : "#09A6EC"}
          letterSpacing="0.8"
          id="giro-clean-text-path"
        >
          GIRO CLEAN
        </text>
      </svg>
    );
  }

  // 2. ICON VARIANT (Square/Circular standalone splash icon)
  if (variant === 'icon') {
    return (
      <svg
        className={className}
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="giro-clean-logo-icon"
      >
        {renderDefs()}
        {renderSplashG()}
      </svg>
    );
  }

  // 3. BADGE VARIANT (Official Certificate Seal)
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="giro-clean-logo-badge"
    >
      {renderDefs()}

      {/* Outer Circle with White Background */}
      <circle cx="200" cy="200" r="190" stroke="url(#ring-grad-badge)" strokeWidth="10" fill="#FFFFFF" />
      
      {/* Inner border line */}
      <circle cx="200" cy="200" r="180" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />

      {/* Fluid splash G icon centered in the upper badge area */}
      {renderSplashG("translate(135, 30) scale(1.1)")}

      {/* Wave Separator Line below the G Swirl */}
      <path
        d="M 120,205 C 160,215 240,195 280,205"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Typography inside the badge */}
      <text
        x="200"
        y="255"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="35"
        fill="#1E3A8A"
        letterSpacing="0.5"
      >
        GIRO CLEAN
      </text>

      <text
        x="200"
        y="285"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="14"
        fill="#1E40AF"
        letterSpacing="1.2"
      >
        LIMPEZA E HIGIENIZAÇÃO
      </text>

      <text
        x="200"
        y="308"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="14"
        fill="#3B82F6"
        letterSpacing="2.5"
      >
        DE ESTOFADO
      </text>

      {/* Three Bottom Icons Group */}
      {/* Sofa Icon */}
      <g>
        <path
          d="M 126,334 C 126,334 130,332 140,332 C 150,332 154,334 154,334"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M 126,334 V 343 M 154,334 V 343" stroke="#1E3A8A" strokeWidth="2.5" fill="none" />
        <path
          d="M 120,340 C 120,337 125,337 125,340 V 348 H 120 V 340 Z"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 160,340 C 160,337 155,337 155,340 V 348 H 160 V 340 Z"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M 125,343 H 155 V 348 H 125 Z" stroke="#1E3A8A" strokeWidth="2.5" fill="none" />
        <path d="M 124,348 L 122,353" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 156,348 L 158,353" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 140,324 L 140,328 M 138,326 H 142" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Shield Icon */}
      <g>
        <path
          d="M 188,334 C 188,334 194,332 200,332 C 206,332 212,334 212,334 C 212,343 206,351 200,355 C 194,351 188,343 188,334 Z"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 194,343 L 198,347 L 206,338"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Extraction Nozzle Icon */}
      <g>
        <path d="M 252,332 H 268 M 260,332 V 326" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path
          d="M 252,332 L 246,346 H 274 L 268,332"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M 248,351 V 354" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 254,351 V 354" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 260,351 V 354" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 266,351 V 354" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 272,351 V 354" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
