import Link from "next/link";
import { Shield, Bell, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 tracking-tighter">UzTerms</h1>
          <p className="text-3xl text-blue-400 mb-4">
            O‘zbekiston uchun yuridik hujjatlar kuzatuvchisi
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Terms of Service, Privacy Policy va boshqa hujjatlar o‘zgarganda darhol xabar oling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: Shield, 
              title: "Doimiy kuzatuv", 
              desc: "Har kuni avtomatik tekshirib turadi" 
            },
            { 
              icon: Bell, 
              title: "Tez bildirishnomalar", 
              desc: "Email va Telegram orqali xabar" 
            },
            { 
              icon: Users, 
              title: "Kompaniya portali", 
              desc: "O‘z hujjatlaringizni yuklab boshqaring" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition">
              <item.icon className="w-14 h-14 mb-6 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <Link 
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl text-lg font-medium transition flex items-center gap-3"
          >
            Dashboardga kirish
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <Link 
            href="/add-document"
            className="border border-white/60 hover:bg-white/10 px-10 py-4 rounded-2xl text-lg font-medium transition"
          >
            Hujjat qo‘shish
          </Link>
        </div>
      </div>
    </div>
  );
}
