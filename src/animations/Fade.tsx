import {motion} from 'framer-motion'

interface FadeProps {
    children: React.ReactNode;
    duration: number;
};

const fadeInOut = {
    hidden : {opacity: 0},
    visible : {opacity: 1},
}

const Fade = ({ children, duration = 0.5 } : FadeProps) => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInOut}
        transition={{ duration: duration }}
    >
        {children}
    </motion.div>

  )
}

export default Fade