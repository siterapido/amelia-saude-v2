"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function FamilyPlan() {
  return (
    <section
      id="plano-familiar"
      className="relative flex min-h-[60vh] md:min-h-[70vh] items-center overflow-hidden bg-[var(--amelia-deep)]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/familia-bg.webp')" }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-l from-[var(--amelia-deep)] via-[var(--amelia-deep)]/90 to-transparent"
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-[1200px] mx-auto"
        style={{ padding: "clamp(3rem, 8vh, 6rem) clamp(1.5rem, 5vw, 5rem)" }}
      >
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl ml-auto md:text-right"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 block font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-white/70"
          >
            Plano Familiar
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mb-6 font-display font-semibold text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Proteja quem
            <br />
            <em className="font-light italic text-white/90">
              você mais ama.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-xl ml-auto font-sans text-white/80"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
            }}
          >
            A tranquilidade de saber que sua família tem o melhor cuidado
            médico ao alcance das mãos, onde e quando precisarem. Cobertura
            completa e especialistas de excelência para todas as idades.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button variant="ghost-white" href="#contato">
              Simule o plano familiar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
