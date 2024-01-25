import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { portafolioApi } from "../../api";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";

export const PortafolioPage = () => {
  const ITEMS_PER_PAGE = 6; // Adjust the number of items per page as needed
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredPortfolioItems = portfolioItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.technologies.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to get the current page items based on pagination
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPortfolioItems.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const { data } = await portafolioApi.get("/projects");
        setPortfolioItems(data);
      } catch (error) {
        // Handle the error gracefully (e.g., show an error message)
        console.error("Error fetching portfolio items:", error);
      }
    };

    fetchPortfolioItems();
  }, []);

  return (
    <div className="p-8 w-full h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Andres's Portfolio</h1>
        <Link to="/">
          <button className="btn btn-sm">Go to home</button>
        </Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
        />
      </div>
      {filteredPortfolioItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {getCurrentPageItems().map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow text-white border-accent flex flex-col"
            >
              <h2 className="text-xl font-bold mb-2 text-center">{item.name}</h2>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto"
                style={{ width: "300px", height: "200px" }}
              />
              <div className="flex justify-between items-center mt-5">
                <p>{item.technologies}</p>
                <div className="flex space-x-2">
                  <a href={item.youtubeLink} target="_blank">
                    <AiOutlineYoutube size={28} className="cursor-pointer" />
                  </a>
                  <a href={item.githubLink} target="_blank">
                    <AiFillGithub size={28} className="cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500 mt-8">
          No projects loaded yet.
        </p>
      )}
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(filteredPortfolioItems.length / ITEMS_PER_PAGE),
        }).map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm mx-2 ${
              currentPage === index + 1 ? "bg-accent text-white" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
