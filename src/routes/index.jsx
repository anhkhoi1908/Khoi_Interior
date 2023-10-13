import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import PricingPage from "../pages/Pricing";
import BlogPage from "../pages/Blog";
import ServicePage from "../pages/Services";
import ContactPage from "../pages/Contact";
import FAQPage from "../pages/FAQ";
import TeamPage from "../pages/Team";
import Team_Single from "../pages/Team/Team_Single";
import ErrorPage from "../pages/Error";
import Password from "../pages/Password";
import ChangeBlog from "../pages/ChangeBlog";
import Service_Detail_Page from "../pages/Services/Services_Detail";
import ProjectsPage from "../pages/Projects";
import Project_Detail from "../pages/Projects/Categories/Project_Detail";
import Blog_Detail from "../pages/Blog/Blog_Detail";

const publicRoutes =[
    {path: '/', element:<HomePage/>},
    {path: '/about',  element:<AboutPage/>},
    {path: '/services',  element:<ServicePage/>},
    {path: '/service_single',  element:<Service_Detail_Page/>},
    {path: '/blog',  element:<BlogPage/>},
    {path: '/blog_detail',  element:<Blog_Detail/>},
    {path: '/pricing',  element:<PricingPage/>},
    {path: '/contact',  element:<ContactPage/>},
    {path: '/faq',  element:<FAQPage/>},
    {path: '/team',  element:<TeamPage/>},
    {path: '/team_single',  element:<Team_Single/>},
    {path: '/error',  element:<ErrorPage/>},
    {path: '/password',  element:<Password/>},
    {path: '/changeblog',  element:<ChangeBlog/>},
    {path: '/projects',  element:<ProjectsPage/>},
    {path: '/project_detail',  element:<Project_Detail/>},
];

export default publicRoutes;