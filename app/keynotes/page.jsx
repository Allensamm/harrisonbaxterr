"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Mic2 } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const types = [
  {
    id: "keynote",
    num: "01",
    title: "Keynote Impact",
    sub: "Corporate & Conference",
    desc: [
      "Dr. Baxter's keynote presentations are engineered for maximum impact. From the opening line to the final call-to-action, every moment is designed to shift perspective, ignite motivation, and leave audiences with tools they can use immediately.",
      "Tailored to your industry, your challenges, and your people — no two keynotes are the same. Expect standing ovations, lasting conversation, and measurable results.",
    ],
    tags: ["Leadership Transformation", "Executive Vision", "Culture Change", "Innovation Mindset", "Performance Excellence"],
  },
  {
    id: "educational",
    num: "02",
    title: "Educational Excellence",
    sub: "Academic Institutions",
    desc: [
      "Dr. Baxter collaborates with universities, business schools, and K-12 institutions to equip students and educators with the leadership competencies that define the next generation of change-makers.",
      "From first-generation college students to doctoral candidates and academic administrators, these sessions foster a growth mindset, encourage reflective leadership, and empower emerging leaders to create lasting, positive change.",
    ],
    tags: ["Student Leadership", "Emotional Intelligence", "Future-Ready Skills", "Academic Excellence", "Career Readiness"],
  },
  {
    id: "corporate",
    num: "03",
    title: "Corporate Leadership Talks",
    sub: "Teams & Executives",
    desc: [
      "Designed for today's dynamic business landscape, Dr. Baxter's corporate programs address the real challenges leaders face: navigating change, building resilient cultures, retaining top talent, and enhancing collective performance.",
      "These are not generic workshops. They are precisely calibrated to your organization's goals — with pre-session diagnostics, customized content, and post-session accountability tools.",
    ],
    tags: ["Executive Coaching", "Team Resilience", "Strategic Leadership", "Change Navigation", "High-Performance Culture"],
  },
];

const topics = [
  "The Neuroscience of Reflective Leadership", "Leading Through Uncertainty with Clarity",
  "Building Emotional Intelligence at Scale", "From Manager to Multiplier",
  "Creating High-Trust, High-Performance Teams", "The Inner Game of Executive Decision-Making",
  "Purpose-Driven Organizations That Retain Top Talent", "Courageous Conversations That Transform Culture",
  "Adaptive Leadership in a Disruptive World", "The 5 Pillars of Sustained Personal Effectiveness",
  "Inclusive Leadership as a Competitive Advantage", "Unlocking Potential Through Reflective Coaching",
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We begin with a deep-dive conversation to understand your audience, goals, culture, and the specific outcomes you need." },
  { num: "02", title: "Custom Design", desc: "Dr. Baxter's team crafts a bespoke presentation — integrating your language, data, and context so every word lands." },
  { num: "03", title: "The Experience", desc: "A high-energy, emotionally resonant session that challenges thinking, elevates perspective, and energizes the room." },
  { num: "04", title: "Sustained Impact", desc: "Post-session resources, accountability frameworks, and optional follow-up coaching ensure the transformation sticks." },
];

export default function KeynotesPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });

      gsap.from(".keynote-type-card", {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".keynotes-types", start: "top 78%" },
      });

      gsap.from(".topic-item", {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.05, ease: "power3.out",
        scrollTrigger: { trigger: ".topics-grid", start: "top 78%" },
      });

      gsap.from(".process-step", {
        y: 36, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <Nav />
      <div className="page-wrap">
        {/* Hero */}
        <section className="page-hero">
          <div className="page-hero-glow" />
          <div className="page-hero-content">
            <p className="section-kicker">Speaking & Keynotes</p>
            <h1>Words that<br /><em>move</em><br />people.</h1>
            <p>
              Dr. Baxter delivers powerful, thought-provoking messages tailored
              to inspire corporate, academic, and community audiences — sparking
              new perspectives and motivating immediate, meaningful action.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="pill-btn pill-btn-gold">
                Book a Keynote <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Keynote types */}
        <section className="keynotes-types">
          <p className="section-kicker"><Mic2 size={13} />Three Signature Experiences</p>
          <h2 className="section-h2">Speaking that fits your exact needs.</h2>
          {types.map(({ num, title, sub, desc, tags, id }) => (
            <div className="keynote-type-card" key={id} id={id}>
              <div className="keynote-num">{num}</div>
              <div>
                <span style={{ color: "var(--gold-2)", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>{sub}</span>
                <h3>{title}</h3>
                {desc.map((p, i) => <p key={i}>{p}</p>)}
                <div className="keynote-tags">
                  {tags.map((t) => <span className="keynote-tag" key={t}>{t}</span>)}
                </div>
                <div className="btn-row" style={{ marginTop: 28 }}>
                  <Link href="/contact" className="pill-btn pill-btn-dark">
                    Inquire About This <ChevronRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Topics */}
        <section className="keynote-topics">
          <p className="section-kicker">Topic Library</p>
          <h2 className="section-h2" style={{ color: "var(--paper-2)" }}>Explore the full range of topics.</h2>
          <div className="topics-grid">
            {topics.map((t) => (
              <div className="topic-item" key={t}>
                <Check size={16} />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 48 }}>
            <Link href="/contact" className="pill-btn pill-btn-gold">
              Request a Custom Topic <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Process */}
        <section className="keynote-process">
          <p className="section-kicker">How It Works</p>
          <h2 className="section-h2">From first inquiry to standing ovation.</h2>
          <div className="process-steps">
            {process.map(({ num, title, desc }) => (
              <div className="process-step" key={num}>
                <span className="process-num">{num}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Let&apos;s Make It Happen</p>
            <h2>Your audience is waiting.<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Let&apos;s not keep them.</em></h2>
            <p>Tell us about your event, audience, and goals. Dr. Baxter&apos;s team responds within 24 hours.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="pill-btn pill-btn-gold">
                Start the Booking Process <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
