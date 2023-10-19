import React, { Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Banner_Password from '../../../public/assets/imgs/Banner_pass.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";


const Password = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Restricted Page'} subtitle={'Home / Restricted Page'} img={Banner_Password}/>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <div className="bg-[#F4F0EC] rounded-3xl text-center px-[12rem] py-[8rem] flex flex-col items-center">
                    <h1 className="font-serif font-bold text-4xl">{'Password Protected'}</h1>
                    <p>{'This page is password protected. If you are the website admin, or have access to this page, please type your password below.'}</p>
                    <div className="border-b-2 border-black w-1/2 mt-10">
                        <input placeholder="Enter Your Password" className="outline-none py-2 rounded-xl w-full bg-transparent"/>
                    </div>
                    <button className="bg-[#292F36] rounded-2xl mt-10 hover:opacity-75 duration-300">
                        <Link className="px-6 py-3 block link">
                            <span className="mr-4 text-white">{"Submit Now"}</span>
                            <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                        </Link>
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Password;