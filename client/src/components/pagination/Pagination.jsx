import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Pagination.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  // Limit the page Numbers shown
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // GO to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // GO to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={paginatePrev}
          className={currentPage === pageNumbers[0] ? "hide" : ""}
        >
          <AiOutlineLeft />
        </button>
      </li>
      {pageNumbers.map((number) => {
        return (
          <li key={number} onClick={() => paginate(number)}>
            <button className={currentPage === number ? "active" : ""}>
              {number}
            </button>
          </li>
        );
      })}
      <li>
        <button
          onClick={paginateNext}
          className={
            currentPage === pageNumbers[pageNumbers.length - 1] ? "hide" : ""
          }
        >
          <AiOutlineRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
