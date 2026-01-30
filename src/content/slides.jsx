import React from 'react';
import { Rocket, Box, Database, Cpu, PieChart, ShieldAlert, Zap } from 'lucide-react';

const Highlight = ({ children }) => <span className="text-[var(--primary-glow)] font-bold">{children}</span>;

export const slides = [
    {
        supertitle: "TFT Strategic Vision",
        title: <span className="text-gradient text-7xl">Prestijden Performansa</span>,
        body: (
            <div className="flex flex-col items-center gap-8">
                <p className="text-2xl text-center max-w-3xl">
                    Geleneksel pazarlama anlayışından, <Highlight>teknoloji odaklı</Highlight>, veriyle yönetilen ve ölçeklenebilir bir <Highlight>SaaS ekosistemine</Highlight> geçiş.
                </p>
                <div className="flex gap-4">
                    <span className="glass-card flex items-center gap-2 px-6 py-3"><Rocket size={20} className="text-purple-400" /> Teknoloji Odaklı</span>
                    <span className="glass-card flex items-center gap-2 px-6 py-3"><Database size={20} className="text-cyan-400" /> Veri Yönetimli</span>
                    <span className="glass-card flex items-center gap-2 px-6 py-3"><Box size={20} className="text-pink-400" /> Ölçeklenebilir SaaS</span>
                </div>
            </div>
        )
    },
    {
        supertitle: "Ürün ve Teknoloji Vizyonu",
        title: "Görsel Gövde Gösterisi",
        body: (
            <div className="grid grid-cols-2 gap-8 w-full mt-8">
                <div className="glass-card p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Box className="text-[var(--primary-glow)]" /> TFT UI Library</h3>
                    <p className="opacity-80">Kusursuz, modern ve profesyonel arayüz. UI, teknolojik gücümüzün online kanıtı olacak.</p>
                </div>
                <div className="glass-card p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cpu className="text-[var(--secondary-glow)]" /> BYO-API Özgürlüğü</h3>
                    <p className="opacity-80">"Kendi API'nı Getir". TFT sadece bir yazılım değil, özelleştirilebilir bir altyapı sağlayıcısı.</p>
                </div>
            </div>
        )
    },
    {
        supertitle: "Veri Odaklı Büyüme",
        title: "Analitik Güç",
        body: (
            <div className="w-full mt-6 space-y-4">
                <div className="glass-card flex items-center justify-between p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-500/20 p-3 rounded-lg"><PieChart className="text-blue-400" /></div>
                        <div>
                            <h4 className="font-bold text-lg">Mixpanel & Amplitude</h4>
                            <p className="text-sm opacity-60">Kullanıcı davranışı ve özellik kullanımı takibi.</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-mono font-bold text-blue-400">AR-GE</div>
                        <div className="text-xs uppercase tracking-widest opacity-50">Önceliği</div>
                    </div>
                </div>

                <div className="glass-card flex items-center justify-between p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500/20 p-3 rounded-lg"><Zap className="text-green-400" /></div>
                        <div>
                            <h4 className="font-bold text-lg">A/B Testleri & Dönüşüm</h4>
                            <p className="text-sm opacity-60">UI tasarımlarının satışa etkisini ölçme.</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-mono font-bold text-green-400">CAC</div>
                        <div className="text-xs uppercase tracking-widest opacity-50">Optimizasyonu</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        supertitle: "6 Aylık Aksiyon Planı",
        title: "Paralel Süreçler",
        body: (
            <div className="relative border-l-2 border-[var(--glass-border)] ml-6 pl-8 space-y-8 mt-4">
                {[
                    { title: "Ürün Standartizasyonu", desc: "UI Library ve Hata Giderme", done: true },
                    { title: "API Altyapısı", desc: "Gateway Modülünün Yayına Alınması", done: true },
                    { title: "Analitik Kurulum", desc: "Mixpanel/Amplitude SDK Entegrasyonu", done: true },
                    { title: "Pazar Otomasyonu", desc: "Apollo.io & Lemlist Kampanyaları", done: true },
                ].map((item, i) => (
                    <div key={i} className="relative">
                        <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border-2 ${item.done ? 'bg-[var(--primary-glow)] border-[var(--primary-glow)] box-shadow-glow' : 'bg-black border-gray-600'}`}></div>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="opacity-60">{item.desc}</p>
                    </div>
                ))}
            </div>
        )
    },
    {
        supertitle: "Risk Yönetimi",
        title: "Öneriler ve Riskler",
        body: (
            <div className="grid grid-cols-2 gap-8 w-full">
                <div className="glass-card border-red-500/30 bg-red-500/5">
                    <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2"><ShieldAlert /> Kritik Riskler</h3>
                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>Teknik hazırlık bitmeden pazarlama yapmak.</li>
                        <li>UI hatalı ürünle Expo'ya katılmak.</li>
                        <li>Sadece isim değiştirip yapıyı değiştirmemek.</li>
                    </ul>
                </div>
                <div className="glass-card border-green-500/30 bg-green-500/5">
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Rocket /> Stratejik Hamleler</h3>
                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>"Önce Mutfak, Sonra Servis" (UI First).</li>
                        <li>Gizli Landing Page'ler ile test.</li>
                        <li>Sadece yazılım değil, teknoloji devi imajı.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        supertitle: "Teşekkürler",
        title: "TeamForce Technologies",
        body: (
            <div className="text-center">
                <p className="text-xl opacity-60 mb-8">Next Generation Digital Transformation</p>
                <div className="inline-block px-8 py-4 border border-[var(--primary-glow)] rounded-full text-[var(--primary-glow)] hover:bg-[var(--primary-glow)] hover:text-black transition-all cursor-pointer font-bold">
                    BAŞLA
                </div>
            </div>
        )
    }
];
