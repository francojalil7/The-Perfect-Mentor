import React from "react";
import "../App.css"

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const userNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    userNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {userNumbers.map((number) => (
            <a className="pagination" onClick={() => paginate(number)} href="#">
                <img></img>{number}
            </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
