import Link from "next/link";
import { Shield, Bell, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="border-b border-white/10 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">UzTerms</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
            <Link href="#features" className="hover:text-blue-400 transition">Imkoniyatlar</Link>
            <Link href="/add-document" className="hover:text-blue-400 transition">Hujjat qo‘shish</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            🇺🇿 O‘zbekiston uchun birinchi platforma
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Yuridik hujjatlaringizni <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              doim nazoratda
            </span> tuting
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Terms of Service, Privacy Policy, Cookie Policy va boshqa hujjatlar o‘zgarganda 
            darhol xabar oling. O‘zbekistonda birinchi va eng qulay yechim.
          </p>

          <div className="flex justify-center gap-5">
            <Link 
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 transition-all active:scale-95"
            >
              Dashboardga kirish
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              href="/add-document"
              className="border border-white/60 hover:bg-white/10 px-10 py-4 rounded-2xl text-lg font-medium transition-all"
            >
              Hujjat qo‘shish
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Nima uchun UzTerms?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 transition group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <Shield className="w-9 h-9 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Avtomatik kuzatuv</h3>
            <p className="text-gray-400">Har soatda saytlaringizdagi yuridik hujjatlarni tekshirib turadi.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 transition group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <Bell className="w-9 h-9 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tez bildirishnomalar</h3>
            <p className="text-gray-400">O‘zgarish bo‘lsa email, Telegram yoki push orqali xabar beradi.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 transition group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <Users className="w-9 h-9 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Kompaniya portali</h3>
            <p className="text-gray-400">O‘z hujjatlaringizni yuklang va foydalanuvchilarga rasmiy versiyani ko‘rsating.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white/5 py-20 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Shaffoflikni oshiring</h2>
          <p className="text-gray-400 mb-10">
            Foydalanuvchilaringiz sizning shartlaringizni qanchalik oson kuzatishi mumkinligini ko‘rsating.
          </p>
          <Link 
            href="/add-document"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            Hozir boshlash <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
