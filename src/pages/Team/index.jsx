import { Fragment } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import { teams } from "../../mocks/Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { Link } from "react-router-dom";

const TeamPage = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Our Professional'} subtitle={'Home / Team'} img={`/assets/imgs/Banner_team.jpg`}/>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <ul className="flex flex-wrap justify-evenly pl-0">
                    {teams.map((el, index) => (
                        <Link className="link block" to={'/team_single'}>
                            <li key={index} className="text-center mb-10 hover:scale-110 hover:text-[#c9a575] duration-300">
                                <img src={`/assets/imgs/${el.image}`} className="w-[12rem]"/>
                                <h1 className="font-bold font-serif text-xl mt-4">{el.name}</h1>
                                <p>{el.address}</p>
                                <ul className="flex pl-0 justify-evenly">
                                    {el.icon.map((el) => (
                                        <li><Link><FontAwesomeIcon icon={el} className="link"/></Link></li>
                                    ))}
                                </ul>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default TeamPage;