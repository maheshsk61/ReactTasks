import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import FindDistrict from './Tasks/FindDistrict'
import BgColorChange from './Tasks/BgColorChange'
import Sort from './Tasks/Sort'
import Slideshow from './Tasks/Slideshow'
const objects = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: '/find_districts',
    element: <FindDistrict />
  },
  {
    path: '/background_color_change',
    element: <BgColorChange />
  },
  {
    path: '/sorting',
    element: <Sort />
  },
  {
    path: '/slideshow',
    element: <Slideshow />
  },
])
export default function App() {
  return (
    <center>
      <RouterProvider router={objects} />
    </center>
  )
}