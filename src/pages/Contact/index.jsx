import React, { Fragment } from "react";
import Banner_Inner from '../../components/layout_inner/Banner_Inner'
import Banner_Contact from "../../assets/imgs/Banner_contact.png"
import { inputs_contact } from "../../mocks/Contact";
import { socialMedia } from "../../mocks/layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sub_content } from "../../mocks/Contact";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Contact Us'} subtitle={'Home / Contact'} img={Banner_Contact}/>
            <div className="w-3/5 mx-auto mt-[10rem] relative">
                <h1 className="font-serif font-bold text-4xl w-3/5 text-center mx-auto">
                {'We love meeting new people and helping them.'}</h1>
                <div className="flex mt-20">
                    <div className="bg-[#F4F0EC] rounded-3xl flex flex-col justify-evenly">
                        <ul>{sub_content.map((el, index) => (
                            <li key={index} className="flex items-center mt-3">
                                <FontAwesomeIcon icon={el.icon} className="text-[#CDA274] p-2 bg-white rounded-full"/>
                                <span className="ml-4">{el.content}</span>
                            </li>
                        ))}</ul>
                        <ul className="flex">
                            {socialMedia.map((el, index) => (
                                <li key={index} className="mr-8">
                                    <Link className="link"><FontAwesomeIcon icon={el} size="2x"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="flex flex-wrap justify-between">
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
                    </ul>
                </div>
                <div className="text-end">
                    <button className="bg-[#292F36] rounded-2xl hover:opacity-75 duration-300 mt-10">
                        <Link className="px-6 py-3 flex justify-center items-center text-center link">
                            <span className="mr-4 text-white">{"Send Now"}</span>
                            <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                        </Link>
                    </button>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.939175113799!2d106.68880027514517!3d10.739171389407343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec7745a3db%3A0xd67efac4e9d528c5!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFZp4buHdCBN4bu5!5e0!3m2!1svi!2s!4v1696824915749!5m2!1svi!2s"
                width={900} height={350} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                className="mx-auto rounded-3xl mt-[10rem]"
            ></iframe>
        </Fragment>
    );
};

export default ContactPage;