import React, { Fragment } from "react";
import { brands } from "../../../mocks/Home";

const Brand = () => {
    return (
        <Fragment>
            <ul className="brands flex w-3/5 mx-auto justify-between my-[10rem] items-center">
                {brands.map((el, index) => (
                    <li key={index}>
                        <img src={`/src/assets/imgs/${el}`} alt="Image brand"/>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Brand;