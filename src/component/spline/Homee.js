import React, { useEffect, useRef, useState } from "react";

const Homee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = `
      @keyframes shinyEffect {
        0% {
          background-position: 0% 50%;
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          background-position: 100% 50%;
          transform: scale(1.2);
          opacity: 1;
        }
        100% {
          background-position: 0% 50%;
          transform: scale(1);
          opacity: 0.8;
        }
      }

      @keyframes shimmer {
        0% {
          filter: blur(0px);
        }
        50% {
          filter: blur(6px);
        }
        100% {
          filter: blur(0px);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.cursorContainer}>
      {/* Dynamic Cursor Patch */}
      <div
        ref={cursorRef}
        className={`cursor-patch ${isHovered ? "hovered" : ""}`}
        style={styles.cursorPatch}
      />
      {/* Brand Video instead of text */}
      <div
        style={styles.brandName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          width="100%"
          height="auto"
          loop
          muted
          autoPlay
          playsInline
          style={styles.videoStyle}
        >
          <source src="/assets/animated-logo.mov" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

// Styles
const styles = {
  cursorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    background: "#1c2321", // Dark background for contrast
    color: "white",
    fontFamily: "'Arial', sans-serif",
    zIndex: -1,
  },
  cursorPatch: {
    position: "absolute",
    width: "100px", // Larger size for better visibility
    height: "100px",
    borderRadius: "50%", // Keeps the base shape
    background: `radial-gradient(
      circle,
      rgba(248, 90, 35, 0.3) 30%, /* Slightly faded red towards the edges */
      transparent 90%
    )`, // Gradient with higher opacity for better visibility
    filter: "blur(20px)", // Reduced blur for sharper appearance
    pointerEvents: "none",
    boxShadow: `0 0 30px rgba(255, 0, 0, 0.4), 0 0 60px rgba(255, 0, 0, 0.2)`, // Adds a glow effect
    transform: "translate(-50%, -50%)",
  },
  brandName: {
    fontSize: "80px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
    position: "relative", // Ensure the video can be styled properly
    width: "60%", // Make sure the video fits nicely
    maxWidth: "800px", // Limit the max width
  },
  videoStyle: {
    borderRadius: "15px", // Optional: Add rounded corners to the video
    objectFit: "cover", // Ensure the video covers the entire area
    boxShadow: "0 0 10px rgba(255, 0, 0, 0.6)", // Optional: Add some glow effect to the video
  },
};

export default Homee;
