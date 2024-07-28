import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const RevealOnScroll = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const slideControls = useAnimation();
  const isInview = useInView(ref);
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview, mainControls, slideControls]);
  return (
    <div ref={ref} className={`relative  ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-4 left-0 bottom-4 right-0 blue-gradient z-20"
      />
    </div>
  );
};

export default RevealOnScroll;
