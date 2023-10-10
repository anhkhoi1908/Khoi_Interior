import React, { Fragment, useState } from "react";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bios, quesions_team_single } from "../../../../mocks/Team";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Bio = () => {
    // const [data1, setData1] = useState(0)
    // const [data2, setData2] = useState(0)
    // const [data3, setData3] = useState(0)
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <h1 className="text-4xl font-serif font-bold">{'Short Biography'}</h1>
                <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which don\'t look even slightly believable.'}</p>
                <p className="my-10">{'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.'}</p>           
                <ul className="flex pl-0 justify-between">
                    <li className="w-1/2">
                        <h2 className="font-serif font-bold text-xl">{'Simplicity and Functionality'}</h2>
                        <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.'}</p>
                        <p>{'There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour'}</p>
                        <ul className="pl-0">
                            {bios.map((el, index) => (
                                <li key={index} className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-bold">{el.skill}</h1>
                                        <span className="font-bold">{`${el.data_default}%`}</span>
                                    </div>
                                    <input className="w-full accent-[#c9a575]" type="range" min='0' max='100' value={el.data_default}
                                        onChange={(e) => el.setData(e.target.value)}/>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="w-2/5">
                        <h2 className="font-serif font-bold text-xl">{'Qustion And Answer'}</h2>
                        <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.'}</p>
                        <ul className="w-full pl-0">
                        {quesions_team_single.map((el, id) => (<li key={id}>
                            <Accordion open={open === id} icon={<Icon id={id} open={open}/>} 
                                    className="border-2 border-[#c9a575] rounded-2xl mb-4 px-4">
                                <AccordionHeader onClick={() => handleOpen(id)} 
                                    className={`transition-colors font-bold text-[1rem] hover:text-[#c9a575]
                                    ${open === id ? "text-[#c9a575]" : ""}`}>
                                        {el.question}
                                </AccordionHeader>
                                <AccordionBody className='w-4/5'>{el.answer}</AccordionBody>
                            </Accordion>
                        </li>))}
                    </ul>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
};

export default Bio;