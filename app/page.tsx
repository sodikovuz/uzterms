import Link from "next/link";
import { Shield, Bell, Users, ArrowRight, Star, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tighter">UzTerms</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-blue-400 transition">Imkoniyatlar</Link>
            <Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
            <Link href="/add-document" className="hover:text-blue-400 transition">Hujjat qo‘shish</Link>
          </div>
          <Link 
            href="/dashboard"
            className="bg-white text-black px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Kirish
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#3b82f630_0%,transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            🇺🇿 O‘zbekistonda birinchi
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Yuridik hujjatlaringizni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            bir joyda kuzating
          </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Terms of Service, Privacy Policy, Cookie Policy va boshqa muhim hujjatlar o‘zgarganda 
            darhol xabar oling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              Dashboardga kirish
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/add-document"
              className="border border-white/30 hover:border-white/60 px-10 py-4 rounded-2xl text-lg font-medium transition-all"
            >
              Hujjat qo‘shish
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2"><Check className="text-green-500"/> Real vaqt kuzatuv</div>
            <div className="flex items-center gap-2"><Check className="text-green-500"/> Diff (o‘zgarish) ko‘rsatish</div>
            <div className="flex items-center gap-2"><Check className="text-green-500"/> Telegram bildirishnomalari</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-black/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nega UzTerms?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10 hover:border-blue-500/30 transition-all group">
              <Shield className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Avtomatik kuzatuv</h3>
              <p className="text-gray-400">Har soatda saytlaringizdagi barcha yuridik hujjatlarni tekshirib turadi.</p>
            </div>

            <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10 hover:border-blue-500/30 transition-all group">
              <Bell className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Tez xabar berish</h3>
              <p className="text-gray-400">O‘zgarish topilsa darhol Email, Telegram va Push orqali xabar yuboradi.</p>
            </div>

            <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10 hover:border-blue-500/30 transition-all group">
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Kompaniya portali</h3>
              <p className="text-gray-400">O‘z hujjatlaringizni yuklang va foydalanuvchilarga "Rasmiy" belgisi bilan ko‘rsating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Shaffoflikdan boshlang</h2>
          <p className="text-gray-400 text-lg mb-10">
            Foydalanuvchilaringiz sizning shartnomangizni qanchalik oson kuzatishi mumkinligini ko‘rsating.
          </p>
          <Link 
            href="/add-document"
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition"
          >
            Hozir boshlash <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
