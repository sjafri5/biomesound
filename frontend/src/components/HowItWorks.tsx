"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Image Analysis",
    description:
      "We scan your gut endoscopy image for visual features — color, texture, surface shine, and structural detail — the same features gastroenterologists look at, extracted using computer vision.",
  },
  {
    title: "Biome Inference",
    description:
      "Published research (SMEAR, HyperKvasir) has shown that what gut tissue looks like correlates with what microbes live there. We use those correlations to estimate 8 biological markers from the image.",
  },
];

const MARKERS = [
  {
    name: "Diversity",
    sound: "Number of voices & harmonic richness",
    detail:
      "A diverse microbiome means many species coexisting — like a full orchestra. Low diversity sounds thin and sparse, like a solo instrument in an empty room.",
    icon: "🎼",
  },
  {
    name: "Inflammation",
    sound: "Distortion & harsh metallic tones",
    detail:
      "Inflamed tissue appears red and swollen. We translate that agitation into sound — the more inflammation, the more the audio distorts and takes on a harsh, grating edge.",
    icon: "🔥",
  },
  {
    name: "Firmicutes",
    sound: "Deep bass drone",
    detail:
      "Firmicutes are the \"foundation\" bacteria — the largest phylum in a healthy gut. They become the low-frequency bedrock of your composition.",
    icon: "🎵",
  },
  {
    name: "Bacteroidetes",
    sound: "Clear mid-range harmonics",
    detail:
      "These are the metabolic workhorses of your gut. When they're present, you hear warm, clear tones in the middle frequencies.",
    icon: "🎹",
  },
  {
    name: "Proteobacteria",
    sound: "Dissonance & noise",
    detail:
      "A bloom of Proteobacteria often signals dysbiosis — an imbalanced gut. This translates to clashing intervals and rhythmic irregularity.",
    icon: "⚡",
  },
  {
    name: "Motility",
    sound: "Tempo & rhythm",
    detail:
      "How actively your gut is moving. High motility means a faster, more rhythmically dense composition. A sluggish gut produces slow, sparse rhythms.",
    icon: "💫",
  },
  {
    name: "Mucosal Integrity",
    sound: "Reverb & space",
    detail:
      "When the mucosal barrier is intact, the sound is tight and defined. When it's eroded, the reverb opens up into a vast, cavernous echo.",
    icon: "🏛️",
  },
  {
    name: "Metabolic Energy",
    sound: "Volume & dynamics",
    detail:
      "How metabolically active your gut ecosystem is. High energy means louder, punchier sound. Low energy sounds quiet and subdued.",
    icon: "⚡",
  },
];

export default function HowItWorks() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-10 py-6">
      {/* Pipeline steps */}
      <div>
        <h2 className="text-sm uppercase tracking-widest text-accent/60 font-mono mb-6">
          How it works
        </h2>
        <div className="space-y-5">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full border border-accent/40 flex items-center justify-center text-xs text-accent/70 font-mono shrink-0">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-surface-light mt-1.5" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="text-sm text-foreground/90 font-medium mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Biomarker → Sound mapping */}
      <div>
        <h2 className="text-sm uppercase tracking-widest text-accent/60 font-mono mb-6">
          From biology to sound
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MARKERS.map((marker, i) => (
            <button
              key={i}
              onClick={() =>
                setActiveMarker(activeMarker === i ? null : i)
              }
              className={`
                text-left rounded-lg p-4 transition-all duration-300
                ${
                  activeMarker === i
                    ? "bg-accent/5 border border-accent/20"
                    : "bg-surface/30 border border-transparent hover:bg-surface/50"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">{marker.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-foreground/90 font-medium">
                      {marker.name}
                    </span>
                    <span className="text-xs text-accent/50 font-mono truncate">
                      {marker.sound}
                    </span>
                  </div>

                  {activeMarker === i && (
                    <p className="text-sm text-muted/60 leading-relaxed mt-2 animate-[fadeIn_0.3s_ease]">
                      {marker.detail}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <p className="text-xs text-muted/40 text-center leading-relaxed">
        Art/science project — not a diagnostic tool.
        <br />
        A healthy gut sounds consonant and ambient. A dysbiotic gut sounds harsh and unsettling.
        <br />
        The body becomes the composer.
      </p>
    </div>
  );
}
