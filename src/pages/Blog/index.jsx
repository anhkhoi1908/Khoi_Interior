import { React, Fragment, useState } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import Banner_Blog from "../../assets/imgs/Banner_blog.png"
import LatestPost from "./LatestPost";
import News from "./News";
import { getBlogs, getLength } from "../../mocks/Blog";
import Pagination_Mock from "../../components/Pagination/main.jsx"
import './Style.css'

const BlogPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);

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
            <Banner_Inner img={Banner_Blog} title={'Articles & News'} subtitle={'Home / Blog'}/>
            <LatestPost/>
            <News blogs={getBlogs(page, limit)}/>
            <Pagination_Mock 
                totalPage={totalPage} 
                page={page} 
                limit={limit} 
                siblings={1} 
                onPageChange={handlePageChange}
            />
        </Fragment>
    );
};

export default BlogPage;