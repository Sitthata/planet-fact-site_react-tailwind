import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

interface FadeInUpProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeInUp = ({ children, duration = 0.5 }: FadeInUpProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInUp;