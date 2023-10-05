import React, { Fragment } from "react";
import { points } from "../../../mocks/Services";

const Points = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto text-[#292F36]">
                <ul className="flex justify-around">
                    {points.map((el, index) => (
                        <li key={index}>
                            <h1 className="font-serif font-bold text-4xl mb-6">{el.title}</h1>
                            <div className="flex items-center">
                                <ul className="mr-4">{el.id.map((el) => (
                                    <li className="text-[#c9a575] font-serif mb-6">{el}</li>))}
                                </ul>
                                <ul>{el.contents.map((el) => (<li className="mb-6">{el}</li>))}</ul>
                            </div>       
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Points;