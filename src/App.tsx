import { useState } from "react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e1a";
const NAVY2 = "#0f1524";
const NAVY3 = "#161d30";
const NAVY4 = "#1e2640";
const BORDER = "rgba(201,168,76,0.18)";
const BORDER_MID = "rgba(201,168,76,0.35)";

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  orgType: string;
  orgSize: string;
  state: string;
  firm: string;
  practiceSize: string;
  system: string;
  message: string;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  orgType: "",
  orgSize: "",
  state: "",
  firm: "",
  practiceSize: "",
  system: "",
  message: "",
};

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming","Washington D.C."
];

function NavBar() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,14,26,0.95)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${BORDER}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2rem", height: "64px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => scroll("hero")}>
        <div style={{
          width: "32px", height: "32px", border: `1.5px solid ${GOLD}`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>SM</span>
        </div>
        <span style={{ color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", letterSpacing: "0.12em", fontWeight: 500 }}>SMRG CONSULTING</span>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {[["Systems", "systems"], ["Why Live", "why"], ["Who", "who"], ["Book Demo", "booking"]].map(([label, id]) => (
          <button key={id} onClick={() => scroll(id)} style={{
            background: id === "booking" ? GOLD : "transparent",
            color: id === "booking" ? NAVY : "rgba(255,255,255,0.65)",
            border: id === "booking" ? "none" : "none",
            padding: id === "booking" ? "8px 18px" : "0",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", letterSpacing: "0.08em", fontWeight: id === "booking" ? 600 : 400,
            cursor: "pointer", textTransform: "uppercase",
            transition: "all 0.2s",
          }}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "2.5rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: BORDER }} />
      <div style={{ width: "6px", height: "6px", background: GOLD, transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: "1px", background: BORDER }} />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
      <div style={{ width: "24px", height: "1px", background: GOLD }} />
      <span style={{
        color: GOLD, fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px", letterSpacing: "0.2em", fontWeight: 500, textTransform: "uppercase",
      }}>{children}</span>
    </div>
  );
}

function HeroSection() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "120px 2rem 80px",
      position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), ${NAVY}`,
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
        background: `repeating-linear-gradient(90deg, ${BORDER} 0, ${BORDER} 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, ${BORDER} 0, ${BORDER} 1px, transparent 1px, transparent 60px)`,
        opacity: 0.4, pointerEvents: "none",
      }} />
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%", position: "relative" }}>
        <SectionLabel>IRU · LIRU Platform</SectionLabel>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
          fontWeight: 300, color: "#fff", lineHeight: 1.08,
          margin: "0 0 1.5rem", letterSpacing: "-0.01em",
        }}>
          Structured intake systems<br />
          <span style={{ color: GOLD }}>for immigration services</span><br />
          and legal workflows.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.6)", maxWidth: "620px", lineHeight: 1.7,
          margin: "0 0 0.75rem",
        }}>
          IRU supports frontline organizations and volunteers.
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.6)", maxWidth: "620px", lineHeight: 1.7,
          margin: "0 0 0.75rem",
        }}>
          LIRU supports attorneys and legal intake teams.
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          color: "rgba(201,168,76,0.7)", maxWidth: "580px", lineHeight: 1.7,
          margin: "0 0 2.5rem", fontStyle: "italic",
        }}>
          These are fixed, deployment-ready systems — not custom-built software per organization.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <button onClick={() => scroll("booking")} style={{
            background: GOLD, color: NAVY, border: "none",
            padding: "16px 36px", fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", cursor: "pointer",
            transition: "all 0.2s",
          }}>
            Book a Live Demo
          </button>
          <button onClick={() => scroll("systems")} style={{
            background: "transparent", color: "rgba(255,255,255,0.7)",
            border: `1px solid ${BORDER_MID}`,
            padding: "16px 36px", fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em",
            textTransform: "uppercase", cursor: "pointer",
            transition: "all 0.2s",
          }}>
            Explore IRU &amp; LIRU
          </button>
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
          color: "rgba(255,255,255,0.35)", margin: "1.5rem 0 0",
          letterSpacing: "0.04em",
        }}>
          Live walkthroughs are scheduled after a short intake review.
        </p>
      </div>
    </section>
  );
}

function WhatThisIs() {
  return (
    <section style={{
      background: NAVY2, padding: "100px 2rem",
      borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>What This Is</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 2rem",
          lineHeight: 1.2,
        }}>
          A live systems walkthrough —<br />
          <span style={{ color: GOLD }}>not a product demo video.</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
          color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: "680px",
          margin: "0 0 1.5rem",
        }}>
          IRU and LIRU are structured intake systems designed for high-volume immigration and legal environments. Instead of customizing software per organization, we deploy standardized workflows that your team operates within.
        </p>
        <GoldDivider />
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
          color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1rem",
        }}>
          Every live demo is:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "2.5rem" }}>
          {[
            ["Tailored to your intake environment", "We map the session to your specific organizational context."],
            ["Focused on real workflow mapping", "Not a slide deck. A live walkthrough of how the system operates."],
            ["Used to evaluate system fit", "We assess deployment readiness before any commitment."],
          ].map(([title, desc]) => (
            <div key={title} style={{
              background: NAVY3, border: `1px solid ${BORDER}`,
              padding: "1.5rem", borderLeft: `3px solid ${GOLD}`,
            }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 8px", letterSpacing: "0.02em" }}>{title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem",
          color: GOLD, fontStyle: "italic", margin: 0,
        }}>
          You don't watch the system. You see how it operates inside your organization.
        </p>
      </div>
    </section>
  );
}

function SystemsSection() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="systems" style={{ background: NAVY, padding: "100px 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Two Systems</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 3rem", lineHeight: 1.2,
        }}>
          Two systems. Two distinct workflows.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2px" }}>
          {/* IRU */}
          <div style={{
            background: NAVY3, border: `1px solid ${BORDER}`,
            padding: "2.5rem", display: "flex", flexDirection: "column",
            borderTop: `3px solid ${GOLD}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{
                background: "transparent", border: `1px solid ${GOLD}`,
                padding: "4px 12px", fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase",
              }}>IRU</div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>Immigration Readiness Utility</span>
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem",
              fontWeight: 400, color: "#fff", margin: "0 0 0.75rem",
            }}>For frontline organizations</h3>
            <div style={{ marginBottom: "1.5rem" }}>
              {["Nonprofit organizations", "Volunteer intake teams", "Community-based immigration support networks", "Sanctuary mission organizations"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ width: "4px", height: "4px", background: GOLD, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              IRU structures frontline intake into a consistent, guided workflow — capturing intake information consistently, identifying readiness signals, and reducing fragmentation across volunteers.
            </p>
            <div style={{
              background: "rgba(201,168,76,0.06)", border: `1px solid ${BORDER}`,
              padding: "12px 16px", marginBottom: "2rem",
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Outcome: </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Faster, more organized frontline intake operations.</span>
            </div>
            <button onClick={() => scroll("booking")} style={{
              marginTop: "auto", background: GOLD, color: NAVY, border: "none",
              padding: "14px", fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer", width: "100%",
            }}>
              Book IRU Live Demo
            </button>
          </div>
          {/* LIRU */}
          <div style={{
            background: NAVY4, border: `1px solid ${BORDER}`,
            padding: "2.5rem", display: "flex", flexDirection: "column",
            borderTop: `3px solid rgba(201,168,76,0.45)`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{
                background: "transparent", border: `1px solid rgba(201,168,76,0.45)`,
                padding: "4px 12px", fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px", letterSpacing: "0.2em", color: "rgba(201,168,76,0.7)", textTransform: "uppercase",
              }}>LIRU</div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>Legal Intake Readiness Utility</span>
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem",
              fontWeight: 400, color: "#fff", margin: "0 0 0.75rem",
            }}>For legal intake teams</h3>
            <div style={{ marginBottom: "1.5rem" }}>
              {["Immigration attorneys", "Legal aid clinics", "Law firm intake teams"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ width: "4px", height: "4px", background: "rgba(201,168,76,0.55)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              LIRU standardizes legal intake before attorney review — structuring client intake data, reducing incomplete submissions, and improving case readiness before legal evaluation.
            </p>
            <div style={{
              background: "rgba(201,168,76,0.04)", border: `1px solid ${BORDER}`,
              padding: "12px 16px", marginBottom: "2rem",
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(201,168,76,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Outcome: </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Less attorney time wasted on unqualified or incomplete intake.</span>
            </div>
            <button onClick={() => scroll("booking")} style={{
              marginTop: "auto", background: "transparent", color: GOLD,
              border: `1px solid ${BORDER_MID}`,
              padding: "14px", fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer", width: "100%",
            }}>
              Book LIRU Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principle() {
  return (
    <section style={{
      background: NAVY2, padding: "100px 2rem",
      borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <SectionLabel>Important Principle</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 1.5rem", lineHeight: 1.2,
        }}>
          These systems are not customized<br />
          <span style={{ color: GOLD }}>per organization.</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
          color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "620px",
          margin: "0 auto 3rem",
        }}>
          IRU and LIRU are intentionally structured systems. We do not rebuild or customize workflows per client. Instead, organizations adopt a standardized intake system designed for consistency, speed, and scalability.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: BORDER }}>
          {[
            ["Faster deployment", "No configuration cycles or build phases."],
            ["Lower operational overhead", "No per-client engineering or support."],
            ["Consistent intake quality", "Identical standards across all organizations."],
          ].map(([title, desc]) => (
            <div key={title} style={{ background: NAVY2, padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{ width: "32px", height: "1px", background: GOLD, margin: "0 auto 1rem" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 8px" }}>{title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          color: GOLD, fontStyle: "italic", margin: "3rem 0 0",
        }}>
          Organizations adapt to the system — not the other way around.
        </p>
      </div>
    </section>
  );
}

function WhyLive() {
  return (
    <section id="why" style={{ background: NAVY, padding: "100px 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Why Live Walkthroughs</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 1.5rem", lineHeight: 1.2,
        }}>
          Why live walkthroughs instead<br />
          <span style={{ color: GOLD }}>of recorded demos?</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
          color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "620px", marginBottom: "3rem",
        }}>
          Intake workflows vary significantly across organizations. A live demo allows us to map IRU or LIRU to your real intake process.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          {[
            ["01", "Map to your real intake process", "We walk through your actual workflow, not a generic scenario."],
            ["02", "Identify workflow gaps", "Live sessions surface operational gaps that recorded demos miss."],
            ["03", "Evaluate operational fit", "We determine whether IRU or LIRU aligns with your environment."],
            ["04", "Determine deployment readiness", "We assess your organization's readiness before any next step."],
          ].map(([num, title, desc]) => (
            <div key={num} style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.5rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "rgba(201,168,76,0.25)", fontWeight: 300, display: "block", marginBottom: "0.75rem" }}>{num}</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 8px" }}>{title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "3rem", background: NAVY3, border: `1px solid ${BORDER}`,
          padding: "1.5rem 2rem", borderLeft: `3px solid ${GOLD}`,
        }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: "#fff", margin: 0, fontStyle: "italic" }}>
            This is not a sales presentation. It is a structured fit and workflow evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  return (
    <section id="who" style={{
      background: NAVY2, padding: "100px 2rem",
      borderTop: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Who This Is For</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 1rem", lineHeight: 1.2,
        }}>
          Built for organizations that<br />
          <span style={{ color: GOLD }}>process intake at scale.</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
          color: "rgba(255,255,255,0.45)", marginBottom: "3rem",
        }}>
          If your organization processes intake daily, this system is designed for you.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2px" }}>
          <div style={{ background: NAVY3, border: `1px solid ${BORDER}`, padding: "2rem", borderTop: `2px solid ${GOLD}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <div style={{ background: GOLD, padding: "3px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: NAVY, letterSpacing: "0.15em" }}>IRU</div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>is for</span>
            </div>
            {["Nonprofit intake teams", "Volunteer coordination systems", "Community immigration support organizations"].map(i => (
              <div key={i} style={{ display: "flex", gap: "12px", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ width: "5px", height: "5px", background: GOLD, flexShrink: 0, marginTop: "6px" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{i}</span>
              </div>
            ))}
          </div>
          <div style={{ background: NAVY4, border: `1px solid ${BORDER}`, padding: "2rem", borderTop: `2px solid rgba(201,168,76,0.45)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <div style={{ background: "transparent", border: `1px solid rgba(201,168,76,0.45)`, padding: "3px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(201,168,76,0.8)", letterSpacing: "0.15em" }}>LIRU</div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>is for</span>
            </div>
            {["Immigration attorneys", "Legal intake departments", "Legal aid organizations"].map(i => (
              <div key={i} style={{ display: "flex", gap: "12px", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ width: "5px", height: "5px", background: "rgba(201,168,76,0.55)", flexShrink: 0, marginTop: "6px" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputStyle(focused: boolean) {
  return {
    width: "100%", boxSizing: "border-box" as const,
    background: focused ? NAVY : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused ? GOLD : BORDER}`,
    color: "#fff", padding: "12px 14px",
    fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
    outline: "none", transition: "all 0.2s",
  };
}

function BookingSection() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [focused, setFocused] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.system || !form.organization) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "SMRG Consulting <onboarding@resend.dev>",
          to: ["nycformassist@gmail.com"],
          subject: `Live Demo Request — ${form.system} — ${form.organization}`,
          html: `
            <h2>New Live Demo Request</h2>
            <table>
              <tr><td><strong>System:</strong></td><td>${form.system}</td></tr>
              <tr><td><strong>Name:</strong></td><td>${form.name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${form.email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${form.phone}</td></tr>
              <tr><td><strong>Organization:</strong></td><td>${form.organization}</td></tr>
              <tr><td><strong>Organization Type:</strong></td><td>${form.orgType}</td></tr>
              <tr><td><strong>Organization Size:</strong></td><td>${form.orgSize}</td></tr>
              <tr><td><strong>State:</strong></td><td>${form.state}</td></tr>
              <tr><td><strong>Firm:</strong></td><td>${form.firm}</td></tr>
              <tr><td><strong>Law Practice Size:</strong></td><td>${form.practiceSize}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${form.message}</td></tr>
            </table>
          `,
        }),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
    color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em",
    textTransform: "uppercase" as const, display: "block", marginBottom: "6px",
  };

  const fieldWrap = { display: "flex", flexDirection: "column" as const };

  return (
    <section id="booking" style={{
      background: NAVY, padding: "100px 2rem",
      borderTop: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Schedule</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400, color: "#fff", margin: "0 0 0.75rem", lineHeight: 1.2,
        }}>
          Schedule your live walkthrough.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
          color: "rgba(255,255,255,0.45)", marginBottom: "3rem", maxWidth: "560px", lineHeight: 1.7,
        }}>
          All live demos are scheduled after a short intake review. Complete the form below and you will receive confirmation and follow-up communication by email.
        </p>

        {status === "sent" ? (
          <div style={{
            background: NAVY3, border: `1px solid ${GOLD}`,
            padding: "3rem", textAlign: "center",
          }}>
            <div style={{ width: "40px", height: "1px", background: GOLD, margin: "0 auto 1.5rem" }} />
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#fff", margin: "0 0 1rem" }}>Request Received</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", margin: 0 }}>
              We've received your intake review request. You will receive confirmation and scheduling details by email.
            </p>
          </div>
        ) : (
          <div style={{ background: NAVY3, border: `1px solid ${BORDER}`, padding: "2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              {/* System Selection */}
              <div style={{ ...fieldWrap, gridColumn: "1 / -1" }}>
                <label style={labelStyle}>System *</label>
                <select value={form.system} onChange={set("system")}
                  onFocus={() => setFocused("system")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle(focused === "system"), appearance: "none" }}>
                  <option value="">Select IRU or LIRU</option>
                  <option value="IRU — Immigration Readiness Utility">IRU — Immigration Readiness Utility</option>
                  <option value="LIRU — Legal Intake Readiness Utility">LIRU — Legal Intake Readiness Utility</option>
                  <option value="Both IRU and LIRU">Both IRU and LIRU</option>
                </select>
              </div>
              {/* Name */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Full Name *</label>
                <input value={form.name} onChange={set("name")} placeholder="Your full name"
                  onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                  style={inputStyle(focused === "name")} />
              </div>
              {/* Email */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" value={form.email} onChange={set("email")} placeholder="you@organization.org"
                  onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                  style={inputStyle(focused === "email")} />
              </div>
              {/* Phone */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" value={form.phone} onChange={set("phone")} placeholder="(000) 000-0000"
                  onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                  style={inputStyle(focused === "phone")} />
              </div>
              {/* State */}
              <div style={fieldWrap}>
                <label style={labelStyle}>State</label>
                <select value={form.state} onChange={set("state")}
                  onFocus={() => setFocused("state")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle(focused === "state"), appearance: "none" }}>
                  <option value="">Select state</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              {/* Organization */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Organization Name *</label>
                <input value={form.organization} onChange={set("organization")} placeholder="Organization name"
                  onFocus={() => setFocused("organization")} onBlur={() => setFocused("")}
                  style={inputStyle(focused === "organization")} />
              </div>
              {/* Org Type */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Organization Type</label>
                <select value={form.orgType} onChange={set("orgType")}
                  onFocus={() => setFocused("orgType")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle(focused === "orgType"), appearance: "none" }}>
                  <option value="">Select type</option>
                  <option value="Nonprofit">Nonprofit</option>
                  <option value="Legal Aid Clinic">Legal Aid Clinic</option>
                  <option value="Law Firm">Law Firm</option>
                  <option value="Community Organization">Community Organization</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Volunteer Network">Volunteer Network</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Org Size */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Organization Size</label>
                <select value={form.orgSize} onChange={set("orgSize")}
                  onFocus={() => setFocused("orgSize")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle(focused === "orgSize"), appearance: "none" }}>
                  <option value="">Select size</option>
                  <option value="1–5 staff">1–5 staff</option>
                  <option value="6–20 staff">6–20 staff</option>
                  <option value="21–50 staff">21–50 staff</option>
                  <option value="51–100 staff">51–100 staff</option>
                  <option value="100+ staff">100+ staff</option>
                </select>
              </div>
              {/* Firm */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Firm Name</label>
                <input value={form.firm} onChange={set("firm")} placeholder="Law firm name (if applicable)"
                  onFocus={() => setFocused("firm")} onBlur={() => setFocused("")}
                  style={inputStyle(focused === "firm")} />
              </div>
              {/* Practice Size */}
              <div style={fieldWrap}>
                <label style={labelStyle}>Law Practice Size</label>
                <select value={form.practiceSize} onChange={set("practiceSize")}
                  onFocus={() => setFocused("practiceSize")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle(focused === "practiceSize"), appearance: "none" }}>
                  <option value="">Select practice size</option>
                  <option value="Solo practitioner">Solo practitioner</option>
                  <option value="2–5 attorneys">2–5 attorneys</option>
                  <option value="6–15 attorneys">6–15 attorneys</option>
                  <option value="16–50 attorneys">16–50 attorneys</option>
                  <option value="50+ attorneys">50+ attorneys</option>
                  <option value="Not applicable">Not applicable</option>
                </select>
              </div>
              {/* Message */}
              <div style={{ ...fieldWrap, gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Additional Context</label>
                <textarea value={form.message} onChange={set("message")}
                  placeholder="Briefly describe your current intake process or any specific questions."
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                  rows={4}
                  style={{ ...inputStyle(focused === "message"), resize: "vertical" as const }} />
              </div>
            </div>

            {status === "error" && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#e05c5c", marginBottom: "16px" }}>
                There was an error submitting your request. Please try again or email us directly.
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                background: GOLD, color: NAVY, border: "none",
                padding: "16px 48px", fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1, transition: "all 0.2s",
                width: "100%",
              }}>
              {status === "sending" ? "Submitting..." : "Book Live Demo"}
            </button>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
              color: "rgba(255,255,255,0.3)", marginTop: "12px", textAlign: "center",
            }}>
              * Required fields. You will receive a confirmation email after review.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: NAVY2, borderTop: `1px solid ${BORDER}`,
      padding: "3rem 2rem",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: "28px", height: "28px", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif", fontSize: "12px", fontWeight: 600 }}>SM</span>
              </div>
              <span style={{ color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", letterSpacing: "0.12em" }}>SMRG CONSULTING</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", maxWidth: "380px", lineHeight: 1.7, margin: 0 }}>
              IRU and LIRU are structured intake systems developed for immigration and legal service environments, designed to improve consistency and reduce operational fragmentation in high-volume workflows.
            </p>
          </div>
          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: GOLD, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 1rem" }}>Systems</p>
              {["IRU", "LIRU"].map(s => (
                <p key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: "0 0 6px" }}>{s}</p>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: GOLD, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 1rem" }}>Contact</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>Via demo booking form</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © {new Date().getFullYear()} SMRG Consulting. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "6px", height: "1px", background: GOLD }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
              smrgconsulting.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: NAVY, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <NavBar />
      <HeroSection />
      <WhatThisIs />
      <SystemsSection />
      <Principle />
      <WhyLive />
      <WhoThisIsFor />
      <BookingSection />
      <Footer />
    </div>
  );
}
