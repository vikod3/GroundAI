# GroundAI — Hero Section Prompt

Create a single-page hero section with a fullscreen background image, glassmorphic navigation, and cinematic typography. Use React + Vite + Tailwind CSS + TypeScript (no shadcn/ui).

## Background Image

- Fullscreen `backgroundImage` on the root `div` using inline `style`
- Source URL: `https://res.cloudinary.com/deplilexq/image/upload/q_auto/f_auto/v1777215225/image1_cetqft.png`
- CSS properties: `backgroundSize: 'cover'`, `backgroundPosition: 'center'`, `backgroundAttachment: 'fixed'`
- Root div: `min-h-screen bg-black text-white overflow-hidden relative flex flex-col`

## Fonts

- **Display/serif accent**: Georgia, "Times New Roman", serif — applied inline via `style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}` on italic text
- **Body/sans-serif**: System default sans-serif (Tailwind's default `font-sans`)
- Italic accent text uses `fontStyle: 'italic'` and `fontLight` weight for elegant serif contrast against bold sans-serif headings
- No Google Fonts imports required — Georgia is a web-safe font

## Color Theme (applied directly via Tailwind classes, no CSS variables)

```
Background:     bg-black                (#000000)
Foreground:     text-white              (#FFFFFF)
Muted text:     text-white/90           (90% opacity white)
Subtle text:    text-white/70           (70% opacity white, for descriptions)
Glass BG:       bg-[#2a2a2a]/40         (dark gray at 40% opacity)
Glass border:   border-white/10         (white at 10% opacity)
Button BG:      bg-white/5              (white at 5% opacity)
Button border:  border-white/30         (white at 30% opacity)
CTA button:     bg-white text-black     (inverted)
```

## Navigation Bar

- `flex items-center justify-between px-8 py-5 z-10 relative`
- **Logo** (left): `Sparkles` icon from lucide-react (`size={18}`, `strokeWidth={1.5}`, `text-white`) + "GroundAI" text (`text-base font-medium tracking-wide text-white`), wrapped in `flex items-center gap-2`
- **Nav pill** (right): pill-shaped container with `flex items-center gap-6 bg-[#2a2a2a]/40 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-1.5 py-1.5`
- Nav links inside pill: Product, Platform, Customers, Company — all `text-white/90 text-[13px] font-medium tracking-wide hover:text-white transition-colors`
- **Login button** (inside pill, rightmost): `bg-white text-black text-[13px] font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition-colors`
- No mobile hamburger menu — nav pill hidden on mobile, visible on `md:flex`

## Hero Section

- `flex-1 flex items-center justify-center relative z-10`
- Inner content: `text-center max-w-2xl px-4`
- **H1**: `text-5xl leading-tight mb-8 tracking-tight`
  - "Meet GroundAI." — `<span className="font-semibold block">`
  - "Redefine space" — `<em className="font-light not-italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>` (NOTE: `not-italic` Tailwind class is overridden by inline `fontStyle: 'italic'`, so the serif italic renders correctly)
  - " with" — `<span className="font-semibold">`
  - "intelligent design" — `<span className="font-semibold block">`
- **CTA button**: "Start free decoration" — `bg-white text-black text-sm font-medium px-7 py-3 rounded-full hover:bg-white/90 transition-all hover:scale-[1.03] active:scale-95`

## Bottom Row

- `flex items-end justify-between px-8 pb-10 relative z-10`
- **Left side** — description text: `text-xs leading-relaxed max-w-[280px] space-y-1`
  - "It helps you imagine, plan, and refine spaces through natural conversations."
  - "From choosing colors and layouts to suggesting furniture and décor, it adapts to your taste."
- **Right side** — action buttons: `flex flex-col gap-2 items-end`
  - "Solutions for complex spaces" button: `bg-white/5 border border-white/30 text-white/90 text-[13px] font-medium px-4 py-2 rounded-[8px] hover:bg-white/10 transition-colors backdrop-blur-sm`
  - Button pair row: `flex items-center gap-2`
    - ArrowUpRight icon button: `bg-white/5 border border-white/30 text-white px-3 py-2 rounded-[8px] hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center` — `<ArrowUpRight size={18} strokeWidth={1.5} />`
    - "Conversational & Action" button: same glass style as above with text

## Dependencies

- `lucide-react` — icons (`Sparkles`, `ArrowUpRight`)
- `@supabase/supabase-js` — installed but not yet integrated
- No shadcn/ui, no Google Fonts, no additional CSS libraries

## Animations (CSS keyframes + classes)

```css
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }
.animate-fade-rise-delay-3 { animation: fade-rise 0.8s ease-out 0.6s both; }
```

- H1 gets `animate-fade-rise`
- CTA button gets `animate-fade-rise-delay`
- Bottom-left description gets `animate-fade-rise-delay-2`
- Bottom-right buttons get `animate-fade-rise-delay-3`

## Layout

No decorative blobs, radial gradients, or overlays. Minimalist, cinematic, vertically distributed layout — nav pinned to top, hero centered, actions pinned to bottom. The background image provides all visual depth. The `Sparkles` icon is the only decorative element in the logo. All content uses `relative z-10` to sit above the background.
