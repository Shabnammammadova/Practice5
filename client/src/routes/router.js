import Home from "../pages/Home/home"
import WeOffer from "../pages/WeOffer/weoffer"
import TopCourse  from "../pages/TopCourse/topcourse"
import Schedule from "../pages/Schedule/schedule"
import Trainer from "../pages/Trainer/trainer"
import Plan from "../pages/Plan/plan"
import Pages from "../pages/Pages/pages"



import MainRoot from "../pages/MainRoot"


export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/weoffer",
                element:<WeOffer/>
            },
            {
                path:"/topcourse",
                element:<TopCourse/>
            },
            {
                path:"/schedule",
                element:<Schedule/>
            },
            {
                path:"/trainer",
                element:<Trainer/>
            },
            {
                path:"/plan",
                element:<Plan/>
            },
            {
                path:"/pages",
                element:<Pages/>
            }
        ]
    }
]