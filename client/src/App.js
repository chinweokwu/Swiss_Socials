import React, {useContext} from 'react';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import RightBar from './Components/RightBar/RightBar';
import LeftBar from './Components/LeftBar/LeftBar';
import Profile from './Pages/Profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet
} from "react-router-dom";
import './style.scss';
import {ModeContext} from "./useContext/ModeContext";
import {AuthContext} from "./useContext/AuthContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const {currentUser} = useContext(AuthContext)
  const {darkMode} = useContext(ModeContext);
  const queryClient = new QueryClient();

  const Layout = () =>{
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark": "light"}`}>
          <NavBar/>
          <div style={{display: "flex"}}>
            <LeftBar/>
            <div style={{ flex: 6}}>
              <Outlet/>
            </div>
            <RightBar/>
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoute><Layout /></ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
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
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
