import { ArrowUpRight, Sparkles } from 'lucide-react';

function App() {
  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative flex flex-col"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/deplilexq/image/upload/q_auto/f_auto/v1777215225/image1_cetqft.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 z-10 relative">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-white" strokeWidth={1.5} />
          <span className="text-white text-base font-medium tracking-wide">GroundAI</span>
        </div>
        <div className="flex items-center gap-6 bg-[#2a2a2a]/40 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-1.5 py-1.5">
          <a href="#" className="text-white/90 text-[13px] font-medium tracking-wide hover:text-white transition-colors">Product</a>
          <a href="#" className="text-white/90 text-[13px] font-medium tracking-wide hover:text-white transition-colors">Platfrom</a>
          <a href="#" className="text-white/90 text-[13px] font-medium tracking-wide hover:text-white transition-colors">Customers</a>
          <a href="#" className="text-white/90 text-[13px] font-medium tracking-wide hover:text-white transition-colors">Company</a>
          <button className="bg-white text-black text-[13px] font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Center */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-5xl leading-tight mb-8 tracking-tight">
            <span className="font-semibold block">Meet GroundAI.</span>
            <span className="block">
              <em
                className="font-light not-italic"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
              >
                Redefine space
              </em>
              <span className="font-semibold"> with</span>
            </span>
            <span className="font-semibold block">intelligent design</span>
          </h1>
          <button className="bg-white text-black text-sm font-medium px-7 py-3 rounded-full hover:bg-white/90 transition-all hover:scale-[1.03] active:scale-95">
            Start free decoration
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-end justify-between px-8 pb-10 relative z-10">
        <div className="text-white/45 text-xs leading-relaxed max-w-[280px] space-y-1">
          <p>It helps you imagine, plan, and refine spaces through natural conversations.</p>
          <p>From choosing colors and layouts to suggesting furniture and décor, it adapts to your taste.</p>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <button className="bg-white/5 border border-white/30 text-white/90 text-[13px] font-medium px-4 py-2 rounded-[8px] hover:bg-white/10 transition-colors backdrop-blur-sm">
            Solutions for complex spaces
          </button>
          <div className="flex items-center gap-2">
            <button className="bg-white/5 border border-white/30 text-white px-3 py-2 rounded-[8px] hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </button>
            <button className="bg-white/5 border border-white/30 text-white/90 text-[13px] font-medium px-4 py-2 rounded-[8px] hover:bg-white/10 transition-colors backdrop-blur-sm">
              Conversational &amp; Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
