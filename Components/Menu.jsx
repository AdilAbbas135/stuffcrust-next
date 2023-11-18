"use client";
import { motion } from "framer-motion";
import { MdRestaurantMenu } from "react-icons/md";
import { MenuList, Number } from "../data";
import { useEffect, useState } from "react";
import Button from "./Button";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
//eslint-disable-next-line
const Menu = ({ HomePage }) => {
  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [SelectedMenu, setSelectedMenu] = useState(null);
  const [SelectedIndex, setSelectedIndex] = useState(null);
  const [FinalMenu, setFinalMenu] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (HomePage === true) {
      setFinalMenu(MenuList.slice(0, 8));
    } else {
      setFinalMenu(MenuList);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (SelectedMenu?.Heading) {
      setOpenPopUp(true);
    }
  }, [SelectedMenu]);
  return (
    <>
      {OpenPopUp && (
        <PopUpMenu
          index={SelectedIndex}
          Menu={SelectedMenu}
          OpenPopUp={OpenPopUp}
          setOpenPopUp={setOpenPopUp}
        />
      )}
      {/* MENU CONTAINER */}
      <div className="mt-[50px] mb-[30px] w-full max-w-7xl mx-auto xl:py-0 px-5 xl:px-3 2xl:px-0">
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
          Our Menu
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
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FinalMenu.map((menu, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.25 },
                }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => {
                  // console.log(
                  //   "layout id of container is " +
                  //   `${index}-${menu.image}-container`
                  // );
                  setSelectedIndex(index);
                  setSelectedMenu(menu);
                }}
                layout
                layoutId={`${index}-${Menu.image}-container`}
                className="cursor-pointer "
              >
                <MenuItem
                  index={index}
                  image={menu.image}
                  heading={menu.Heading}
                  details={menu.desc}
                />
              </motion.div>
            );
          })}
        </div>
        {HomePage === true && (
          <div className="mt-10 flex items-center justify-center flex-col">
            <p className="text-red-500 italic text-sm font-semibold">
              +15 More Items in Menu
            </p>
            <Link href={"/menu"}>
              <motion.button
                whileHover={{
                  backgroundColor: "transparent",
                  color: "#b3cc4c",
                  transition: { duration: 0.5 },
                }}
                className={`bg-cr-primary border-2 border-cr-primary text-white font-semibold px-5 py-3 rounded-md flex items-center gap-1`}
              >
                <MdRestaurantMenu size={20} /> View Complete Menu
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

//eslint-disable-next-line
const MenuItem = ({ image, heading, index, details }) => {
  return (
    <div className="py-5 menu-item relative rounded-md border-2 border-gray-300 shadow-sm shadow-gray-200 overflow-hidden">
      {/* <div className="p-5 rounded-full bg-cr-primary"> */}
      {/* {console.log("image url is", image)} */}
      <motion.img
        src={image.src}
        alt=""
        className="h-[170px] w-auto object-cover mx-auto"
        layoutId={`${index}-${image.src}`}
        loading="lazy"
      />
      {/* // </div> */}
      <div className="pt-5 px-5">
        <h1 className="text-3xl text-txt-primary font-bold text-center uppercase">
          {heading}
        </h1>
        <span className="mt-1 block h-[5px] w-20 mx-auto rounded-full bg-cr-primary"></span>
        {/* {details} */}
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />{" "}
        </div>
      </div>
    </div>
  );
};

//eslint-disable-next-line
const PopUpMenu = ({ index, Menu, item, OpenPopUp, setOpenPopUp }) => {
  //eslint-disable-next-line
  // console.log("layout id of container is " + `${index}-${Menu.image}-container`)
  return (
    <div className="z-[100] fixed top-0 left-0 h-screen w-screen overflow-y-scroll flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      {/* layout layoutId={`${index}-${Menu.image}-container`} */}

      <motion.div className="absolute overscroll-y-scroll md:relative top-0 bg-white rounded-md shadow-md py-10 min-h-full min-w-full md:min-w-[900px] md:min-h-[450px] ">
        <div
          onClick={() => setOpenPopUp(false)}
          className="fixed md:absolute top-4 right-4 h-fit p-2 rounded-full bg-gray-300 cursor-pointer"
        >
          <GrFormClose size={20} />
        </div>
        <div className=" flex flex-col md:flex-row items-center">
          <div className="w-full max-w-[90%] md:max-w-[350px] h-[200px] md:h-[400px] md:-ml-10 bg-cr-primary rounded-md shadow-md flex items-center justify-center">
            <motion.img
              // eslint-disable-next-line
              src={Menu.image.src}
              alt=""
              className="h-[150px] md:h-[250px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              //eslint-disable-next-line
              layoutId={`${index}-${Menu.image.src}`}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="mt-10 md:mt-0 w-full px-5 pr-10">
            {" "}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-center font-bold text-2xl text-txt-primary uppercase"
            >
              {/* eslint-disable-next-line */}
              OUR {Menu?.Heading}
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
            <div className="my-5 space-y-3">
              {/* eslint-disable-next-line */}
              {Menu.childs.map((item2, index) => {
                return (
                  <div key={index} className="overflow-hidden ">
                    <motion.div
                      initial={{ opacity: 0, y: "-100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex items-center justify-between"
                    >
                      <h1 className="text-sm md:text-lg">{item2.name}</h1>{" "}
                      <p className="font-bold text-cr-primary text-lg md:text-[20px]">
                        {item2?.price}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center">
              <a href={`tel:${Number}`}>
                <Button text={"Order Now"} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Menu;
