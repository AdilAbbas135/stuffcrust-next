import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
//eslint-disable-next-line
const Loader = ({ setIsLoading }) => {
  const ImageDetails = { Height: 238, Width: 238 };
  const BackgroundAnimation = useAnimation();
  const LogoAnimation = useAnimation();

  const startAnimationSequence = async () => {
    await LogoAnimation.start({
      scale: [0, 1.1, 0.9, 1],
      transition: {
        delay: 1,
        duration: 1.5,
        // type: "spring",
        // damping: 25,
        // stiffness: 458,
        // mass: 2,
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 300));
    await BackgroundAnimation.start({
      height: 157,
      width: 157,
      transition: { duration: 1 },
    });
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsLoading(false);
    // Animation sequence is complete
  };
  useEffect(() => {
    startAnimationSequence();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          layoutId="image-container"
          className="h-screen w-screen relative overflow-hidden flex items-center justify-center"
        >
          <motion.img
            src="/assets/logo-round.png"
            initial={{ scale: 0 }}
            animate={LogoAnimation}
            height={ImageDetails.Height}
            width={ImageDetails.Width}
            className="object-cover z-[1]"
            layoutId="logo-image"
          />
          <motion.div
            initial={{ height: "2500px", width: "2500px" }}
            animate={BackgroundAnimation}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-cr-primary z-[0] origin-center rounded-full"
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Loader;
