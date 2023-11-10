import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";
// import Pagination_Mock from "../../../components/Pagination/main";

// const items = [...Array(250).keys()];

const getPostData = (data) => {
    return (
        <ul className="items flex !flex-wrap justify-between mt-10 pl-0">{data.map((el, index) => (
            <li key={index} className="mb-10 w-[32%]">
                <Link className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300" to={'/blog_detail'}>
                    <img src={el.image} className="w-full h-[14rem] rounded-[2rem]" alt="Image new"/>
                    <h2 className="font-serif font-bold text-[1.2rem] mt-4">{el.title}</h2>
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-[0.8rem]">{'26 December, 2022'}</h1>    
                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </Link>
            </li>
        ))}</ul> 
    )
}

const News = () => {
 const [postsPerPage] = useState(3);
 const [offset, setOffset] = useState(1);
 const [posts, setAllPosts] = useState([]);
 const [pageCount, setPageCount] = useState(4)

 const getAllPosts = async () => {
    const res = await axios.get(`https://c2t-api.onrender.com/interior/news`)
    const data = res.data;
    const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
  
    const postData = getPostData(slice)
  
    setAllPosts(postData)
    // setPageCount(Math.ceil(data.length / postsPerPage))
  }
  
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1)

  };
  
  useEffect(() => {
    getAllPosts()
  }, [offset])
    // const [post, setPost] = useState([]);

    // useEffect(() => {
    //     axios.get('https://c2t-api.onrender.com/interior/news?limit=3')
    //     .then(res => {setPost(res.data)})
    //     .catch(error => console.log(error))
    // }, [])

//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;

//     axios
//       .get("https://c2t-api.onrender.com/interior/news")
//       .then(function (resp) {
//         return resp.data;
//       })
//       .then((data) => {
//         setCurrentItems(data.slice(itemOffset, endOffset));
//         console.log(data)
//       });
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);

//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % items.length;
//         console.log(
//           `User requested page number ${event.selected}, which is offset ${newOffset}`
//         );
//         setItemOffset(newOffset);
//         console.log(currentItems.length)
//       };

    return (
        <Fragment>
            <div id="news_blog" className="w-3/5 mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl">{'Articles & News'}</h1>
                <div>{posts}</div>
                {/* <ul className="items flex !flex-wrap justify-between mt-10 pl-0">{data.map((el, index) => (
                <li key={index} className="mb-10 w-[32%]">
                    <Link className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300" to={'/blog_detail'}>
                        <img src={el.image} className="w-full h-[14rem] rounded-[2rem]" alt="Image new"/>
                        <h2 className="font-serif font-bold text-[1.2rem] mt-4">{el.title}</h2>
                        <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[0.8rem]">{'26 December, 2022'}</h1>    
                            <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </div>
                    </Link>
                </li>
                ))}</ul> */}
                {/* <ul className="flex !flex-wrap justify-between mt-10 pl-0">{props.blogs.map((el) => (
                    <li key={el.id} className="mb-10 w-[32%]">
                        <Link className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300" to={'/blog_detail'}>
                            <img src={`/assets/imgs/${el.image}`} alt="Image new"/>
                            <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.title}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <h1 className="text-[0.8rem]">{el.date}</h1>
                                <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}</ul> */}
            </div>  
            <ReactPaginate
            previousLabel={"Trước"}
            nextLabel={"Sau"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
        />
        </Fragment>
    );
};

export default News;