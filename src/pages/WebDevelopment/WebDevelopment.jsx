import React from 'react';

export default function WebDevelopment({ onOpenQuoteModal }) {
    const handleCtaClick = (e, service = 'Landing Page / Website') => {
        e.preventDefault();
        if (onOpenQuoteModal) {
            onOpenQuoteModal(service);
        }
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="web-development-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-slide-left">
                        <span className="section-tagline">Web Development Services</span>
                        <h1 className="hero-title">
                            Websites &amp; Web Apps <br />
                            That Actually <br />
                            <span className="highlight-text">Belong to You</span>
                        </h1>
                        <p className="hero-subtitle">
                            Fair cost web development with no vendor lock in, no hidden fees, and no forced dependency. We build it, we teach you how it works, and you stay in control.
                        </p>
                        <div className="hero-cta-wrapper">
                            <button onClick={(e) => handleCtaClick(e, 'Landing Page / Website')} className="btn btn-primary hero-btn border-none cursor-pointer">
                                See What It'll Actually Cost
                            </button>
                            <a href="#difference" onClick={(e) => scrollToSection(e, 'difference')} className="nav-link font-bold text-xs flex items-center gap-1">
                                See How We're Different <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual animate-slide-right" style={{ maxWidth: '520px' }}>
                        <div className="compiler-container">
                            {/* Left Panel: IDE Window */}
                            <div className="ide-window">
                                <div className="ide-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginLeft: '10px', fontFamily: 'monospace' }}>Editor.jsx</span>
                                </div>
                                <div className="ide-body">
                                    <div className="code-row">
                                        <span className="line-no">1</span>
                                        <span><span className="syn-tag">const</span> <span className="syn-attr">WebPage</span> = () =&gt; &#123;</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">2</span>
                                        <span className="pl-4"><span className="syn-tag">return</span> (</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">3</span>
                                        <span className="pl-8">&lt;<span className="syn-tag">HeroSection</span>&gt;</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">4</span>
                                        <span className="pl-12">&lt;<span className="syn-tag">Title</span>&gt;<span className="syn-text">Websites That Belong To You</span>&lt;/<span className="syn-tag">Title</span>&gt;</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">5</span>
                                        <span className="pl-12">&lt;<span className="syn-tag">Button</span> <span className="syn-attr">color</span>=<span className="syn-val">"mint"</span> /&gt;<span className="typing-cursor"></span></span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">6</span>
                                        <span className="pl-8">&lt;/<span className="syn-tag">HeroSection</span>&gt;</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">7</span>
                                        <span className="pl-4">);</span>
                                    </div>
                                    <div className="code-row">
                                        <span className="line-no">8</span>
                                        <span>&#125;;</span>
                                    </div>
                                </div>
                            </div>

                            {/* Center Connecting Beam */}
                            <div className="compiler-beam"></div>

                            {/* Right Panel: Phone Viewport */}
                            <div className="phone-viewport">
                                <div className="phone-screen">
                                    <div className="phone-header">
                                        <div className="phone-logo"></div>
                                        <span className="material-symbols-outlined text-[8px] text-gray-500">battery_full</span>
                                    </div>
                                    <div className="phone-body">
                                        <div className="phone-hero-title"></div>
                                        <div className="phone-hero-sub"></div>
                                        <div className="phone-hero-btn"></div>
                                        <div className="phone-hero-image"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="badge-card floating-badge" style={{ zIndex: 20 }}>
                            <span className="material-symbols-outlined icon-green">verified_user</span>
                            <div className="badge-text">
                                <span className="badge-title">No Lock-In</span>
                                <span className="badge-sub">Full control from day one</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem Section */}
            <section className="problem-section" style={{ borderTop: '1px solid var(--color-border-light)' }}>
                <div className="container">
                    <div className="problem-grid">
                        <div className="problem-content animate-slide-left">
                            <span className="section-tagline tag-alert">The Captive Agency Model</span>
                            <h2 className="section-title">Tired of Agencies That Keep You Hostage?</h2>
                            <p className="section-body">
                                Most web development agencies are not built to make your life easier; they are built to make you dependent. Need to change a headline? That becomes a support ticket. Want a new page? That is another invoice. Small fixes quickly turn into recurring fees, forcing you to pay someone else just to modify your own website. We built Zoserve because this should not be normal.
                            </p>
                        </div>
                        <div className="problem-cards">
                            <div className="problem-card animate-on-scroll delay-100">
                                <span className="material-symbols-outlined card-icon alert-icon">lock_person</span>
                                <h3 className="card-title">Support Ticket Traps</h3>
                                <p className="card-desc">Charging hourly rates and making you wait days just to change minor content or images on your own server.</p>
                            </div>
                            <div className="problem-card animate-on-scroll delay-200">
                                <span className="material-symbols-outlined card-icon alert-icon">payments</span>
                                <h3 className="card-title">Proprietary Lock-in</h3>
                                <p className="card-desc">Hosting your site on custom closed platforms so you can never migrate your code elsewhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Zoserve Difference */}
            <section className="different-section" id="difference">
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline tag-white">Our Commitments</span>
                        <h2 className="section-title text-white">Fair Cost. Zero Dependency.</h2>
                        <p className="section-body text-light text-center-max-width">
                            We design and build clean web systems that empower you to run your business independently, without bloated recurring retainers.
                        </p>
                    </div>
                    <div className="different-grid">
                        <div className="diff-card animate-scale-in delay-100">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <h3 className="diff-title">Honest, Transparent Pricing</h3>
                            <p className="diff-desc">Honest, transparent pricing ensures you know what you are paying for upfront, with no inflated agency markup.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-200">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">folder_shared</span>
                            </div>
                            <h3 className="diff-title">You Own Everything</h3>
                            <p className="diff-desc">You own everything, including your code, your content, and your website, with no proprietary vendor lock in.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-300">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">menu_book</span>
                            </div>
                            <h3 className="diff-title">We Teach You</h3>
                            <p className="diff-desc">We teach you how it works because every project comes with simple guidance and tutorials, enabling you or your team to make small updates yourselves without calling us every time.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-400">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">business</span>
                            </div>
                            <h3 className="diff-title">Built for Real Businesses</h3>
                            <p className="diff-desc">Built for real businesses, including startups, small teams, and solo founders who need solid work without agency level overhead.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Capabilities / What We Build */}
            <section className="services-section" style={{ background: 'var(--color-bg-base)' }}>
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">Capabilities</span>
                        <h2 className="section-title text-primary">What We Build</h2>
                        <p className="section-body text-center-max-width">
                            From simple marketing landing pages to complex transactional systems, we deliver solid code with full handovers.
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card animate-on-scroll delay-100">
                            <span className="material-symbols-outlined service-icon">campaign</span>
                            <div className="service-content">
                                <h3 className="service-title">1. Business &amp; Marketing Websites</h3>
                                <p className="service-desc">Fast, modern, mobile friendly websites that make a strong first impression and are easy to update yourself.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-200">
                            <span className="material-symbols-outlined service-icon">code</span>
                            <div className="service-content">
                                <h3 className="service-title">2. Web Applications</h3>
                                <p className="service-desc">Custom web apps and internal tools built around how your business actually works, rather than a rigid template.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-300">
                            <span className="material-symbols-outlined service-icon">shopping_cart</span>
                            <div className="service-content">
                                <h3 className="service-title">3. E-commerce &amp; Booking Systems</h3>
                                <p className="service-desc">Sell products or take bookings online with a smooth, reliable setup.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-400">
                            <span className="material-symbols-outlined service-icon">support_agent</span>
                            <div className="service-content">
                                <h3 className="service-title">4. Ongoing Support</h3>
                                <p className="service-desc">Need extra help later? We are always here, but you are never required to hire us just to keep your site running.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Process Grid */}
            <section className="about-section" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">How It Works</span>
                        <h2 className="section-title text-primary">Simple, Transparent Process</h2>
                        <p className="section-body text-center-max-width">
                            Our process is straightforward, meaning we stay aligned from the first call to the final handoff.
                        </p>
                    </div>
                    <div className="different-grid">
                        <div className="diff-card animate-scale-in delay-100" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">1</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>1. Consultation</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>Tell us what you need during a quick consultation with no sales pressure.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-200" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">2</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>2. Transparent Quote</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>Get a clear and fair quote with no vague estimates and no surprise costs later.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-300" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">3</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>3. Active Build</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>We build your product with regular updates so you always know where things stand.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-400" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">4</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>4. Clean Handoff</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>We hand your project off properly with simple guidance and documentation so you are never left guessing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Trust Us Section */}
            <section className="about-section" style={{ background: 'var(--color-bg-base)', borderBottom: '1px solid var(--color-border-light)' }}>
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">Why Trust Us</span>
                        <h2 className="section-title text-primary">Built on Trust, Not Lock-In</h2>
                    </div>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="service-card animate-on-scroll delay-100" style={{ background: 'var(--color-bg-white)' }}>
                            <span className="material-symbols-outlined service-icon" style={{ color: 'var(--color-accent)' }}>vpn_key</span>
                            <div className="service-content">
                                <h3 className="service-title">Data Privacy First</h3>
                                <p className="service-desc">Your data stays private at all times, with no sharing and no compromises.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-200" style={{ background: 'var(--color-bg-white)' }}>
                            <span className="material-symbols-outlined service-icon" style={{ color: 'var(--color-accent)' }}>groups</span>
                            <div className="service-content">
                                <h3 className="service-title">Direct Focused Team</h3>
                                <p className="service-desc">We are a small, focused team, meaning you talk to the engineers actually building your project rather than an account manager relay chain.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-300" style={{ background: 'var(--color-bg-white)' }}>
                            <span className="material-symbols-outlined service-icon" style={{ color: 'var(--color-accent)' }}>thumb_up</span>
                            <div className="service-content">
                                <h3 className="service-title">Genuinely Helpful</h3>
                                <p className="service-desc">We would rather earn repeat business by being genuinely helpful than by making you dependent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA / Pricing Callout Section */}
            <section className="contact-section">
                <div className="container container-narrow animate-on-scroll">
                    <div className="contact-card text-center" style={{ padding: '48px 32px' }}>
                        <span className="section-tagline tag-white mb-4">Start Your Project</span>
                        <h2 className="section-title text-white">Get a Fair, Flat-Rate Quote</h2>
                        <p className="section-body text-light text-center-max-width mb-6" style={{ margin: '0 auto 32px' }}>
                            Ready to build a website or web app that you fully own? Reach out today for a transparent, zero obligation consultation.
                        </p>
                        <button 
                            onClick={(e) => handleCtaClick(e, 'Landing Page / Website')}
                            className="btn btn-accent border-none cursor-pointer text-sm font-bold px-8 py-4 rounded-xl active:scale-[0.98] transition-transform"
                        >
                            See What It'll Actually Cost
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
