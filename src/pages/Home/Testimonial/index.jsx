import React, { Fragment } from "react";
import { testimonials } from "../../../mocks/Home";

const Testimonial = () => {
    return (
        <Fragment>
            <div className="bg-[#F4F0EC] w-3/5 mx-auto mt-[10rem] py-20 px-10 rounded-3xl text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl text-center">{"What The People Think"}</h1>
                <h1 className="font-serif font-bold text-4xl mb-8 text-center">{"About Us"}</h1>
                <ul className="flex">
                    {testimonials.map((el, index) => (
                        <li key={index} className="bg-white rounded-2xl py-10 px-6 mx-2">
                            <div className="flex items-center mb-8">
                                <img src={el.img}/>
                                <div className="ml-4">
                                    <h1 className="font-bold font-serif">{el.name}</h1>
                                    <p>{el.add}</p>
                                </div>
                            </div>
                            <span>{el.cmt}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Testimonial;