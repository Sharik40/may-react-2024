import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
    {path: '/', element: <div><MainLayout/></div>, children: [
            {index: true, element: <div><HomePage/></div>},
            {path: 'users', element: <div><UsersPage/></div>},
            {path: 'posts', element: <div><PostsPage/></div>},
            {path: 'comments', element: <div><CommentsPage/></div>}
        ]},

])
