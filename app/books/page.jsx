"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const books = [
  {
    title: "The Reflective Leader",
    year: "2010", featured: true,
    gradient: "linear-gradient(155deg, #1a4a6a, #0f1923 50%, #2a1a4a)",
    tagline: "A Bestseller That Started a Movement",
    desc: [
      "The groundbreaking guide to inner leadership — blending neuroscience, mindfulness, and executive strategy into a framework that transforms how you lead, decide, and inspire.",
      "Named one of the top leadership books of the year by Fast Company, Forbes, and the Harvard Business Review. Adopted by business schools and Fortune 500 companies worldwide.",
    ],
    praise: "\"A masterpiece of practical wisdom. Required reading for every leader who wants to be both effective and human.\" — Marshall Goldsmith",
  },
  {
    title: "Lead From Within", year: "2013",
    gradient: "linear-gradient(155deg, #1a3a2a, #0f1923 50%, #3a2a1a)",
    desc: "The follow-up to The Reflective Leader, diving deeper into the emotional and spiritual dimensions of authentic leadership.",
  },
  {
    title: "The Courageous Conversation", year: "2016",
    gradient: "linear-gradient(155deg, #3a1a2a, #0f1923 50%, #1a3a4a)",
    desc: "A practical guide to having the difficult conversations that transform relationships, teams, and organizations.",
  },
  {
    title: "Habits of the Resilient Mind", year: "2019",
    gradient: "linear-gradient(155deg, #1a2a4a, #0f1923 50%, #2a3a1a)",
    desc: "Drawing on neuroscience and peak performance research, this book reveals the daily habits that sustain high-level leadership over time.",
  },
  {
    title: "Rise: The New Leadership", year: "2022",
    gradient: "linear-gradient(155deg, #2a1a4a, #0f1923 50%, #1a4a3a)",
    desc: "A bold vision for leadership in the post-pandemic world — inclusive, adaptive, purpose-driven, and unapologetically human.",
  },
];

export default function BooksPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });

      gsap.from(".books-featured-inner > *", {
        y: 40, opacity: 0, duration: 1, stagger: 0.14, ease: "power3.out",
        scrollTrigger: { trigger: ".books-featured-inner", start: "top 78%" },
      });

      gsap.from(".book-card", {
        y: 36, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".books-grid", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const featured = books[0];
  const rest = books.slice(1);

  return (
    <div ref={ref}>
      <Nav />
      <div className="page-wrap">
        <section className="page-hero">
          <div className="page-hero-glow" />
          <div className="page-hero-content">
            <p className="section-kicker">Books</p>
            <h1>Ideas that<br /><em>outlast</em><br />the stage.</h1>
            <p>Five books, one relentless mission: equip leaders at every level with the inner tools and outer strategies they need to lead with lasting impact.</p>
          </div>
        </section>

        {/* Featured book */}
        <section className="books-hero-text">
          <p className="section-kicker"><BookOpen size={13} />Featured Work</p>
          <h2 className="section-h2" style={{ color: "var(--paper-2)" }}>The book that started it all.</h2>
          <div className="books-featured-inner">
            <div className="book-cover-3d" style={{ background: featured.gradient }}>
              <div className="book-cover-3d-stripe" />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 25%, rgba(200,150,12,0.22), transparent)" }} />
              <div className="book-cover-3d-content">
                <h3>{featured.title}</h3>
                <span>DR. R. HARRISON BAXTER</span>
              </div>
            </div>
            <div className="books-featured-text">
              <span style={{ color: "var(--gold-light)", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{featured.tagline}</span>
              <h2>{featured.title}</h2>
              {featured.desc.map((p, i) => <p key={i}>{p}</p>)}
              <blockquote style={{ borderLeft: "3px solid var(--gold-2)", paddingLeft: 20, margin: "22px 0", color: "rgba(255,253,248,0.7)", fontStyle: "italic", fontSize: "0.96rem", lineHeight: 1.7 }}>{featured.praise}</blockquote>
              <div className="btn-row">
                <a href="https://www.amazon.com/s?k=R+Harrison+Baxter" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-gold">Order on Amazon <ArrowRight size={17} /></a>
                <Link href="/contact" className="pill-btn pill-btn-ghost">Book Dr. Baxter to Speak</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other books */}
        <section className="books-grid-section">
          <p className="section-kicker">Complete Library</p>
          <h2 className="section-h2">Five books. One lifelong mission.</h2>
          <div className="books-grid">
            {rest.map((book) => (
              <div className="book-card" key={book.title}>
                <div className="book-card-cover" style={{ background: book.gradient }}>
                  <div className="book-card-cover-inner">
                    <span className="book-card-cover-title">{book.title}</span>
                  </div>
                </div>
                <div className="book-card-body">
                  <p className="book-card-year">{book.year}</p>
                  <h3>{book.title}</h3>
                  <p>{book.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Bulk Orders & Speaking</p>
            <h2>Looking to equip your whole<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>team or organization?</em></h2>
            <p>Bulk book orders come with the option for a live Q&A with Dr. Baxter. Contact us to explore what's possible.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="pill-btn pill-btn-gold">Get in Touch <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
