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
    | "blue"
    | "red"
    | "cardio"
    | "green"
    | "whatsapp"
    | "emerald"
    | "navy"
    | "white"
    | "outline"
    | "outline-red"
    | "outline-white"
    | "gold"
    | "dark";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "blue",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs font-bold tracking-wider",
    md: "px-6 py-3.5 text-sm font-bold tracking-wide",
    lg: "px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide",
  }[size];

  const variantClasses = {
    // Primary Royal Medical Blue (Extracted from 'NÚCLEO' in logo)
    blue:
      "relative border border-sky-300/40 bg-gradient-to-r from-[#013b7e] via-[#01499a] to-[#0260cc] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(1,73,154,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] " +
      "hover:-translate-y-0.5 hover:from-[#01499a] hover:via-[#0260cc] hover:to-[#0284c7] " +
      "hover:shadow-[0_12px_28px_rgba(1,73,154,0.55)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(1,73,154,0.35)]",

    // Cardiology Heart Red (Extracted from Heart in logo)
    red:
      "relative border border-red-400/50 bg-gradient-to-r from-[#b91c1c] via-[#dd0101] to-[#ef4444] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(221,1,1,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:brightness-105 " +
      "hover:shadow-[0_12px_30px_rgba(221,1,1,0.6)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(221,1,1,0.35)]",

    cardio:
      "relative border border-red-400/50 bg-gradient-to-r from-[#b91c1c] via-[#dd0101] to-[#ef4444] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(221,1,1,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_30px_rgba(221,1,1,0.6)]",

    // Official WhatsApp Conversion CTA
    whatsapp:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:brightness-105 " +
      "hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(37,211,102,0.35)]",

    green:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 hover:brightness-105",

    emerald:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 hover:brightness-105",

    // Deep Navy Medical Professional
    navy:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#071d3d] via-[#0c2b57] to-[#071d3d] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(7,29,61,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] " +
      "hover:-translate-y-0.5 hover:from-[#0c2b57] hover:to-[#013b7e] " +
      "hover:shadow-[0_12px_28px_rgba(7,29,61,0.6)]",

    // Pure White High Contrast
    white:
      "relative border border-slate-200/90 bg-white text-[#01499a] font-extrabold " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-sky-50 hover:border-sky-300 " +
      "hover:shadow-[0_10px_26px_rgba(1,73,154,0.2)]",

    // Transparent Outline for Light Backgrounds
    outline:
      "relative border-2 border-[#01499a] bg-transparent text-[#01499a] font-bold " +
      "hover:-translate-y-0.5 hover:bg-[#01499a] hover:text-white " +
      "hover:shadow-[0_8px_20px_rgba(1,73,154,0.25)]",

    "outline-red":
      "relative border-2 border-[#dd0101] bg-transparent text-[#dd0101] font-bold " +
      "hover:-translate-y-0.5 hover:bg-[#dd0101] hover:text-white " +
      "hover:shadow-[0_8px_20px_rgba(221,1,1,0.25)]",

    // Transparent Outline for Dark / Vibrant Backgrounds
    "outline-white":
      "relative border-2 border-white/90 bg-white/10 text-white font-bold backdrop-blur-sm " +
      "hover:-translate-y-0.5 hover:bg-white hover:text-[#01499a] " +
      "hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)]",

    // Backward-compatible gold / dark
    gold:
      "relative border border-sky-300/40 bg-gradient-to-r from-[#013b7e] via-[#01499a] to-[#0260cc] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(1,73,154,0.45)] hover:-translate-y-0.5",

    dark:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#071d3d] via-[#0c2b57] to-[#071d3d] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(7,29,61,0.5)] hover:-translate-y-0.5",
  }[variant] || "";

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 select-none text-center cursor-pointer " +
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
