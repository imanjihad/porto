import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Cpu, 
  Code2, 
  Sparkles, 
  Video, 
  Terminal, 
  Palette, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ChevronRight,
  Send,
  ArrowUpRight,
  Command,
  Globe,
  Type,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#080808] text-white overflow-hidden scroll-smooth font-sans">
      <div className="grain" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 md:px-12 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-full">
              <Command size={14} />
            </div>
            <span className="text-base font-black tracking-tight uppercase whitespace-nowrap font-headline">Portofolio Iman</span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center">
            {["Beranda", "Tentang Saya", "Portofolio", "Kontak"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#0c6780] hover:text-white transition-all">
              Hubungi Saya
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808] z-10" />
            <img 
              src="https://picsum.photos/seed/tech/1920/1080?blur=10" 
              alt="Background" 
              className="w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-6 glass-card px-4 py-1.5 rounded-full border border-white/10"
            >
              <span className="w-1.5 h-1.5 bg-[#0c6780] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Tersedia untuk Kolaborasi</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-7xl md:text-[9vw] font-black leading-tight tracking-tighter text-outline font-headline"
                >
                  IMAN JIHAD
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl md:text-5xl font-black text-[#0c6780] tracking-tight font-headline uppercase"
                >
                  AI Specialist & Vibe Coder
                </motion.span>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-8"
            >
              Kreatif dengan kolaborasi AI sejak 2019. Menciptakan solusi inovatif untuk efisiensi bisnis digital melalui <span className="text-white font-medium">Web Development</span>, <span className="text-white font-medium">AI Automation</span>, dan <span className="text-white font-medium">Visual Identity</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex justify-center flex-wrap gap-3"
            >
               {["Expert", "Inovator", "Artisanal", "Web Developer"].map((tag) => (
                <span key={tag} className="px-5 py-2 glass-card rounded-xl text-[9px] font-bold tracking-widest uppercase text-white/60 border border-white/5">
                  [{tag}]
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <section className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden">
          <motion.div 
            variants={marqueeVariants}
            animate="animate"
            className="flex whitespace-nowrap gap-12"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {["REACT", "NEXT.JS", "GEMINI AI", "TAILWIND CSS", "PYTHON", "AI AUTOMATION", "WEB DEVELOPMENT"].map((skill) => (
                  <span key={skill} className="text-2xl md:text-3xl font-black text-white/10 uppercase font-headline">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section id="tentang-saya" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative aspect-[4/5] md:aspect-square">
              <div className="absolute inset-0 bg-[#0c6780]/20 blur-3xl opacity-30 rounded-full" />
              <div className="relative h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/iman-p/800/800" 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0c6780]">Tentang Saya</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight font-headline">Mentransformasikan Ide Menjadi Pengalaman Digital</h2>
              </div>
              <p className="text-lg text-white/50 leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun, saya berfokus pada Web Development, Animasi AI, dan Identitas Visual, menggabungkan desain estetika tinggi dengan teknologi AI terbaru.
              </p>
              <div className="p-6 border-l-2 border-[#0c6780] bg-white/[0.02] rounded-r-2xl">
                <p className="text-xl font-medium text-white/80 italic leading-snug">
                  "Memanfaatkan AI sebagai alat profesional, bukan pengganti."
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#0c6780] hover:text-white transition-all shadow-lg">
                  Unduh CV
                </button>
                <button className="px-8 py-4 glass-card text-white rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">
                  Sertifikat
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0c6780]">Layanan Saya</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-headline">Solusi Digital AI</h2>
              </div>
              <p className="max-w-xs text-white/30 text-base leading-relaxed">
                Membantu bisnis berkembang di era digital dengan otomatisasi cerdas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Cpu, title: "AI Product Development", desc: "Solusi otomasi berbasis AI untuk efisiensi Bisnis." },
                { icon: Globe, title: "Web Development", desc: "Portofolio, landing page, dan aplikasi web modern." },
                { icon: Code2, title: "Vibe Coder Expertise", desc: "Coding berbasis LLM untuk penerapan super cepat." },
                { icon: Video, title: "AI Video & Animation", desc: "Motion graphics dan branding video artistik AI." },
                { icon: Type, title: "Prompt Engineering", desc: "Instruksi kompleks untuk output AI yang presisi." },
                { icon: Palette, title: "Branding & Logo Design", desc: "Spesialis identitas visual ikonik & modern." }
              ].map((service) => (
                <motion.div 
                  key={service.title}
                  {...fadeIn} 
                  className="glass-card p-10 rounded-3xl border border-white/5 hover:border-[#0c6780]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0c6780]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0c6780]/30 transition-colors">
                    <service.icon size={24} className="text-[#0c6780]" />
                  </div>
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight font-headline">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 px-6 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { val: "2+", label: "Proyek Skala Besar" },
              { val: "6+", label: "Sertifikasi Digital" },
              { val: "4+", label: "Tahun Pengalaman" }
            ].map((metric, idx) => (
              <motion.div {...fadeIn} key={idx} className="space-y-1">
                <span className="text-6xl font-black tracking-tighter text-[#0c6780] block font-headline">{metric.val}</span>
                <p className="text-[10px] font-bold uppercase text-white/20 tracking-widest">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio / Education */}
        <section id="portofolio" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0c6780]">Portofolio</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-headline text-outline">Sertifikasi</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-white/50">
                <GraduationCap size={16} className="text-[#0c6780]" /> S1 Hukum Bisnis (UT)
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-white/50">
                <GraduationCap size={16} className="text-[#0c6780]" /> S1 Hukum Perdata
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Graphic Designer (2021)", issuer: "BNSP Indonesia", id: "1" },
              { title: "AI Fundamentals", issuer: "Global AI Council", id: "2" },
              { title: "Advanced Branding", issuer: "Design Institute", id: "3" },
              { title: "Frontend Mastery", issuer: "Tech Academy", id: "4" },
              { title: "Responsive Web Design", issuer: "CodeCamp", id: "5" },
              { title: "Prompt Lab", issuer: "Future AI", id: "6" }
            ].map((cert) => (
              <motion.div 
                key={cert.title}
                {...fadeIn}
                className="group glass-card p-4 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden mb-6">
                   <img 
                    src={`https://picsum.photos/seed/cert-${cert.id}/600/400`} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="px-2 pb-2">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-1 font-headline">{cert.title}</h4>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-24 px-6 bg-white text-black rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <motion.div {...fadeIn} className="space-y-12">
              <div className="space-y-4">
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0c6780]">Hubungi Saya</span>
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase font-headline">Ayo Mulai<br/>Kolaborasi.</h2>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", val: "hello@portfolioiman.id" },
                  { icon: Phone, label: "WhatsApp", val: "+62 8xx-xxxx-xxxx" },
                  { icon: MapPin, label: "Lokasi", val: "Palu, Sulawesi Tengah" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-[#0c6780] group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/20">{item.label}</p>
                      <p className="text-xl font-black tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-neutral-50 p-10 rounded-[2rem] border border-neutral-200">
               <h3 className="text-xl font-black mb-8 uppercase tracking-widest font-headline">Kirim Pesan</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-black/40">Nama</label>
                    <input type="text" className="w-full bg-white border border-neutral-200 rounded-xl p-4 focus:ring-1 focus:ring-[#0c6780] outline-none font-bold text-sm" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-black/40">Pesan</label>
                    <textarea rows={4} className="w-full bg-white border border-neutral-200 rounded-xl p-4 focus:ring-1 focus:ring-[#0c6780] outline-none font-bold text-sm resize-none" placeholder="Ceritakan ide Anda..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-black text-white rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0c6780] transition-colors">
                     <Send size={18} /> Kirim Pesan
                  </button>
               </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#080808] py-20 px-8 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <span className="text-3xl font-black tracking-tighter uppercase font-headline">Portofolio Iman</span>
              <p className="text-white/30 max-w-xs text-sm leading-relaxed">
                Membangun masa depan digital dengan AI & kreativitas tanpa batas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Connect</p>
                <div className="flex flex-col gap-2 text-xs font-bold text-white/40">
                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Links</p>
                <div className="flex flex-col gap-2 text-xs font-bold text-white/40">
                  <a href="#about" className="hover:text-white transition-colors">Tentang Saya</a>
                  <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-20 hover:opacity-100 transition-opacity">
               {[
                { name: "React", logo: "https://cdn.simpleicons.org/react/FFFFFF" },
                { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
                { name: "Gemini", logo: "https://cdn.simpleicons.org/google/FFFFFF" },
                { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/FFFFFF" },
                { name: "Python", logo: "https://cdn.simpleicons.org/python/FFFFFF" }
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2">
                  <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                  <span className="font-bold text-[9px] uppercase tracking-tighter">{tech.name}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">© 2024 PORTFOLIO IMAN. SELURUH HAK CIPTA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
