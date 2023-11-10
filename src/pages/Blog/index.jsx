import { React, Fragment, useState, useEffect } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import LatestPost from "./LatestPost";
import News from "./News";
import { getBlogs, getLength } from "../../mocks/Blog";
import Pagination_Mock from "../../components/Pagination/main.jsx"
import './Style.css'
import axios from "axios";

const BlogPage = ({currentItems}) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(3);

    // const [post, setPost] = useState([]);
    
    // useEffect(() => {
    //     axios.get('https://c2t-api.onrender.com/interior/news')
    //     .then(res => {setPost(res.data)})
    //     .catch(error => console.log(error))
    // }, [])

    let totalPage = Math.ceil(getLength() / limit);

    const handlePageChange = (value) => {
        if (value === "&laquo;" || value === "... ") {
            setPage(1)
        } else if (value === "&lsaquo;") {
            if (page != 1) {
                setPage(page - 1)
            }
        } else if (value === "&rsaquo;") {
            if (page != totalPage) {
                setPage(page + 1)
            }
        } else if (value === "&raquo;" || value === " ...") {
            setPage(totalPage)
        } else {
            setPage(value)
        }
    }

    return (
        <Fragment>
            <Banner_Inner img={`/assets/imgs/Banner_blog.png`} title={'Articles & News'} subtitle={'Home / Blog'}/>
            <LatestPost/>
            <News currentItems={currentItems}/>
                {/* <Pagination_Mock 
                    totalPage={totalPage} 
                    page={page} 
                    limit={limit} 
                    siblings={1} 
                    onPageChange={handlePageChange}
                /> */}
        </Fragment>
    );
};

export default BlogPage;