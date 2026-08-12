"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </motion.button>

      {/* Chat bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#25D366]">
                  <MessageCircle className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Education Recruitment
                  </p>
                  <p className="text-xs text-white/70">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#ECE5DD] p-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm text-navy">
                  👋 Hi there! Got a question about returning to university?
                  We&apos;re here to help.
                </p>
                <p className="mt-2 text-xs text-navy/50">
                  Education Recruitment
                </p>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="border-t border-navy/10 bg-white p-3">
              <a
                href="https://wa.me/442071234567?text=Hi%20I%27d%20like%20to%20chat%20about%20returning%20to%20university"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#25D366]/90"
              >
                <MessageCircle className="size-4" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
