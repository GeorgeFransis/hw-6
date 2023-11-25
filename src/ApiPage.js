import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApiPage.css'; 
const ApiPage = () => {
  const pageSize = 10; // Number of items per page
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.publicapis.org/entries',
      };

      try {
        const response = await axios.request(options);
        setApiData(response.data.entries);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error(error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Display only the items for the current page
  const currentPageData = apiData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(apiData.length / pageSize);

  return (
    <div>
      <h2>API Page</h2>

      {loading ? (
        <div className="loader-container">
          
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <table className="api-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.Category}</td>
                  <td>{entry.Description}</td>
                  <td>
                    <a href={entry.Link} target="_blank" rel="noopener noreferrer">
                      {entry.Link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiPage;
