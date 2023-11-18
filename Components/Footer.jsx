import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-5">
      <div className="w-full max-w-7xl mx-auto px-8 py-2 md:py-0 xl:px-3 2xl:px-0 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-normal float-left">
            Copyright @ 2023{" "}
            <a
              href="https://stuffcrustmiddleton.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-cr-primary font-bold"
            >
              stuffcrustmiddleton.co.uk
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className=" float-left md:float-right flex items-start md:items-center flex-col md:flex-row gap-1">
            Designed & Developed By{" "}
            <motion.a
              href="https://devadil.netlify.app/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                backgroundColor: "transparent",
                color: "#b3cc4c",
                transition: { duration: 0.5 },
              }}
              className="block w-fit bg-cr-primary border-2 border-cr-primary text-white rounded-md font-semibold px-2 py-1"
            >
              Dev. Adil
            </motion.a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
