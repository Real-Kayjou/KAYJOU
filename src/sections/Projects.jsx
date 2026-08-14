import { motion } from 'framer-motion'
import { PROJECTS } from '../data/content'
import FloatingModel from '../components/FloatingModel'
import StickerImage from '../components/StickerImage'
import pin from '../assets/images/actual_pin.png'
import nameTag from '../assets/images/name_tag_orange.jpg'

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 sm:px-10 py-28">
      <div className="flex items-center gap-4 mb-14">
        <img src={nameTag} alt="" className="w-10 opacity-90 rounded-sm" />
        <div>
          <p className="tag-eyebrow text-xs text-crimson-glow">selected work</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Projects</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative glass-card rounded-2xl p-6 pt-9 flex flex-col"
          >
            <StickerImage
              src={pin}
              alt=""
              rotate={-18}
              className="absolute -top-4 -left-3 w-9 h-9 z-10"
            />

            <span className="tag-eyebrow text-[10px] text-crimson-glow mb-2">
              {project.tag} · {project.year}
            </span>
            <h3 className="font-display font-bold text-xl mb-3">{project.title}</h3>
            <p className="text-sm text-bone-dim leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="tag-eyebrow text-[10px] px-2 py-1 rounded-full border border-bone/15 text-bone-dim"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noreferrer"
              className="tag-eyebrow text-[10px] mt-5 inline-flex items-center gap-1 text-bone hover:text-crimson-glow transition-colors w-fit"
            >
              view repo ↗
            </a>
          </motion.article>
        ))}
      </div>

      {/* big centered, fully spinnable memory card */}
      <div className="mt-20 glass-card rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center">
        <p className="tag-eyebrow text-[10px] text-crimson-glow mb-1">save file</p>
        <p className="text-sm text-bone-dim max-w-md mb-6">
          PS2-style 8MB memory card, rendered live in three.js. Drag to spin
          it 360° — it's the real model, not a screenshot.
        </p>
        <FloatingModel
          url="/models/memory_card/scene.gltf"
          scale={5}
          position={[0, 0, 0]}
          cameraPosition={[0, 0.6, 3.2]}
          interactive
          className="w-full max-w-md h-72 sm:h-96 cursor-grab active:cursor-grabbing"
        />
      </div>
    </section>
  )
}
