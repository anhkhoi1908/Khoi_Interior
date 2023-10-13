import React, { Fragment } from "react";
import { returnPaginationRange } from "../../utils/appUtils";
import './style.css'

const Pagination_Mock = (props) => {
    let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings)

    return (    
        <Fragment>
            <ul className="pl-0 pagination pagination-md justify-center">
                {/* <li className="page-item"><span onClick={() => props.onPageChange('&laquo;')} className="page-link">&laquo;</span></li> */}
                <li className="page-item">
                    <span onClick={() => props.onPageChange('&lsaquo;')} className="page-link previous">
                        &lsaquo;
                    </span>
                </li>
                {array.map((value) => {
                    if (value === props.page) {
                        return (
                            <li key={value} className="page-item active">
                                <span onClick={() => props.onPageChange(value)} className="page-link">{value}</span>
                            </li>   
                        )
                    } else {
                        return (
                            <li key={value} className="page-item">
                                <span onClick={() => props.onPageChange(value)} className="page-link">{value}</span>
                            </li>
                        )
                    }
                })}
                <li className="page-item">
                    <span onClick={() => props.onPageChange('&rsaquo;')} className="page-link next">
                        &rsaquo;
                    </span>
                </li>
                {/* <li className="page-item"><span onClick={() => props.onPageChange('&raquo;')} className="page-link">&raquo;</span></li> */}
            </ul>
        </Fragment>
    );
};

export default Pagination_Mock;