import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS, SOCIALS } from '../data/content'
import jpegSticker from '../assets/images/jpeg_sticker.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 sm:px-10 py-4 sm:py-5 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-neutral-950/50 border-b border-bone/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <a href="#top" className="font-display font-extrabold text-lg tracking-tight">
        KAYJOU<span className="text-crimson-glow">.</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="tag-eyebrow text-xs text-bone-dim hover:text-bone transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <img
          src={jpegSticker}
          alt=""
          className="w-7 h-7 opacity-80 hover:opacity-100 hover:-rotate-6 transition-transform duration-300 hidden sm:block"
        />
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="group relative w-9 h-9 rounded-full border border-bone/20 flex items-center justify-center hover:border-crimson-glow transition-colors"
          aria-label="GitHub — Real-Kayjou"
        >
          <CameraIcon />
          <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 bg-crimson-glow/10 -z-10" />
        </a>
      </div>
    </motion.header>
  )
}

function CameraIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  )
}
