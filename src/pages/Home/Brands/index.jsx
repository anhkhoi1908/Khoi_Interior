import React, { Fragment } from "react";
import { brands } from "../../../mocks/Home";

const Brand = () => {
    return (
        <Fragment>
            <ul className="flex w-3/5 mx-auto justify-between my-[10rem] items-center">
                {brands.map((el, index) => (
                    <li key={index}>
                        <img src={el}/>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Brand;