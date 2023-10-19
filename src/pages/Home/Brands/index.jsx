import React, { Fragment } from "react";
import { brands } from "../../../mocks/Home";

const Brand = () => {
    return (
        <Fragment>
            <ul className="brands flex flex-wrap w-3/5 mx-auto justify-between my-[10rem] items-center pl-0">
                {brands.map((el, index) => (
                    <li key={index}>
                        <img src={`/assets/imgs/${el}`} alt="Image brand"/>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Brand;