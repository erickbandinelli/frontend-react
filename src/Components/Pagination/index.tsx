import React from 'react';
import PaginationStyle from './style/index';

const Pagination = ({ clientsPerPage, currentPage, totalClients, paginate} : any) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationStyle>
            <nav className="paginate">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${ currentPage === number ?  'active' : ''}`}>
                            <span onClick={() => paginate(number)} className="page-link">
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </PaginationStyle>
    )
}

export default Pagination;
