import { React, Fragment } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { result } from "../../../../mocks/Services";

const Results = () => {
    return (
        <Fragment>
           <div className="mt-[10rem] w-3/5 mx-auto text-[#292F36]">
                <ul>
                    {result.map((el, index) => (
                        <li key={index} className="flex justify-between first:hidden last:flex-row-reverse items-center">
                            <div className="w-2/5">
                                <h1 className="text-4xl font-serif font-bold">{el.title}</h1>
                                <p className="my-6">{el.des}</p>
                                <button className="bg-[#292F36] rounded-2xl hover:opacity-75 duration-300">
                                    <Link className="px-6 py-4 block link">
                                        <span className="mr-4 text-white">{el.btn}</span>
                                        <FontAwesomeIcon icon={el.icon} className="text-[#c9a575]"/>
                                    </Link>
                                </button>
                            </div>
                            <div className="w-1/2">
                                <img src={`/public/assets/imgs/${el.image}`}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Results;