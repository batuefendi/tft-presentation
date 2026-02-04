import {
    Monitor,
    Layout,
    Cpu,
    Server,
    Database,
    Activity,
    Users,
    Mail,
    Zap,
    Target,
    TrendingUp,
    Shield,
    BarChart3,
    Pin,
    AlertCircle
} from 'lucide-react';
import BentoGrid from '../components/BentoGrid';
import ScrollyTell from '../components/ScrollyTell';
import NetworkGraph from '../components/NetworkGraph';
import InfoBox from '../components/InfoBox';

// Section definitions for the stepper navigation
export const sections = [
    {
        id: 'neden',
        title: 'NEDEN DEĞİŞMELİYİZ',
        color: '#ef4444', // Kırmızı (alt step başlık ve altbaşlıklar)
        slideRange: [0, 4] // Slides 0-4
    },
    {
        id: 'vizyon',
        title: 'VİZYON',
        color: '#8b5cf6', // Violet/Purple
        slideRange: [5, 7] // Slides 5-7
    },
    {
        id: 'hazirlik',
        title: 'HAZIRLIK',
        color: 'var(--secondary-glow)',
        slideRange: [8, 10] // Slides 8-10
    },
    {
        id: 'tutundurma',
        title: 'TUTUNDURMA',
        color: '#22c55e',
        slideRange: [11, 13] // Slides 11-13
    },
    {
        id: 'isleyis',
        title: 'İŞLEYİŞ & KONTROL',
        color: '#f59e0b',
        slideRange: [14, 15] // Slide 14: Sürdürülebilirlik, Slide 15: Maliyetler & Riskler
    },
    {
        id: 'kapanis',
        title: 'KAPANIŞ',
        color: '#f59e0b',
        slideRange: [16, 16] // Slide 16: Karar
    }
];

export const slides = [
    // ========================================
    // BÖLÜM 1: NEDEN DEĞİŞMELİYİZ (Slides 0-5)
    // ========================================
    {
        section: 'neden',
        supertitle: "Giriş",
        title: "NEDEN YAPIYI DEĞİŞTİRMELİYİZ?",
        layout: "hero",
        content: (
            <div className="text-center max-w-4xl mx-auto relative z-10">
                <img src="/tft-logo.png" alt="TFT — TeamForce Technologies" className="w-[200px] h-[200px] mx-auto mb-10 object-contain" />
                <h1 className="text-center text-3xl md:text-5xl font-black mb-10 tracking-tight leading-tight text-white">
                    Durum Özeti
                </h1>
                <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
                    Bu rapor, TFT için bir dijital dönüşüm planı taslağıdır. Thomas döneminden devralınan miras; kurumsal kimliği profesyonelce kurgulanmış ancak stratejik geri dönüşü ve dijital pazarlama planı &quot;sıfır&quot; olan bir yapıdır.
                </p>
                <h2 className="text-center text-xl md:text-2xl font-bold text-cyan-400 mb-4">Mevcut İkilem</h2>
                <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                    Ya mevcut hantal ve birebir satışa dayalı &quot;geleneksel&quot; yöntemlerle devam edilecek ya da modern pazarın gerekliliği olan dijital odaklı, otonom ve ölçeklenebilir bir sisteme göç edilecektir.
                </p>
                <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mt-8 font-medium">
                    TFT CRM; geleneksel pazarlamanın sınırlarından sıyrılarak, otonom iş akışları ve ölçülebilir veriyle yönetilen bir SaaS Ekosistemine evrilmelidir. Gereksiz zaman kayıplarının yerini akıllı ajanların, sezgilerin yerini ise KPI&apos;ların alması bir tercih değil, hayatta kalma meselesidir.
                </p>
                <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-8">
                    <strong className="text-cyan-400">Çalışan Vizyonu:</strong> TFT&apos;nin böyle bir orta dönem planına sahip olması, sadece satışları artırmak için değil, çalışanların da önünü görmesi ve kurumsal bir rotaya tutunması açısından kritiktir.
                </p>
            </div>
        )
    },
    {
        section: 'neden',
        supertitle: "Prestij",
        title: "PRESTİJ ALGISI YETERSİZ",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--primary-glow)]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layout size={120} />
                </div>
                <h3 className="text-center text-4xl font-bold mb-24 text-white leading-tight">TEKNOLOJİK İTİBAR: VİTRİNİMİZ YETKİNLİĞİMİZİN AYNASIDIR</h3>
                <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Zap size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">Hatalı ve demode UI (arayüz), potansiyel müşteride &quot;teknoloji de hatalı olabilir&quot; algısı yaratıyor.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <TrendingUp size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">Pazar, karmaşık yapılar yerine "Self-Servis" ve "Sürtünmesiz" arayüzleri standart kabul ediyor. Mevcut yapımız bu beklentinin altında kalıyor.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Users size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">Bize yorum yapabilecek bir müşterimiz yok ve bunun için bir çalışma yok</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'neden',
        supertitle: "Analiz",
        title: "VERİ & ANALİZ EKSİKLİĞİ",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--primary-glow)]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BarChart3 size={120} />
                </div>
                <h3 className="text-center text-4xl font-bold mb-24 text-white leading-tight">Müşteri davranışları ölçülemiyor, AR-GE öncelikleri belirsiz kalıyor.</h3>
                <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Activity size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">Hangi özellik ne kadar kullanılıyor bilmiyoruz → AR-GE bütçesi yanlış harcanıyor</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Users size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            <span><InfoBox content="Churn (müşteri kaybı oranı), bir işletmenin belirli bir süre içinde (aylık, yıllık vb.) kaybettiği müşterilerin veya abonelerin, dönem başındaki toplam müşteri sayısına oranıdır. Özellikle abonelik tabanlı (SaaS), telekomünikasyon ve e-ticaret sektörlerinde, müşteri sadakatini ve işletme büyümesini ölçen kritik bir metriktir. Yüksek churn oranı, müşteri memnuniyetsizliği, fiyat sorunları veya rakip faaliyetleri nedeniyle gelirin azaldığını gösterir. ">Churn</InfoBox> sebepleri net değil, öngörü sistemi yok</span>
                        </p>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Target size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            <span><InfoBox content="CAC, en yaygın kullanımıyla Müşteri Edinme Maliyeti (Customer Acquisition Cost) anlamına gelen ve bir işletmenin yeni bir müşteri kazanmak için satış ve pazarlama faaliyetlerine harcadığı toplam tutarı (reklamlar, maaşlar vb.) ifade eden pazarlama metriğidir">CAC</InfoBox> (müşteri edinme maliyeti) nerede yandığı belirsiz</span>
                        </p>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Mail size={20} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">En basit müşteri sorusu bile doğrudan bir insan müdahalesi gerektiriyor. Dokümantasyon ve Yardım Sayfası Yok</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'neden',
        supertitle: "Dijital Satış",
        title: "MANUEL SATIŞ & DİJİTAL EKSİKLİK",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--primary-glow)]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={120} />
                </div>
                <h3 className="text-center text-4xl font-bold mb-24 text-white leading-tight">ÖLÇEKLENME BARİYERİ: MANUEL OPERASYON VE STRATEJİK KAYIPLAR</h3>
                <div className="space-y-4 mt-8">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-1">
                            <AlertCircle size={20} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <strong className="text-xl text-white tracking-widest uppercase">DİJİTAL PAZARLAMA STRATEJİSİ YOK!</strong>
                            <p className="text-sm text-white/70 mt-2">
                                Sadece tanıdık/fuar odaklı ilerlemek, global pazarın %99'una kapıyı kapatmaktır.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Target size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">
                                    <InfoBox content="BDR (Business Development Representative - İş Geliştirme Temsilcisi), hedeflenen potansiyel müşterilere (cold outreach) ulaşarak yeni iş fırsatları oluşturan, pazarlama ve satış ekipleri arasında köprü kuran bir satış rolüdür. BDR'ler, özellikle giden (outbound) stratejilerle potansiyel müşteri bulmaya ve beslemeye odaklanır. BDR konseptinin temel özellikleri şunlardır: Proaktif Satış: Henüz şirketle etkileşime girmemiş, soğuk adaylara ulaşırlar. Amaç: Potansiyel müşterileri nitelemek ve satış temsilcileri (AE) için toplantı ayarlamaktır. Yöntem: E-posta, telefon, LinkedIn üzerinden soğuk arama (cold call) ve kişiselleştirilmiş mesajlar kullanırlar. SDR'den Farkı: SDR (Sales Development Representative) gelen (inbound) talepleri karşılarken, BDR giden (outbound) yeni fırsatlar yaratır.">BDR konseptinde ilerlemiyoruz</InfoBox>
                                </h4>
                                <p className="text-white/70">
                                    Pazar payı avcılığı yapmak yerine pasif satış bekleniyor. Potansiyel "büyük balıklar" için sistemli bir <InfoBox content={'Outreach kurgusu, potansiyel bir müşterinin dikkatini çekmek ve onu bir görüşmeye ikna etmek için önceden tasarlanmış, çok adımlı ve planlı bir iletişim stratejisidir.\n\nSadece bir kişiye "Merhaba, ürünümüzü almak ister misiniz?" diye e-posta atmak bir outreach değildir; bu sadece bir mesajdır. Kurgu ise, bu mesajın ne zaman, hangi kanaldan ve hangi sırayla gideceğinin bir mimarisidir.'}>soğuk ulaşım (outreach)</InfoBox> kurgusu yok
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Zap size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">7/24 dijital satış döngüsü yok → global fırsatlar kaçırılıyor</h4>
                                <p className="text-white/70">
                                    Satış ofis kapandığında duruyor. Dünyanın diğer ucundaki müşteriye 7/24 cevap verecek otonom bir "Always-on" satış döngüsü eksik.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Cpu size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Kendi AI Agent'ımızı kullanmayarak 'ürüne güven' referansı kaybediliyor</h4>
                                <p className="text-white/70">
                                    AI Agent satan bir şirketin kendi web sitesinde AI Agent olmaması, müşteride ürünün yetkinliğine dair şüphe yaratıyor. En büyük demo, kendi sistemimiz olmalı.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Layout size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Kendi kendine hizmet (Self-service) eksikliği — demo için mutlaka toplantı gerekiyor</h4>
                                <p className="text-white/70">
                                    Müşteri ürünü görmek için bir insanın takvimine bağımlı kalıyor. "Hemen dene/satın al" (Self-service) opsiyonu olmadığı için düşük bütçeli ama yüksek hacimli SaaS pazarı kaçırılıyor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'neden',
        supertitle: "Pazar",
        title: "PAZAR UYUMSUZLUĞU",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--primary-glow)]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp size={120} />
                </div>
                <h3 className="text-center text-4xl font-bold mb-24 text-white leading-tight">Sadece 'büyük balık' odaklı, katı bir satış modelinde ısrar edilmesi.</h3>
                <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Cpu size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">AI Paradigma Değişimi ve Yeni Pazar Standartları:</h4>
                            <p className="text-white/70">Müşteriler artık hantal entegrasyonlar yerine, çevik (agile) ve hızlı sonuç veren AI çözümleri bekliyor. Geleneksel uzun satış döngüleri, AI pazarının hızına yanıt veremiyor.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Server size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Platform İzolasyonu ve Entegrasyon Bariyeri (Vendor Lock-in):</h4>
                            <p className="text-white/70">Modern karar vericiler (CTO'lar ve Geliştiriciler) artık kapalı kutu sistemleri reddediyor. BYO-API (Kendi API'nı Getir) esnekliğinin sunulmaması, teknolojiye yön veren kitleyi rakiplerin açık ekosistemlerine itiyor.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <TrendingUp size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Yüksek Giriş Bariyeri ve Yüksek Hacimli Pazar Kaybı:</h4>
                            <p className="text-white/70">"Hep ya da hiç" odaklı yüksek fiyatlama, pazarın tabanını oluşturan ve devasa bir nakit akışı sağlayan SaaS segmentini doğrudan rakiplere hediye ediyor.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Layout size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Modüler Satış Eksikliği ve Nakit Akışı Darboğazı:</h4>
                            <p className="text-white/70">Ürünün parçalara ayrılamaması, satış ekibinin elini kolunu bağlıyor. Modüler satış (Parça Ürün), hem satış kapatma hızını artıracak hem de şirkete sürekli ve öngörülebilir MRR (Aylık Düzenli Gelir) sağlayacaktır.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'vizyon',
        supertitle: "İtibar",
        title: "KURUMSAL GEÇERLİLİK VE KÜRESEL STANDARTLAR",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[#8b5cf6]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layout size={120} />
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[#8b5cf6] mb-24">KURUMSAL GEÇERLİLİK VE KÜRESEL STANDARTLAR</h2>
                <div className="space-y-6 mt-8">
                    <p className="text-xl font-bold text-white">Yalnızca bir yazılım değil, bir standart satıyoruz.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Layout size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Ekosistem Bütünlüğü (UI/UX Kütüphanesi)</h4>
                                <p className="text-white/70">Ortak bir UI Library, sadece estetik değil; geliştirme hızını artıran, hataları minimize eden ve ölçeklenebilirliği sağlayan teknik bir omurgadır.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Shield size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Dijital Güvenin İlk Saniyesi</h4>
                                <p className="text-white/70">Kusursuz bir UI/UX, "Eğer dış yüzey bu kadar profesyonelse, arka plandaki AI ve teknoloji kusursuzdur" mesajını bilinçaltına işleyen en kısa satış yoludur.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Activity size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Regüle Sektör Güveni ve Legal Validasyon</h4>
                                <p className="text-white/70">Müşteri deneyimlerinin sadece kapalı kapılar ardında kalmaması; doğrulanmış, ölçülebilir ve dijital ortamda paylaşılabilir (Case Studies) referanslara dönüştürülmesi.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Shield size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Teknoloji Standartlarına Uyum ve Öncülük.</h4>
                                <p className="text-white/70">Müşteriye "Biz yarın yok olsak bile veriniz ve sisteminiz standartlara uygun olduğu için güvendedir" mesajı verir. Bu, kurumsal (Enterprise) müşterinin en büyük korkusu olan "Vendor Lock-in" (bir tedarikçiye mahkum kalma) riskini yok eder.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Database size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Mükemmel Dökümantasyon ve SDK Desteği.</h4>
                                <p className="text-white/70">Bir CTO, TFT'yi satın almadan önce dökümantasyona bakar. Eğer dökümantasyon (yardım sayfaları, API rehberleri) kusursuzsa, şirket "geliştirici dostu ve profesyonel" olarak etiketlenir. Bu, ürünün iç kalitesinin en büyük dış göstergesidir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'vizyon',
        supertitle: "Veri Karar",
        title: "ÖLÇÜLEMEYEN KAYIPLARDAN, ÖNGÖRÜLEBİLİR KARLILIĞA",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[#8b5cf6]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity size={120} />
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[#8b5cf6] mb-24">Ölçülemeyen Kayıplardan, Öngörülebilir Karlılığa</h2>
                <div className="space-y-6 mt-8">
                    <p className="text-xl font-bold text-white">Sezgilerle değil, kullanıcı ayak izleriyle büyüyoruz.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Activity size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Hassas AR-GE Navigasyonu (Feature Usage)</h4>
                                <p className="text-white/70">"Hangi özellik kullanılıyor?" belirsizliği biter. <InfoBox content="Mixpanel ve Amplitude, temel olarak Ürün Analitiği (Product Analytics) kategorisinde yer alan, web siteleri ve mobil uygulamalardaki kullanıcı davranışlarını detaylı bir şekilde takip etmenizi sağlayan güçlü araçlardır. Google Analytics gibi geleneksel araçlar daha çok sayfa görüntüleme veya trafik kaynağı üzerine odaklanırken; Mixpanel ve Amplitude, kullanıcının uygulama içinde ne yaptığına (buton tıklama, sepete ürün ekleme, kayıt olma gibi event/olay temelli verilere) odaklanır.">Mixpanel/Amplitude</InfoBox> entegrasyonu ile en çok/en az kullanılan özellikler anlık izlenir.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <BarChart3 size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Erken Uyarı Sistemi (Churn Sentinel)</h4>
                                <p className="text-white/70"><InfoBox content="Churn (müşteri kaybı oranı), bir işletmenin belirli bir süre içinde (aylık, yıllık vb.) kaybettiği müşterilerin veya abonelerin, dönem başındaki toplam müşteri sayısına oranıdır. Özellikle abonelik tabanlı (SaaS), telekomünikasyon ve e-ticaret sektörlerinde, müşteri sadakatini ve işletme büyümesini ölçen kritik bir metriktir.">Churn</InfoBox>
                            {' '}’ü sebepleri netleşir. Kullanım sıklığı düşen müşteriyi AI tespit eder ve otomatik "Retention" (Geri Kazanım) senaryosunu başlatır.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <TrendingUp size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">CAC/LTV Şeffaflık Paneli</h4>
                                <p className="text-white/70">"Müşteri edinme maliyeti nerede yanıyor?" sorusu yanıt bulur. Reklam harcaması ile satış geliri arasındaki korelasyon (<InfoBox content="LTV (Lifetime Value); bir müşterinin sizinle çalıştığı süre boyunca işletmenize kazandıracağı toplam net kârın tahmini değeridir. Sağlıklı bir SaaS işletmesinde LTV > CAC x 3 olması beklenir.">LTV</InfoBox>/<InfoBox content="CAC, en yaygın kullanımıyla Müşteri Edinme Maliyeti (Customer Acquisition Cost) anlamına gelen ve bir işletmenin yeni bir müşteri kazanmak için satış ve pazarlama faaliyetlerine harcadığı toplam tutarı ifade eden pazarlama metriğidir">CAC</InfoBox> oranı) 7/24 takip edilir.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Database size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Destekten Dokümana Dönüşüm (Support-to-Doc)</h4>
                                <p className="text-white/70">Sürekli sorulan sorular (Ticket Analizi) veriyle saptanır. Bu veriler otonom olarak "Yardım Sayfalarına" ve AI Agent'ın bilgi kümesine (Knowledge Base) dönüştürülür.</p>
                            </div>
                        </div>
                    </div>
                    <InfoBox inline content="Geleceği tahmin etmiyoruz, kullanıcı davranışlarıyla geleceği kurguluyoruz."> Veri Odaklı Karar: </InfoBox>
                </div>
            </div>
        )
    },
    {
        section: 'vizyon',
        supertitle: "Ekosistem",
        title: "ESNEKLİK VE GERÇEK YATAY BÜYÜME",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[#8b5cf6]/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={120} />
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[#8b5cf6] mb-24">ESNEKLİK VE GERÇEK YATAY BÜYÜME</h2>
                <div className="space-y-6 mt-8">
                    <p className="text-xl font-bold text-white">Kısıtlayan değil, özgürleştiren teknoloji.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Server size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">
                                    <InfoBox content="BYO-API (Bring Your Own API), yazılım dünyasında ve özellikle yapay zeka araçlarında sıkça karşılaşılan bir modeldir. Temelde, bir uygulamayı kullanırken o uygulamanın sunduğu standart abonelik yerine, kendi aldığınız API anahtarını (key) sisteme bağlamanız anlamına gelir.">BYO-API</InfoBox>
                                    {' '}&{' '}
                                    <InfoBox content="Anti-Lock-in (Tedarikçi Bağımlılığından Kaçınma), müşterinin kendi verisini ve entegrasyonlarını kontrol etmesini sağlayan mimari yaklaşımdır. Vendor Lock-in korkusunu yıkar; kullanıcı istediği zaman verisini taşıyabilir ve sistemden ayrılabilir. Tedarikçiye mahkum kalmama özgürlüğü sunar.">Anti-Lock-in</InfoBox>
                                    {' '}Mimari
                                </h4>
                                <p className="text-white/70"><strong>Sorun Çözümü (Pazar):</strong> Kapalı kutu sistemlere son. Kullanıcı kendi API anahtarını bağlar, verisini dilediği yere taşır.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Layout size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Modüler SaaS Katmanı (Composable SaaS)</h4>
                                <p className="text-white/70"><strong>Sorun Çözümü (Pazar/Satış):</strong> "Hep ya da hiç" bariyerini yıkar. Müşteri sadece CRM.TFT veya sadece Chat.TFT alabilir.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Zap size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Kesintisiz Self-Servis Portalı (Always-On Self-Service) (satın aldığı ürüne göre değişir)</h4>
                                <p className="text-white/70"><strong>Sorun Çözümü (Dijital Satış):</strong> Manuel takvim bağımlılığı biter. Müşteri kendi sandbox'ını açar, SDK'sını indirir ve kredi kartıyla saniyeler içinde başlar.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Activity size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Yerel Telemetri Merkezi (Native Telemetry Hub)</h4>
                                <p className="text-white/70"><strong>Sorun Çözümü (Analiz):</strong> Ürünün içinde yerleşik Mixpanel/Amplitude izleyicileri. Hangi modülün ne kadar değer yarattığı artık bir tahmin değil, dashboard verisidir.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                                <Cpu size={20} />
                            </div>
                            <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                <h4 className="text-base font-bold text-white mb-2">Pazar Yeri ve AI Bağlayıcı (Marketplace & AI Connector)</h4>
                                <p className="text-white/70"><strong>Sorun Çözümü (Prestij):</strong> Teknoloji devleriyle (Slack, Zapier, HubSpot) "Tak-Çalıştır" entegrasyon.</p>
                            </div>
                        </div>
                    </div>
                    <InfoBox inline content="Büyük müşteriye giden yol, dijitalde kazanılan binlerce küçük sadık müşteriden geçer."> Esnek Büyüme Stratejisi: </InfoBox>
                </div>
            </div>
        )
    },
    {
        section: 'hazirlik',
        supertitle: "Altyapı",
        title: "TEKNOLOJİK TEMEL VE ESNEKLİK",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--secondary-glow)]/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[var(--secondary-glow)] mb-24">TEKNOLOJİK TEMEL VE ESNEKLİK</h2>
                <p className="text-sm text-white/60 mb-8 mt-6">Teknik ve operasyonel altyapı: Savaş alanını hazırlama</p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Layout size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">TFT Arayüz Kütüphanesi ve Atomik Tasarım (UI Library & Atomic Design)</h4>
                            <p className="text-white/70">Sadece estetik değil; markanın tüm dijital temas noktalarında (web, panel, mobil) aynı profesyonel dili konuşmasını sağlayan bileşen kütüphanesi.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Müşteriye ilk 3 saniyede "bu ekip işini biliyor" dedirten teknolojik güven.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Activity size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">İzleme ve Davranış Analitiği Yığını (Tracking & Behavioral Analytics Stack)</h4>
                            <p className="text-white/70"><InfoBox content="Mixpanel ve Amplitude, temel olarak Ürün Analitiği (Product Analytics) kategorisinde yer alan, web siteleri ve mobil uygulamalardaki kullanıcı davranışlarını detaylı bir şekilde takip etmenizi sağlayan güçlü araçlardır. Google Analytics gibi geleneksel araçlar daha çok sayfa görüntüleme veya trafik kaynağı üzerine odaklanırken; Mixpanel ve Amplitude, kullanıcının uygulama içinde ne yaptığına (buton tıklama, sepete ürün ekleme, kayıt olma gibi event/olay temelli verilere) odaklanır.">Mixpanel/Amplitude</InfoBox> tabanlı izleme altyapısı. Müşterinin hangi butona bastığını, nerede takıldığını ve neden satın almadığını gösteren veri katmanı.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Sezgilerle değil, gerçek kullanıcı ayak izleriyle (heatmaps) karar verme yetkinliği.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Target size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Dinamik Açılış Sayfası Motoru (Dynamic Landing Page Engine)</h4>
                            <p className="text-white/70">Reklam kampanyalarına özel, ana siteden bağımsız ve yüksek dönüşüm (conversion) odaklı sayfaları saniyeler içinde yayına alma yeteneği.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Global pazardaki farklı segmentlere (farklı diller ve sektörler) kişiselleştirilmiş teklif sunabilme hızı.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Zap size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Kendi Kendine Hizmet Dönüşüm Katmanı (Self-Service Conversion Layer)</h4>
                            <p className="text-white/70">Ürünü deneme (Free Trial), kredi kartıyla ödeme ve anında kurulum süreçlerini yöneten "sürtünmesiz" arayüz akışları.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Satış ofisi kapandığında bile dünyanın her yerinden müşteri edinebilen "Always-on" satış döngüsü.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Cpu size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Core Yazılımsal Altyapı</h4>
                            <p className="text-white/70">Core yazılımsal altyapılar profesyonel Developerlar ile tartışıp karar verilmeli.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'hazirlik',
        supertitle: "Otomasyon",
        title: "OTONOM SATIŞ ORKESTRASYONU",
        layout: "hero",
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--secondary-glow)]/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[var(--secondary-glow)] mb-24">OTONOM SATIŞ ORKESTRASYONU</h2>
                <p className="text-sm text-white/60 mb-8 mt-6">Teknik ve operasyonel altyapı: Savaş alanını hazırlama</p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Target size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">AI Destekli İdeal Müşteri Taraması (AI-Powered ICP Mining)</h4>
                            <p className="text-white/70">Apollo.io ve LinkedIn entegrasyonu ile ideal müşteri profilimize (<InfoBox content="ICP; Ürününüzden en yüksek verimi alacak ve satın alma ihtimali en yüksek ideal müşteri tanımıdır.">ICP</InfoBox>) uyan binlerce şirketi saniyeler içinde tespit eden otonom tarama.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Fuar ve tanıdık beklemeden, global pazarda 7/24 "aktif avcılık" dönemi.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Database size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Otonom Veri Zenginleştirme (Autonomous Data Enrichment)</h4>
                            <p className="text-white/70">Bir lead sisteme girdiği an; AI'ın web sitesini, haberlerini ve finansal raporlarını tarayıp CRM'e "Kritik Satış Notları" olarak işlemesi.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Satış temsilcisinin hazırlık süresini sıfıra indiren, müşteriyi kapıda tanıyan "akıllı" karşılama.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Mail size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Kesintisiz BDR Ajanları (Always-On BDR Agents) (<InfoBox content="Kesintisiz Outreach (Always-On Outreach), potansiyel müşterilere 7/24 otomatik ve kişiselleştirilmiş ilk teması kuran stratejidir. Manuel BDR kapasitesinin (haftalık 50–100 mesaj) yerine, AI Agent'ların e-posta ve LinkedIn üzerinden binlerce hedeflenmiş teması yönetmesiyle 'aktif avcılık' dönemini sürekli kılar.">Kesintisiz Outreach</InfoBox>)</h4>
                            <p className="text-white/70">Uyku uyumayan, yorulmayan ve 10 dilde iletişim kurabilen AI Agent'ların e-posta ve LinkedIn üzerinden kişiselleştirilmiş ilk temasları kurması. AI ilk teması kurar, ancak sıcak lead (MQL) oluştuğu anda sistem bayrağı insana devreder.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Haftalık 50 manuel mesaj yerine, haftalık 5.000 otonom ve hedeflenmiş temas.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Activity size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Anlık Niyet Yönlendirmesi (Instant Intent Routing)</h4>
                            <p className="text-white/70">Gelen talebin büyüklüğünü (Enterprise vs. SaaS) ve aciliyetini analiz edip; büyük balığı doğrudan kıdemli temsilciye, küçük balığı ise Sayfa 9'daki "Self-Service" akışına yönlendiren trafik yönetimi.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Kaynakların verimli kullanımı; yüksek hacimli pazarda otonom, yüksek bütçeli pazarda butik yönetim.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'hazirlik',
        supertitle: 'AI',
        title: 'AGENTIC WORKFLOWS',
        layout: 'hero',
        content: (
            <div className="max-w-4xl mx-auto p-12 glass-panel border-[var(--secondary-glow)]/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[var(--secondary-glow)] mb-24">AGENTIC WORKFLOWS</h2>
                <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Cpu size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">İcraat ve Hata Denetim Motoru (<InfoBox content="Puppeteer; Web tarayıcılarını programatik olarak kontrol eden bir araçtır. Burada AI'ın gözü ve eli görevini görür.">Puppeteer-Agent</InfoBox>)</h4>
                            <p className="text-white/70 font-semibold mb-2">Kabiliyetler:</p>
                            <ul className="text-white/70 space-y-1 list-disc list-inside text-xs">
                                <li><strong>Support Troubleshooting:</strong> Gelen ticket'taki sorunu CRM üzerinde bizzat deneyerek hatayı simüle eder. Support agent'ına rapor ve ekran kaydı iletir.</li>
                                <li><strong>Agent Co-pilot:</strong> Destek ekibinin direktiflerini (örn. "X kullanıcısının tüm yetkilerini kontrol et") arayüzde bizzat uygular.</li>
                                <li><strong>Continuous QA:</strong> Yayına giren her yeni kodun ardından kritik akışları (Login, Satın Alma, Dashboard) otomatik test eder; hata varsa yayını durdurur.</li>
                            </ul>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Müşteriye "Sizin için sistemi kurduk, işte kanıtı" diyen 7/24 hazır bir teknik satış mühendisi.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Target size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Canlı Referans (Strategic <InfoBox content="Dogfooding (kendi ürününü kullanma), bir şirketin kendi geliştirdiği ürünü veya hizmeti günlük operasyonlarında kullanmasıdır. Müşteriye 'Biz de bunu kullanıyoruz, güvenin' mesajı verir; en güçlü satış argümanı ürünün kendi başarısıdır. Canlı referans ve güven inşası sağlar.">Dogfooding</InfoBox>)</h4>
                            <p className="text-white/70">Kendi web sitemizde ve satış hunimizde TFT'nin kendi Agent'larını konumlandırmak ve kendi hatalarımızı AI ile denetleyerek teknik borç (technical debt) birikimini önlemek.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> "Bize güvenin çünkü biz bu sistemi kullanarak büyüyoruz" mesajı. En güçlü satış argümanı, ürünün kendi başarısıdır.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Shield size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Uyarlamalı Destek Filtreleme (Adaptive Support Filtering)</h4>
                            <p className="text-white/70">Gelen talepleri (ticket/mesaj) anında analiz eden, <InfoBox content="Mixpanel ve Amplitude, temel olarak Ürün Analitiği (Product Analytics) kategorisinde yer alan, web siteleri ve mobil uygulamalardaki kullanıcı davranışlarını detaylı bir şekilde takip etmenizi sağlayan güçlü araçlardır. Google Analytics gibi geleneksel araçlar daha çok sayfa görüntüleme veya trafik kaynağı üzerine odaklanırken; Mixpanel ve Amplitude, kullanıcının uygulama içinde ne yaptığına (buton tıklama, sepete ürün ekleme, kayıt olma gibi event/olay temelli verilere) odaklanır.">Mixpanel/Amplitude</InfoBox> verisiyle birleştiren ve basit işleri saniyeler içinde çözen "İlk Seviye" AI asistanı.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Destek ekibinin vaktini %60 oranında boşaltarak, sadece "Büyük Balık" (Enterprise) ilişkilerine odaklanmalarını sağlamak.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-glow)]/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                            <Database size={20} />
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-300">
                            <h4 className="text-base font-bold text-white mb-2">Anlık Bilgi Sentezi (Instant Knowledge Synthesis)</h4>
                            <p className="text-white/70">Yazılım güncellendikçe, AI'ın kod bloklarını ve UI değişikliklerini tarayarak yardım dökümanlarını otonom olarak güncellemesi.</p>
                            <p className="text-white/60 mt-2 text-xs"><strong>Stratejik Etki:</strong> Her zaman güncel, asla eskimeyen ve insan eli değmeden büyüyen bir bilgi kütüphanesi.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    // ========================================
    // BÖLÜM 3: TUTUNDURMA (Slides 6-8)
    // ========================================
    {
        section: 'tutundurma',
        supertitle: "Lansman",
        title: "OTONOM BÜYÜME (GROWTH) MOTORU",
        layout: "hero",
        content: (
            <div className="w-full max-w-7xl mx-auto p-12 glass-panel border-[var(--secondary-glow)]/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[var(--secondary-glow)] mb-24">OTONOM BÜYÜME (GROWTH) MOTORU</h2>
                <p className="text-sm text-white/60 mb-8 mt-6">Pazar testi ve büyüme: Sahaya iniş</p>
                <BentoGrid
                    stackVertical={false}
                    fullWidth
                    items={[
                        {
                            title: (
                                <>
                                    AI <InfoBox content="BDR (Business Development Representative - İş Geliştirme Temsilcisi), hedeflenen potansiyel müşterilere (cold outreach) ulaşarak yeni iş fırsatları oluşturan, pazarlama ve satış ekipleri arasında köprü kuran bir satış rolüdür. BDR'ler, özellikle giden (outbound) stratejilerle potansiyel müşteri bulmaya ve beslemeye odaklanır.">BDR</InfoBox> Takım Aktivasyonu (Outbound)
                                </>
                            ),
                            description: (
                                <>
                                    <strong>Eylem:</strong> Otomasyonlarda kurulan Apollo/LinkedIn entegrasyonuyla, belirlenen ICP'lere (İdeal Müşteri Profili) 7/24 kişiselleştirilmiş soğuk ulaşım başlatılması.
                                    <br /><strong>KPI:</strong> Aylık 10.000+ <InfoBox content="Hedeflenmiş temas (Outreach Volume), BDR ve pazarlama ekiplerinin belirli bir dönemde potansiyel müşterilere (lead) ulaşmak için yaptığı toplam iletişim sayısıdır. E-posta, LinkedIn mesajı, arama vb. tek tek sayılır. Yüksek hacim, otomasyonla mümkündür.">hedeflenmiş temas</InfoBox>; "sıfır" manuel operasyon.
                                </>
                            ),
                            icon: <Mail />,
                            colSpan: 2,
                            rowSpan: 1
                        },
                        {
                            title: "Canlı İspat (Dogfooding, Inbound)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Web sitemize girip lead bilgilerini veren her ziyaretçiyi, Hazırlık - AI kısmındaki Puppeteer destekli AI Satış Ajanı karşılar. Ziyaretçiye kendi sektörüne özel canlı demoyu anında izletir.
                                    <br /><strong>KPI:</strong> Gelen lead'lerin "deneyimleyerek" ikna olma oranında (conversion) %300 artış.
                                </>
                            ),
                            icon: <Cpu />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Hiper Segmentli Büyüme Sayfaları (Hyper-Segmented Growth Pages)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Hazırlık kurduğumuz Page Builder altyapısı ile; "Emlak CRM", "E-ticaret Support" gibi dikey pazarlara özel, hızlı satın alınabilir modüler landing page'lerin yayına alınması.
                                    <br /><strong>KPI:</strong> Farklı sektörlerden gelen trafikle düşük <InfoBox content="CAC (Müşteri Edinme Maliyeti - Customer Acquisition Cost), yeni bir müşteri kazanmak için satış ve pazarlama faaliyetlerine harcanan toplam tutarı ifade eder. Düşük CAC, kanal verimliliğini gösterir.">CAC</InfoBox> (Müşteri Edinme Maliyeti) ve yüksek hacimli SaaS satışı.
                                </>
                            ),
                            icon: <Activity />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Hassas Hesap Bazlı Pazarlama (Precision ABM)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Hedeflenen "Büyük Balık" şirketlerin karar vericilerine (CTO, CEO), Puppeteer ile hazırlanmış "Şirketinize Özel TFT Çözüm Raporu" videolarının otonom olarak ulaştırılması.
                                    <br /><strong>KPI:</strong> Stratejik kurumsal satışlarda (Enterprise) randevu alma hızında %50 kısalma.
                                </>
                            ),
                            icon: <Target />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Rakip Göçü Hamlesi (Competitive Displacement)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> "X rakibinden TFT'ye geçiş" için tek tıkla veri aktarım (<InfoBox content="Migration (Veri Aktarım), bir platformdan diğerine (örn. rakip CRM'den TFT'ye) müşteri verilerinin, abonelik bilgilerinin ve iş süreçlerinin güvenli ve hızlı şekilde taşınmasıdır. Müşteri kaybını önleyen kritik geçiş sürecidir.">Migration</InfoBox>) araçlarının ve "Rakip Faturanı Getir, %30 İndirim Al" gibi agresif değişim kampanyalarının lansmanı.
                                    <br /><strong>KPI:</strong> Rakip platformlardan çekilen <InfoBox content="Churn (müşteri kaybı oranı), bir işletmenin belirli bir süre içinde kaybettiği müşterilerin, dönem başındaki toplam müşteri sayısına oranıdır. Burada 'Churn müşteri' rakipten ayrılan, bize geçen müşteriyi ifade eder.">Churn</InfoBox> müşteri sayısı.
                                </>
                            ),
                            icon: <TrendingUp />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Otomatik Referans Döngüsü (Referans Motoru)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> İlk müşterilerin ürünü paylaştıkça kredi kazandığı veya özellik açtığı <InfoBox content="Product-Led Growth (PLG - Ürün Odaklı Büyüme), büyümenin reklam yerine ürün deneyimi ve kullanıcı tavsiyesiyle sağlandığı modeldir. Kullanıcı ürünü sever, paylaşır; referans ve ağız tadıyla organik büyüme olur.">Product-Led Growth (PLG)</InfoBox> kurgusunun devreye alınması. AI'nın, mutlu müşterileri tespit edip otomatik olarak LinkedIn tavsiyesi veya G2/Capterra yorumu istemesi.
                                    <br /><strong>KPI:</strong> <InfoBox content="Organik büyüme oranı, reklam harcaması olmadan referans, ağızdan ağıza pazarlama (word-of-mouth) ve ürün deneyimiyle kazanılan yeni müşteri oranıdır. Sürdürülebilir büyümenin göstergesidir.">Organik (Word-of-mouth) büyüme oranı</InfoBox> ve yayınlanan Case Study sayısı.
                                </>
                            ),
                            icon: <Users />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "AI Destekli Flaş Demo Webinarları (AI-Led Flash Demo Webinars)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Her 30 dakikada bir, AI Agent'ın (Puppeteer kullanarak) canlıymış gibi sunduğu interaktif webinarlar. Ziyaretçinin sorularını AI'nın anlık cevapladığı bir "Always-on" sunum serisi.
                                    <br /><strong>KPI:</strong> Webinar başına toplanan sıcak lead (<InfoBox content="MQL (Marketing Qualified Lead - Pazarlama Nitelikli Lead), pazarlama ekipleri tarafından satış ekibine aktarılmaya değer görülen, satın alma niyeti ve kriterlere uygunluğu yüksek potansiyel müşteridir. Demoyu izleyen, form dolduran, webinar katılan kişi tipik bir MQL'dir.">MQL</InfoBox>) sayısı.
                                </>
                            ),
                            icon: <Monitor />,
                            colSpan: 1,
                            rowSpan: 1
                        }
                    ]}
                />
            </div>
        )
    },
    {
        section: 'tutundurma',
        supertitle: "Geri Bildirim",
        title: "CUSTOMER SUCCESS & RETENTION (ELDE TUTMA)",
        layout: "hero",
        content: (
            <div className="w-full max-w-screen-2xl mx-auto p-12 glass-panel border-green-500/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-green-400 mb-24">CUSTOMER SUCCESS & RETENTION (ELDE TUTMA)</h2>
                <p className="text-sm text-white/60 mb-8 mt-6">Pazar girişi ve yatay büyüme stratejileri</p>
                <BentoGrid
                    stackVertical={false}
                    fullWidth
                    items={[
                        {
                            title: "Hunideki Sızıntıları Kapatma (Funnel Friction Analysis)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Tracking altyapısından gelen verilerle, müşterinin hangi adımda vazgeçtiği saptanır. AI, bu "kopma noktaları" için yeni A/B test senaryoları önerir.
                                    <br /><strong>Sonuç:</strong> Reklam bütçesinin verimliliğini artıran kârlı pazarlama (Optimal CAC).
                                </>
                            ),
                            icon: <BarChart3 />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Lead Geri Kazanım ve Kayıp Önleme (Lead Recovery & Churn Prevention)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Ürünü deneyip satın almayan veya sepeti terk eden kullanıcılar AI tarafından analiz edilir. Puppeteer üzerinden bu kişilere "Neden bıraktınız?" anketi veya özel bir teklif otonom olarak iletilir.
                                    <br /><strong>Sonuç:</strong> Kaybedilen potansiyelin geri kazanılması ve churn nedenlerinin AR-GE listesine veri olarak girmesi.
                                </>
                            ),
                            icon: <Mail />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Gerçek İhtiyaç Odaklı AR-GE (Usage-Driven AR-GE)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Lansman sonrası en çok kullanılan modüller saptanır. AR-GE bütçesi, müşterinin "gerçekten" para ödediği özelliklere (Örn: CRM.TFT içindeki otomasyonlar) kaydırılır.
                                    <br /><strong>Sonuç:</strong> Boşa giden yazılım maliyetinin sıfırlanması ve Ürün-Pazar Uyumu (<InfoBox content="Ürün Pazar Uyumu (Product-Market Fit - PMF), bir girişimin ürettiği ürün veya hizmetin, hedef pazarın gerçek bir ihtiyacını karşıladığı ve pazar tarafından yoğun talep gördüğü, sürdürülebilir büyümenin başladığı noktadır. Kullanıcıların ürünü vazgeçilmez bulduğu, organik tavsiyelerin arttığı ve müşteri kaybının düştüğü, başarının temel göstergesi olan kritik bir aşamadır.">PMF</InfoBox>).
                                </>
                            ),
                            icon: <Cpu />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: (
                                <>
                                    Stratejik Sızma (Land & Expand): <InfoBox content="Chat.TFT burada en alınabilir ürün gibi lanse ediliyor. Yani elimizdeki verilere göre en alınabilir ürünü sunum sonrasında yükseltmek.">Chat.TFT</InfoBox> ile
                                </>
                            ),
                            description: (
                                <>
                                    <strong>Eylem:</strong> Müşteriye önce düşük bariyerli ve yüksek verimli Chat.TFT modülü satılarak güven kazanılır. Telemetri verisi, müşterinin manuel iş yükünün arttığını saptadığı an AI devreye girer: "Chat.TFT verileriniz birikti; şimdi bu veriyi kazanca dönüştürmek için AI BDR modülünü aktif edelim mi?"
                                    <br /><strong>Sonuç:</strong> Düşük giriş maliyetiyle içeri girip, zamanla artan (Upsell/Cross-sell) sadık müşteri geliri (LTV).
                                </>
                            ),
                            icon: <TrendingUp />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Müşteri Nabzı (Automated Sentiment & Intent Pulse)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Support ticket'larını, demo görüşmelerini ve sosyal medya mention'larını NLP (Doğal Dil İşleme) ile tarayıp; genel memnuniyeti ve rakip değişim taleplerini anlık raporlayan bir "Duygu Analiz" katmanı.
                                    <br /><strong>Sonuç:</strong> Müşterinin neyi sevip neyi sevmediğini sormadan, satır aralarından okuyan proaktif yönetim.
                                </>
                            ),
                            icon: <Activity />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Erken Uyarı Sistemi (Predictive Churn Early-Warning)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Bölüm 3'teki telemetri verisini kullanarak; son 7 gündür sisteme girmeyen veya belirli bir modülü (Örn: CRM.TFT) kullanmayı bırakan kullanıcıları "Riskli" olarak işaretleyip AI Agent'ı otomatik atama.
                                    <br /><strong>Sonuç:</strong> Müşteri gitmeye karar vermeden önce yapılan otonom müdahale ile elde tutma (Retention) oranında artış.
                                </>
                            ),
                            icon: <AlertCircle />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "İspat Fabrikası (Automated Case Study Engine)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Başarı hikayelerini manuel yazmak yerine; AI'nın, "X müşterisi CRM.TFT kullanarak verimliliğini %40 artırdı" gibi verileri çekip otonom olarak bir "Başarı Raporu" (Case Study) taslağı oluşturması.
                                    <br /><strong>Sonuç:</strong> Satış ekibinin eline her hafta taze, veriyle kanıtlanmış "sosyal kanıt" (Social Proof) sunulması.
                                </>
                            ),
                            icon: <Layout />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Kullanım Engeli Tespiti (UX Friction Detection)",
                            description: (
                                <>
                                    <strong>Eylem:</strong> Kullanıcıların arayüzde "Rage Click" (üst üste sinirli tıklama) yaptığı veya takıldığı noktaları ısı haritalarıyla (Heatmaps) saptayıp, Puppeteer üzerinden bu hataları simüle ederek yazılımcıya "Düzeltme Paketi" olarak sunma.
                                    <br /><strong>Sonuç:</strong> Kusursuz, sürtünmesiz ve prestijli bir kullanıcı deneyimi.
                                </>
                            ),
                            icon: <Monitor />,
                            colSpan: 1,
                            rowSpan: 1
                        }
                    ]}
                />
            </div>
        )
    },
    {
        section: 'tutundurma',
        supertitle: "Ölçüm",
        title: "VERİYLE KANITLANMIŞ BAŞARI (ROI)",
        layout: "hero",
        content: (
            <div className="w-full max-w-screen-2xl mx-auto p-12 glass-panel border-[var(--secondary-glow)]/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-[var(--secondary-glow)] mb-24">VERİYLE KANITLANMIŞ BAŞARI (ROI)</h2>
                <p className="text-sm text-white/60 mb-8 mt-6">Ölçülebilir metriklerle büyüme kanıtı</p>
                <BentoGrid
                    stackVertical={false}
                    fullWidth
                    items={[
                        {
                            title: "Ekonomik Verimlilik (LTV/CAC Oranı)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Bir müşteriyi edinme maliyeti (CAC) ile o müşterinin ömür boyu bıraktığı değer (LTV) arasındaki oran.
                                    <br /><strong>Hedef:</strong> LTV/CAC &gt; 3x. Pazarlama bütçesinin her kuruşunun 3 katı değer ürettiğinin ispatı.
                                </>
                            ),
                            icon: <BarChart3 />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Operasyonel Kaldıraç (AI vs. Human Ratio)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> AI Agent'ların (BDR ve Support) hallettiği iş yükünün, insan personelin vaktinden tasarruf ettirdiği saat/maliyet oranı.
                                    <br /><strong>Hedef:</strong> Operasyonel yükün %60'ının otonom sistemler tarafından taşınması.
                                </>
                            ),
                            icon: <Activity />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Ürün Sağlığı (Retention & Expansion)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Chat.TFT ile başlayan "Land & Expand" stratejisinin başarısı; yani mevcut müşterinin ek modüller alarak büyüme oranı (Net Revenue Retention - NRR).
                                    <br /><strong>Hedef:</strong> NRR &gt; %110. Yani hiç yeni müşteri gelmese bile mevcut portföyün kendi kendine büyümesi.
                                </>
                            ),
                            icon: <TrendingUp />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Büyüme Hızı (Growth Velocity)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Aylık Düzenli Gelir (MRR) artış hızı ve Otonom Satış Motoru'nun ürettiği "Sıcak Lead" (SQL) akışı.
                                    <br /><strong>Hedef:</strong> Manuel müdahale olmadan haftalık %5 stabil büyüme ivmesi.
                                </>
                            ),
                            icon: <Target />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Değere Ulaşma Süresi (Time to Value - TTV)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Müşterinin ürünü satın aldıktan sonra ilk somut faydaya (ilk lead veya çözülen ilk ticket) ulaşma süresi.
                                    <br /><strong>Hedef:</strong> &lt; 24 Saat (Sürtünmesiz giriş ispatı).
                                </>
                            ),
                            icon: <Zap />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "AI Performans Endeksi (AI Performance Index)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Puppeteer ve AI Agent'ların görev tamamlama başarısı ve insan personelden tasarruf ettirdiği toplam iş saati analizi.
                                    <br /><strong>Hedef:</strong> %98 Başarı.
                                </>
                            ),
                            icon: <Cpu />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Yayılma Katsayısı (Virality Coefficient - K-Factor)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Sayfa 12'deki Referans Motoru (PLG) aracılığıyla gelen her kullanıcının getirdiği yeni kullanıcı oranı.
                                    <br /><strong>Hedef:</strong> K &gt; 0.2 (Organik büyüme kanıtı).
                                </>
                            ),
                            icon: <Users />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Pazar Payı Endeksi (Market Share Index - Displacement)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Rakip platformlardan (HubSpot, Salesforce vb.) TFT'ye taşınan kurumsal hesapların büyüme hızı ve pazar payı kazanımı.
                                </>
                            ),
                            icon: <TrendingUp />,
                            colSpan: 1,
                            rowSpan: 1
                        },
                        {
                            title: "Geri Ödeme Süresi (Payback Period)",
                            description: (
                                <>
                                    <strong>Metrik:</strong> Bir müşterinin kendi maliyetini kaç ayda amorti ettiği.
                                    <br /><strong>Hedef:</strong> Bu, yatırımcı/yönetim için en kritik finansal veridir.
                                </>
                            ),
                            icon: <Database />,
                            colSpan: 1,
                            rowSpan: 1
                        }
                    ]}
                />
            </div>
        )
    },

    // ========================================
    // BÖLÜM 4: İŞLEYİŞ & KONTROL (Slides 9-10)
    // ========================================
    {
        section: 'isleyis',
        supertitle: "Sürdürülebilirlik",
        title: "Kendi Kendini İyileştiren Ekosistem",
        layout: "hero",
        content: (
            <div className="w-full max-w-screen-2xl mx-auto p-12 glass-panel border-amber-500/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-amber-500 mb-24">Kendi Kendini İyileştiren Ekosistem</h2>
                <p className="text-sm text-white/60 mb-8 mt-6 text-center">Kurumsal refleks ve sürekli iyileştirme</p>
                <BentoGrid
                    stackVertical={false}
                    fullWidth
                    accentColor="#f59e0b"
                    items={[
                    {
                        title: "Telemetri Odaklı Geliştirme",
                        description: (
                            <>
                                Kurulan <InfoBox content="Mixpanel ve Amplitude, temel olarak Ürün Analitiği (Product Analytics) kategorisinde yer alan, web siteleri ve mobil uygulamalardaki kullanıcı davranışlarını detaylı bir şekilde takip etmenizi sağlayan güçlü araçlardır.">Mixpanel/Amplitude</InfoBox> verileriyle, AR-GE bütçesini sadece en yüksek <InfoBox content="ROI (Return on Investment - Yatırım Getirisi), bir yatırımın veya harcamanın ne kadar kâr veya değer getirdiğini ölçen orandır. Pazarlama ve AR-GE bütçesinde hangi özelliğin en yüksek getiriyi sağladığını gösterir.">ROI</InfoBox> getiren özelliklere yönlendiren karar mekanizması.
                            </>
                        ),
                        icon: <Activity />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "AI Ajan İnce Ayarı (AI Agent Fine-Tuning)",
                        description: "Lansman verileriyle beslenen Puppeteer ve BDR ajanlarının, başarı oranlarını artırmak için sürekli olarak yeni \"Prompt Library\" setleriyle güncellenmesi.",
                        icon: <Cpu />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "UI/UX Kütüphanesi Standartizasyonu",
                        description: "\"Prestij\" kaybını önlemek için, her yeni modülün (CRM.TFT, Chat.TFT) ana tasarım diline %100 uyumunu denetleyen otonom tasarım kontrolü.",
                        icon: <Layout />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "Kayıp Önleme Döngüsü (Churn Prevention Loop)",
                        description: "\"Lead Recovery\" mekanizmasını bir adım öteye taşıyarak, kullanıcı davranışlarındaki anomalileri önceden sezip proaktif destek sürecini başlatan analitik katman.",
                        icon: <Shield />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "Sürekli İyileştirme Döngüsü",
                        description: "Veri (Telemetri) → Analiz (AI) → Aksiyon (Agentic Workflows) → Ölçüm (KPI) döngüsünün kurumsal bir refleks haline getirilmesi.",
                        icon: <Zap />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "Tüketim Tabanlı Nakit Akışı",
                        description: "\"Kullandığın kadar öde\" modeliyle düşük giriş bariyeri ve sürekli taze nakit girişi.",
                        icon: <Target />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "Kârlı Büyüme (LTV/CAC)",
                        description: "Pazarlama bütçesinin her kuruşunun minimum 3 katı değer ürettiği Predictable Revenue (Öngörülebilir Gelir) modeli.",
                        icon: <BarChart3 />,
                        colSpan: 1,
                        rowSpan: 1
                    },
                    {
                        title: "Operasyonel Kaldıraç",
                        description: "Müşteri sayısı artsa bile, AI Agent'lar sayesinde personel maliyetinin sabit kalmasıyla sağlanan yüksek kâr marjı (Operatör Başına Ciro).",
                        icon: <TrendingUp />,
                        colSpan: 1,
                        rowSpan: 1
                    }
                ]}
                />
            </div>
        )
    },
    {
        section: 'isleyis',
        supertitle: "Maliyetler & Riskler",
        title: "MALİYETLER & RİSKLER",
        layout: "hero",
        content: (
            <div className="w-full max-w-screen-2xl mx-auto p-12 glass-panel border-amber-500/20 relative">
                <h2 className="text-center text-4xl md:text-5xl font-black neon-text text-amber-500 mb-24">MALİYETLER & RİSKLER</h2>
                <p className="text-sm text-white/60 mb-8 mt-6 text-center max-w-3xl mx-auto leading-relaxed">Bu maliyetler bir harcama değil; manuel yönetimdeki &apos;verimlilik sızıntılarını&apos; durdurmak için alacağımız bir sigortadır. En pahalı sistem, ölçemediğimiz ve otonomlaştıramadığımız sistemdir.</p>

                <h3 className="text-amber-500 font-bold text-lg mb-4">1. Tahmini Maliyet Kalemleri (Yıllık Projeksiyon)</h3>
                <div className="overflow-x-auto mb-12">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-amber-500/30">
                                <th className="text-left py-3 px-4 text-amber-500 font-semibold">Kalem</th>
                                <th className="text-left py-3 px-4 text-amber-500 font-semibold">Açıklama</th>
                                <th className="text-left py-3 px-4 text-amber-500 font-semibold">Maliyet Etkisi</th>
                            </tr>
                        </thead>
                        <tbody className="text-white/80">
                            <tr className="border-b border-white/10 hover:bg-amber-500/5">
                                <td className="py-3 px-4 font-medium">SaaS Tool Stack</td>
                                <td className="py-3 px-4">Apollo.io, Mixpanel, Amplitude, Linkedin Sales Nav.</td>
                                <td className="py-3 px-4">Orta (Abonelik bazlı)</td>
                            </tr>
                            <tr className="border-b border-white/10 hover:bg-amber-500/5">
                                <td className="py-3 px-4 font-medium">AI API & Infrastructure</td>
                                <td className="py-3 px-4">OpenAI/Anthropic API kullanımı ve Puppeteer sunucu maliyetleri.</td>
                                <td className="py-3 px-4">Değişken (Kullanım odaklı)</td>
                            </tr>
                            <tr className="border-b border-white/10 hover:bg-amber-500/5">
                                <td className="py-3 px-4 font-medium">Talent & Upskilling</td>
                                <td className="py-3 px-4">Mevcut ekibin AI/SaaS yetkinliği için eğitim veya yeni uzman alımı.</td>
                                <td className="py-3 px-4">Yüksek (Yatırımın ana odağı)</td>
                            </tr>
                            <tr className="border-b border-white/10 hover:bg-amber-500/5">
                                <td className="py-3 px-4 font-medium">Digital Marketing</td>
                                <td className="py-3 px-4">LinkedIn Ads ve SEO odaklı "Hyper-Segmented" kampanya bütçesi.</td>
                                <td className="py-3 px-4">Yüksek (Ölçeklenme motoru)</td>
                            </tr>
                            <tr className="border-b border-white/10 hover:bg-amber-500/5">
                                <td className="py-3 px-4 font-medium">Migration & Ops</td>
                                <td className="py-3 px-4">Eski verilerin yeni sisteme taşınması ve altyapı modernizasyonu.</td>
                                <td className="py-3 px-4">Düşük (Tek seferlik)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-amber-500 font-bold text-lg mb-4">2. Riskler ve Önlemler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Shield size={18} /> Operasyonel Risk: Yetkinlik Boşluğu</h4>
                        <p className="text-sm text-white/80 leading-relaxed"><strong>Risk:</strong> Mevcut ekibin otonom araçlara (Apollo, Mixpanel) ve AI iş akışlarına uyum sağlayamaması.</p>
                        <p className="text-sm text-white/80 leading-relaxed mt-2"><strong>Önlem:</strong> Geçiş döneminde 3 aylık bir "Internal Academy" süreci başlatılmalı; gerekirse dışarıdan "Growth Consultant" desteği alınmalıdır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><BarChart3 size={18} /> Finansal Risk: SaaS Çukuru (J-Curve)</h4>
                        <p className="text-sm text-white/80 leading-relaxed"><strong>Risk:</strong> Kurumsal (Enterprise) satıştan modüler SaaS'a geçişte ortalama fatura tutarının (ACV) geçici olarak düşmesi.</p>
                        <p className="text-sm text-white/80 leading-relaxed mt-2"><strong>Önlem:</strong> "Land & Expand" stratejisiyle, küçük başlayan müşterilerin 6 ay içinde "Upsell" ile büyük paketlere taşınması zorunlu kılınmalıdır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Cpu size={18} /> Teknik Risk: API Bağımlılığı</h4>
                        <p className="text-sm text-white/80 leading-relaxed"><strong>Risk:</strong> LinkedIn veya OpenAI'ın API politikalarını değiştirmesiyle otonom süreçlerin (Puppeteer/BDR) aksaması.</p>
                        <p className="text-sm text-white/80 leading-relaxed mt-2"><strong>Önlem:</strong> "Multi-Model" stratejisi (Sadece OpenAI değil, Anthropic veya Llama entegrasyonu) ve yedekli veri çekme protokolleri kurulmalıdır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Target size={18} /> Pazar Riski: Odak Dağılması</h4>
                        <p className="text-sm text-white/80 leading-relaxed"><strong>Risk:</strong> Her sektöre aynı anda hitap etmeye çalışırken pazarlama bütçesinin (CAC) verimsiz harcanması.</p>
                        <p className="text-sm text-white/80 leading-relaxed mt-2"><strong>Önlem:</strong> İlk 2 çeyrekte sadece 2 dikey sektöre (Hero Segments) odaklanılmalı, başarı kanıtlandıktan sonra yatay büyüme başlatılmalıdır.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        section: 'kapanis',
        supertitle: "Karar",
        title: "KURUMSAL DÖNÜŞÜM VE YÖNETİM DİSİPLİNİ",
        layout: "hero",
        content: (
            <div className="text-center max-w-5xl mx-auto relative z-10">
                <h2 className="text-center text-3xl md:text-5xl font-black neon-text text-[var(--primary-glow)] mb-6 leading-tight">KURUMSAL DÖNÜŞÜM VE YÖNETİM DİSİPLİNİ</h2>
                <p className="text-sm text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">TFT, kişisel kararlardan veri odaklı stratejilere geçmek zorundadır. Planlama bir bürokrasi değil, sermaye koruma kalkanıdır.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Shield size={18} /> "Öyle Gerekti" Stratejisinin Sonu</h4>
                        <p className="text-sm text-white/80 leading-relaxed">Plansız her hamle, şirketin geleceğinden çekilen yüksek faizli bir kredidir. Kaynağı (zaman ve para) "deneme-yanılma" ile çöpe atmak, kurumsal bir hobi değil, finansal bir intihardır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Users size={18} /> Kişilere Değil, Süreçlere Bağımlılık</h4>
                        <p className="text-sm text-white/80 leading-relaxed">Şirketin hafızası bir kişinin iki dudağı arasında kalıyorsa, o şirket sadece o kişinin ömrü kadar yaşar. Bilgi dökümante edilmeli, kararlar algoritmik bir akışa bağlanmalıdır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Target size={18} /> Pazara Küsmek Yerine Pazarla Tanışmak</h4>
                        <p className="text-sm text-white/80 leading-relaxed">"Bizim ürün çok iyi ama pazar anlamıyor" bahanesi, iflas eden şirketlerin mezar taşı yazısıdır. Pazarın ne istediğini planlamayan, pazarın neyi yok edeceğine şahitlik eder.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><AlertCircle size={18} /> Acil Durum Yönetimi vs. Yangın Söndürmecilik</h4>
                        <p className="text-sm text-white/80 leading-relaxed">Sürekli "yangın söndürmek" (bug fix, acil talep, müşteri krizi) bir başarı değil, planlama zafiyetidir. Modern yönetim, yangın çıkmadan önce ıslak zeminleri planlar.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><BarChart3 size={18} /> Yatırımın Geri Dönüşü (ROI) Körü Olmamak</h4>
                        <p className="text-sm text-white/80 leading-relaxed">Her yeni "parlak fikir", "Bunun bize getirisi ne olacak?" sorusuna verilecek matematiksel bir cevaba sahip olmalıdır. Cevabı olmayan fikir, sadece bir "vakit kaybı"dır.</p>
                    </div>
                    <div className="p-6 glass-panel border-amber-500/20">
                        <h4 className="flex items-center gap-2 text-amber-500 mb-3 font-bold"><Activity size={18} /> Agile Disiplini vs. Kaos Esnekliği</h4>
                        <p className="text-sm text-white/80 leading-relaxed">"Esneğiz" diyerek her gün rota değiştirmek çeviklik değil, pusulasızlıktır. Planlama, rüzgarın estiği yöne gitmek değil, rüzgarı varılacak hedefe göre kullanmaktır.</p>
                    </div>
                </div>
                <div className="mt-12 text-lg font-bold tracking-[0.3em] uppercase opacity-30">TeamForce Technologies © 2026</div>
            </div>
        )
    }
];
