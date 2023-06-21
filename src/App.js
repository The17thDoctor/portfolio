import './App.css';
import Homepage from "./Pages/Homepage/Homepage";
import Project, {projectLoader} from "./Pages/Project/Project";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <Navigate to="/"/>
    },
    {
        path: "projects/:projectId",
        loader: projectLoader,
        element: <Project/>
    }
]);

function App() {
  return (
    <div className="App has-background-white-bis is-flex-direction-column" style={{minHeight: "100vh"}}>
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
  );
}

export default App;
