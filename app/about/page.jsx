"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Lightbulb, Brain, Heart, Star, Shield, Zap } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { num: "01", title: "Reflective Practice", icon: Brain, desc: "Every breakthrough begins with honest self-inquiry. Reflection is not a luxury — it's the most strategic tool a leader has." },
  { num: "02", title: "Radical Authenticity", icon: Heart, desc: "People don't follow titles — they follow truth. Authentic leadership creates the psychological safety that unlocks team potential." },
  { num: "03", title: "Purposeful Growth", icon: Star, desc: "Growth without direction is just motion. Dr. Baxter aligns ambition with meaning so that every step forward has compounding impact." },
  { num: "04", title: "Courageous Action", icon: Shield, desc: "Insight without action is wasted. Courage is the bridge between knowing what to do and actually doing it under pressure." },
  { num: "05", title: "Inclusive Excellence", icon: Users, desc: "The best ideas come from the fullest rooms. Diverse perspectives, when valued, produce results that homogeneous teams simply cannot." },
  { num: "06", title: "Sustained Impact", icon: Zap, desc: "One speech can spark something. A system changes everything. The goal is never a single peak — it's a lifetime of meaningful ascent." },
];

const timeline = [
  { year: "2004", title: "Earned Doctorate in Organizational Leadership", desc: "Completed doctoral research on reflective decision-making and its impact on executive performance under uncertainty." },
  { year: "2006", title: "First Fortune 500 Keynote", desc: "Delivered the keynote at a national leadership summit — a pivotal moment that revealed the power of his unique, science-backed approach." },
  { year: "2010", title: "Published 'The Reflective Leader'", desc: "His debut book became a bestseller and established the reflective leadership framework adopted by organizations worldwide." },
  { year: "2014", title: "Founded the Baxter Leadership Institute", desc: "Launched a dedicated research and coaching practice focused on inner leadership development for C-suite executives." },
  { year: "2019", title: "Named Top 10 Leadership Speaker", desc: "Recognized by multiple global publications as one of the most impactful leadership voices of the decade." },
  { year: "2024", title: "50,000+ Lives Transformed", desc: "A milestone reached through keynotes, workshops, coaching programs, books, and digital content across six continents." },
];

function Users(props) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }

export default function AboutPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });

      gsap.from(".about-portrait", {
        x: -44, opacity: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-bio-inner", start: "top 78%" },
      });

      gsap.from(".about-body > *", {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.09, ease: "power3.out",
        scrollTrigger: { trigger: ".about-body", start: "top 80%" },
      });

      gsap.from(".value-card", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.09, ease: "power3.out",
        scrollTrigger: { trigger: ".values-grid", start: "top 78%" },
      });

      gsap.from(".timeline-item", {
        x: 32, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline", start: "top 78%" },
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
            <p className="section-kicker">About</p>
            <h1>The mind<br /><em>behind</em><br />the method.</h1>
            <p>
              Dr. R. Harrison Baxter isn't just a leadership speaker — he's a
              practitioner, researcher, and strategist who has spent 20+ years
              living the work he teaches.
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="about-bio">
          <div className="about-bio-inner">
            <div>
              <div className="about-portrait">
                <div className="intro-portrait-glow" />
                <div className="intro-portrait-initials">RHB</div>
                <div className="about-portrait-label">Dr. R. Harrison Baxter, DBA</div>
              </div>
            </div>

            <div className="about-body">
              <p className="section-kicker">His Story</p>
              <h2>What I teach isn't theory pulled from textbooks.</h2>
              <p>
                It's the product of real-world challenges, deep reflection, and
                years of transformational growth. I bring my whole self into this
                work because I believe <strong>leadership is deeply personal before
                it becomes professional.</strong>
              </p>
              <p>
                Growing up, I watched leaders in my community struggle — not from a
                lack of intelligence or effort, but from a lack of <em>inner clarity</em>.
                They were reacting to the world instead of leading it. That observation
                became my life's mission.
              </p>
              <p>
                After earning my Doctorate in Organizational Leadership, I spent
                the next two decades in boardrooms, classrooms, and auditoriums around
                the world — helping leaders at every level reconnect with their why
                and execute with unprecedented conviction.
              </p>
              <p>
                By combining <strong>reflective listening</strong> with cutting-edge
                neuroscience, I help leaders cultivate emotional intelligence, strategic
                vision, and inner clarity — creating environments where people don't just
                perform, they flourish.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="pill-btn pill-btn-dark">
                  Work with Dr. Baxter <ArrowRight size={17} />
                </Link>
                <Link href="/keynotes" className="pill-btn pill-btn-outline">
                  Explore Speaking Topics
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <p className="section-kicker">Core Philosophy</p>
          <h2 className="section-h2" style={{ color: "var(--paper-2)" }}>
            Six principles that drive every conversation.
          </h2>
          <div className="values-grid">
            {values.map(({ num, title, icon: Icon, desc }) => (
              <div className="value-card" key={num}>
                <span className="value-number">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="about-timeline">
          <p className="section-kicker">
            <Lightbulb size={13} />
            Journey & Milestones
          </p>
          <h2 className="section-h2">Two decades in the making.</h2>
          <div className="timeline">
            {timeline.map(({ year, title, desc }) => (
              <div className="timeline-item" key={year}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Beyond the Podium</p>
            <h2>This is more than a service.<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>It's a shared journey.</em></h2>
            <p>Ready to experience what reflective leadership can do for you and your team?</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="pill-btn pill-btn-gold">
                Start the Conversation <ArrowRight size={18} />
              </Link>
              <Link href="/keynotes" className="pill-btn pill-btn-ghost">
                Speaking Topics
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
