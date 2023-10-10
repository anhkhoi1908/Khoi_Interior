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

const publicRoutes =[
    {path: '/', element:<HomePage/>},
    {path: '/about',  element:<AboutPage/>},
    {path: '/services',  element:<ServicePage/>},
    {path: '/blog',  element:<BlogPage/>},
    {path: '/pricing',  element:<PricingPage/>},
    {path: '/contact',  element:<ContactPage/>},
    {path: '/faq',  element:<FAQPage/>},
    {path: '/team',  element:<TeamPage/>},
    {path: '/team_single',  element:<Team_Single/>},
    {path: '/error',  element:<ErrorPage/>},
    {path: '/password',  element:<Password/>},
    {path: '/changeblog',  element:<ChangeBlog/>},
];

export default publicRoutes;