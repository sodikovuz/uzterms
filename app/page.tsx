// app/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Bell,
  Activity,
  Globe,
  ChevronRight,
  ScanSearch,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0B] text-[#F5F5F7]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#7B61FF]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#C6FF3B]/10 blur-[160px] rounded-full" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-black/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#131316] border border-[#232326] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#C6FF3B]" />
            </div>

            <div>
              <h1 className="text-[24px] font-black tracking-[-0.04em]">
                UzTerms
              </h1>

              <p className="text-xs text-[#8B8B95] -mt-1">
                Legal Monitoring
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10 text-sm text-[#8B8B95]">
            <Link href="#" className="hover:text-white transition">
              Features
            </Link>

            <Link href="#" className="hover:text-white transition">
              Monitoring
            </Link>

            <Link href="#" className="hover:text-white transition">
              Security
            </Link>

            <Link href="#" className="hover:text-white transition">
              Pricing
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden sm:flex text-sm text-[#8B8B95] hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="#"
              className="h-11 px-5 rounded-2xl bg-[#C6FF3B] text-black text-sm font-bold flex items-center gap-2 hover:scale-[1.03] transition-all"
            >
              Open Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#232326] bg-[#111113] text-[#C6FF3B] text-sm">
                <div className="w-2 h-2 rounded-full bg-[#C6FF3B]" />
                Enterprise Legal Intelligence
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-[62px] md:text-[86px] font-black tracking-[-0.07em] leading-[0.92]">
                Monitor
                <br />
                legal changes
                <br />
                before users
                <br />
                notice.
              </h1>

              {/* Text */}
              <p className="mt-8 max-w-xl text-[#8B8B95] text-lg leading-8">
                Real-time monitoring platform for Terms of Service,
                Privacy Policy and legal document modifications.
                Instant alerts, AI diff analysis and compliance tracking.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="#"
                  className="h-16 px-8 rounded-2xl bg-[#C6FF3B] text-black font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition"
                >
                  Start Monitoring
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="#"
                  className="h-16 px-8 rounded-2xl border border-[#232326] bg-[#111113] hover:border-[#7B61FF] transition flex items-center justify-center gap-2 text-lg"
                >
                  View Platform
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5 mt-14">
                {[
                  {
                    number: "24/7",
                    text: "Monitoring",
                  },
                  {
                    number: "99.9%",
                    text: "Uptime",
                  },
                  {
                    number: "<1s",
                    text: "Alert speed",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] border border-[#232326] bg-[#111113]/90 p-6"
                  >
                    <h3 className="text-3xl font-black tracking-[-0.04em]">
                      {item.number}
                    </h3>

                    <p className="text-[#8B8B95] text-sm mt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#7B61FF]/10 blur-[100px]" />

              {/* Card */}
              <div className="relative rounded-[36px] border border-[#232326] bg-[#111113]/90 backdrop-blur-2xl p-7">
                {/* Top */}
                <div className="flex items-center justify-between border-b border-[#232326] pb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.04em]">
                      Live Monitoring
                    </h2>

                    <p className="text-sm text-[#8B8B95] mt-1">
                      terms.company.com
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#C6FF3B]/10 border border-[#C6FF3B]/20 text-[#C6FF3B] text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C6FF3B] animate-pulse" />
                    Active
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-5 mt-7">
                  {/* Item */}
                  <div className="rounded-[28px] border border-[#232326] bg-[#0D0D0F] p-5 hover:border-[#7B61FF]/40 transition">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#232326] flex items-center justify-center">
                        <Bell className="w-6 h-6 text-[#C6FF3B]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold">
                          Privacy Policy Updated
                        </h3>

                        <p className="text-[#8B8B95] text-sm mt-2 leading-6">
                          AI detected modifications in user data
                          processing clauses and tracking policies.
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#C6FF3B]">
                          <div className="w-2 h-2 rounded-full bg-[#C6FF3B]" />
                          Telegram notification delivered
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="rounded-[28px] border border-[#232326] bg-[#0D0D0F] p-5 hover:border-[#7B61FF]/40 transition">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#232326] flex items-center justify-center">
                        <ScanSearch className="w-6 h-6 text-[#7B61FF]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold">
                          Automatic Diff Analysis
                        </h3>

                        <p className="text-[#8B8B95] text-sm mt-2 leading-6">
                          Compare previous and updated versions
                          with intelligent legal text analysis.
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#7B61FF]">
                          <Activity className="w-3 h-3" />
                          Real-time scanning enabled
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="rounded-[30px] border border-[#232326] bg-gradient-to-br from-[#18181C] to-[#121214] p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">
                          Security Score
                        </h3>

                        <p className="text-[#8B8B95] text-sm mt-2">
                          Legal tracking infrastructure health
                        </p>
                      </div>

                      <div className="text-5xl font-black tracking-[-0.06em] text-[#C6FF3B]">
                        98
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating */}
              <div className="absolute -bottom-10 -left-10 hidden lg:flex items-center gap-4 rounded-[28px] border border-[#232326] bg-[#111113]/90 backdrop-blur-2xl px-5 py-4">
                <div className="w-12 h-12 rounded-2xl bg-[#151518] flex items-center justify-center border border-[#232326]">
                  <Globe className="w-5 h-5 text-[#C6FF3B]" />
                </div>

                <div>
                  <h3 className="font-bold">
                    4,291 monitored pages
                  </h3>

                  <p className="text-sm text-[#8B8B95]">
                    across 73 platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
