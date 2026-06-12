import Link from "next/link";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-mark">RHB</div>
          <h3>Dr. R. Harrison Baxter</h3>
          <p>
            Leadership begins from within. Helping individuals and organizations
            step into their full potential through reflection, clarity, and
            purpose-driven action.
          </p>
        </div>

        <div className="footer-col">
          <h4>Speaking</h4>
          <Link href="/keynotes">Keynote Speaking</Link>
          <Link href="/keynotes#corporate">Corporate Talks</Link>
          <Link href="/keynotes#educational">Educational Sessions</Link>
          <Link href="/events">Upcoming Events</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/books">Books</Link>
          <Link href="/resources">Free Resources</Link>
          <Link href="/blog">Blog &amp; Insights</Link>
          <Link href="/about">About Dr. Baxter</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <Link href="/contact">Book a Conversation</Link>
          <Link href="mailto:info@rharrisonbaxter.com">info@rharrisonbaxter.com</Link>
          <Link href="tel:+12125550100">+1 (212) 555-0100</Link>
          <span style={{ color: "rgba(255,253,248,0.38)", fontSize: "0.86rem" }}>New York, NY</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-bottom-copy">
          &copy; {new Date().getFullYear()} Dr. R. Harrison Baxter. All Rights Reserved.
        </span>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/rharrisonbaxter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href="https://twitter.com/DrRHBaxter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
            <Twitter size={17} />
          </a>
          <a href="https://www.youtube.com/@rharrisonbaxter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
            <Youtube size={17} />
          </a>
          <a href="https://www.instagram.com/rharrisonbaxter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <Instagram size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
