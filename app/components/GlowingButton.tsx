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

  // High-contrast luxury styling calibrated directly to the Mariana Madeira Marcas Logo
  const variantClasses = {
    // Primary Signature: Metallic Warm Bronze Gold (Mariana Madeira Marcas)
    gold:
      "relative border border-[#f7edd7]/90 bg-gradient-to-r from-[#b8874d] via-[#f7edd7] to-[#c89658] text-[#1e1305] font-black tracking-[0.14em] " +
      "shadow-[0_6px_24px_-2px_rgba(184,135,77,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#c89658] hover:via-[#ffffff] hover:to-[#b8874d] hover:text-[#0c0802] " +
      "hover:shadow-[0_10px_30px_rgba(184,135,77,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(184,135,77,0.4)]",

    champagne:
      "relative border border-amber-200/90 bg-gradient-to-r from-[#c89658] via-[#fcf6e9] to-[#d9aa69] text-[#1e1305] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(200,150,88,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#fcf6e9] hover:via-[#ffffff] hover:to-[#c89658] hover:text-[#0c0802] " +
      "hover:shadow-[0_10px_28px_rgba(252,246,233,0.55)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(200,150,88,0.4)]",

    // Backward-compatible aliases to signature gold
    silver:
      "relative border border-[#f7edd7]/90 bg-gradient-to-r from-[#b8874d] via-[#f7edd7] to-[#c89658] text-[#1e1305] font-black tracking-[0.14em] " +
      "shadow-[0_6px_24px_-2px_rgba(184,135,77,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#c89658] hover:via-[#ffffff] hover:to-[#b8874d] hover:text-[#0c0802] " +
      "hover:shadow-[0_10px_30px_rgba(184,135,77,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(184,135,77,0.4)]",

    platinum:
      "relative border border-amber-200/90 bg-gradient-to-r from-[#c89658] via-[#fcf6e9] to-[#d9aa69] text-[#1e1305] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(200,150,88,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#fcf6e9] hover:via-[#ffffff] hover:to-[#c89658] hover:text-[#0c0802] " +
      "hover:shadow-[0_10px_28px_rgba(252,246,233,0.55)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(200,150,88,0.4)]",

    // Rich Dark Slate Accent
    navy:
      "relative border border-[#b8874d]/50 bg-gradient-to-r from-[#090a0d] via-[#14171e] to-[#0e1015] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(9,10,13,0.6),inset_0_1px_1px_rgba(184,135,77,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#14171e] hover:via-[#1e232e] hover:to-[#14171e] hover:border-[#e8caa0] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(184,135,77,0.35)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(9,10,13,0.4)]",

    // High-Contrast Solid Obsidian/Noir with Warm Gold Border
    dark:
      "relative border border-[#b8874d]/40 bg-[#0e1015] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:bg-[#14171e] hover:border-[#e8caa0] " +
      "hover:shadow-[0_10px_24px_rgba(184,135,77,0.25)]",

    // High-Contrast Pure White / Warm Alabaster (ideal on Dark folds)
    white:
      "relative border border-[#b8874d]/30 bg-white text-[#14171f] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-[#faf8f5] hover:border-[#b8874d] " +
      "hover:shadow-[0_10px_26px_rgba(184,135,77,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-[#b8874d]/50 bg-white/5 text-[#f7edd7] font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#e8caa0] hover:bg-white/10 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-[#b8874d]/40 bg-white/95 text-[#14171f] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#b8874d] hover:text-[#090a0d] hover:bg-[#faf8f5]",

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
