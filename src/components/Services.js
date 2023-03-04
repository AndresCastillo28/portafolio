import React, { useState } from "react";
//icon
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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
      "Comprises gathering requirements, identifying problems, and creating software solutions."
  },
  {
    name: "Software Development",
    description:
      "Implement the designed solution using various tools and technologies."
  },
  {
    name: "Software Documentation",
    description:
      "Create technical documentation to help users and developers understand the software and how it works.",
    icon: "MdOutlineDesignServices"
  },
  {
    name: "Software Maintenance",
    description:
      "Update and improve the software after it's released to fix bugs and add new functionality."
  },
  {
    name: "Software project management",
    description:
      "planning and coordinating the work of team members to meet project deadlines and goals."
  }
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(2);
  const [items, setItems] = useState([...services]);

  function displayItems() {
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = items.slice(
      indexOfFirstElement,
      indexOfLastElement
    );
    return currentElements.map((item, index) => (
      <div
        key={index}
        className="border-b border-white/20 h-[146px] flex mb-[38px]"
      >
        <div className="max-w-[476px]">
          <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6"
          >
            {item.name}
          </h4>
          <p className="font-secondary leading-tight">{item.description}</p>
        </div>
        <div className="flex flex-col flex-1 items-end">
          <button
            href="#"
            className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
          >
            <MdOutlineDesignServices />
          </button>
        </div>
      </div>
    ));
  }

  function handlePageChange(direction) {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const totalPages = Math.ceil(items.length / elementsPerPage);
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
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
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {displayItems()}
              <div class="flex justify-between mt-3">
                <button
                  href="#"
                  className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                  onClick={() => handlePageChange("prev")}
                  disabled={currentPage === 1}
                >
                  <BsArrowLeft />
                </button>
                <button
                  className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                  onClick={() => handlePageChange("next")}
                  disabled={currentPage === totalPages}
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
