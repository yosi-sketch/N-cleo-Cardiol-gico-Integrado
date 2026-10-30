"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "champagne"
    | "silver"
    | "platinum"
    | "navy"
    | "dark"
    | "white"
    | "emerald"
    | "outline"
    | "outline-dark";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast luxury styling calibrated directly to the 3D Metallic Gold Logo & Dr. Rafael Nascimento's Brand
  const variantClasses = {
    // Primary Signature: 3D Sculpted Metallic Radiant Gold (Rafael Nascimento Advocacia)
    gold:
      "relative border border-[#fef08a]/90 bg-gradient-to-r from-[#c88a2c] via-[#f5d77f] to-[#df9e38] text-[#170e03] font-black tracking-[0.14em] " +
      "shadow-[0_6px_24px_-2px_rgba(212,163,75,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#dca443] hover:via-[#fff1be] hover:to-[#cb8e30] hover:text-[#0d0701] " +
      "hover:shadow-[0_10px_30px_rgba(223,158,56,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(200,138,44,0.4)]",

    champagne:
      "relative border border-amber-200/90 bg-gradient-to-r from-[#dfbd78] via-[#fbf3d1] to-[#e7cc99] text-[#1a0e03] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(223,189,120,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#fbf3d1] hover:via-[#ffffff] hover:to-[#dfbd78] hover:text-[#0d0701] " +
      "hover:shadow-[0_10px_28px_rgba(251,243,209,0.55)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(223,189,120,0.4)]",

    // Backward-compatible alias to signature gold
    silver:
      "relative border border-[#fef08a]/90 bg-gradient-to-r from-[#c88a2c] via-[#f5d77f] to-[#df9e38] text-[#170e03] font-black tracking-[0.14em] " +
      "shadow-[0_6px_24px_-2px_rgba(212,163,75,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#dca443] hover:via-[#fff1be] hover:to-[#cb8e30] hover:text-[#0d0701] " +
      "hover:shadow-[0_10px_30px_rgba(223,158,56,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(200,138,44,0.4)]",

    platinum:
      "relative border border-amber-200/90 bg-gradient-to-r from-[#dfbd78] via-[#fbf3d1] to-[#e7cc99] text-[#1a0e03] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(223,189,120,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#fbf3d1] hover:via-[#ffffff] hover:to-[#dfbd78] hover:text-[#0d0701] " +
      "hover:shadow-[0_10px_28px_rgba(251,243,209,0.55)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(223,189,120,0.4)]",

    // Rich Dark Slate Accent
    navy:
      "relative border border-[#d4a34b]/50 bg-gradient-to-r from-[#0d1624] via-[#16253a] to-[#0f1b2c] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(13,22,36,0.6),inset_0_1px_1px_rgba(212,163,75,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#132035] hover:via-[#1c304d] hover:to-[#16253a] hover:border-[#f5d77f] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(212,163,75,0.35)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(13,22,36,0.4)]",

    // High-Contrast Solid Obsidian/Noir with Warm Gold Border
    dark:
      "relative border border-[#d4a34b]/40 bg-[#0f1117] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:bg-[#161a22] hover:border-[#f5d77f] " +
      "hover:shadow-[0_10px_24px_rgba(212,163,75,0.25)]",

    // High-Contrast Pure White / Warm Alabaster (ideal on Dark folds)
    white:
      "relative border border-[#d4a34b]/30 bg-white text-[#120a01] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-[#faf8f5] hover:border-[#c88a2c] " +
      "hover:shadow-[0_10px_26px_rgba(212,163,75,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-[#d4a34b]/50 bg-white/5 text-[#fbf3d1] font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#f5d77f] hover:bg-white/10 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-[#c88a2c]/40 bg-white/95 text-[#14171f] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#c88a2c] hover:text-[#0b0c10] hover:bg-[#faf8f5]",

    // WhatsApp Official Emerald CTA
    emerald:
      "relative border border-[#25D366]/80 bg-gradient-to-r from-[#0d4420] via-[#128C7E] to-[#075E54] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 hover:brightness-110 " +
      "hover:shadow-[0_10px_26px_rgba(37,211,102,0.6)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
