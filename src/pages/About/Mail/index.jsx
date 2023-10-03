import React, { Fragment } from "react";
import { inputs } from "../../../mocks/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Mail = () => {
    return (
        <Fragment>
            <div className="text-center mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl">{"Creative project? Let's have"}</h1>
                <h1 className="font-serif font-bold text-4xl">{"a productive talk."}</h1>
                <form className="gift_card_order_form w-3/5 mx-auto mt-20">
                    <fieldset>
                        <ul className="flex justify-between">
                            {inputs.map((el, index) => (
                                <li key={index} className="border-b-2 border-black w-[45%]">
                                    <input className="outline-none py-4 rounded-xl w-full"
                                        id={el.id}
                                        type={el.type}
                                        name={el.name}
                                        placeholder={el.placeholder}
                                        title={el.title}
                                        required
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="border-b-2 border-black">
                            <textarea className="w-full outline-none py-6 mt-2" 
                                placeholder="Hello I'm interested in..." 
                                maxLength={250}  
                                id="order_project_message">
                            </textarea>
                        </div>
                        <button className="bg-[#292F36] rounded-2xl mt-20">
                            <Link className="px-6 py-4 block">
                                <span className="mr-4 text-white">{"Send Now"}</span>
                                <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                            </Link>
                        </button>
                    </fieldset>
                </form>
            </div>
        </Fragment>
    );
};

export default Mail;