// app/page.tsx

import Link from "next/link";
import {
  ShieldCheck,
  BellRing,
  ScanSearch,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Activity,
  Globe,
  LockKeyhole,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed850,transparent_40%)]" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-[#050816]/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                UzTerms
              </h1>
              <p className="text-xs text-zinc-400 -mt-1">
                Legal Monitoring Platform
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
            <Link href="#features" className="hover:text-cyan-400 transition">
              Imkoniyatlar
            </Link>

            <Link href="#stats" className="hover:text-cyan-400 transition">
              Statistika
            </Link>

            <Link href="#security" className="hover:text-cyan-400 transition">
              Xavfsizlik
            </Link>

            <Link href="/dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:flex text-sm text-zinc-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/dashboard"
              className="group relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Platformaga kirish
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                O‘zbekistondagi premium legal tracking platforma
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                Terms,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
                  Privacy Policy
                </span>
                va hujjatlarni
                <span className="block">
                  real-time kuzating.
                </span>
              </h1>

              <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-8">
                Saytlar Terms of Service yoki Privacy Policy
                o‘zgartirganda avtomatik aniqlash,
                diff ko‘rsatish va Telegram orqali
                instant bildirishnoma yuborish tizimi.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link
                  href="/dashboard"
                  className="group h-16 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center gap-3 text-lg font-bold shadow-[0_0_40px_rgba(59,130,246,0.45)]"
                >
                  Dashboardga o‘tish
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/add-document"
                  className="h-16 px-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Hujjat qo‘shish
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5 mt-14">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <h3 className="text-3xl font-black">24/7</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Monitoring
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <h3 className="text-3xl font-black">99.9%</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Stability
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <h3 className="text-3xl font-black">&lt;1s</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Alert speed
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[120px]" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-[0_0_70px_rgba(15,23,42,0.8)]">
                {/* Top */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <h2 className="text-xl font-bold">
                      Live Monitoring
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">
                      terms.company.com
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/15 text-emerald-400 text-sm border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </div>
                </div>

                {/* Activity */}
                <div className="space-y-5 mt-6">
                  <div className="rounded-2xl bg-[#0d1325] border border-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                        <BellRing className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          Privacy Policy Updated
                        </h3>

                        <p className="text-sm text-zinc-400 mt-1 leading-6">
                          New data processing clause detected.
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                          <BadgeCheck className="w-4 h-4" />
                          Telegram notification sent
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#0d1325] border border-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <ScanSearch className="w-6 h-6 text-blue-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          Automatic Diff Analysis
                        </h3>

                        <p className="text-sm text-zinc-400 mt-1 leading-6">
                          AI detected legal text modifications.
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400">
                          <Activity className="w-4 h-4" />
                          Real-time comparison enabled
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">
                          Security Score
                        </h3>

                        <p className="text-sm text-zinc-400 mt-1">
                          Legal tracking system active
                        </p>
                      </div>

                      <div className="text-4xl font-black text-cyan-300">
                        98
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative py-28 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black tracking-tight">
              Professional monitoring
              <span className="block text-cyan-400">
                imkoniyatlari
              </span>
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-8">
              Enterprise darajadagi legal document tracking
              va compliance monitoring platformasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-16">
            {[
              {
                icon: ShieldCheck,
                title: "AI Detection",
                text: "Yangi legal clause yoki policy o‘zgarishini avtomatik aniqlaydi.",
              },
              {
                icon: BellRing,
                title: "Instant Alerts",
                text: "Telegram va email orqali real-time xabar yuboradi.",
              },
              {
                icon: Globe,
                title: "Global Tracking",
                text: "Istalgan sayt Terms yoki Privacy sahifasini kuzatadi.",
              },
              {
                icon: LockKeyhole,
                title: "Secure System",
                text: "Encrypted monitoring va secure API architecture.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-[30px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20 mb-7">
                  <item.icon className="w-8 h-8 text-cyan-300" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-7 mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#67e8f950,transparent_55%)]" />

            <div className="relative">
              <h2 className="text-5xl font-black leading-tight">
                Legal monitoring
                <span className="block text-cyan-300">
                  next generation
                </span>
              </h2>

              <p className="text-zinc-300 text-lg max-w-2xl mx-auto mt-8 leading-8">
                Platformaga ulanib Terms of Service va
                Privacy Policy monitoringni avtomatlashtiring.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <Link
                  href="/dashboard"
                  className="h-16 px-10 rounded-2xl bg-white text-black font-bold text-lg flex items-center justify-center gap-3"
                >
                  Start Monitoring
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/pricing"
                  className="h-16 px-10 rounded-2xl border border-white/15 bg-white/5 font-semibold text-lg flex items-center justify-center"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-5 items-center justify-between">
          <div>
            <h3 className="font-black text-2xl">
              UzTerms
            </h3>

            <p className="text-zinc-500 text-sm mt-1">
              Enterprise Legal Monitoring Platform
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
