import React, { Fragment } from "react";
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange : PropTypes.func,
}

Pagination.defaultProps = {
    onPageChange: null
}

const Pagination = (props) => {
    const {pagination, onPageChange} = props; 
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = Math.ceil(_totalRows / _limit)

    const handlePageChange = (newPage) => {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <Fragment>
            <button
               disabled={_page <= 1}
               onClick={() => handlePageChange(_page - 1)}
            >
                {'Previous'}
            </button>

            <button
               disabled={_page >= totalPages}
               onClick={() => handlePageChange(_page + 1)}
            >
                {'Next'}
            </button>
        </Fragment>
    );
};

export default Pagination;