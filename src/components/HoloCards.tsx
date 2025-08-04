"use client";
import React, { useRef, useEffect, useState } from "react";

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const COLORS = [
  "#38BDF8", // Sky blue
//   "#34D399", // Green
//   "#F472B6", // Pink
//   "#FBBF24", // Amber
//   "#A78BFA", // Purple
  "#F87171", // Red
];

const HoloCard: React.FC<HoloCardProps> = ({ children, className = "", color }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowEdges, setGlowEdges] = useState({ top: false, bottom: false, left: false, right: false });
  const [gradientPos, setGradientPos] = useState({ x: "50%", y: "50%" });

  const cardColor = color || COLORS[Math.floor(Math.random() * COLORS.length)];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const horizontal = x < rect.width / 3 ? "left" : x > (rect.width * 2) / 3 ? "right" : "";
      const vertical = y < rect.height / 3 ? "top" : y > (rect.height * 2) / 3 ? "bottom" : "";

      setGlowEdges({
        top: vertical === "top",
        bottom: vertical === "bottom",
        left: horizontal === "left",
        right: horizontal === "right",
      });

      setGradientPos({ x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%` });

      // ✅ Fixed tilt direction (now matches cursor movement)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((centerY - y) / centerY) * 10; 
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      setGlowEdges({ top: false, bottom: false, left: false, right: false });
      setGradientPos({ x: "50%", y: "50%" });
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="group perspective-[1000px]">
      <div
        ref={cardRef}
        className={`relative transition-transform duration-300 ease-out rounded-xl ${className}`}
        style={{
          background: `radial-gradient(circle at ${gradientPos.x} ${gradientPos.y}, ${cardColor}30, ${cardColor}10, transparent 80%)`,
          border: `1.5px solid ${cardColor}40`, // ✅ Default faint border
          borderRadius: "12px",
          boxShadow: `
            ${glowEdges.top ? `0 -6px 20px ${cardColor}` : ""},
            ${glowEdges.bottom ? `0 6px 20px ${cardColor}` : ""},
            ${glowEdges.left ? `-6px 0 20px ${cardColor}` : ""},
            ${glowEdges.right ? `6px 0 20px ${cardColor}` : ""}
          `,
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default HoloCard;
