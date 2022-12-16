import React from 'react';

const Pagination = ({usersPerPage, totalUsers, paginate})=>{
    const userNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        userNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
            {userNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)} href="#" classname="page-link">
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination;