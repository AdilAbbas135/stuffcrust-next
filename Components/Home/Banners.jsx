import { IoMdCall } from "react-icons/io";
import Deal1 from "../../assets/deal1.jpg";
import Deal2 from "../../assets/deal2.jpg";
import Deal3 from "../../assets/deal3.jpg";
import { Number } from "../../data";
// import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
const Banners = () => {
  const items = [
    {
      Image: Deal1,
      Heading: "Mouthwatering Mexicano Doner",
      text: "a tantalizing fusion of flavors that will ignite your taste buds with pure delight!  🌮🇲🇽",
    },
    {
      Image: Deal2,
      Heading: "Cheese Filled Perfection",
      text: "🍕A Savorful Love Affair: Our Margherita pizza is a culinary masterpiece, crafted to ignite your taste buds and transport you to pizza paradise! 🧀🍅 ",
    },
    {
      Image: Deal3,
      Heading: "Cheese Filled Perfection",
      text: "🍕A Savorful Love Affair: Our Margherita pizza is a culinary masterpiece, crafted to ignite your taste buds and transport you to pizza paradise! 🧀🍅 ",
    },
  ];
  return (
    <div className="bg-gray-100 w-full mx-auto py-16">
      <div className="w-full max-w-7xl mx-auto px-5 xl:px-3 2xl:px-0">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-center font-bold text-4xl text-txt-primary"
          >
            {/*eslint-disable-next-line react/no-unescaped-entities */}
            Customer's Choice
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{
              opacity: 1,
              width: 80,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="mt-1 block h-[5px] mx-auto rounded-full bg-cr-primary"
          ></motion.span>
          <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 gap-7">
            {items.map((item, index) => {
              return (
                <div className="overflow-hidden" key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: index * 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    <Banner
                      image={item.Image}
                      heading={item.Heading}
                      text={item.text}
                    />{" "}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
//eslint-disable-next-line
const Banner = ({ image, heading, text }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-sm bg-white">
      <Image
        src={image}
        alt=""
        className="h-[270px] w-full object-cover object-top capitalize"
        height={200}
        width={200}
      />
      <div className="px-5 py-5 space-y-3">
        <h1 className="font-bold text-2xl">{heading}</h1>
        <p className="text-[16px]">{text}</p>
        <a href={`tel:${Number}`}>
          <motion.button
            whileHover={{
              backgroundColor: "transparent",
              color: "#b3cc4c",
              transition: { duration: 0.5 },
            }}
            className={`mt-3 border-2 border-cr-primary bg-cr-primary text-white font-semibold px-5 py-3 rounded-md flex items-center gap-1`}
          >
            <IoMdCall size={20} /> Order Now
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Banners;
