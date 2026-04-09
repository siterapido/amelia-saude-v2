"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, viewportConfig } from "@/lib/motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "section" | "div";
  animate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  style,
  as: Tag = "section",
  animate = true,
}: SectionWrapperProps) {
  const baseClass = `section-full ${className}`;

  if (!animate) {
    return (
      <Tag id={id} className={baseClass} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.section
      id={id}
      className={baseClass}
      style={style}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {children}
    </motion.section>
  );
}
