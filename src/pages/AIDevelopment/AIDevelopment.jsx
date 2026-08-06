import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AIDevelopment({ onOpenQuoteModal }) {
    const handleCtaClick = (e, service = 'SaaS Tool Development') => {
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

    // Prompt typewriter loop state
    const prompts = [
        "Build a client support agent...",
        "Automate spreadsheet ingestion...",
        "Code a custom semantic search...",
        "Create an autonomous scraper..."
    ];
    const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [typingState, setTypingState] = useState('typing'); // 'typing', 'holding', 'deleting'

    // Typing Loop Effect
    useEffect(() => {
        let timer;
        const fullText = prompts[currentPromptIdx];
        
        if (typingState === 'typing') {
            if (typedText.length < fullText.length) {
                timer = setTimeout(() => {
                    setTypedText(fullText.slice(0, typedText.length + 1));
                }, 80);
            } else {
                setTypingState('holding');
                timer = setTimeout(() => setTypingState('deleting'), 2500);
            }
        } else if (typingState === 'deleting') {
            if (typedText.length > 0) {
                timer = setTimeout(() => {
                    setTypedText(typedText.slice(0, typedText.length - 1));
                }, 40);
            } else {
                setTypingState('typing');
                setCurrentPromptIdx((prev) => (prev + 1) % prompts.length);
            }
        }
        
        return () => clearTimeout(timer);
    }, [typedText, typingState, currentPromptIdx]);

    return (
        <div className="ai-development-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-slide-left">
                        <span className="section-tagline">AI &amp; Automation Services</span>
                        <h1 className="hero-title">
                            Custom AI Agents <br />
                            &amp; Workflows <br />
                            <span className="highlight-text">That You Own</span>
                        </h1>
                        <p className="hero-subtitle">
                            Fair cost artificial intelligence development with no vendor lock in, no expensive proprietary api dependencies, and no bloated subscriptions. We build it, we teach you how it works, and you own the code.
                        </p>
                        <div className="hero-cta-wrapper">
                            <button onClick={(e) => handleCtaClick(e, 'SaaS Tool Development')} className="btn btn-primary hero-btn border-none cursor-pointer">
                                See What It'll Actually Cost
                            </button>
                            <a href="#difference" onClick={(e) => scrollToSection(e, 'difference')} className="nav-link font-bold text-xs flex items-center gap-1">
                                See How We're Different <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Unique Animation: Prompt-to-Agent Neural Sandbox */}
                    <div className="hero-visual animate-slide-right" style={{ maxWidth: '520px' }}>
                        <div className="ai-sandbox-container">
                            {/* Left Box: Prompt Input */}
                            <div className="ai-prompt-box">
                                <div className="prompt-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="prompt-label">prompt_input.py</span>
                                </div>
                                <div className="prompt-body">
                                    <span className="prompt-symbol">&gt;&gt;&gt;</span>
                                    <span className="prompt-text-live">
                                        {typedText}
                                        <span className="typing-cursor"></span>
                                    </span>
                                </div>
                            </div>

                            {/* Center Flowing Beam */}
                            <div className="ai-flow-beam">
                                <div className="pulse-particle"></div>
                            </div>

                            {/* Right Box: Agent Reasoning Console */}
                            <div className="ai-console-box">
                                <div className="console-header">
                                    <span className="material-symbols-outlined console-icon text-cyan-400">memory</span>
                                    <span>agent_core.log</span>
                                </div>
                                <div className="console-body">
                                    <div className="console-logs">
                                        <div className="log-row">
                                            <span className="log-time">[04:02]</span>
                                            <span className="log-msg text-cyan-400">Parsing prompt directive...</span>
                                        </div>
                                        <div className="log-row">
                                            <span className="log-time">[04:03]</span>
                                            <span className="log-msg text-blue-400">Synthesizing solution layers...</span>
                                        </div>
                                        <div className="log-row">
                                            <span className="log-time">[04:05]</span>
                                            <span className="log-msg text-emerald-400">Compiling code manifest... Ok</span>
                                        </div>
                                        <div className="log-row">
                                            <span className="log-time">[04:07]</span>
                                            <span className="log-msg text-accent">Pushing zip to client repo...</span>
                                        </div>
                                    </div>
                                    
                                    {/* Visual Neural Node Grid */}
                                    <div className="neural-grid">
                                        <div className="neural-node active" style={{ animationDelay: '0s' }}></div>
                                        <div className="neural-node active" style={{ animationDelay: '0.4s' }}></div>
                                        <div className="neural-node active" style={{ animationDelay: '0.8s' }}></div>
                                        <div className="neural-node active" style={{ animationDelay: '1.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="badge-card floating-badge" style={{ zIndex: 20 }}>
                            <span className="material-symbols-outlined icon-green">verified_user</span>
                            <div className="badge-text">
                                <span className="badge-title">Full Code Ownership</span>
                                <span className="badge-sub">No proprietary API lock-in</span>
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
                            <span className="section-tagline tag-alert">The Proprio-Subscription Trap</span>
                            <h2 className="section-title">Tired of Expensive AI Retainers &amp; API Lock-in?</h2>
                            <p className="section-body">
                                Most agencies build AI tools that lock you into their custom APIs and force you to pay expensive monthly licenses just to access your own models. If you stop paying, your smart workflows disappear. We build open source AI integrations, configure them on your own servers, and hand over the code so you never have to pay a rent check to keep your AI running.
                            </p>
                        </div>
                        <div className="problem-cards">
                            <div className="problem-card animate-on-scroll delay-100">
                                <span className="material-symbols-outlined card-icon alert-icon">lock_person</span>
                                <h3 className="card-title">API Middleware Lock-in</h3>
                                <p className="card-desc">Charging you markup fees on top of standard LLM API calls instead of letting you connect directly to providers.</p>
                            </div>
                            <div className="problem-card animate-on-scroll delay-200">
                                <span className="material-symbols-outlined card-icon alert-icon">payments</span>
                                <h3 className="card-title">Bloated License Fees</h3>
                                <p className="card-desc">Forcing recurring software-as-a-service costs for simple automated scrapers or model connectors.</p>
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
                        <h2 className="section-title text-white">Open AI Tools. Zero Dependencies.</h2>
                        <p className="section-body text-light text-center-max-width">
                            We design and build clean AI structures that empower you to integrate large language models independently, without bloated agency overhead.
                        </p>
                    </div>
                    <div className="different-grid">
                        <div className="diff-card animate-scale-in delay-100">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <h3 className="diff-title">Transparent Pricing</h3>
                            <p className="diff-desc">Honest, transparent pricing ensures you know what you are paying for upfront, with no inflated agency markup.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-200">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">folder_shared</span>
                            </div>
                            <h3 className="diff-title">You Own Everything</h3>
                            <p className="diff-desc">You own everything, including your code, your content, and your models, with no proprietary vendor lock in.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-300">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">menu_book</span>
                            </div>
                            <h3 className="diff-title">Simple AI Handover</h3>
                            <p className="diff-desc">We teach you how it works because every project comes with simple guidance and tutorials, enabling you to manage API keys and prompts yourselves.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-400">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">business</span>
                            </div>
                            <h3 className="diff-title">Built for Real Teams</h3>
                            <p className="diff-desc">Built for startups, small teams, and solo founders who need solid AI automations without agency level overhead.</p>
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
                            From basic prompt tuning to complex multi-agent coding environments, we deliver solid code with full handovers.
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card animate-on-scroll delay-100">
                            <span className="material-symbols-outlined service-icon">smart_toy</span>
                            <div className="service-content">
                                <h3 className="service-title">1. AI Agents &amp; LLM Workflows</h3>
                                <p className="service-desc">Autonomous agents that execute business tasks, reply to emails, and sync with your internal databases automatically.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-200">
                            <span className="material-symbols-outlined service-icon">dataset</span>
                            <div className="service-content">
                                <h3 className="service-title">2. Ingestion &amp; Automated Scraping</h3>
                                <p className="service-desc">Custom scraping tools that clean, format, and structure raw web data to feed directly into your databases.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-300">
                            <span className="material-symbols-outlined service-icon">search_insights</span>
                            <div className="service-content">
                                <h3 className="service-title">3. Custom RAG &amp; Semantic Search</h3>
                                <p className="service-desc">Connect custom documents, PDFs, and databases to local models so you can query your knowledge base privately.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-400">
                            <span className="material-symbols-outlined service-icon">tune</span>
                            <div className="service-content">
                                <h3 className="service-title">4. Prompt Tuning &amp; Support</h3>
                                <p className="service-desc">Need extra help tuning prompts? We are always here, but you are never required to hire us just to keep your model online.</p>
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
                            Our process is straightforward, meaning we stay aligned from the first consultation to the final handover.
                        </p>
                    </div>
                    <div className="different-grid">
                        <div className="diff-card animate-scale-in delay-100" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">1</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>1. Consultation</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>Tell us what you want to automate during a quick consultation with no sales pressure.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-200" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">2</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>2. Clear AI Quote</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>Get a clear and fair quote with no vague estimates and no surprise middleware costs later.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-300" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">3</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>3. Active Build</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>We build your prompt frameworks and models, updating you regularly as the codebase evolves.</p>
                        </div>
                        <div className="diff-card animate-scale-in delay-400" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-main)' }}>
                            <div className="icon-wrapper" style={{ background: 'rgba(26, 60, 110, 0.08)', color: 'var(--color-primary)' }}>
                                <span className="font-extrabold text-lg">4</span>
                            </div>
                            <h3 className="diff-title" style={{ color: 'var(--color-primary)' }}>4. Code Handover</h3>
                            <p className="diff-desc" style={{ color: 'var(--color-text-muted)' }}>We hand your code off properly with clear guides so you can manage API keys and prompts yourself.</p>
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
                                <p className="service-desc">Your private prompts and client databases stay secure at all times, with no training on public models.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-200" style={{ background: 'var(--color-bg-white)' }}>
                            <span className="material-symbols-outlined service-icon" style={{ color: 'var(--color-accent)' }}>groups</span>
                            <div className="service-content">
                                <h3 className="service-title">Direct Focused Team</h3>
                                <p className="service-desc">We are a small, focused team, meaning you talk to the engineers actually building your model rather than sales managers.</p>
                            </div>
                        </div>
                        <div className="service-card animate-on-scroll delay-300" style={{ background: 'var(--color-bg-white)' }}>
                            <span className="material-symbols-outlined service-icon" style={{ color: 'var(--color-accent)' }}>thumb_up</span>
                            <div className="service-content">
                                <h3 className="service-title">Genuinely Helpful</h3>
                                <p className="service-desc">We would rather earn repeat business by being genuinely helpful than by locking you into closed licensing setups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA Section */}
            <section className="contact-section">
                <div className="container container-narrow animate-on-scroll">
                    <div className="contact-card text-center" style={{ padding: '48px 32px' }}>
                        <span className="section-tagline tag-white mb-4">Start Your AI Automation</span>
                        <h2 className="section-title text-white">Get a Fair, Flat-Rate Quote</h2>
                        <p className="section-body text-light text-center-max-width mb-6" style={{ margin: '0 auto 32px' }}>
                            Ready to automate your workflows with custom AI that you fully own? Reach out today for a transparent, zero obligation consultation.
                        </p>
                        <button 
                            onClick={(e) => handleCtaClick(e, 'SaaS Tool Development')}
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
