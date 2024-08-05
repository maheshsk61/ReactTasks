import React from "react";
import FindDistrict from "./Tasks/FindDistrict";
import BgColorChange from "./Tasks/BgColorChange";
import Sort from "./Tasks/Sort";
import Slideshow from "./Tasks/Slideshow";
export default function App() {
  return (
    <center>
      <h1>Task 1 : Find District</h1>
      <FindDistrict />
      <h1>Task 2 : Background Color Change</h1>
      <BgColorChange />
      <h1>Task 3 : Sorting</h1>
      <Sort />
      <h1>Task 4 : Slideshow</h1>
      <Slideshow />
    </center>
  )
}