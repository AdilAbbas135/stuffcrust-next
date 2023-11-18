import Button from "../Button";
import { motion } from "framer-motion";
import { Number } from "../../data";
import Image from "next/image";
const Hero = () => {
  const Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: {},
    transition: {
      duration: 0.5,
    },
  };
  // const Title = "Stuff Crust Middleton";
  return (
    <div className="w-full max-w-7xl mx-auto py-10 pt-14 xl:py-0 px-5 xl:px-3 2xl:px-0 min-h-screen md:min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap uppercase">
      <div className="md:flex-1">
        <motion.h1
          variants={Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-5xl md:text-7xl text-txt-primary "
        >
          Stuff Crust Middleton
        </motion.h1>
        <motion.p
          variants={Variants}
          initial={"initial"}
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 text-[16px]"
        >
          Buy one cold drink and get the 2nd 50% off every day from 2-5 PM.
          Quench your thirst-buds and treat a friend!
        </motion.p>
        <motion.div
          variants={Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5"
        >
          <a href={`tel:${Number}`}>
            <Button text={`Call: +44 7951 634709`} />
          </a>
        </motion.div>
      </div>
      <div className=" md:mt-0 md:flex-1">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src={"/assets/Element.png"}
            alt=""
            className="h-[80%] w-[80%] object-cover"
            height={500}
            width={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
