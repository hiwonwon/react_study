import CaptionImage from "./components/CaptionImage";
import HelloWorld from "./components/HelloWorld";
import MyButton from "./components/MyButton";
import CountComponent from "./components/countComponet";
import BlinkCompnent from "./components/BlinkComponent";
import { useState } from "react";
import OnOffComponent from "./components/OnOffComponent";
import FilteringComponent from "./components/FilteringComponet";
import RenderingComponent from "./components/RenderingComponent";
import StopWatchComponent from "./components/StopwatchComponent";

function App() {
  console.log("APP.jsx");
  return <div>{<StopWatchComponent />}</div>;
}

export default App;
