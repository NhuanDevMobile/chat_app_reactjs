//Layout
import ChatRoom from "../Components/ChatRoom";
import Login from "../Components/Login";


//public Routes
const publicRoutes = [
    {
        path: '/',
        component: ChatRoom,
    },
    {
        path: '/login',
        component: Login,
    },
];
//private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
