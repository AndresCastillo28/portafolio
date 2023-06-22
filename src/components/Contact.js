import React, { useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Agregar el estado 'errors' para almacenar los errores de validación

  const validateForm = () => {
    const newErrors = {};

    // Validar el campo 'name'
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    // Validar el campo 'email'
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Validar el campo 'message'
    if (!form.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);

    // Devuelve true si no hay errores, de lo contrario, devuelve false
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false); // Desactiva el estado de carga después de finalizar la operación
        setForm({
          name: "",
          email: "",
          message: ""
        });
      }, 2000); // Puedes ajustar el tiempo según tus necesidades
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            onSubmit={handleFormSubmit}
            autoComplete="off"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Your name*"
            />
            {errors.name && errors.name}
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Your email*"
            />
            {errors.email && errors.email}
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-3"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              placeholder="Your message*"
            ></textarea>
            {errors.message && errors.message}
            <button className="btn btn-lg" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
