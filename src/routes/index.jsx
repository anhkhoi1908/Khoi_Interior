import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import PricingPage from "../pages/Pricing";
import BlogPage from "../pages/Blog";
import ServicePage from "../pages/Service";

const publicRoutes =[
    {path: '/', element:<HomePage/>},
    {path: '/about',  element:<AboutPage/>},
    {path: '/service',  element:<ServicePage/>},
    {path: '/blog',  element:<BlogPage/>},
    {path: '/pricing',  element:<PricingPage/>},
];

export default publicRoutes;