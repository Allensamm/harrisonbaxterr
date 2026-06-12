"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const upcoming = [
  {
    day: "14", month: "Aug 2026", type: "corp", badge: "Corporate",
    title: "Leadership Reimagined: A Summit for Modern Executives",
    location: "New York, NY", audience: "C-Suite & Senior Leaders", seats: "Limited to 200",
    desc: "A full-day leadership immersion designed for executives navigating disruption. Dr. Baxter will guide attendees through frameworks for reflective decision-making and adaptive culture-building.",
  },
  {
    day: "02", month: "Sep 2026", type: "edu", badge: "Educational",
    title: "The Future-Ready Leader: A Campus Keynote Tour",
    location: "Boston, MA", audience: "University Students & Faculty", seats: "Open Registration",
    desc: "Kicking off a five-city campus tour, Dr. Baxter brings his signature blend of neuroscience and leadership storytelling to the next generation of changemakers.",
  },
  {
    day: "18", month: "Sep 2026", type: "pub", badge: "Public",
    title: "From Intention to Impact: A Public Workshop",
    location: "Washington, D.C.", audience: "Open to All Leaders", seats: "75 Seats Available",
    desc: "An intimate, hands-on workshop where participants work directly with Dr. Baxter's proprietary Reflective Leadership Framework — leaving with a personalized 90-day action plan.",
  },
  {
    day: "11", month: "Oct 2026", type: "corp", badge: "Corporate",
    title: "Building High-Trust Teams: A Half-Day Intensive",
    location: "Chicago, IL", audience: "HR & People Leaders", seats: "By Invitation",
    desc: "A practical, research-backed session on the neuroscience of trust, psychological safety, and the cultural conditions that make great teams great.",
  },
];

const past = [
  { year: "2025", title: "TEDx Leadership Summit, New York", tag: "Keynote", desc: "A captivating talk on why the most powerful leadership move is stillness — viewed 2.4M times online." },
  { year: "2025", title: "Global HR Forum, London", tag: "Workshop", desc: "A masterclass in emotional intelligence for 600+ senior HR professionals across 40 countries." },
  { year: "2024", title: "National Education Leadership Conference", tag: "Keynote", desc: "Delivered the closing keynote to 3,000 education leaders on building future-ready academic cultures." },
];

export default function EventsPage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });
      gsap.from(".event-card", {
        y: 32, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".events-list", start: "top 78%" },
      });
      gsap.from(".past-event-card", {
        y: 32, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".past-events-grid", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <Nav />
      <div className="page-wrap">
        <section className="page-hero">
          <div className="page-hero-glow" />
          <div className="page-hero-content">
            <p className="section-kicker">Events</p>
            <h1>Catch Dr. Baxter<br /><em>live.</em></h1>
            <p>
              From intimate workshops to major conference keynotes — find an
              upcoming event near you, or explore past highlights that have
              transformed thousands of leaders.
            </p>
          </div>
        </section>

        {/* Upcoming */}
        <section className="events-list">
          <p className="section-kicker"><CalendarDays size={13} />Upcoming Events</p>
          <h2 className="section-h2">Reserve your seat before they&apos;re gone.</h2>

          {upcoming.map((ev) => (
            <div className="event-card" key={ev.title}>
              <div className="event-date">
                <strong>{ev.day}</strong>
                <span>{ev.month}</span>
              </div>
              <div className="event-info">
                <span className={`event-badge event-badge-${ev.type}`}>{ev.badge}</span>
                <h3>{ev.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: "8px 0" }}>{ev.desc}</p>
                <div className="event-meta">
                  <span className="event-meta-item"><MapPin size={14} />{ev.location}</span>
                  <span className="event-meta-item"><Users size={14} />{ev.audience}</span>
                  <span className="event-meta-item" style={{ color: "var(--coral)", fontWeight: 700 }}>{ev.seats}</span>
                </div>
              </div>
              <div style={{ alignSelf: "flex-start", paddingTop: 4 }}>
                <Link href="/contact" className="pill-btn pill-btn-dark" style={{ fontSize: "0.84rem", minHeight: 42 }}>
                  Register <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Past events */}
        <section className="events-past">
          <p className="section-kicker">Past Events</p>
          <h2 className="section-h2">A track record that speaks for itself.</h2>
          <div className="past-events-grid">
            {past.map((ev) => (
              <div className="past-event-card" key={ev.title}>
                <div className="past-event-img">
                  <span className="event-badge event-badge-corp" style={{ position: "absolute", top: 14, left: 14 }}>{ev.tag}</span>
                </div>
                <div className="past-event-body">
                  <span>{ev.year}</span>
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Bring Dr. Baxter to You</p>
            <h2>Don&apos;t wait for the next<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>public event.</em></h2>
            <p>Book Dr. Baxter for your private corporate event, conference, or university — any time, any location.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="pill-btn pill-btn-gold">Book a Private Event <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
