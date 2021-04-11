import HomePage from '../pages/HomePage' 
import CourseListingPage from '../pages/CourseListingPage'
import CoursePage from '../pages/CoursePage'

const indexRoutes = [
    {
        path:"/",
        component:HomePage
    },
    {
        path:"/courses/",
        component:CourseListingPage
    },
    {
        path:"/courses/:categoryName",
        component:CourseListingPage
    },
    {
        path:"/courses/:categoryName/:subCategoryName",
        component:CourseListingPage
    },
    {
        path:"/course/:courseName",
        component:CoursePage
    },
    
]

export default indexRoutes;