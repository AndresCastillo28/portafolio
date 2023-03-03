import { DiNodejsSmall, DiReact, DiHtml5, DiCss3, DiMongodb, DiJsBadge } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// BsBootstrap



const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container mx-auto">
      <motion.h2 variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="text-center h2 text-accent mb-4">Skills</motion.h2>
        <div className="flex flex-wrap justify-center mt-2 md:mt-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiNodejsSmall className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiReact className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiHtml5 className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiCss3 className="w-full h-auto mx-auto" />
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
             className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiJsBadge className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <DiMongodb className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <SiFlask className="w-full h-auto mx-auto" />
          </motion.div>
          <motion.div variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <BsBootstrap className="w-full h-auto mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
