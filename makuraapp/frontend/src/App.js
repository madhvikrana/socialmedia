import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Navigate
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";

function App() {

  const currentUser = true;

  const Layout = ()=>{
    return(
      <div>
        <NavBar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <Outlet />
          <RightBar />

        </div>
      </div>
    )
  }
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
