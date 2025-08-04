"use client";
import React, { useRef, useEffect, useState } from "react";

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const COLORS = [
  "#38BDF8", // Sky blue
  "#F87171", // Red
];

// ✅ Deterministic pseudo-random function
function deterministicColor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLORS.length;
  return COLORS[index];
}

const HoloCard: React.FC<HoloCardProps> = ({ children, className = "", color }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowEdges, setGlowEdges] = useState({ top: false, bottom: false, left: false, right: false });
  const [gradientPos, setGradientPos] = useState({ x: "50%", y: "50%" });

  // ✅ Use deterministic color to match SSR and Client
  const stableColor = color || deterministicColor(children?.toString() || "default");

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
          background: `radial-gradient(circle at ${gradientPos.x} ${gradientPos.y}, ${stableColor}30, ${stableColor}10, transparent 80%)`,
          border: `1.5px solid ${stableColor}40`,
          borderRadius: "12px",
          boxShadow: `
            ${glowEdges.top ? `0 -6px 20px ${stableColor}` : ""},
            ${glowEdges.bottom ? `0 6px 20px ${stableColor}` : ""},
            ${glowEdges.left ? `-6px 0 20px ${stableColor}` : ""},
            ${glowEdges.right ? `6px 0 20px ${stableColor}` : ""}
          `,
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default HoloCard;
