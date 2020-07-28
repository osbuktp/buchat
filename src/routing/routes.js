import LoginLayout from '../layouts/LoginLayout'
import MainLayout from '../layouts/MainLayout'
import LoginForm from '../components/LoginForm'
import Chat from '../components/Chat'

const routes = [
    {
        name: "Login",
        path: "/login",
        exact: true,
        protected: false,
        component: LoginForm,
        layout: LoginLayout
    },
    {
        name: "Main",
        path: "/",
        exact: true,
        protected: true,
        component: Chat,
        layout: MainLayout
    },
    {
        name: "Not found",
        path: "/",
        exact: false,
        protected: true,
        component: LoginForm,
        layout: MainLayout
    }
]

export default routes;