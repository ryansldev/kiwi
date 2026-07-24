"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const PUNCHLINES = [
  "Organização financeira sem estresse.",
  "Você já deitou para dormir pensando em dinheiro?",
  "Nós também.",
  "Mas não deveria ser normal.",
  "Ansiedade não é “ser adulto”.",
  "Acreditamos que é possível viver com tranquilidade financeira.",
  "Pagar as contas, ver o dinheiro render e ainda terminar o mês com sobra.",
  "Se você acredita nisso também, faça parte da comunidade.",
  "Seja você um desenvolvedor ou não, você pode ajudar.",
  "Estamos construindo esse caminho juntos.",
] as const;

const VIEWPORTS_PER_LINE = 1.2;

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function lineOpacity(local: number, isLast: boolean) {
  const fadeInEnd = 0.14;
  const holdEnd = 0.62;
  const fadeOutEnd = 0.82;

  if (isLast) {
    if (local <= 0) return 0;
    if (local < fadeInEnd) return smoothstep(local / fadeInEnd);
    return 1;
  }

  if (local <= 0 || local >= 1) return 0;
  if (local < fadeInEnd) return smoothstep(local / fadeInEnd);
  if (local < holdEnd) return 1;
  if (local < fadeOutEnd) {
    return 1 - smoothstep((local - holdEnd) / (fadeOutEnd - holdEnd));
  }
  return 0;
}

type ManifestoScrollProps = {
  discordUrl: string;
  githubUrl: string;
};

export function ManifestoScroll({
  discordUrl,
  githubUrl,
}: ManifestoScrollProps) {
  const containerRef = useRef<HTMLElement>(null);
  const targetProgress = useRef(0);
  const rafRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const readScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        targetProgress.current = 0;
        return;
      }

      const scrolled = Math.min(
        Math.max(-el.getBoundingClientRect().top, 0),
        total,
      );
      targetProgress.current = scrolled / total;
    };

    const tick = () => {
      setProgress((current) => {
        const next = current + (targetProgress.current - current) * 0.18;
        if (Math.abs(next - targetProgress.current) < 0.0004) {
          return targetProgress.current;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const count = PUNCHLINES.length;
  const lastStart = (count - 1) / count;
  const lastLocal =
    progress <= lastStart
      ? 0
      : progress >= 1
        ? 1
        : (progress - lastStart) / (1 - lastStart);
  const ctaOpacity = lineOpacity(lastLocal, true);

  // First line visible as soon as the page loads (static feel)
  function opacityFor(index: number) {
    const start = index / count;
    const end = (index + 1) / count;
    const local =
      progress <= start
        ? 0
        : progress >= end
          ? 1
          : (progress - start) / (end - start);

    if (index === 0 && progress < end) {
      if (progress < start + (end - start) * 0.62) return 1;
      return lineOpacity(local, false);
    }

    return lineOpacity(local, index === count - 1);
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${count * VIEWPORTS_PER_LINE * 100}vh` }}
      aria-label="Manifesto Kiwi"
    >
      <div className="sticky top-0 flex h-svh items-center">
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 sm:gap-10">
            <Logo />

            <div className="relative">
              {PUNCHLINES.map((line, index) => {
                const opacity = opacityFor(index);

                return (
                  <p
                    key={line}
                    className="absolute top-0 left-0 max-w-3xl text-display-small sm:text-display-medium md:text-display-large"
                    style={{
                      opacity,
                      transform: `translateY(${(1 - opacity) * 12}px)`,
                      willChange: "opacity, transform",
                    }}
                    aria-hidden={opacity < 0.15}
                  >
                    {line}
                  </p>
                );
              })}
              <p className="invisible max-w-3xl text-display-small sm:text-display-medium md:text-display-large">
                {PUNCHLINES[6]}
              </p>

              <div
                className="absolute top-full left-0 mt-6 flex flex-wrap items-center gap-2"
                style={{
                  opacity: ctaOpacity,
                  transform: `translateY(${(1 - ctaOpacity) * 8}px)`,
                  pointerEvents: ctaOpacity > 0.5 ? "auto" : "none",
                }}
              >
                <Button
                  size="lg"
                  nativeButton={false}
                  tabIndex={ctaOpacity > 0.5 ? 0 : -1}
                  render={
                    <Link
                      href={discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Entrar na comunidade
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  tabIndex={ctaOpacity > 0.5 ? 0 : -1}
                  render={
                    <Link
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Ver no GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
