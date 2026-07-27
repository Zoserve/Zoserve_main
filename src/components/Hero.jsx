import React from 'react';

export default function Hero({ onOpenQuoteModal }) {
    const handleCtaClick = (e) => {
        e.preventDefault();
        if (onOpenQuoteModal) {
            onOpenQuoteModal('Other');
        }
    };

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content animate-slide-left">
                    <h1 className="hero-title">
                        Honest Software.<br />
                        Fair Pricing.<br />
                        <span className="highlight-text">Zero Lock-In.</span>
                    </h1>
                    <p className="hero-subtitle">
                        We build web apps, mobile apps, and SaaS tools at fair prices with full documentation so you understand and own everything we build for you.
                    </p>
                    <div className="hero-cta-wrapper">
                        <button onClick={handleCtaClick} className="btn btn-primary hero-btn border-none cursor-pointer">
                            Get a Free Quote
                        </button>
                        <div className="hero-cta-meta">
                            <span className="meta-main">No commitment.</span>
                            <span className="meta-sub">Reply within 24 hours.</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual animate-slide-right">
                    <div className="isometric-container">
                        {/* Layer 1: Top (Frontend UI/Client View) */}
                        <div className="iso-layer iso-layer-top">
                            <div className="iso-card-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span>Frontend UI Layer</span>
                            </div>
                            <div className="iso-card-body">
                                <div className="mock-ui-header">
                                    <div className="mock-ui-logo"></div>
                                    <div className="mock-ui-nav"></div>
                                </div>
                                <div className="mock-ui-hero-banner"></div>
                                <div className="mock-ui-grid">
                                    <div className="mock-ui-item"></div>
                                    <div className="mock-ui-item"></div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 2: Middle (Clean Source Code) */}
                        <div className="iso-layer iso-layer-middle">
                            <div className="iso-card-header">
                                <span className="material-symbols-outlined text-[12px] text-cyan-400">code</span>
                                <span>src/components/App.jsx</span>
                            </div>
                            <div className="iso-card-body code-font">
                                <span className="code-line text-blue-400">import React from 'react';</span>
                                <span className="code-line text-green-400">const ZoserveApp = () =&gt; &#123;</span>
                                <span className="code-line text-accent pl-4">return &lt;OwnYourSoftware /&gt;;</span>
                                <span className="code-line text-green-400">&#125;;</span>
                                <span className="code-line text-blue-400">export default ZoserveApp;</span>
                            </div>
                        </div>

                        {/* Layer 3: Bottom (Independent Database Config) */}
                        <div className="iso-layer iso-layer-bottom">
                            <div className="iso-card-header">
                                <span className="material-symbols-outlined text-[12px] text-emerald-400">database</span>
                                <span>database_config.json</span>
                            </div>
                            <div className="iso-card-body code-font">
                                <span className="code-line text-emerald-400">&#123;</span>
                                <span className="code-line pl-4">"ownership": "100% Client",</span>
                                <span className="code-line pl-4 text-cyan-400">"vendor_lock_in": false,</span>
                                <span className="code-line pl-4">"open_source": true</span>
                                <span className="code-line text-emerald-400">&#125;</span>
                            </div>
                        </div>
                    </div>
                    <div className="badge-card floating-badge" style={{ zIndex: 20 }}>
                        <span className="material-symbols-outlined icon-green">verified_user</span>
                        <div className="badge-text">
                            <span className="badge-title">Full Ownership</span>
                            <span className="badge-sub">Source code &amp; docs delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
