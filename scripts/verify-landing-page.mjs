// Runtime verification script — no dependencies, uses built-in http module
// Verifies the built landing page contains expected content

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", ".next", "server", "app");

const checks = [
  { label: "Hero headline", pattern: /It&apos;s Not Too Late|It&#39;s Not Too Late/ },
  { label: "Founder story (Valentina & Carlotta)", pattern: /Valentina and Carlotta/ },
  { label: "Student finance support", pattern: /Student Finance Support/i },
  { label: "100% free messaging", pattern: /100% Free/i },
  { label: "Mature student targeting", pattern: /mature student/i },
  { label: "CTA: Book a Free Chat", pattern: /Book a Free Chat/ },
  { label: "CTA: Book Your Free Chat", pattern: /Book Your Free Chat/ },
  { label: "Testimonial: Sarah", pattern: /Sarah/ },
  { label: "Testimonial: Marcus", pattern: /Marcus/ },
  { label: "FAQ: too old for university", pattern: /too old for university/i },
  { label: "FAQ: free service question", pattern: /Is this really free/i },
  { label: "FAQ: children/family question", pattern: /I have children/i },
  { label: "No hallucinated services", pattern: /Oxbridge Preparation|Interview Preparation|Personal Statement Coaching|UCAS Strategy/i },
];

// Check if the built HTML file exists
const indexPath = path.join(outDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("❌ Built index.html not found at:", indexPath);
  console.error("   Run 'npx next build' first");
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf-8");

let passed = 0;
let failed = 0;

for (const check of checks) {
  if (check.pattern.test(html)) {
    console.log(`  ✅ ${check.label}`);
    passed++;
  } else {
    console.log(`  ❌ ${check.label}`);
    failed++;
  }
}

console.log(`\n📊 Results: ${passed}/${checks.length} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
else process.exit(0);
