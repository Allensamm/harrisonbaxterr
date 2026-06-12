"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Download, FileText, Headphones, PlayCircle } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    type: "guide", typeLabel: "Free Guide", icon: FileText,
    title: "The Reflective Leader's 90-Day Action Plan",
    desc: "A step-by-step workbook that takes Dr. Baxter's core framework and turns it into a daily practice. Used by thousands of leaders across 30+ countries.",
    cta: "Download Free",
    link: "/contact",
    external: false,
  },
  {
    type: "video", typeLabel: "Video", icon: PlayCircle,
    title: "TEDx Talk: The Power of the Pause in Leadership",
    desc: "Dr. Baxter's most-watched talk — 2.4 million views and counting. A compelling case for why slowing down is the fastest path to leadership excellence.",
    cta: "Watch Now",
    link: "https://www.youtube.com/results?search_query=R+Harrison+Baxter+TEDx+leadership",
    external: true,
  },
  {
    type: "guide", typeLabel: "Free Guide", icon: FileText,
    title: "5 Questions Every Leader Should Ask Themselves Daily",
    desc: "A printable card with the five reflective prompts Dr. Baxter recommends to his highest-achieving executive coaching clients.",
    cta: "Download Free",
    link: "/contact",
    external: false,
  },
  {
    type: "podcast", typeLabel: "Podcast", icon: Headphones,
    title: "The Reflective Leadership Podcast — Season 3",
    desc: "50 episodes of in-depth conversations with world-class leaders, researchers, and changemakers on what it really means to lead from the inside out.",
    cta: "Listen Now",
    link: "https://open.spotify.com/search/R%20Harrison%20Baxter%20reflective%20leadership",
    external: true,
  },
  {
    type: "article", typeLabel: "Article", icon: FileText,
    title: "Why Emotional Intelligence Beats IQ in the Boardroom",
    desc: "Published in Harvard Business Review, this article unpacks the neuroscience behind EQ and offers three practical strategies for developing it at scale.",
    cta: "Read Article",
    link: "/blog",
    external: false,
  },
  {
    type: "video", typeLabel: "Masterclass", icon: PlayCircle,
    title: "Building High-Trust Teams: A Free 60-Minute Masterclass",
    desc: "Dr. Baxter leads a practical, example-rich session on creating the psychological safety conditions that unlock team performance. No sign-up needed.",
    cta: "Watch Free",
    link: "https://www.youtube.com/results?search_query=R+Harrison+Baxter+high+trust+teams",
    external: true,
  },
  {
    type: "guide", typeLabel: "Assessment", icon: Download,
    title: "The Reflective Leadership Self-Assessment",
    desc: "A research-backed 20-question assessment that reveals your leadership blind spots and highlights the specific areas where reflection can drive the most growth.",
    cta: "Take the Assessment",
    link: "/contact",
    external: false,
  },
  {
    type: "podcast", typeLabel: "Podcast", icon: Headphones,
    title: "Interview: Dr. Baxter on The Tim Ferriss Show",
    desc: "A candid, wide-ranging conversation on failure, leadership philosophy, morning routines, and the one habit that changed everything for Dr. Baxter's career.",
    cta: "Listen Now",
    link: "https://tim.blog/podcast/",
    external: true,
  },
  {
    type: "article", typeLabel: "Article", icon: FileText,
    title: "The 3 Conversations Every Manager Avoids — and Shouldn't",
    desc: "A practical guide to navigating performance conversations, peer conflicts, and the uncomfortable truths that separate good managers from great leaders.",
    cta: "Read Article",
    link: "/blog",
    external: false,
  },
];

const typeColors = {
  guide: "resource-type-guide",
  video: "resource-type-video",
  article: "resource-type-article",
  podcast: "resource-type-podcast",
};

export default function ResourcesPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });

      gsap.from(".resource-card", {
        y: 36, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".resources-grid", start: "top 78%" },
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
            <p className="section-kicker">Free Resources</p>
            <h1>Tools to grow<br /><em>beyond</em><br />the event.</h1>
            <p>
              Guides, videos, podcast episodes, and assessments — free resources
              built to help you apply reflective leadership in your real world,
              starting today.
            </p>
          </div>
        </section>

        {/* Resources grid */}
        <section className="resources-section">
          <p className="section-kicker">Resource Library</p>
          <h2 className="section-h2">Everything you need to lead from within.</h2>

          <div className="resources-grid" style={{ marginTop: 52 }}>
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div className="resource-card" key={r.title}>
                  <div className="resource-thumb">
                    <Icon size={44} />
                    <span className={`resource-type-badge ${typeColors[r.type]}`}>{r.typeLabel}</span>
                  </div>
                  <div className="resource-body">
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    {r.external ? (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                        {r.cta} <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link href={r.link} className="resource-link">
                        {r.cta} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Stay in the Loop</p>
            <h2>Get new resources delivered<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>straight to your inbox.</em></h2>
            <p>
              Dr. Baxter drops fresh insights, tools, and exclusive content every two weeks.
              No noise — just ideas worth leading with.
            </p>
            <form
              style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  background: "rgba(255,253,248,0.1)",
                  border: "1.5px solid rgba(255,253,248,0.22)",
                  borderRadius: 999,
                  color: "var(--paper-2)",
                  fontSize: "0.95rem",
                  minWidth: 280,
                  outline: 0,
                  padding: "14px 22px",
                }}
              />
              <button type="submit" className="pill-btn pill-btn-gold">
                Subscribe Free <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
