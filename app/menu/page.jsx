"use client";
// import Pizza from "../assets/pizza.png";
import { motion } from "framer-motion";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
import { DealsList, MealDealsList, Number } from "../../data";
import MenuComponent from "../../Components/Menu";
import Image from "next/image";
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="my-10 w-full max-w-7xl mx-auto xl:py-0 px-5 xl:px-3 2xl:px-0">
        <MenuComponent />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-center font-bold text-4xl md:text-5xl text-txt-primary uppercase"
          >
            Special Offers
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{
              opacity: 1,
              width: 80,
              transition: { duration: 0.5 },
            }}
            className="mt-1 block h-[5px] max-w-20 mx-auto rounded-full bg-cr-primary"
          ></motion.span>
          <motion.div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {DealsList.map((deal, index) => {
              return (
                <motion.div
                  layout
                  layoutId="deal-container"
                  key={index}
                  className="w-full flex flex-col md:flex-row border-2 border-cr-primary rounded-md shadow-sm shadow-cr-primary"
                  initial={{ opacity: 0, y: -30, scale: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 min-h-[250px]">
                    <img
                      src={deal.image}
                      alt=""
                      height={300}
                      width={300}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="p-5">
                      <h1 className="text-2xl font-bold">{deal.name}</h1>{" "}
                      <span className="block mt-[5px] h-[5px] w-16 bg-cr-primary rounded-full"></span>
                      <p className=" w-fit mt-[10px] rounded-md font-bold text-[25px] text-cr-primary">
                        {deal.price}
                      </p>
                      <p className="my-[10px] text-[16px]">{deal.desc}</p>
                      <a href={`tel:${Number}`}>
                        <Button text={"Order Now"} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/*Special Meal Deals CONTAINER */}
        <div className="mt-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-center font-bold text-5xl text-txt-primary uppercase"
          >
            Special Meal Deals
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{
              opacity: 1,
              width: 80,
              transition: { duration: 0.5 },
            }}
            className="mt-1 block h-[5px] max-w-20 mx-auto rounded-full bg-cr-primary"
          ></motion.span>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {MealDealsList.map((deal, index) => {
              return (
                <motion.div
                  key={index}
                  className="w-full flex flex-col md:flex-row border-2 border-cr-primary rounded-md shadow-sm shadow-cr-primary"
                  initial={{ opacity: 0, y: -30, scale: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.25 },
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex-1 min-h-[250px]">
                    <img
                      src={deal.image.src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="p-5">
                      <h1 className="text-2xl font-bold">{deal.name}</h1>{" "}
                      <span className="block mt-[5px] h-[5px] w-16 bg-cr-primary rounded-full"></span>
                      <p className=" w-fit mt-[10px] rounded-md font-bold text-[25px] text-cr-primary">
                        {deal.price}
                      </p>
                      <p className="my-[10px] text-[16px]">{deal.desc}</p>
                      <a href={`tel:${Number}`}>
                        <Button text={"Order Now"} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
