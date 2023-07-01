import React from "react";
import "../App.css";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const userNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    userNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {userNumbers.map((number, index) => (
          <a
            className="pagination"
            key={index}
            onClick={() => paginate(number)}
            href="#"
          >
            <img></img>
            {number}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
