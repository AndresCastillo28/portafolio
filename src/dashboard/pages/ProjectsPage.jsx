import React, { useState } from "react";

export const ProjectsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    youtubeLink: "",
    githubLink: "",
    technologies: "",
    image: "", 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen p-8 flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-3/4 border p-5 rounded" autoComplete="off">
        <div>
          <label htmlFor="name" className="block text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="youtubeLink" className="block text-white">
            YouTube Link:
          </label>
          <input
            type="text"
            id="youtubeLink"
            name="youtubeLink"
            value={formData.linkYoutube}
            onChange={handleChange}
            required
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="githubLink" className="block text-white">
            GitHub Link:
          </label>
          <input
            type="text"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            required
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="technologies" className="block text-white">
            Technologies:
          </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            required
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-white">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-transparent border-b py-3 outline-none w-full text-white focus:border-accent transition-all"
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm"
        >
          Create
        </button>
      </form>
    </div>
  );
};
