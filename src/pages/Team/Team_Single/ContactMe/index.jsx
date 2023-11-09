import { React, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { inputs } from "../../../../mocks/About";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
    return (
        <Fragment>
            <div className="text-center mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl">{"Contact Me"}</h1>
                <form className="gift_card_order_form w-3/5 mx-auto mt-20">
                    <fieldset>
                        <ul className="flex justify-between pl-0">
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
                                placeholder="Sent Your Message" 
                                maxLength={250}  
                                id="order_project_message">
                            </textarea>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <input type="checkbox" className="accent-[#c9a575] w-[2rem] h-[1rem]" id="Save-info"/>
                            <label htmlFor="Save-info" className="text-[#c9a575]">
                            {'Save my name, email, and website in this browser for the next time I comment.'}</label>
                        </div>
                        <button className="bg-[#292F36] rounded-2xl mt-10 hover:opacity-75 duration-300">
                            <Link className="px-6 py-4 block link">
                                <span className="mr-4 text-white">{"Send Now"}</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-[#c9a575]"/>
                            </Link>
                        </button>
                    </fieldset>
                </form>
            </div>
        </Fragment>
    )
};

export default ContactMe;