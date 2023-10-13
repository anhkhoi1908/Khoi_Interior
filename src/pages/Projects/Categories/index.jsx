import React, { Fragment } from "react";
import './style.css'
import './main.js'
import { 
    projects_bathroom, 
    projects_bedroom, 
    projects_kitchen, 
    projects_living } 
from "../../../mocks/Projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <div className="w-4/5 mx-auto tabs flex justify-center items-center border-2 border-[#c9a575] 
                rounded-2xl mb-20 font-bold">
                    <div className="tab-item active">{'Bathroom'}</div>
                    <div className="tab-item">{'Bedroom'}</div>
                    <div className="tab-item">{'Kitchen'}</div>
                    <div className="tab-item">{'Living'}</div>
                </div>
                <div className="tab-content">
                    <ul className="flex-wrap justify-between pl-0 tab-pane active">
                        {projects_bathroom.map((el) => (
                            <li key={el.id} className="w-[48%] mb-10">
                                <Link className="link" to={'/project_detail'}>
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`/src/assets/imgs/${el.image}`} 
                                            alt="Image project"
                                            className="duration-300 hover:brightness-75"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
                                            <span>{el.fiel}</span>
                                        </div>
                                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                            <FontAwesomeIcon icon={el.icon}/>
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul> 
                    <ul className="flex-wrap justify-between pl-0 tab-pane">
                        {projects_bedroom.map((el) => (
                            <li key={el.id} className="w-[48%] mb-10">
                                <Link className="link">
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`/src/assets/imgs/${el.image}`} 
                                            alt="Image project"
                                            className="duration-300 hover:brightness-75"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
                                            <span>{el.fiel}</span>
                                        </div>
                                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                            <FontAwesomeIcon icon={el.icon}/>
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>                
                    <ul className="flex-wrap justify-between pl-0 tab-pane">
                        {projects_kitchen.map((el) => (
                            <li key={el.id} className="w-[48%] mb-10">
                                <Link className="link">
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`/src/assets/imgs/${el.image}`} 
                                            alt="Image project"
                                            className="duration-300 hover:brightness-75"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
                                            <span>{el.fiel}</span>
                                        </div>
                                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                            <FontAwesomeIcon icon={el.icon}/>
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul> 
                    <ul className="flex-wrap justify-between pl-0 tab-pane">
                        {projects_living.map((el) => (
                            <li key={el.id} className="w-[48%] mb-10">
                                <Link className="link">
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`/src/assets/imgs/${el.image}`} 
                                            alt="Image project"
                                            className="duration-300 hover:brightness-75"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
                                            <span>{el.fiel}</span>
                                        </div>
                                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                            <FontAwesomeIcon icon={el.icon}/>
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul> 
                </div>
            </div>
        </Fragment>
    )
}

export default Categories;