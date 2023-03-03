import React from "react";
//icon
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";


//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "Software Analysis and Design",
    description:
      "Comprises gathering requirements, identifying problems, and creating software solutions.",
    link: "Learn More",
    icon: "BsArrowUpRight"
  },
  {
    name: "Software Development",
    description:
      "Implement the designed solution using various tools and technologies.",
    link: "Learn More",
  },
  {
    name: "Software Documentation",
    description:
      "Create technical documentation to help users and developers understand the software and how it works.",
    icon: 'MdOutlineDesignServices',
    link: "Learn More",
  },
  // {
  //   name: "MONGO DB",
  //   description: "MongoDB es una base de datos NoSQL de código abierto, escalable y eficiente, que almacena datos en documentos JSON y ofrece características útiles para la gestión de datos.",
  //   link: "Learn More",
  // },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1   lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              A software engineer designs, develops, and maintains software.
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/**Services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className={`border-b border-white/20 h-[146px] flex ${
                      index === services.length - 1 ? 'mb-[15px]' : 'mb-[38px]'
                    }`}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <MdOutlineDesignServices />
                      </a>
                      {/* <a href="#" className="text-gradient text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
              <div class="flex justify-between mt-3">
                <a
                  href="#"
                  className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                >
                  <BsArrowLeft />
                </a>
                <a
                  href="#"
                  className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                >
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
