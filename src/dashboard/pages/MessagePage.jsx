import React, { useEffect, useState } from "react";
import { portafolioApi } from "../../api";

export const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const messagesPerPage = 10; // Number of messages to display per page

  useEffect(() => {
    portafolioApi
      .get("/messages")
      .then((response) => {
        // Handle the successful response
        setMessages(response.data); // Assuming your API response is an array of messages
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching messages:", error);
      });
  }, []);

  // Calculate the indexes of the messages to display for the current page
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;

  // Function to handle pagination
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle input search
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setCurrentPage(1); // Reset pagination to the first page when the search term changes
  };

  // Filter messages based on the search term
  const filteredMessages = messages.filter(
    (message) =>
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  return (
    <>
      <div className="w-screen text-black font-bold">
        <div className="w-3/4 mx-auto bg-gray-100 p-4 rounded-lg shadow-md mt-5">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mb-4 text-black"
            placeholder="Search message"
            value={searchTerm}
            onChange={handleSearch}
          />

          {filteredMessages.length === 0 ? (
            <div className="text-center py-4 text-gray-600">No messages found.</div>
          ) : (
            <>
              <ul>
                {currentMessages.map((message, index) => (
                  <li key={index} className="px-4 py-2 border-b flex">
                    <div className="w-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {message.email}
                    </div>
                    <div className="w-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {message.message}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pagination buttons */}
              <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredMessages.length / messagesPerPage) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 mx-2 border ${
                        currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
                      }`}
                      onClick={() => handlePagination(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
