import React, { Fragment } from "react";
import { detail_content } from "../../../../mocks/Services";

const Details = () => {
    return (
        <Fragment>
            <div className="flex w-3/5 mx-auto justify-between mt-[10rem] text-[#292F36]">
                <div>
                    <h1 className="font-serif font-bold text-4xl">{"We set the trends of"}</h1>
                    <h1 className="font-serif font-bold text-4xl">{"modern living"}</h1>
                    <h1 className="font-serif font-bold text-4xl">{"Services."}</h1>
                </div>
                <ul className="w-1/2 [&>*:nth-child(2)]:my-8">
                    {detail_content.map((el, index) => (
                        <li key={index} className="first:text-[#c9a575]">
                            <p>{el}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Details;