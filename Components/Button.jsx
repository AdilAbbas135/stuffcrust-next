import { motion } from "framer-motion";
//eslint-disable-next-line
const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: "transparent",
        color: "#b3cc4c",
        transition: { duration: 0.5 },
      }}
      className={`bg-cr-primary border-2 border-cr-primary text-white font-semibold px-5 py-3 rounded-md`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
