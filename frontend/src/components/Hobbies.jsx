import React, { useRef } from "react";
import {
  Camera,
  Plane,
  Bike,
  BookOpen,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const hobbies = [
  {
    title: "ShutterBug",
    icon: <Camera size={34} />,
    link: "https://snappysaumya.vercel.app", // ✅ added
  },
  {
    title: "Wanderlust",
    icon: <Plane size={34} />,
  },
  {
    title: "Motorcycle Enthusiast",
    icon: <Bike size={34} />,
  },
  {
    title: "Bookworm",
    icon: <BookOpen size={34} />,
  },
  {
    title: "TechSavvy",
    icon: <Cpu size={34} />,
  },
];

export default function Hobbies() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section
      id="hobbies"
      style={{
        padding: isMobile ? "80px 20px" : "100px 80px",
        background: "#030712",
        color: "white",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "2rem" : "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        HOBBIES
      </h2>

      <div className="hobbies-wrapper">
        <button className="scroll-btn left-btn" onClick={scrollLeft}>
          <ChevronLeft size={28} />
        </button>

        <div className="hobbies-scroll-container" ref={scrollRef}>
          {hobbies.map((hobby, index) => (
            <div className="hobby-tile" key={index}>
              <div className="hobby-title">
                {hobby.link ? (
                  <a
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {hobby.title}
                  </a>
                ) : (
                  hobby.title
                )}
              </div>
              <div className="hobby-icon">{hobby.icon}</div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right-btn" onClick={scrollRight}>
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}