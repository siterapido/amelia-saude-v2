"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  stagger?: boolean;
  staggerDelay?: number;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  stagger = false,
  staggerDelay = 0.1,
}: AnimatedTextProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={staggerContainer(staggerDelay, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {children}
      </motion.div>
    );
  }

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
