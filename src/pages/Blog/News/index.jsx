import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

const News = () => {
  const [postsPerPage] = useState(3);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(4);

  const getAllPosts = async () => {
    await axios
      .get(`https://c2t-api.onrender.com/interior/news`)
      .then((rs) => {
        if(rs.status >= 400 && rs.status <= 599) return null
        if(rs.status >= 200 && rs.status <= 399) setAllPosts(rs.data);
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getAllPosts();
  }, [offset]);

  return (
    <Fragment>
      <div id="news_blog" className="w-3/5 mx-auto mt-[10rem]">
        <h1 className="font-serif font-bold text-4xl">{"Articles & News"}</h1>
        {posts !== null && (
          <ul className="items flex !flex-wrap justify-between mt-10 pl-0">
            {posts.map((el) => (
              <li key={el.id} className="mb-10 w-[32%]">
                <Link
                  className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300"
                  to={`/blog_detail?bid=${el.id}`}
                >
                  <img
                    src={el.image}
                    className="w-full h-[14rem] rounded-[2rem]"
                    alt="Image new"
                  />
                  <h2 className="font-serif font-bold text-[1.2rem] mt-4">
                    {el.title}
                  </h2>
                  <div className="flex items-center justify-between mt-4">
                    <h1 className="text-[0.8rem]">{"26 December, 2022"}</h1>
                    <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
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
