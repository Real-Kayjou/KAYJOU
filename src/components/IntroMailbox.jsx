import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'

const DRAG_THRESHOLD = -140

export default function IntroMailbox({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const y = useMotionValue(0)

  const flapRotate = useTransform(y, [0, DRAG_THRESHOLD], [0, -140])
  const glow = useTransform(y, [0, DRAG_THRESHOLD], [0.15, 0.9])
  const hintOpacity = useTransform(y, [0, -40], [1, 0])
  const boxShadow = useTransform(glow, (v) => `0 0 ${40 * v}px rgba(196,30,58,${v})`)

  function handleDragEnd(_, info) {
    if (info.offset.y < DRAG_THRESHOLD || info.velocity.y < -600) {
      setOpening(true)
      setTimeout(onOpen, 850)
    }
  }

  return (
    <AnimatePresence>
      {!opening ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(circle at 50% 55%, rgba(73,17,28,0.55), transparent 60%)',
            }}
          />

          <motion.p
            style={{ opacity: hintOpacity }}
            className="tag-eyebrow mb-10 text-bone-dim text-xs"
          >
            drag upward to open
          </motion.p>

          <div className="relative">
            {/* package body */}
            <motion.div
              style={{ boxShadow }}
              className="relative w-40 h-28 sm:w-52 sm:h-36 rounded-md border border-bone/15 bg-crimson/20 glass-card overflow-hidden"
            >
              <div className="absolute inset-x-0 top-1/2 h-px bg-bone/15" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-bone/15" />
              <span className="absolute bottom-2 left-3 tag-eyebrow text-[10px] text-bone-dim">
                K.
              </span>
            </motion.div>

            {/* draggable flap */}
            <motion.div
              drag="y"
              dragConstraints={{ top: DRAG_THRESHOLD, bottom: 0 }}
              dragElastic={0.15}
              style={{ y, rotateX: flapRotate }}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: 'grabbing' }}
              className="absolute -top-3 left-0 right-0 h-16 sm:h-20 origin-bottom cursor-grab touch-none"
            >
              <svg
                viewBox="0 0 200 90"
                className="w-full h-full crimson-glow"
                style={{ transformOrigin: '50% 100%' }}
              >
                <polygon
                  points="4,88 100,10 196,88"
                  fill="#49111c"
                  stroke="#f2f4f3"
                  strokeOpacity="0.2"
                />
              </svg>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: hintOpacity }}
            className="mt-10 flex flex-col items-center gap-1 text-bone-dim"
          >
            <span className="text-xs tag-eyebrow">kayjou</span>
            <ChevronUp />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function ChevronUp() {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
    >
      <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}
