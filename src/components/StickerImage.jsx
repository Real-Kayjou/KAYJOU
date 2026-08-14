import { motion } from 'framer-motion'

/**
 * A "peel-and-stick" style image: slight resting rotation,
 * straightens and lifts on hover. Used for all the sticker PNGs.
 */
export default function StickerImage({
  src,
  alt = '',
  rotate = -6,
  className = '',
  glow = false,
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ rotate }}
      whileHover={{ rotate: 0, scale: 1.06, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      draggable={false}
      className={`select-none ${glow ? 'crimson-glow' : ''} ${className}`}
    />
  )
}
