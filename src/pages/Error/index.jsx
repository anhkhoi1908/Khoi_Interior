import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import ErrorImg from '../../../public/assets/imgs/error.png'

const ErrorPage = () => {
    return (
        <Fragment>
            <div className="flex justify-end">
            <div className="flex justify-end items-center w-4/5">
                <div className="w-2/5">
                    <h1 className="font-serif font-bold text-[#c9a575] text-[10rem]">{'404'}</h1>
                    <h2 className="font-serif font-bold text-2xl">{'We are sorry, but the page you requested was not found'}</h2>
                    <button className="bg-[#292F36] rounded-2xl mt-10 hover:opacity-75 duration-300">
                        <Link className="px-6 py-4 block link">
                            <span className="mr-4 text-white">{"Back To Home"}</span>
                            <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                        </Link>
                    </button>
                </div>
                <div className="w-1/2">
                    <img src={ErrorImg}/>
                </div>
            </div>
            </div>
        </Fragment>
    )
};

export default ErrorPage;