// app/page.tsx

import Link from "next/link";
import {
  Shield,
  Activity,
  BellDot,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock3,
  FileWarning,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0C0F] text-[#F3F4F6] overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* TOPBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#0F1012]/92 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl border border-[#23262D] bg-[#14161A] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#B7D94C]" />
            </div>

            <div>
              <h1 className="text-[22px] font-[800] tracking-[-0.04em]">
                UzTerms
              </h1>

              <p className="text-[11px] text-[#70737C] -mt-1">
                Enterprise Legal Monitoring
              </p>
            </div>
          </div>

          {/* CENTER */}
          <nav className="hidden lg:flex items-center gap-10 text-[14px] text-[#7B808A]">
            <Link href="#" className="hover:text-white transition">
              Infrastructure
            </Link>

            <Link href="#" className="hover:text-white transition">
              Monitoring
            </Link>

            <Link href="#" className="hover:text-white transition">
              Compliance
            </Link>

            <Link href="#" className="hover:text-white transition">
              Security
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:flex text-[14px] text-[#7B808A] hover:text-white transition"
            >
              Sign in
            </Link>

            <Link
              href="#"
              className="h-10 px-5 rounded-xl bg-[#B7D94C] text-black text-[14px] font-[700] flex items-center gap-2 hover:opacity-90 transition"
            >
              Open Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* LABEL */}
          <div className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-[#23262D] bg-[#111317] text-[#B7D94C] text-[13px]">
            <div className="w-2 h-2 rounded-full bg-[#B7D94C]" />
            Active Monitoring Infrastructure
          </div>

          {/* TITLE */}
          <div className="mt-8 max-w-5xl">
            <h1 className="text-[58px] md:text-[72px] leading-[0.95] tracking-[-0.06em] font-[800]">
              Track policy and
              <br />
              compliance changes
              <br />
              across platforms.
            </h1>

            <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#7B808A]">
              Enterprise-grade monitoring system for Terms of Service,
              Privacy Policy and legal document modifications with
              real-time event detection and compliance tracking.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#"
              className="h-14 px-7 rounded-xl bg-[#B7D94C] text-black text-[15px] font-[700] flex items-center justify-center gap-3 hover:opacity-90 transition"
            >
              Start Monitoring
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#"
              className="h-14 px-7 rounded-xl border border-[#23262D] bg-[#121418] text-[15px] hover:border-[#343842] transition flex items-center justify-center"
            >
              View Documentation
            </Link>
          </div>

          {/* DASHBOARD */}
          <div className="mt-20 rounded-2xl border border-[#1F232B] bg-[#0F1115] overflow-hidden">
            {/* TOP */}
            <div className="h-14 border-b border-[#1F232B] px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B7D94C]" />

                <p className="text-[14px] text-[#D7D9DE]">
                  Live Monitoring Queue
                </p>
              </div>

              <div className="text-[13px] text-[#6E737D]">
                14 active scans
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT SIDE */}
              <div className="border-r border-[#1F232B]">
                {/* TABLE HEADER */}
                <div className="grid grid-cols-4 px-6 h-12 items-center border-b border-[#1F232B] text-[12px] uppercase tracking-[0.12em] text-[#6E737D]">
                  <div>Platform</div>
                  <div>Status</div>
                  <div>Last Scan</div>
                  <div>Changes</div>
                </div>

                {/* ROWS */}
                {[
                  {
                    site: "OpenAI",
                    status: "Monitoring",
                    time: "12 sec ago",
                    changes: "No changes",
                    green: true,
                  },
                  {
                    site: "Telegram",
                    status: "Policy updated",
                    time: "2 min ago",
                    changes: "3 modifications",
                    warning: true,
                  },
                  {
                    site: "Discord",
                    status: "Monitoring",
                    time: "45 sec ago",
                    changes: "No changes",
                    green: true,
                  },
                  {
                    site: "Stripe",
                    status: "Clause changed",
                    time: "5 min ago",
                    changes: "1 modification",
                    warning: true,
                  },
                  {
                    site: "Notion",
                    status: "Monitoring",
                    time: "11 sec ago",
                    changes: "No changes",
                    green: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 px-6 h-16 items-center border-b border-[#1A1D24] hover:bg-[#13161B] transition"
                  >
                    {/* SITE */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg border border-[#23262D] bg-[#15181D] flex items-center justify-center">
                        <Search className="w-4 h-4 text-[#8A8F98]" />
                      </div>

                      <p className="font-[600] text-[14px]">
                        {item.site}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div>
                      {item.green && (
                        <div className="inline-flex items-center gap-2 text-[#B7D94C] text-[13px]">
                          <CheckCircle2 className="w-4 h-4" />
                          {item.status}
                        </div>
                      )}

                      {item.warning && (
                        <div className="inline-flex items-center gap-2 text-[#D9A441] text-[13px]">
                          <FileWarning className="w-4 h-4" />
                          {item.status}
                        </div>
                      )}
                    </div>

                    {/* TIME */}
                    <div className="flex items-center gap-2 text-[#7B808A] text-[13px]">
                      <Clock3 className="w-4 h-4" />
                      {item.time}
                    </div>

                    {/* CHANGES */}
                    <div className="text-[13px] text-[#D7D9DE]">
                      {item.changes}
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="p-6">
                {/* STATUS CARD */}
                <div className="rounded-2xl border border-[#1F232B] bg-[#121419] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] uppercase tracking-[0.12em] text-[#6E737D]">
                        System Status
                      </p>

                      <h3 className="mt-3 text-[28px] font-[800] tracking-[-0.04em]">
                        Operational
                      </h3>
                    </div>

                    <div className="w-14 h-14 rounded-xl border border-[#23262D] bg-[#171A1F] flex items-center justify-center">
                      <Activity className="w-6 h-6 text-[#B7D94C]" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7B808A]">
                        Active monitors
                      </span>

                      <span className="font-[600]">
                        4,291
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7B808A]">
                        Detection latency
                      </span>

                      <span className="font-[600]">
                        0.8s
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7B808A]">
                        Last incident
                      </span>

                      <span className="font-[600]">
                        12 days ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* EVENTS */}
                <div className="mt-5 rounded-2xl border border-[#1F232B] bg-[#121419] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-[700]">
                      Recent Events
                    </h3>

                    <BellDot className="w-5 h-5 text-[#7B808A]" />
                  </div>

                  <div className="mt-5 space-y-5">
                    {[
                      "Telegram Privacy Policy updated",
                      "Stripe arbitration clause modified",
                      "Discord data retention section changed",
                    ].map((event, index) => (
                      <div
                        key={index}
                        className="flex gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#B7D94C] mt-2" />

                        <div>
                          <p className="text-[14px] leading-6">
                            {event}
                          </p>

                          <p className="text-[12px] text-[#6E737D] mt-1">
                            detected automatically
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOT STATS */}
          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {[
              {
                title: "99.98%",
                desc: "Monitoring uptime",
              },
              {
                title: "<1 sec",
                desc: "Average detection latency",
              },
              {
                title: "73",
                desc: "Tracked platforms",
              },
              {
                title: "24/7",
                desc: "Continuous monitoring",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#1F232B] bg-[#101216] p-6"
              >
                <h3 className="text-[34px] font-[800] tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] text-[#7B808A]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
