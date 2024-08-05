import React from "react";
import FindDistrict from "./Tasks/FindDistrict";
import BgColorChange from "./Tasks/BgColorChange";
import Sort from "./Tasks/Sort";
export default function App() {
  return (
    <div>
      <center><h1>Task 1 : Find District</h1></center>
      <FindDistrict />
      <center><h1>Task 2 : Background Color Change</h1></center>
      <BgColorChange />
      <center><h1>Task 3 : Sorting</h1></center>
      <Sort/>
    </div>
  )
}