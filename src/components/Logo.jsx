import React from 'react';

export default function Logo({ className = "brand-logo", width = 36, height = 36 }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            fill="none"
            className={className}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <defs>
                {/* Primary bright tech gradient: Deep Blue to Cyan */}
                <linearGradient id="zoserveLogoPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#00D2FF" />
                </linearGradient>
                
                {/* Secondary accent gradient: Tech Emerald to Blue */}
                <linearGradient id="zoserveLogoAccent" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                
                {/* Soft drop shadow for visual elevation */}
                <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.12" />
                </filter>
            </defs>
            
            {/* Outer geometric shield connection lines for tech authority */}
            <g filter="url(#logoShadow)">
                {/* Interlocking Z-S geometric ribbon */}
                <path 
                    d="M 20 28 C 20 23.58 23.58 20 28 20 H 72 C 76.42 20 80 23.58 80 28 L 80 34 C 80 36.2 78.8 38.2 77 39.2 L 33 60.8 C 31.2 61.8 30 63.8 30 66 L 30 72 C 30 76.42 33.58 80 38 80 H 72 C 76.42 80 80 76.42 80 72" 
                    stroke="url(#zoserveLogoPrimary)" 
                    strokeWidth="11" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                
                {/* Glowing inner diagonal slash */}
                <path 
                    d="M 77 39.2 L 33 60.8" 
                    stroke="url(#zoserveLogoAccent)" 
                    strokeWidth="7" 
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}
