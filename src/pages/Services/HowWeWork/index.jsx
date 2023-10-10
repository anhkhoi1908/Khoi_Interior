import React, { Fragment } from "react";
import { how_we_do } from "../../../mocks/Services";

const HowWeWork = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto bg-[#F4F0EC] rounded-3xl pt-[8rem] pb-[6rem]">
                <h1 className="font-serif font-bold text-4xl text-center mb-4">{"How We Work"}</h1>
                <p className="w-3/5 mx-auto text-center">{'It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</p>
                <ul className="mt-20 [&>*:nth-child(even)]:flex-row-reverse pl-0">
                    {how_we_do.map((el, index) => (
                        <li key={index} className="flex items-center justify-evenly mb-20">
                            <img src={`/src/assets/imgs/${el.image}`} width={400} height={300}/>
                            <div className="w-2/5">
                                <img src={`/src/assets/imgs/${el.image_sub}`}/>
                                <h1 className="text-4xl font-serif font-bold mt-[4rem] mb-4">{el.title}</h1>
                                <p>{el.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default HowWeWork;