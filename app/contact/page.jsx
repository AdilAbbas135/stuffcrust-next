"use client";
import { MdEmail } from "react-icons/md";
import Header from "../../Components/Header";
import { IoMdCall } from "react-icons/io";
import Footer from "../../Components/Footer";
import { Number } from "../../data";
import { FaLocationArrow, FaRegPaperPlane } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Header />
      <AnimatePresence>
        <div className="my-10 w-full max-w-7xl mx-auto xl:py-0 px-5 xl:px-3 2xl:px-0">
          <div className="md:pt-5 flex items-center flex-col md:flex-row flex-wrap gap-5">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-cr-primary"
              >
                LET&apos;S TALK WITH Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-bold text-text-secondary text-4xl md:text-6xl w-full max-w-[90%] capitalize"
              >
                A good story begins from say hi.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-3"
              >
                Drop Us Your Queries. We will reply as soon as Possible
              </motion.p>
              <div className="mt-5 space-y-5">
                <motion.div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-cr-primary rounded-md cursor-pointer"
                  >
                    <MdEmail size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: "-100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-bold text-text-secondary text-[18px]"
                    >
                      Email Us
                    </motion.h1>
                    <a href="mailto:Salahuddinhaider97@gmail.com">
                      <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                          color: "#b3cc4c",
                          transition: { duration: 0.3 },
                        }}
                      >
                        Salahuddinhaider97@gmail.com
                      </motion.p>
                    </a>
                  </div>
                </motion.div>
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-cr-primary rounded-md"
                  >
                    <IoMdCall size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: "-100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-bold text-text-secondary text-[18px]"
                    >
                      Call Us
                    </motion.h1>
                    <a href={`tel:${Number}`}>
                      <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                          color: "#b3cc4c",
                          transition: { duration: 0.3 },
                        }}
                      >
                        +441616436563
                      </motion.p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-cr-primary rounded-md"
                  >
                    <FaLocationArrow size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: "-100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-bold text-text-secondary text-[18px]"
                    >
                      Find Us
                    </motion.h1>
                    <a
                      href={
                        "https://www.google.com/maps/place/Full+Monte+Cafe,+30+Townley+St,+Middleton,+Manchester+M24+1AS,+UK/@53.5499567,-2.1959954,17z/data=!3m1!4b1!4m6!3m5!1s0x487bba73695fc861:0x8e9e027569db4e83!8m2!3d53.5499567!4d-2.1934205!16s%2Fg%2F1tj2bk91?entry=ttu"
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                          color: "#b3cc4c",
                          transition: { duration: 0.3 },
                        }}
                      >
                        30 Townley Street, Middleton M24 1AS
                      </motion.p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 w-full"
            >
              <form
                action="https://formsubmit.co/adilabbas8092@gmail.com"
                method="POST"
                className="contact_form w-full"
                id="contact_form"
              >
                <div className="w-full flex flex-col gap-5">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      // value={email}
                      // onChange={(e) => setemail(e.target.value)}
                      autoComplete="name"
                      required
                      className="relative block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cr-primary focus:outline-none focus:ring-cr-primary sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      // value={email}
                      // onChange={(e) => setemail(e.target.value)}
                      autoComplete="email"
                      required
                      className="relative block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cr-primary focus:outline-none focus:ring-cr-primary sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      // value={email}
                      // onChange={(e) => setemail(e.target.value)}
                      autoComplete="subject"
                      required
                      className="relative block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cr-primary focus:outline-none focus:ring-cr-primary sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      rows={5}
                      // value={email}
                      // onChange={(e) => setemail(e.target.value)}
                      autoComplete="message"
                      required
                      className="relative block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cr-primary focus:outline-none focus:ring-cr-primary sm:text-sm"
                    />
                  </div>
                  <button
                    className={`w-full bg-cr-primary text-white font-semibold px-5 py-3 rounded-md flex gap-1 items-center justify-center`}
                  >
                    <FaRegPaperPlane size={22} /> Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Contact;
