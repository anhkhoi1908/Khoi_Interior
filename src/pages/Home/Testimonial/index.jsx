import React, { Fragment } from "react";
import { testimonials } from "../../../mocks/Home";

const Testimonial = () => {
    return (
        <Fragment>
            <div id="testimonial" className="bg-[#F4F0EC] w-3/5 mx-auto mt-[10rem] py-20 px-10 rounded-3xl text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl text-center">{"What The People Think"}</h1>
                <h1 className="font-serif font-bold text-4xl mb-8 text-center">{"About Us"}</h1>
                <ul className="flex pl-0">
                    {testimonials.map((el, index) => (
                        <li key={index} className="bg-white rounded-2xl py-10 px-6 mx-2">
                            <div className="flex items-center mb-8">
                                <div><img src={`/public/assets/imgs/${el.image}`} width={50} height={50} alt="Image people"/></div>
                                <div className="ml-4">
                                    <h1 className="font-bold font-serif text-[1rem]">{el.name}</h1>
                                    <span>{el.add}</span>
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