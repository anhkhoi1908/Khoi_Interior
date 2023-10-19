import React, { Fragment, useState } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { faqs, project_questions } from "../../mocks/FAQ";

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

const FAQPage = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Fragment>
            <Banner_Inner title={'Faq\'s'} subtitle={'Home / Faq'} img={`/assets/imgs/Banner_faq.jpg`}/>
            <div className="w-[70%] mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl text-center">{'Every Question Answered'}</h1>
                <div className="flex flex-row-reverse justify-around mt-14 items-center">
                    <div className="w-[45%] flex justify-end"><img src={`/assets/imgs/faq_1.png`} className="w-[28rem] h-[31.25rem]"/></div>
                    <ul className="w-1/2 pl-0">
                        {faqs.map((el, id) => (<li key={id}>
                            <Accordion open={open === id} icon={<Icon id={id} open={open}/>} className="border-b-2 border-[#c9a575]">
                                <AccordionHeader onClick={() => handleOpen(id)} 
                                    className={`transition-colors font-bold font-serif hover:text-[#c9a575]
                                    ${open === id ? "text-[#c9a575]" : ""}`}>
                                        {el.question}
                                </AccordionHeader>
                                <AccordionBody className='w-4/5'>{el.answer}</AccordionBody>
                            </Accordion>
                        </li>))}
                    </ul>
                </div>
            </div>
            <div className="w-[70%] mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl text-center">{'Every Question Answered'}</h1>
                <div className="flex justify-around mt-14 items-center">
                    <div className="w-[45%] flex justify-start"><img src={`/assets/imgs/faq_2.png`} className="w-[28rem] h-[31.25rem]"/></div>
                    <ul className="w-1/2 pl-0">
                        {project_questions.map((el, id) => (<li key={id}>
                            <Accordion open={open === id} icon={<Icon id={id} open={open}/>} className="border-b-2 border-[#c9a575]">
                                <AccordionHeader onClick={() => handleOpen(id)} 
                                    className={`transition-colors font-bold font-serif hover:text-[#c9a575]
                                    ${open === id ? "text-[#c9a575]" : ""}`}>
                                        {el.question}
                                </AccordionHeader>
                                <AccordionBody className='w-4/5'>{el.answer}</AccordionBody>
                            </Accordion>
                        </li>))}
                    </ul>
                </div>
            </div>
                
        </Fragment>
    );
};

export default FAQPage;