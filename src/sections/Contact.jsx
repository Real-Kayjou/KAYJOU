import { motion } from 'framer-motion'
import phone from '../assets/images/PHONE.png'
import { SOCIALS } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-10 py-28 flex flex-col items-center text-center">
      <motion.img
        src={phone}
        alt="red telephone receiver"
        whileHover={{ rotate: [0, -6, 6, -4, 4, 0] }}
        transition={{ duration: 0.6 }}
        className="w-20 sm:w-24 mb-8 crimson-glow cursor-pointer"
      />

      <p className="tag-eyebrow text-xs text-crimson-glow mb-3">get in touch</p>
      <h2 className="font-display font-extrabold text-4xl sm:text-6xl max-w-2xl leading-tight">
        Got something worth building?
      </h2>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:hello@kayjou.dev"
          className="tag-eyebrow text-xs px-6 py-3 rounded-full bg-crimson border border-bone/10 hover:bg-crimson-bright transition-colors"
        >
          hello@kayjou.dev
        </a>
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="tag-eyebrow text-xs px-6 py-3 rounded-full border border-bone/20 hover:border-crimson-glow transition-colors"
        >
          github ↗
        </a>
      </div>

      <p className="mt-20 text-bone-dim/50 text-xs tag-eyebrow">
        kasserine, tunisia — built with r3f
      </p>
    </section>
  )
}
