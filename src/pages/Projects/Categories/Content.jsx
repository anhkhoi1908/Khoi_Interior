import { React, Fragment } from "react";
import { 
    projects_bathroom, 
    projects_bedroom, 
    projects_kitchen, 
    projects_living,
} 
from "../../../mocks/Projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Category_bedroom = () => {
    return (
        <Fragment>
            <ul className="flex flex-wrap justify-between pl-0">
                {projects_bedroom.map((el) => (
                    <li key={el.id} className="w-[48%] mb-10">
                        <Link className="link" to={'/project_detail'}>
                            <div className="overflow-hidden">
                                <img 
                                    src={`/assets/imgs/${el.image}`} 
                                    alt="Image project"
                                    className="duration-300 hover:brightness-75 rounded-3xl"
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
        </Fragment>
    )
};

export const Category_bathroom = () => {
    return (
        <Fragment>
            <ul className="flex flex-wrap justify-between pl-0">
                {projects_bathroom.map((el) => (
                    <li key={el.id} className="w-[48%] mb-10">
                        <Link className="link" to={'/project_detail'}>
                            <div className="overflow-hidden">
                                <img 
                                    src={`/assets/imgs/${el.image}`} 
                                    alt="Image project"
                                    className="duration-300 hover:brightness-75 rounded-3xl"
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
        </Fragment>
    )
};

export const Category_kitchen = () => {
    return (
        <Fragment>
            <ul className="flex flex-wrap justify-between pl-0">
                {projects_kitchen.map((el) => (
                    <li key={el.id} className="w-[48%] mb-10">
                        <Link className="link" to={'/project_detail'}>
                            <div className="overflow-hidden">
                                <img 
                                    src={`/assets/imgs/${el.image}`} 
                                    alt="Image project"
                                    className="duration-300 hover:brightness-75 rounded-3xl"
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
        </Fragment>
    )
};

export const Category_living = () => {
    return (
        <Fragment>
            <ul className="flex flex-wrap justify-between pl-0">
                {projects_living.map((el) => (
                    <li key={el.id} className="w-[48%] mb-10">
                        <Link className="link" to={'/project_detail'}>
                            <div className="overflow-hidden">
                                <img 
                                    src={`/assets/imgs/${el.image}`} 
                                    alt="Image project"
                                    className="duration-300 hover:brightness-75 rounded-3xl"
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
        </Fragment>
    )
};


// const Content_Categories = () => {
//     const [active, setActive] = useState(0);
//     const handleClick = (e) => {
//         const index = parseInt(e.target.id, 0);
//         if (index !== active) {
//             setActive(index);
//         }
//     };
//     return (
//         <Fragment>
//             <div>
//                 {Content_categories.map((list, index) => (
//                     <div key={index}>
//                         <Content active={active === index}>
//                             <ul className="flex flex-wrap justify-between pl-0">
//                                 {list.map((el) => (
//                                     <li key={el.id} className="w-[48%] mb-10">
//                                         <Link className="link" to={'/project_detail'}>
//                                             <div className="overflow-hidden">
//                                                 <img 
//                                                     src={`/src/assets/imgs/${el.image}`} 
//                                                     alt="Image project"
//                                                     className="duration-300 hover:brightness-75 rounded-3xl"
//                                                 />
//                                             </div>
//                                             <div className="flex items-center justify-between mt-4">
//                                                 <div>
//                                                     <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
//                                                     <span>{el.fiel}</span>
//                                                 </div>
//                                                 <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
//                                                     <FontAwesomeIcon icon={el.icon}/>
//                                                 </button>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </Content>
//                     </div>
//                 ))}
//             </div> 
//         </Fragment>
//     )
// }

// export default Content_Categories;
