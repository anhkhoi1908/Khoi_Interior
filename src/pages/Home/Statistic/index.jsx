import React, { Fragment } from "react";
import { statistic } from "../../../mocks/Home";

const Statistic = () => {
    return (
        <Fragment>
            <div id="statistic" className="bg-[#F4F0EC] py-[4rem] mt-[10rem]">
                <ul className="flex flex-wrap w-3/5 justify-between mx-auto">
                    {statistic.map((el, index) => (
                        <li key={index} className="w-1/4 text-center relative before:content-[''] before:absolute before:block 
                        before:w-[0.1rem] before:h-full before:bg-[#c9a575] before:right-[-1rem] before:last:hidden">
                            <h1 className="text-6xl font-bold text-[#c9a575] mb-6 font-serif">{el.number}</h1>
                            <p>{el.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Statistic;