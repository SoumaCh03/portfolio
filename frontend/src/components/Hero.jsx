import React, { useEffect, useState } from "react";

export default function Hero() {
  const originalText = "TECHYSAUMYA";
  const finalText = "SAUMYADEEP CHAKRABORTY";

  const [displayText, setDisplayText] = useState(originalText);
  const [phase, setPhase] = useState("wait");

  useEffect(() => {
    let timeout;

    if (phase === "wait") {
      timeout = setTimeout(() => {
        setPhase("delete");
      }, 2200);
    } else if (phase === "delete") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 90);
      } else {
        setPhase("type");
      }
    } else if (phase === "type") {
      if (displayText.length < finalText.length) {
        timeout = setTimeout(() => {
          setDisplayText(finalText.slice(0, displayText.length + 1));
        }, 110);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "#E8F4FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 80px",
        textAlign: "left",
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.7,
            marginBottom: "25px",
            letterSpacing: "4px",
          }}
        >
          FULL STACK DEVELOPER
        </p>

        <h1
          className="hero-title"
          style={{
            fontSize: displayText === originalText ? "5rem" : "4.3rem",
            lineHeight: "1",
            marginBottom: "25px",
            color: "#ffffff",
            textShadow: "0 0 20px rgba(0,255,255,0.15)",
            fontWeight: "bold",
            minHeight: "100px",
          }}
        >
          {displayText}
          <span className="blinking-cursor">|</span>
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            opacity: 0.9,
            marginTop: "0",
            marginBottom: "50px",
          }}
        >
          Backend Engineering | Scalable Systems | AI Solutions
        </p>

        {/* BUTTONS UPDATED */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "18px 36px",
                background: "#00FFFF",
                color: "#030712",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0,255,255,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow =
                  "0 0 35px rgba(0,255,255,0.9)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow =
                  "0 0 20px rgba(0,255,255,0.4)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View Projects
            </button>
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "18px 36px",
                background: "transparent",
                color: "#E8F4FF",
                border: "1px solid #E8F4FF",
                borderRadius: "12px",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow =
                  "0 0 25px rgba(255,255,255,0.7)";
                e.target.style.borderColor = "#00FFFF";
                e.target.style.color = "#00FFFF";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.borderColor = "#E8F4FF";
                e.target.style.color = "#E8F4FF";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-image-wrapper">
        <div className="orbit-ring"></div>
        <div className="glow-ring"></div>

        <div className="orbit-dot-container">
          <div className="orbit-dot"></div>
        </div>

        <img
          src="/profile.JPG"
          alt="Saumyadeep Chakraborty full stack developer portrait"
          className="profile-image"
        />
      </div>
    </section>
  );
}