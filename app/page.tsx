"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Code2, Monitor, Github, Linkedin, Layers, Phone, ExternalLink, Globe, Cpu, Box, Languages } from "lucide-react";
import { translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #070b1c 0%, #0c1235 50%, #090d1f 100%)" }}
    >
      {/* ── NAVBAR ── */}
      <header className="w-full border-b border-[#1e2a5e]/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a3cad] shadow-lg">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="text-base font-bold tracking-widest text-white uppercase">Luis Alberto</span>
          </div>

          {/* Links */}
          <div className="hidden items-center gap-10 md:flex">
            <a href="#about" className="text-sm font-medium text-[#8898bb] transition-colors hover:text-white">{t.nav.about}</a>
            <a href="#stack" className="text-sm font-medium text-[#8898bb] transition-colors hover:text-white">{t.nav.stack}</a>
            <a href="#projects" className="text-sm font-medium text-[#8898bb] transition-colors hover:text-white">{t.nav.projects}</a>
            <a href="#contact" className="text-sm font-medium text-[#8898bb] transition-colors hover:text-white">{t.nav.contact}</a>
          </div>

          {/* CTA & Lang Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLang}
              className="rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              asChild
              className="rounded-lg bg-[#2a3cad] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#2a3cad]/30 hover:bg-[#3d5bd9] hover:scale-105 transition-all"
            >
              <a href="#contact">{t.nav.hire}</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="about"
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-8 py-20 md:flex-row md:gap-24 md:py-32"
      >
        {/* Left */}
        <div className="flex flex-col items-start gap-7 md:w-1/2">
          {/* Badge */}
          <div className="animate-fade-in-up flex items-center gap-2 rounded-full border border-[#2a3cad]/60 bg-[#2a3cad]/10 px-4 py-1.5">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#3d5bd9]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6580e0]">{t.hero.badge}</span>
          </div>

          {/* Name */}
          <div className="animate-fade-in-up animate-delay-100 space-y-1">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              Luis Alberto
            </h1>
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-[#3d5bd9] md:text-7xl">
              Gotopo Quintero
            </h1>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up animate-delay-200 max-w-md text-base leading-relaxed text-[#8898bb]">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="flex h-12 items-center gap-2 rounded-xl bg-[#2a3cad] px-8 text-sm font-bold text-white shadow-xl shadow-[#2a3cad]/40 hover:bg-[#3d5bd9] hover:scale-105 transition-all"
            >
              <a href="/Luis_Gotopo Hoja de vida.pdf" download="Luis_Gotopo_CV.pdf">
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="flex h-12 items-center gap-2 rounded-xl border border-[#1e2a5e] px-8 text-sm font-bold text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                {t.hero.contactMe}
              </a>
            </Button>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className="animate-fade-in-up animate-delay-400 flex justify-center md:w-1/2">
          <div
            className="relative h-80 w-72 overflow-hidden rounded-3xl shadow-2xl md:h-96 md:w-80"
            style={{
              background: "linear-gradient(145deg, #1a2255, #0f1530)",
              boxShadow: "0 0 60px rgba(61,91,217,0.25), 0 0 0 1px rgba(61,91,217,0.15)",
            }}
          >
            <Image
              src="/profile.png"
              alt="Luis Alberto Gotopo Quintero"
              fill
              className="object-cover object-center grayscale-[20%]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STACK SECTION ── */}
      <section id="stack" className="mx-auto w-full max-w-7xl px-8 pb-20">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[#3d5bd9]">{t.stack.title}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {t.stack.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-[#1e2a5e] bg-[#0f1530]/80 px-5 py-2 text-sm font-medium text-[#8898bb] transition-all hover:border-[#3d5bd9] hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="border-t border-[#1e2a5e]/60 bg-[#0c1235]/40 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-[#3d5bd9]">{t.experience.title}</p>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div
              className="group rounded-2xl border border-[#1e2a5e] p-8 transition-all duration-300 hover:border-[#3d5bd9]/60 hover:shadow-2xl hover:shadow-[#3d5bd9]/10"
              style={{ background: "linear-gradient(135deg, #0f1530, #0c1235)" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30">
                <Code2 className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{t.experience.card1.title}</h3>
              <p className="text-sm leading-relaxed text-[#8898bb]">
                {t.experience.card1.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.experience.card1.tags.map((t) => (
                  <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group rounded-2xl border border-[#1e2a5e] p-8 transition-all duration-300 hover:border-[#3d5bd9]/60 hover:shadow-2xl hover:shadow-[#3d5bd9]/10"
              style={{ background: "linear-gradient(135deg, #0f1530, #0c1235)" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30">
                <Monitor className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{t.experience.card2.title}</h3>
              <p className="text-sm leading-relaxed text-[#8898bb]">
                {t.experience.card2.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.experience.card2.tags.map((t) => (
                  <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-24">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-[#3d5bd9]">{t.projects.badge}</p>
        <h2 className="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl">
          {lang === "es" ? "Mis " : "My "} <span className="text-[#3d5bd9]">{lang === "es" ? "Proyectos" : "Projects"}</span>
        </h2>
        <p className="mb-16 text-center text-base text-[#8898bb] max-w-lg mx-auto">
          {t.projects.description}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Project 1 – Casaleña */}
          <div
            className="group flex flex-col rounded-2xl border border-[#1e2a5e] p-7 transition-all duration-300 hover:border-[#3d5bd9]/70 hover:shadow-2xl hover:shadow-[#3d5bd9]/10 hover:-translate-y-1"
            style={{ background: "linear-gradient(145deg, #0f1530, #0c1235)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
                <Globe className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/luigi123-bot/casalenaaaa.git"
                  title={t.projects.viewGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://casalena.netlify.app/"
                  title={t.projects.viewLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">{t.projects.statusCompleted}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{t.projects.project1.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8898bb]">
              {t.projects.project1.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "HTML/CSS", "Node.js", "MySQL"].map((t) => (
                <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 2 – InventarioTI */}
          <div
            className="group flex flex-col rounded-2xl border border-[#1e2a5e] p-7 transition-all duration-300 hover:border-[#3d5bd9]/70 hover:shadow-2xl hover:shadow-[#3d5bd9]/10 hover:-translate-y-1"
            style={{ background: "linear-gradient(145deg, #0f1530, #0c1235)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
                <Cpu className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/luigi123-bot/inventarioti.git"
                  title={t.projects.viewGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://nventarioti.netlify.app/login"
                  title={t.projects.viewLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">{t.projects.statusCompleted}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{t.projects.project2.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8898bb]">
              {t.projects.project2.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML/CSS", "JavaScript", "PHP", "MySQL"].map((t) => (
                <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 3 – TechRevive */}
          <div
            className="group flex flex-col rounded-2xl border border-[#1e2a5e] p-7 transition-all duration-300 hover:border-[#3d5bd9]/70 hover:shadow-2xl hover:shadow-[#3d5bd9]/10 hover:-translate-y-1"
            style={{ background: "linear-gradient(145deg, #0f1530, #0c1235)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
                <Monitor className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/luigi123-bot/techrevive.git"
                  title={t.projects.viewGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://techrevive.privatech.me/"
                  title={t.projects.viewLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">{t.projects.statusCompleted}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{t.projects.project3.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8898bb]">
              {t.projects.project3.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Lucide"].map((t) => (
                <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 4 – Portafolio */}
          <div
            className="group flex flex-col rounded-2xl border border-[#1e2a5e] p-7 transition-all duration-300 hover:border-[#3d5bd9]/70 hover:shadow-2xl hover:shadow-[#3d5bd9]/10 hover:-translate-y-1"
            style={{ background: "linear-gradient(145deg, #0f1530, #0c1235)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
                <Code2 className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  title="Ver código en GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  title="Ver demo en vivo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-400">{t.projects.statusInProduction}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{t.projects.project4.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8898bb]">
              {t.projects.project4.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind v4", "Shadcn"].map((t) => (
                <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 5 – Thiart 3D */}
          <div
            className="group flex flex-col rounded-2xl border border-[#1e2a5e] p-7 transition-all duration-300 hover:border-[#3d5bd9]/70 hover:shadow-2xl hover:shadow-[#3d5bd9]/10 hover:-translate-y-1"
            style={{ background: "linear-gradient(145deg, #0f1530, #0c1235)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
                <Box className="h-6 w-6 text-[#3d5bd9]" />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/luigi123-bot/thiartd-3d2.git"
                  title={t.projects.viewGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://thiart3d.netlify.app/"
                  title={t.projects.viewLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2a5e] text-[#8898bb] hover:border-[#3d5bd9] hover:text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">{t.projects.statusCompleted}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{t.projects.project5.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8898bb]">
              {t.projects.project5.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Three.js", "Tailwind CSS", "Vite"].map((t) => (
                <span key={t} className="rounded-md border border-[#1e2a5e]/80 bg-[#2a3cad]/10 px-3 py-1 text-xs text-[#6580e0]">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto w-full max-w-7xl px-8 py-28 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#3d5bd9]">{t.contact.badge}</p>
        <h2 className="mb-12 text-4xl font-extrabold text-white md:text-5xl">
          {lang === "es" ? "¿Listo para tu próximo " : "Ready for your next "}
          <span className="text-[#3d5bd9]">{lang === "es" ? "proyecto" : "project"}?</span>
        </h2>
        <div className="flex flex-col items-center gap-5 mb-14">
          <a
            href="mailto:gotopoluis19@gmail.com"
            className="group flex items-center gap-3 text-xl font-semibold text-[#8898bb] transition-all hover:text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
              <Mail className="h-5 w-5 text-[#3d5bd9]" />
            </div>
            gotopoluis19@gmail.com
          </a>
          <a
            href="tel:3012906861"
            className="group flex items-center gap-3 text-xl font-semibold text-[#8898bb] transition-all hover:text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a3cad]/20 border border-[#2a3cad]/30 group-hover:bg-[#2a3cad]/40 transition-all">
              <Phone className="h-5 w-5 text-[#3d5bd9]" />
            </div>
            +57 301 290 6861
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1e2a5e] bg-[#0f1530] text-[#8898bb] transition-all hover:border-[#3d5bd9] hover:text-white hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1e2a5e] bg-[#0f1530] text-[#8898bb] transition-all hover:border-[#3d5bd9] hover:text-white hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1e2a5e]/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2a3cad]">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold text-white">Luis Alberto</span>
          </div>
          <p className="text-sm text-[#8898bb]">
            {t.footer.rights.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-6 text-sm text-[#8898bb]">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#stack" className="hover:text-white transition-colors">{t.nav.stack}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
