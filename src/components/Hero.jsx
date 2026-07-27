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
                    <div className="handover-dashboard">
                        <div className="dashboard-header">
                            <div className="flex gap-1.5">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="dashboard-title">zoserve_handover_portal_v2.0</span>
                        </div>
                        <div className="dashboard-body">
                            {/* Dashboard Stats */}
                            <div className="dashboard-stats">
                                <div className="stat-box">
                                    <span className="stat-val blue">148</span>
                                    <span className="stat-lbl">Files</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-val green">100%</span>
                                    <span className="stat-lbl">Own</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-val red">0%</span>
                                    <span className="stat-lbl">Lock-in</span>
                                </div>
                            </div>
                            
                            {/* Transfer List */}
                            <div className="transfer-list">
                                <div className="transfer-row">
                                    <div className="transfer-info">
                                        <span className="material-symbols-outlined transfer-icon">code</span>
                                        <span className="transfer-file">zoserve_core.git</span>
                                    </div>
                                    <div className="transfer-status">
                                        <span className="pulse-dot"></span>
                                        <span>Transferred</span>
                                    </div>
                                </div>
                                <div className="transfer-row" style={{ borderLeftColor: '#3B82F6' }}>
                                    <div className="transfer-info">
                                        <span className="material-symbols-outlined transfer-icon">menu_book</span>
                                        <span className="transfer-file">handover_manifest.pdf</span>
                                    </div>
                                    <div className="transfer-status" style={{ color: '#3B82F6' }}>
                                        <span className="pulse-dot" style={{ background: '#3B82F6', boxShadow: '0 0 8px #3B82F6' }}></span>
                                        <span>Delivered</span>
                                    </div>
                                </div>
                                <div className="transfer-row" style={{ borderLeftColor: '#00D2FF' }}>
                                    <div className="transfer-info">
                                        <span className="material-symbols-outlined transfer-icon">database</span>
                                        <span className="transfer-file">production_db.sql</span>
                                    </div>
                                    <div className="transfer-status" style={{ color: '#00D2FF' }}>
                                        <span className="pulse-dot" style={{ background: '#00D2FF', boxShadow: '0 0 8px #00D2FF' }}></span>
                                        <span>Migrated</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Success Banner */}
                            <div className="transfer-success-banner">
                                <span className="material-symbols-outlined icon-green" style={{ fontSize: '20px' }}>verified</span>
                                <span className="success-msg">
                                    All source code, documentation, database credentials successfully handed over to client.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="badge-card floating-badge" style={{ zIndex: 10 }}>
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
