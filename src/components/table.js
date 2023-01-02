import React, { useState } from "react";
import { Paginationn } from "./pagination";

export const MyTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // slice the data array based on the current page and items per page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <p>table page</p>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginationn
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        onChange={handlePageChange}
      />
    </div>
  );
};
