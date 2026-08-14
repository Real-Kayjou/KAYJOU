import { motion } from 'framer-motion'
import FloatingModel from '../components/FloatingModel'
import StickerImage from '../components/StickerImage'
import tatos from '../assets/images/TATOS.png'
import starTribal from '../assets/images/star_tribal_sticker.jpg'
import earpods from '../assets/images/earpods.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex flex-col items-center justify-center text-center px-5 sm:px-10 pt-24 pb-16 overflow-hidden"
    >
      {/* wing linework, faint, upper right */}
      <img
        src={tatos}
        alt=""
        className="pointer-events-none select-none absolute -top-10 right-[-12%] w-[75vw] max-w-[620px] opacity-20 crimson-glow"
      />

      {/* massive Spider-Man mark directly behind the name — live 3D model, purely decorative */}
      <FloatingModel
        url="/models/spiderman-logo.glb"
        scale={3.2}
        position={[0, -9.43, 0]}
        cameraPosition={[0, 0, 11]}
        fov={45}
        floatSpeed={0.6}
        floatIntensity={0.3}
        rotationIntensity={0.25}
        className="pointer-events-none select-none absolute inset-0 z-0 opacity-[0.15]"
      />

      {/* floating 3D model, sits behind the copy */}
      <FloatingModel
        url="/models/ps4_games_collection.glb"
        scale={0.55}
        position={[0, -0.4, 0]}
        cameraPosition={[3.4, 1.6, 4.2]}
        className="pointer-events-none absolute inset-0 z-[1] opacity-90"
      />

      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="tag-eyebrow text-xs text-crimson-glow mb-5"
        >
          builder / kasserine, tunisia
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display font-extrabold leading-[0.95] text-[13vw] sm:text-[7rem] md:text-[8rem] tracking-tight text-outline"
        >
          KAY<span className="text-crimson-glow">JOU</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-xl text-bone-dim text-base sm:text-lg leading-relaxed"
        >
          I build personal AI systems, bots, and offline-first tools from
          scratch — local LLMs, voice pipelines, and the occasional
          Minecraft companion with a memory of its own.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            className="tag-eyebrow text-xs px-5 py-3 rounded-full bg-crimson text-bone border border-bone/10 hover:bg-crimson-bright transition-colors"
          >
            see the work
          </a>
          <StickerImage
            src={earpods}
            alt="earpods sticker"
            rotate={8}
            className="w-14 h-14 opacity-90"
          />
        </motion.div>
      </div>

      <StickerImage
        src={starTribal}
        alt=""
        rotate={-10}
        className="hidden md:block pointer-events-none absolute top-24 left-6 w-32 opacity-70 mix-blend-lighten z-[1]"
      />
    </section>
  )
}
