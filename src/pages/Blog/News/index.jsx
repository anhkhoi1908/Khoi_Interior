import React, { Fragment, useState } from "react";
// import { news } from "../../../mocks/Home";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import Pagination from "../../../components/Pagination";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const News = () => {
    const [active, setActive] = useState(1);
    // const getItemProps = (index) =>
    // ({
    //   variant: active === index ? "filled" : "text",
    //   color: "red",
    //   onClick: () => setActive(index),
    //   className: "rounded-full",
    // } as any)
 
    const next = () => {
        if (active === 10) return;
        setActive(active + 1);
    };
 
    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };
    // const [pagination, setPagination] = useState({
    //     _page: 1,
    //     _limit: 1,
    //     _totalRows: 11
    // });

    // const handlePageChange = (newPage) => {  
    //     console.log('New page: ', newPage)
    // }

    // const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);

    // const tabs = $$(".tab-item");
    // const panes = $$(".tab-pane");

    // const tabActive = $(".tab-item.active");
    // const line = $(".tabs .line");

// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
// requestIdleCallback(function () {
//     line.style.left = tabActive.offsetLeft + "px";
//     line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//     const pane = panes[index];

//     tab.onclick = function () {
//         $(".tab-item.active").classList.remove("active");
//         $(".tab-pane.active").classList.remove("active");

//         line.style.left = this.offsetLeft + "px";
//         line.style.width = this.offsetWidth + "px";

//         this.classList.add("active");
//         pane.classList.add("active");
//     };
// });

// const data = [
//     {
//       label: "HTML",
//       value: "html",
//       desc: `It really matters and then like it really doesn't matter.
//       What matters is the people who are sparked by it. And the people
//       who are like offended by it, it doesn't matter.`,
//     },
//     {
//       label: "React",
//       value: "react",
//       desc: `Because it's about motivating the doers. Because I'm here
//       to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
 
//     {
//       label: "Vue",
//       value: "vue",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
 
//     {
//       label: "Angular",
//       value: "angular",
//       desc: `Because it's about motivating the doers. Because I'm here
//       to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
 
//     {
//       label: "Svelte",
//       value: "svelte",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//   ];

    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl">{'Articles & News'}</h1>
                {/* <div className="flex items-center gap-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton className="rounded-fulll bg-black" variant={active === 1 ? `filled` : `text`} onClick={setActive(1)}>1</IconButton>
                        <IconButton className="rounded-fulll bg-black" variant={active === 2 ? `filled` : `text`} onClick={setActive(2)}>2</IconButton>
                        <IconButton className="rounded-fulll bg-black" variant={active === 3 ? `filled` : `text`} onClick={setActive(3)}>3</IconButton>
                        <IconButton className="rounded-fulll bg-black" variant={active === 4 ? `filled` : `text`} onClick={setActive(4)}>4</IconButton>
                        <IconButton className="rounded-fulll bg-black" variant={active === 5 ? `filled` : `text`} onClick={setActive(5)}>5</IconButton>

                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={next}
                        disabled={active === 5}
                    >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div> */}

                <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>

            {/* <ul className="flex w-3/5 mx-auto justify-between mt-10">
                {news.map((el, index) => (
                    <li key={index} className="mb-10 border-2 rounded-3xl w-[32%] hover:scale-105 duration-300 hover:text-[#c9a575]">
                        <Link className="block p-4">
                            <img src={`/src/assets/imgs/${el.image}`} alt="Image new"/>
                            <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.content}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <h1>{el.date}</h1>
                                <button className="bg-[#F4F0EC] px-5 py-4 rounded-full">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex w-3/5 mx-auto justify-between mt-10">
                {news.map((el, index) => (
                    <li key={index} className="mb-10 border-2 rounded-3xl w-[32%] hover:scale-105 duration-300 hover:text-[#c9a575]">
                        <Link className="block p-4">
                            <img src={`/src/assets/imgs/${el.image}`} alt="Image new"/>
                            <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.content}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <h1>{el.date}</h1>
                                <button className="bg-[#F4F0EC] px-5 py-4 rounded-full">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul> */}
            {/* <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}

            </div>
        </Fragment>
    );
};

export default News;