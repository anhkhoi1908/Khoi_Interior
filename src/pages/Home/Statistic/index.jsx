import React, { Fragment } from "react";
import { statistic } from "../../../mocks/Home";

const Statistic = () => {
    return (
        <Fragment>
            <div className="bg-[#F4F0EC] py-[4rem] mt-[10rem]">
                <ul className="flex w-3/5 justify-between mx-auto">
                    {statistic.map((el, index) => (
                        <li key={index} className="text-center">
                            <h1 className="text-6xl font-bold text-[#c9a575] mb-6">{el.number}</h1>
                            <p>{el.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Statistic;