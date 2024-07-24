import React from "react";
import FindDistrict from "./Tasks/FindDistrict";
import BgColorChange from "./Tasks/BgColorChange";
export default function App() {
  return (
    <div>
      <center><h1>Task1 : Find District</h1></center>
      <FindDistrict />
      <center><h1>Task2 : Background Color Change</h1></center>
      <BgColorChange />
    </div>
  )
}