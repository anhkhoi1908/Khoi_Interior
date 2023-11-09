import React, { Fragment } from "react";
import { inputs_contact } from "../../../../mocks/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Reply = () => {
    return (
        <Fragment>
            <div className="mt-[10rem]">
                <h1 className="font-serif font-bold text-2xl my-8">{'Reply'}</h1>
                <ul className="flex flex-wrap justify-between pl-0">
                    {inputs_contact.map((el, index) => (
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
                    <div className="border-b-2 border-black w-full">
                        <textarea className="w-full outline-none py-6 mt-2" 
                            placeholder="Hello I'm interested in..." 
                            maxLength={250}  
                            id="order_project_message">
                        </textarea>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <input type="checkbox" className="accent-[#c9a575] w-[2rem] h-[1rem]" id="Save-info-cus"/>
                        <label htmlFor="Save-info-cus" className="text-[#c9a575]">
                        {'Save my name, email, and website in this browser for the next time I comment.'}</label>
                    </div>
                    <button className="bg-[#292F36] rounded-2xl mt-10 hover:opacity-75 duration-300">
                        <Link className="px-6 py-3 block link">
                            <span className="mr-4 text-white">{"Send Now"}</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-[#c9a575]"/>
                        </Link>
                    </button>
                </ul>
            </div>
        </Fragment>
    )
}

export default Reply;