import Link from "next/link";
import { Shield, Bell, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 tracking-tight">UzTerms</h1>
          <p className="text-3xl text-blue-400">O‘zbekistonda birinchi yuridik hujjat kuzatuvchisi</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Shield, title: "Avtomatik kuzatuv", desc: "Har kuni tekshirib turadi" },
            { icon: Bell, title: "Bildirishnomalar", desc: "O‘zgarish bo‘lsa darhol xabar" },
            { icon: Users, title: "Kompaniya portali", desc: "O‘z hujjatlaringizni yuklang" }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
              <item.icon className="w-14 h-14 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <Link 
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-lg font-medium transition"
          >
            Dashboardga kirish
          </Link>
          <Link 
            href="/add-document"
            className="border border-white/70 hover:bg-white/10 px-10 py-4 rounded-xl text-lg font-medium transition flex items-center gap-2"
          >
            Hujjat qo‘shish <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
