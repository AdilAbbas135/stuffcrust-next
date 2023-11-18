"use client";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { IoMdCall, IoMdClose } from "react-icons/io";
import { Number } from "../data";
import { MdRestaurantMenu } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-7xl mx-auto px-5 xl:px-3 2xl:px-0 flex items-center justify-between py-3 md:py-0"
        >
          <div className="menu hidden md:block flex-1">
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.3 }}
              className="flex items-center font-semibold gap-5"
            >
              {/* onMouseOver={MenuAnimation} */}
              <motion.li
                whileHover={{
                  backgroundColor: "transparent",
                  color: "#b3cc4c",
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                className="cursor-pointer"
              >
                <Link href={"/menu"} className="w-full flex items-center gap-1">
                  <MdRestaurantMenu size={20} /> Menu
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  backgroundColor: "transparent",
                  color: "#b3cc4c",
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                className="cursor-pointer"
              >
                <Link
                  href={"/contact"}
                  className="w-full flex items-center gap-1"
                >
                  {" "}
                  <FiMail size={20} /> Contact Us{" "}
                </Link>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            layoutId="image-container"
            className="flex-1 flex items-center md:justify-center"
          >
            <Link href={"/"}>
              <AnimatePresence>
                <motion.img
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{ duration: 0.5 }}
                  layoutId="logo-image"
                  src="/assets/logo-round.png"
                  alt="Logo"
                  className="object-contain h-[60px] w-[60px] md:h-[90px] md:w-[90px]"
                />
              </AnimatePresence>
            </Link>
          </motion.div>

          <div className="flex-1 hidden md:flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <a href={`tel:${Number}`}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{
                    backgroundColor: "transparent",
                    color: "#b3cc4c",
                    transition: { duration: 0.5 },
                  }}
                  className={`bg-cr-primary border-2 border-cr-primary text-white font-semibold px-5 py-3 rounded-md flex items-center gap-2`}
                >
                  <IoMdCall size={20} /> Call to Order
                </motion.button>
              </a>
              <a
                href="https://stuffcrustmiddleton.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{
                    backgroundColor: "transparent",
                    color: "#b3cc4c",
                    transition: { duration: 0.5 },
                  }}
                  className={`bg-cr-primary border-2 border-cr-primary text-white font-semibold px-5 py-3 rounded-md`}
                >
                  Order Online
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Option */}
          <div className="flex-1 flex md:hidden justify-end items-center gap-2">
            <motion.div
              whileTap={{ scale: 0.8 }}
              onClick={() => setMenuOpen(!MenuOpen)}
              className="p-2 rounded-md bg-cr-primary"
            >
              {MenuOpen ? (
                <IoMdClose size={20} className="text-white" />
              ) : (
                <HiOutlineMenu size={20} className="text-white" />
              )}
            </motion.div>
            <a href={`tel:${Number}`}>
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="p-2 rounded-md bg-cr-primary"
              >
                {" "}
                <IoMdCall size={20} className="text-white" />
              </motion.div>
            </a>
          </div>
        </motion.div>
        <AnimatePresence>
          {MenuOpen && (
            <div className="z-10 absolute bottom-0-0 left-0 w-full overflow-hidden">
              <motion.div
                initial={{ y: "-100%", transformOrigin: "top" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%", transition: { duration: 0.5 } }}
                transition={{ duration: 0.5 }}
                className="block md:hidden px-5 py-5 bg-cr-primary relative scale-0"
              >
                <ul className="space-y-3 font-semibold text-white">
                  <li>
                    <Link className="w-full flex items-center gap-1" href={"/"}>
                      <AiFillHome size={20} />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-full flex items-center gap-1"
                      href={"/menu"}
                    >
                      <MdRestaurantMenu size={20} />
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-full flex items-center gap-1"
                      href={"/contact"}
                    >
                      <FiMail size={20} />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
