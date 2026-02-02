"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import en from "../i18n/en";
import ja from "../i18n/ja";
import LanguageDropdown from "../components/LanguageDropdown";

const programs = [
  {
    title: "GT & Sprint",
    summary: "High-downforce aero kits and endurance cooling packages.",
    image: "/images/img13.jpg",
    tag: "Circuit",
  },
  {
    title: "Rally Spec",
    summary: "Long-travel suspension, gravel driveline, instant torque maps.",
    image: "/images/img9.jpg",
    tag: "Gravel",
  },
  {
    title: "EVX Prototype",
    summary: "Next-gen battery thermal systems and regen balance tuning.",
    image: "/images/img4.jpg",
    tag: "Electric",
  },
];

const news = [
  {
    title: "Raptor GT-X claims winter testing pole",
    date: "Jan 18, 2026",
    summary: "New aero package delivers a 1.8s gain at Fuji during shakedown.",
  },
  {
    title: "FAST Forward launches driver academy",
    date: "Jan 10, 2026",
    summary: "Mentorship, simulator lab, and technical briefings open now.",
  },
  {
    title: "Enduro pit crew workflow update",
    date: "Dec 28, 2025",
    summary: "Live telemetry overlays reduce fuel call time by 12%.",
  },
];

const calendar = [
  {
    name: "Sakura Sprint",
    date: "Mar 12, 2026",
    location: "Suzuka East",
    image: "/images/img7.jpg",
  },
  {
    name: "Coastal GT 500",
    date: "Apr 06, 2026",
    location: "Shonan Circuit",
    image: "/images/img8.jpg",
  },
  {
    name: "Highland Rally X",
    date: "May 21, 2026",
    location: "Nagano Ridge",
    image: "/images/img30.jpg",
  },
  {
    name: "Enduro 8H",
    date: "Jun 18, 2026",
    location: "Fuji Endurance Park",
    image: "/images/img10.jpg",
  },
];

const stats = [
  { label: "Podiums", value: "18" },
  { label: "Race Events", value: "42" },
  { label: "Factory Drivers", value: "9" },
  { label: "Track Support", value: "24/7" },
];

const highlights = [
  {
    title: "WRC Program",
    summary: "Full-season rally operations with live stage strategy.",
    image: "/images/img11.jpg",
  },
  {
    title: "GT Customer Racing",
    summary: "Endurance-ready packages with pit-wall analytics.",
    image: "/images/img12.jpg",
  },
  {
    title: "Heritage Works",
    summary: "Factory restoration and bespoke livery development.",
    image: "/images/img13.jpg",
  },
];

export default function Home() {
  const translations = { en, ja } as const;
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const nav =
        (typeof navigator !== "undefined" &&
          ((navigator as any).language || (navigator as any).userLanguage)) ||
        "";
      if (nav && (nav as string).startsWith("ja")) setLang("ja");
    } catch (e) {
      // noop (server/SSR safe)
    }
  }, []);

  const t = (key: string) => {
    const parts = key.split(".");
    let cur: any = translations[lang as keyof typeof translations];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : key;
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d10]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo_ff.jpg"
              alt="FAST Forward Sport logo"
              width={40}
              height={40}
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
                {t("header.division")}
              </p>
              <span className="text-lg font-semibold tracking-[0.2em]">
                FAST Forward Sport
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-white/70 md:flex">
            <a className="transition hover:text-white" href="#featured">
              {t("nav.featured")}
            </a>
            <a className="transition hover:text-white" href="#programs">
              {t("nav.programs")}
            </a>
            <a className="transition hover:text-white" href="#rally">
              {t("nav.rally")}
            </a>
            <a className="transition hover:text-white" href="#news">
              {t("nav.news")}
            </a>
            <a className="transition hover:text-white" href="#calendar">
              {t("nav.calendar")}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white md:hidden"
            >
              {menuOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <LanguageDropdown
              value={lang}
              onChange={(v) => setLang(v)}
              options={[
                { value: "en", label: "EN" },
                { value: "ja", label: "日本語" },
              ]}
            />
            <a
              className="hidden md:inline-block rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase text-white transition hover:border-[#E11D48] hover:text-[#E11D48]"
              href="#contact"
            >
              {t("buttons.inquiry")}
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-40 md:hidden">
            <div className="border-t border-white/5 bg-[#0b0d10] px-6 py-4">
              <nav className="flex flex-col gap-3">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold transition hover:text-white"
                  href="#featured"
                >
                  {t("nav.featured")}
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold transition hover:text-white"
                  href="#programs"
                >
                  {t("nav.programs")}
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold transition hover:text-white"
                  href="#rally"
                >
                  {t("nav.rally")}
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold transition hover:text-white"
                  href="#news"
                >
                  {t("nav.news")}
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold transition hover:text-white"
                  href="#calendar"
                >
                  {t("nav.calendar")}
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-block rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase text-white transition hover:border-[#E11D48] hover:text-[#E11D48]"
                  href="#contact"
                >
                  {t("buttons.inquiry")}
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <Image
            src="/images/img18.jpg"
            alt="FAST Forward Sport hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-[#0b0d10]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                {t("header.partner")}
              </div>
              <h1 className="text-4xl font-semibold uppercase  md:text-6xl">
                {t("header.title1")}
                <span className="block text-[#E11D48] text-3xl">
                  {t("header.title2")}
                </span>
              </h1>
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                {t("header.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[#E11D48] px-6 py-3 text-xs font-semibold text-white transition hover:translate-y-0.5"
                  href="#programs"
                >
                  {t("buttons.viewPrograms")}
                </a>
                <a
                  className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold text-white transition hover:border-white"
                  href="#calendar"
                >
                  {t("buttons.calendar")}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm md:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="text-xs uppercase text-white/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/60">
                  Featured Program
                </p>
                <p className="text-2xl font-semibold">Raptor GT-X</p>
                <p className="text-sm text-white/70">
                  680hp • Carbon Aero • Endurance Spec
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                  <span className="text-white/60">Next Test Window</span>
                  <span className="font-semibold">Feb 15–18</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                  <span className="text-white/60">Power Unit Map</span>
                  <span className="font-semibold text-[#E11D48]">
                    Aggressive
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Crew Deployment</span>
                  <span className="font-semibold">32 Specialists</span>
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#E11D48] hover:text-[#E11D48]"
                href="#contact"
              >
                Program Inquiry
              </a>
            </div>
          </div>
        </section>

        <section id="featured" className="border-y border-white/5 bg-[#0f1218]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
                {t("featured.label")}
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                {t("featured.heading")}
              </h2>
              <p className="text-white/70">{t("featured.desc")}</p>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0d10] p-4 transition-all hover:border-[#E11D48]/50 hover:bg-[#0f1218]"
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/70">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50">
              <Image
                src="/images/img27.jpg"
                alt="FAST Forward Sport featured car"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent transition-all duration-300 group-hover:from-black/85" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Signature Build
                </p>
                <h3 className="text-2xl font-semibold uppercase tracking-widest">
                  Apex Rally Evo
                </h3>
                <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Championship-winning rally platform with advanced AWD and
                  telemetry systems
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="border-y border-white/5 bg-[#0f1218]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
                  {t("programs.label")}
                </p>
                <h2 className="pt-5 text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                  {t("programs.heading")}
                </h2>
                <p className="pt-5 text-sm text-white/70">
                  {t("programs.desc")}
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d10] transition-all hover:border-[#E11D48]/50"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-center text-sm leading-relaxed text-white">
                        {program.summary}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="inline-flex rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                      {program.tag}
                    </div>
                    <h3 className="text-xl font-semibold uppercase tracking-widest">
                      {program.title}
                    </h3>
                    <p className="text-sm text-white/70">{program.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="rally"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
              {t("rally.label")}
            </p>
            <h2 className="text-3xl font-semibold uppercase tracking-widest md:text-4xl">
              {t("rally.heading")}
            </h2>
            <p className="text-white/70">{t("rally.desc")}</p>
            <div className="grid gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Differential tuning with live torque-vectoring overrides.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Stage telemetry overlays for instant pace notes.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Rapid swap suspension modules and reinforced subframes.
              </div>
            </div>
          </div>
          <div className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50">
            <Image
              src="/images/img3.jpg"
              alt="FAST Forward Sport rally team"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-2xl border border-white/20 bg-black/60 px-6 py-4 backdrop-blur-sm">
                <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Rally Operations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="border-y border-white/5 bg-[#0f1218]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
                {t("news.label")}
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                {t("news.heading")}
              </h2>
              <p className="text-white/70">{t("news.desc")}</p>
            </div>
            <div className="space-y-4">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0b0d10] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.08em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calendar" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
                {t("calendar.label")}
              </p>
              <h2 className="pt-5 text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                {t("calendar.heading")}
              </h2>
              <p className="pt-5 pb-4 text-sm text-white/70">
                {t("calendar.desc")}
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {calendar.map((event) => (
              <article
                key={event.name}
                className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50"
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end gap-2 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-semibold uppercase tracking-widest">
                    {event.name}
                  </h3>
                  <p className="text-sm text-white/70">{event.location}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E11D48]">
                    Service Package →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 bg-[#0f1218]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E11D48]">
                {t("contact.label")}
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                {t("contact.heading")}
              </h2>
              <p className="text-white/70">{t("contact.desc")}</p>
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder={t("contact.form.name")}
                    type="text"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder={t("contact.form.email")}
                    type="email"
                  />
                </div>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  placeholder={t("contact.form.series")}
                  type="text"
                />
                <textarea
                  className="min-h-35 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  placeholder={t("contact.form.message")}
                />
                <button
                  className="w-fit rounded-full bg-[#E11D48] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                  type="submit"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/img6.jpg"
                  alt="FAST Forward Sport facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-lg font-semibold uppercase tracking-widest">
                  Performance Lab HQ
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  FAST Forward Sport Performance Lab
                  <br /> 4-12-8 Shinagawa, Tokyo
                  <br /> Mon–Sat · 09:00–20:00
                  <br /> +81 (0)3-5555-7777
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/60">
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    Aero Systems
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    Dyno Testing
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    Pit Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0b0d10]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6 uppercase tracking-widest">
            {(lang === "en" ? en.footer.links : ja.footer.links).map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
