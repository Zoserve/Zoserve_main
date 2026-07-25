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
                {/* Tech gradients representing code logic and cloud service */}
                <linearGradient id="codeBracketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" /> {/* Royal Blue */}
                    <stop offset="100%" stopColor="#3B82F6" /> {/* Active Blue */}
                </linearGradient>
                
                <linearGradient id="serverRackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D2FF" /> {/* Cyan */}
                    <stop offset="50%" stopColor="#10B981" /> {/* Emerald */}
                    <stop offset="100%" stopColor="#2563EB" /> {/* Royal Blue */}
                </linearGradient>
                
                <linearGradient id="coreNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" /> {/* Emerald */}
                    <stop offset="100%" stopColor="#00D2FF" /> {/* Cyan */}
                </linearGradient>

                {/* Drop shadow for architectural depth */}
                <filter id="symbolShadow" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
                </filter>
            </defs>
            
            <g filter="url(#symbolShadow)">
                {/* 1. Left Code Bracket (represents Custom Code & Software Development) */}
                <path 
                    d="M 36 24 L 18 50 L 36 76" 
                    stroke="url(#codeBracketGrad)" 
                    strokeWidth="9" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                
                {/* 2. Right Code Bracket (represents Custom Code & Delivery) */}
                <path 
                    d="M 64 24 L 82 50 L 64 76" 
                    stroke="url(#codeBracketGrad)" 
                    strokeWidth="9" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                
                {/* 3. Top Server Rack / Data Flow Line (represents Cloud Hosting & Infrastructure) */}
                <path 
                    d="M 32 37 H 68" 
                    stroke="url(#serverRackGrad)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                />
                
                {/* 4. Bottom Server Rack / Data Flow Line (represents Cloud Serving & Databases) */}
                <path 
                    d="M 32 63 H 68" 
                    stroke="url(#serverRackGrad)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                />
                
                {/* 5. Center Core Database Node (represents client data / central application logic) */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="8.5" 
                    fill="url(#coreNodeGrad)" 
                />
            </g>
        </svg>
    );
}
