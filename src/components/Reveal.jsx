import { motion } from 'framer-motion'

// Fades and lifts content into view once. Reduced-motion users get no movement
// (handled globally by <MotionConfig reducedMotion="user"> in App.jsx).
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

// Image wrapper that "opens" like a curtain when scrolled into view.
export function ImageReveal({ className = '', delay = 0, children }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
