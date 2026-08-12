"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionOneProps {
  badge?: string;
  headline: string;
  highlight: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  children?: React.ReactNode;
}

export default function HeroSectionOne({
  badge = "100% Free for Students",
  headline = "It's Not Too Late.",
  highlight = "University Is Waiting.",
  description = "Free, expert guidance for adults returning to education.",
  primaryCta = { text: "Book a Free Chat", href: "#contact" },
  secondaryCta = { text: "How It Works", href: "#process" },
  children,
}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-4">
      {/* Decorative lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-navy/10">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-navy/10">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-navy/10">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="grid w-full items-center gap-12 py-10 md:grid-cols-2 md:py-20">
        {/* Left column: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/20">
              {badge}
            </Badge>
          </motion.div>

          {/* Headline with word-by-word animation */}
          <h1 className="relative z-10 font-heading text-4xl leading-tight md:text-6xl lg:text-7xl">
            {headline.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-navy"
              >
                {word}{" "}
              </motion.span>
            ))}
            <br />
            {highlight.split(" ").map((word, index) => (
              <motion.span
                key={`h-${index}`}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-gold"
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="relative z-10 mt-6 max-w-lg text-lg leading-relaxed text-navy/70"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href={primaryCta.href}>
              <Button className="rounded-full bg-gold px-8 py-6 text-base text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30">
                {primaryCta.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href={secondaryCta.href}>
              <Button
                variant="outline"
                className="rounded-full border-navy/30 px-8 py-6 text-base text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy/5 hover:border-navy/50"
              >
                {secondaryCta.text}
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right column: form */}
        {children && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
