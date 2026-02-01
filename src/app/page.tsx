import Image from "next/image";

const programs = [
  {
    title: "GT & Sprint",
    summary: "High-downforce aero kits and endurance cooling packages.",
    image: "/images/img2.jpg",
    tag: "Circuit",
  },
  {
    title: "Rally Spec",
    summary: "Long-travel suspension, gravel driveline, instant torque maps.",
    image: "/images/img3.jpg",
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
    image: "/images/img9.jpg",
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
                Motorsport Division
              </p>
              <span className="text-lg font-semibold tracking-[0.2em]">
                FAST Forward Sport
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-white/70 md:flex">
            <a className="transition hover:text-white" href="#featured">
              Featured
            </a>
            <a className="transition hover:text-white" href="#programs">
              Programs
            </a>
            <a className="transition hover:text-white" href="#rally">
              Rally
            </a>
            <a className="transition hover:text-white" href="#news">
              News
            </a>
            <a className="transition hover:text-white" href="#calendar">
              Calendar
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div
              id="google_translate_element"
              className="translate-container"
            />
            <a
              className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase text-white transition hover:border-[#E11D48] hover:text-[#E11D48]"
              href="#contact"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <Image
            src="/images/img1.jpg"
            alt="FAST Forward Sport hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0b0d10]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-28 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                Official Motorsport Partner
              </div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.12em] md:text-6xl">
                Built to Win
                <span className="block text-[#E11D48]">Every Stage</span>
              </h1>
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                FAST Forward Sport delivers rally, GT, and prototype programs
                with uncompromising engineering, data-first strategy, and
                relentless execution on race week.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[#E11D48] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:translate-y-[-2px]"
                  href="#programs"
                >
                  View Programs
                </a>
                <a
                  className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
                  href="#calendar"
                >
                  2026 Calendar
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
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
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
                Featured
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                Factory Programs &amp; Customer Racing
              </h2>
              <p className="text-white/70">
                From WRC to endurance GT, we craft programs with dedicated
                engineering pods, pit-wall analytics, and logistics control.
              </p>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0d10] p-4 transition-all hover:border-[#E11D48]/50 hover:bg-[#0f1218]"
                  >
                    <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/70">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50">
              <Image
                src="/images/img14.jpg"
                alt="FAST Forward Sport featured car"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-300 group-hover:from-black/85" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Signature Build
                </p>
                <h3 className="text-2xl font-semibold uppercase tracking-[0.1em]">
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
                  Programs
                </p>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                  Factory-Level Race Programs
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/70">
                Bespoke vehicles, engineering support, and data strategy for
                teams pushing for the front row.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d10] transition-all hover:border-[#E11D48]/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                    <h3 className="text-xl font-semibold uppercase tracking-[0.1em]">
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
              Rally Systems
            </p>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
              Built for Gravel, Ice, and Tarmac
            </h2>
            <p className="text-white/70">
              Our rally unit pairs adaptive driveline control with rapid
              serviceability. Every component is optimized for stage recovery,
              traction, and driver confidence.
            </p>
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
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50">
            <Image
              src="/images/img5.jpg"
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
                Newsroom
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                Latest Updates &amp; Insights
              </h2>
              <p className="text-white/70">
                Performance, engineering updates, and race week intelligence
                from across our programs.
              </p>
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
                2026 Calendar
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                Schedule &amp; Race Services
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Full-season support with logistics, pit operations, and
              engineering staff at every round.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {calendar.map((event) => (
              <article
                key={event.name}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-[#E11D48]/50"
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end gap-2 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-semibold uppercase tracking-[0.1em]">
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
                Contact &amp; Facility
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                Start a Program Review
              </h2>
              <p className="text-white/70">
                Tell us your series, timing, and targets. Our engineering team
                will respond with a program roadmap and technical proposal.
              </p>
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  placeholder="Series / Team"
                  type="text"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  placeholder="Performance goals, program scope, timing"
                />
                <button
                  className="w-fit rounded-full bg-[#E11D48] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/img6.jpg"
                  alt="FAST Forward Sport facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-lg font-semibold uppercase tracking-[0.1em]">
                  Performance Lab HQ
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  FAST Forward Sport Performance Lab
                  <br /> 4-12-8 Shinagawa, Tokyo
                  <br /> Mon–Sat · 09:00–20:00
                  <br /> +81 (0)3-5555-7777
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
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
          <p>© 2026 FAST Forward Sport. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.3em]">
            <span>Instagram</span>
            <span>Youtube</span>
            <span>Press</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
