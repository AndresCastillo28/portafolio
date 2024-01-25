import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { validateForm, formContact } from "./helpers";
import { portafolioApi } from "../../api";
import { showErrorToast, showSucessToast } from "../../helpers";

export const Contact = () => {
  const [form, setForm] = useState(formContact);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(form);

    if (isValid) {
      setIsLoading(true);

      try {
        const { data } = await portafolioApi.post("/contact-information", form);
        setForm(formContact);
        showSucessToast("The message has been sent successfully");
      } catch (error) {
        showErrorToast("Error sending the message");
      } finally {
        setIsLoading(false);
        setErrors({});
      }
    } else {
      setErrors(errors);
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
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Your email*"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-3"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              placeholder="Your message*"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <button className="btn btn-lg" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
