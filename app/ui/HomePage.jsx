"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Brain, CalendarDays, ChevronRight,
  MessageCircle, Mic2, Star, Target, TrendingUp, Users, Zap,
} from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Brain,
    title: "Reflective Leadership",
    text: "True leadership begins with self-awareness. Dr. Baxter guides leaders to look inward first — building clarity, emotional intelligence, and the confidence to lead with intention.",
    link: "/keynotes",
  },
  {
    icon: Users,
    title: "Organizational Growth",
    text: "High-performing teams don't happen by accident. Through proven frameworks, he helps organizations build resilient cultures where people innovate, collaborate, and thrive.",
    link: "/keynotes#corporate",
  },
  {
    icon: Target,
    title: "Purposeful Achievement",
    text: "Vision without action is just a dream. Dr. Baxter bridges the gap between aspiration and execution — creating leaders who move with urgency, precision, and purpose.",
    link: "/about",
  },
];

const stats = [
  { number: 500, suffix: "+", label: "Keynotes Delivered" },
  { number: 20, suffix: "+", label: "Years of Impact" },
  { number: 50, suffix: "K+", label: "Lives Transformed" },
  { number: 5, suffix: "", label: "Published Books" },
];

const testimonials = [
  { quote: "Dr. Baxter didn't just speak to us — he changed the way our entire leadership team thinks. Six months later, we're still applying what we learned.", name: "Sarah M.", title: "SVP, Fortune 500 Company", initials: "SM" },
  { quote: "The most powerful keynote I've witnessed in 25 years of attending executive conferences. He commands the room from the first word.", name: "James T.", title: "CEO, Global Consulting Firm", initials: "JT" },
  { quote: "He has a rare gift: making complex leadership principles feel immediately personal and actionable. Our students left completely transformed.", name: "Dr. Angela R.", title: "Dean, Business School", initials: "AR" },
  { quote: "Within three months of Dr. Baxter's workshop, our team's performance scores rose by 34%. The ROI was extraordinary.", name: "Michael C.", title: "VP Operations, Tech Sector", initials: "MC" },
  { quote: "I've worked with many consultants. None have Dr. Baxter's ability to pinpoint the exact barriers holding a team back — then dismantle them.", name: "Linda F.", title: "Chief People Officer", initials: "LF" },
];

const insights = [
  { tag: "Leadership", date: "June 2026", title: "Why Reflective Leaders Outperform Their Peers Every Time", excerpt: "The neuroscience behind slowing down to speed up — and why the most effective leaders pause before they act.", large: true },
  { tag: "Growth", date: "May 2026", title: "The 5 Habits That Separate Great Managers from Great Leaders" },
  { tag: "Culture", date: "May 2026", title: "Building Psychological Safety Without Sacrificing Accountability" },
];

export default function HomePage() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero stagger
      gsap.from(".hero-content > *", {
        y: 38,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Intro section
      gsap.from(".intro-portrait", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".intro-inner", start: "top 78%" },
      });

      gsap.from(".intro-text > *", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".intro-text", start: "top 80%" },
      });

      // Pillar cards
      gsap.from(".pillar-card", {
        y: 44,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillars-grid", start: "top 78%" },
      });

      // Stats count-up
      stats.forEach(({ number }, i) => {
        const el = document.querySelector(`.stat-number-${i}`);
        if (!el) return;
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: number,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // Testimonials auto-scroll
      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2;
        gsap.to(track, {
          x: -totalWidth,
          duration: 36,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((v) => parseFloat(v) % totalWidth),
          },
        });
      }

      // Book feature
      gsap.from(".book-cover-mock", {
        x: -40,
        opacity: 0,
        rotation: -4,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".book-feature-inner", start: "top 78%" },
      });

      gsap.from(".book-feature-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".book-feature-text", start: "top 80%" },
      });

      // Insight cards
      gsap.from(".insight-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".insights-grid", start: "top 78%" },
      });

      // CTA band
      gsap.from(".cta-band-content > *", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cta-band", start: "top 80%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="home-hero" id="top">
        <HeroScene />
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            The Voice of Reflective Leadership
          </p>
          <h1 className="hero-h1">
            Lead with<br />
            <em>clarity.</em><br />
            Rise with<br />purpose.
          </h1>
          <p className="hero-body">
            Dr. R. Harrison Baxter helps leaders and organizations transform
            from the inside out — through powerful keynotes, executive coaching,
            and transformative growth programs built on neuroscience and
            real-world wisdom.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="pill-btn pill-btn-gold">
              Book Dr. Baxter
              <ArrowRight size={18} />
            </Link>
            <Link href="/keynotes" className="pill-btn pill-btn-ghost">
              Explore Speaking Topics
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

      </section>

      {/* ── WHO IS DR. BAXTER ─────────────────────────────────── */}
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-portrait">
            <div className="intro-portrait-glow" />
            <div className="intro-portrait-initials">RHB</div>
            <div className="intro-portrait-label">Dr. R. Harrison Baxter</div>
          </div>

          <div className="intro-text">
            <p className="section-kicker">
              <Zap size={13} />
              About Dr. Baxter
            </p>
            <h2 className="section-h2">Leadership begins from within.</h2>

            <blockquote>
              &ldquo;I believe that every leader has an untapped reservoir of potential —
              and that reflection is the key that unlocks it.&rdquo;
            </blockquote>

            <p>
              I&apos;m Dr. R. Harrison Baxter — leadership strategist, keynote speaker,
              and executive coach. For over two decades, I&apos;ve partnered with Fortune
              500 executives, academic institutions, and emerging leaders to create
              the kind of transformation that actually sticks.
            </p>
            <p>
              My approach blends <strong>cutting-edge neuroscience</strong> with the
              power of reflective listening — helping leaders cultivate the emotional
              intelligence, strategic clarity, and inner confidence needed to lead
              at the highest level.
            </p>

            <div className="btn-row">
              <Link href="/about" className="pill-btn pill-btn-dark">
                My Full Story
                <ArrowRight size={17} />
              </Link>
              <Link href="/keynotes" className="pill-btn pill-btn-outline">
                Speaking Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEAKING PILLARS ──────────────────────────────────── */}
      <section className="pillars-section">
        <div className="pillars-header">
          <div>
            <p className="section-kicker">What Dr. Baxter Delivers</p>
            <h2 className="section-h2" style={{ color: "var(--paper-2)" }}>
              Three paths to<br />
              <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>lasting impact.</em>
            </h2>
          </div>
          <div className="pillars-header-text">
            <p>
              Whether your audience needs a single igniting moment or a sustained
              transformation, Dr. Baxter meets them where they are — and moves them
              further than they thought possible.
            </p>
            <Link href="/keynotes" className="pill-btn pill-btn-ghost" style={{ marginTop: 28, display: "inline-flex" }}>
              Explore All Topics
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>

        <div className="pillars-grid">
          {pillars.map(({ icon: Icon, title, text, link }) => (
            <div className="pillar-card" key={title}>
              <div className="pillar-icon"><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href={link} className="pillar-cta">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="stats-band">
        <div className="stats-grid">
          {stats.map(({ number, suffix, label }, i) => (
            <div className="stat-item" key={label}>
              <strong className="stat-number">
                <span className={`stat-number-${i}`}>{number}</span>
                <span className="stat-suffix">{suffix}</span>
              </strong>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="section-kicker">
            <MessageCircle size={13} />
            What They Say
          </p>
          <h2 className="section-h2">Success through their eyes.</h2>
        </div>

        <div className="testimonials-track-wrap">
          <div className="testimonials-track" ref={trackRef}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-author-info">
                    <strong>{t.name}</strong>
                    <span>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED BOOK ─────────────────────────────────────── */}
      <section className="book-feature-section">
        <div className="book-feature-inner">
          <div className="book-cover-mock">
            <div className="book-cover-stripe" />
            <div className="intro-portrait-glow" />
            <div className="book-cover-body">
              <h3>The Reflective Leader</h3>
              <span>DR. R. HARRISON BAXTER</span>
            </div>
          </div>

          <div className="book-feature-text">
            <p className="section-kicker">
              <BookOpen size={13} />
              Featured Book
            </p>
            <h2 className="section-h2">The Reflective Leader</h2>
            <p>
              A groundbreaking guide to the inner game of leadership — blending
              neuroscience, mindfulness, and executive strategy into a framework
              that transforms how you lead, decide, and inspire.
            </p>
            <p>
              Named one of the top leadership books of the year by multiple
              publications, <em>The Reflective Leader</em> has guided thousands
              of executives from reactive management to responsive, purpose-driven
              leadership.
            </p>
            <div className="btn-row">
              <Link href="/books" className="pill-btn pill-btn-dark">
                View All Books
                <ArrowRight size={17} />
              </Link>
              <a href="https://www.amazon.com/s?k=R+Harrison+Baxter" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
                Order on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT INSIGHTS ───────────────────────────────────── */}
      <section className="insights-section">
        <p className="section-kicker">
          <TrendingUp size={13} />
          Latest Insights
        </p>
        <h2 className="section-h2">Ideas worth leading with.</h2>

        <div className="insights-grid">
          {insights.map((item) => (
            <div className={`insight-card${item.large ? " insight-card-lg" : ""}`} key={item.title}>
              <div className={`insight-card-img${item.large ? " insight-card-img-tall" : ""}`}>
                <span className="insight-tag">{item.tag}</span>
              </div>
              <div className="insight-card-body">
                <p className="insight-card-date">{item.date}</p>
                <h3>{item.title}</h3>
                {item.excerpt && <p>{item.excerpt}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="btn-row" style={{ justifyContent: "center", marginTop: 48 }}>
          <Link href="/blog" className="pill-btn pill-btn-dark">
            Read All Articles
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="cta-band-glow" />
        <div className="cta-band-content">
          <p className="section-kicker" style={{ justifyContent: "center" }}>
            <Mic2 size={13} />
            Ready to Work Together?
          </p>
          <h2>Bring Dr. Baxter to your<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>next stage.</em></h2>
          <p>
            Whether it&apos;s a keynote, a leadership workshop, or a full transformation
            program — let&apos;s build something remarkable together.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="pill-btn pill-btn-gold">
              Start the Conversation
              <ArrowRight size={18} />
            </Link>
            <Link href="/events" className="pill-btn pill-btn-ghost">
              See Upcoming Events
              <CalendarDays size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
