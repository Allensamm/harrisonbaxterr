"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, BookOpen, PenLine, Rss } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const categories = ["Leadership", "Culture", "Growth", "Neuroscience", "Coaching", "Resilience"];

export default function BlogPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });
      gsap.from(".blog-coming-card", {
        y: 36, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".blog-coming-grid", start: "top 78%" },
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
            <p className="section-kicker">Blog & Insights</p>
            <h1>Ideas that<br /><em>lead</em><br />somewhere.</h1>
            <p>
              Weekly perspectives on leadership, culture, neuroscience, and
              personal growth — written for leaders who are serious about
              becoming someone worth following.
            </p>
          </div>
        </section>

        {/* Coming soon */}
        <section style={{ background: "var(--paper)", padding: "var(--section-pad) var(--section-x)" }}>
          <p className="section-kicker"><PenLine size={13} />New Articles Coming Soon</p>
          <h2 className="section-h2">Fresh insights are on their way.</h2>
          <p className="section-lead">
            Dr. Baxter is currently writing a new series of articles on reflective
            leadership, neuroscience, and purposeful growth. Subscribe below to be
            the first to read them.
          </p>

          {/* Topics preview */}
          <div className="blog-coming-grid" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)", marginTop: 52 }}>
            {categories.map((cat) => (
              <div
                className="blog-coming-card"
                key={cat}
                style={{
                  background: "var(--paper-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "28px 24px",
                }}
              >
                <span style={{
                  background: "rgba(29,120,116,0.1)",
                  borderRadius: 999,
                  color: "var(--teal)",
                  display: "inline-block",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                  padding: "4px 12px",
                  textTransform: "uppercase",
                }}>
                  {cat}
                </span>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.72, margin: 0 }}>
                  Upcoming articles exploring {cat.toLowerCase()} through the lens of
                  reflective leadership and applied neuroscience.
                </p>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div style={{
            background: "var(--ink)",
            borderRadius: "var(--radius-lg)",
            marginTop: 64,
            padding: "clamp(36px, 5vw, 60px)",
            textAlign: "center",
          }}>
            <div style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,12,0.14), transparent)", borderRadius: "var(--radius-lg)", inset: 0, position: "absolute", pointerEvents: "none" }} />
            <Rss size={32} style={{ color: "var(--gold-light)", margin: "0 auto 20px" }} />
            <h2 style={{ color: "var(--paper-2)", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", marginBottom: 14 }}>
              Be first to read every article.
            </h2>
            <p style={{ color: "rgba(255,253,248,0.62)", fontSize: "1.02rem", lineHeight: 1.76, margin: "0 auto 32px", maxWidth: 500 }}>
              Subscribe to Dr. Baxter's newsletter — thoughtful ideas on leadership
              and growth, delivered directly to your inbox. No filler, no noise.
            </p>
            <form
              style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  background: "rgba(255,253,248,0.1)",
                  border: "1.5px solid rgba(255,253,248,0.2)",
                  borderRadius: 999,
                  color: "var(--paper-2)",
                  fontSize: "0.95rem",
                  minWidth: 280,
                  outline: 0,
                  padding: "13px 22px",
                }}
              />
              <button type="submit" className="pill-btn pill-btn-gold">
                Notify Me <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </section>

        {/* In the meantime */}
        <section style={{ background: "var(--paper-2)", padding: "var(--section-pad) var(--section-x)" }}>
          <p className="section-kicker"><BookOpen size={13} />While You Wait</p>
          <h2 className="section-h2">Explore Dr. Baxter's books and resources.</h2>
          <p className="section-lead">
            Five published books and a growing library of free guides, videos, and
            podcast episodes — all available now.
          </p>
          <div className="btn-row" style={{ marginTop: 36 }}>
            <Link href="/books" className="pill-btn pill-btn-dark">
              Browse the Books <ArrowRight size={17} />
            </Link>
            <Link href="/resources" className="pill-btn pill-btn-outline">
              Free Resources
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Ready Now?</p>
            <h2>Don't wait for the next article.<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Start the conversation.</em></h2>
            <p>Book Dr. Baxter for a keynote, workshop, or coaching engagement.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="pill-btn pill-btn-gold">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link href="/keynotes" className="pill-btn pill-btn-ghost">
                Explore Speaking Topics
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
