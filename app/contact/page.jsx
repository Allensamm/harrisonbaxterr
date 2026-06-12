"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  { icon: Mail, label: "Email", value: "info@rharrisonbaxter.com" },
  { icon: Phone, label: "Phone", value: "+1 (212) 555-0100" },
  { icon: MapPin, label: "Location", value: "New York, NY — Available Globally" },
  { icon: CalendarDays, label: "Response Time", value: "Within 24 business hours" },
];

const inquiryTypes = [
  "Keynote Speaking",
  "Corporate Leadership Workshop",
  "Educational / University Session",
  "Executive Coaching",
  "Book / Media Inquiry",
  "Bulk Book Order",
  "Other",
];

export default function ContactPage() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-content > *", { y: 36, opacity: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power3.out" });

      gsap.from(".contact-method", {
        x: -28, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-methods", start: "top 80%" },
      });

      gsap.from(".contact-form-wrap", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-wrap", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <div ref={ref}>
      <Nav />
      <div className="page-wrap">
        {/* Hero */}
        <section className="page-hero">
          <div className="page-hero-glow" />
          <div className="page-hero-content">
            <p className="section-kicker">Contact</p>
            <h1>Let's start a<br /><em>conversation</em><br />worth having.</h1>
            <p>
              Whether you're planning an event, exploring coaching, or just want
              to connect — Dr. Baxter's team is ready to respond. Reach out and
              let's build something meaningful together.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="contact-section">
          <div className="contact-inner">
            {/* Left: info */}
            <div className="contact-info">
              <p className="section-kicker">Get in Touch</p>
              <h2>We respond within<br />24 hours.</h2>
              <p>
                No gatekeepers, no run-around. Tell us what you have in mind and
                Dr. Baxter's team will get back to you with everything you need
                to move forward.
              </p>

              <div className="contact-methods">
                {methods.map(({ icon: Icon, label, value }) => (
                  <div className="contact-method" key={label}>
                    <div className="contact-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4>{label}</h4>
                      <span>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick note */}
              <div style={{
                background: "var(--paper-2)",
                border: "1px solid var(--line)",
                borderLeft: "4px solid var(--gold-2)",
                borderRadius: "var(--radius)",
                marginTop: 28,
                padding: "18px 20px",
              }}>
                <strong style={{ display: "block", fontSize: "0.9rem", marginBottom: 6 }}>
                  Planning an event?
                </strong>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
                  Include your event date, location, audience size, and the outcomes
                  you're hoping to achieve. This helps Dr. Baxter's team give you the
                  most useful response right away.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form-wrap">
              <h3>Send a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" placeholder="Jane" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" placeholder="Smith" required />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="jane@company.com" required />
                </div>

                <div className="form-field">
                  <label htmlFor="org">Organization</label>
                  <input id="org" type="text" placeholder="Company or Institution" />
                </div>

                <div className="form-field">
                  <label htmlFor="inquiry">Type of Inquiry</label>
                  <select id="inquiry" required defaultValue="">
                    <option value="" disabled>Select an option…</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell Us More</label>
                  <textarea
                    id="message"
                    placeholder="Share details about your event, goals, audience, or any questions you have…"
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message <ArrowRight size={17} />
                </button>

                <p className={`form-success${submitted ? " show" : ""}`}>
                  ✓ Message received! We'll be in touch within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Speaking inquiry callout */}
        <section className="cta-band">
          <div className="cta-band-glow" />
          <div className="cta-band-content">
            <p className="section-kicker" style={{ justifyContent: "center" }}>Speaking Inquiries</p>
            <h2>Ready to book Dr. Baxter<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>for your next event?</em></h2>
            <p>
              Corporate keynotes, educational sessions, half-day intensives, and
              multi-day leadership programs — Dr. Baxter travels globally and
              tailors every experience to your audience.
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a href="mailto:info@rharrisonbaxter.com" className="pill-btn pill-btn-gold">
                Email Directly <ArrowRight size={18} />
              </a>
              <a href="tel:+12125550100" className="pill-btn pill-btn-ghost">
                Call the Office
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
