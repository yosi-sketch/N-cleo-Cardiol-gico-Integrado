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
    | "green"
    | "whatsapp"
    | "emerald"
    | "navy"
    | "white"
    | "outline"
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
    // Primary Medical Royal Blue (Extracted from SIS logo)
    blue:
      "relative border border-sky-300/40 bg-gradient-to-r from-[#0066cc] via-[#0078d8] to-[#0090e8] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(0,120,216,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:from-[#0078d8] hover:via-[#0090e8] hover:to-[#00a0f0] " +
      "hover:shadow-[0_12px_28px_rgba(0,120,216,0.55)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(0,120,216,0.35)]",

    // Secondary Vitality Lime Green (Extracted from SIS logo crescent & subtitle)
    green:
      "relative border border-lime-300/50 bg-gradient-to-r from-[#65a30d] via-[#78d61a] to-[#88d830] text-slate-950 font-black " +
      "shadow-[0_8px_24px_-4px_rgba(120,214,26,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] " +
      "hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_rgba(120,214,26,0.55)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(120,214,26,0.3)]",

    // Official WhatsApp Conversion CTA
    whatsapp:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:brightness-105 " +
      "hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(37,211,102,0.35)]",

    emerald:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 hover:brightness-105",

    // Deep Navy Medical Professional
    navy:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#0a2540] via-[#0f172a] to-[#0a2540] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(10,37,64,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] " +
      "hover:-translate-y-0.5 hover:from-[#0f172a] hover:to-[#1e293b] " +
      "hover:shadow-[0_12px_28px_rgba(10,37,64,0.6)]",

    // Pure White High Contrast
    white:
      "relative border border-slate-200/90 bg-white text-[#0066cc] font-extrabold " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-sky-50 hover:border-sky-300 " +
      "hover:shadow-[0_10px_26px_rgba(0,102,204,0.18)]",

    // Transparent Outline for Light Backgrounds
    outline:
      "relative border-2 border-[#0078d8] bg-transparent text-[#0078d8] font-bold " +
      "hover:-translate-y-0.5 hover:bg-[#0078d8] hover:text-white " +
      "hover:shadow-[0_8px_20px_rgba(0,120,216,0.25)]",

    // Transparent Outline for Dark / Vibrant Backgrounds
    "outline-white":
      "relative border-2 border-white/90 bg-white/10 text-white font-bold backdrop-blur-sm " +
      "hover:-translate-y-0.5 hover:bg-white hover:text-[#0066cc] " +
      "hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)]",

    // Backward-compatible gold / dark
    gold:
      "relative border border-sky-300/40 bg-gradient-to-r from-[#0066cc] via-[#0078d8] to-[#0090e8] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(0,120,216,0.45)] hover:-translate-y-0.5",

    dark:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#0a2540] via-[#0f172a] to-[#0a2540] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(10,37,64,0.5)] hover:-translate-y-0.5",
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
