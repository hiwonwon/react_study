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
import TimerComponent from "./components/TimerComponent";
import FocusInputButton from "./components/FocusInputButton";
import InputRefComponent from "./components/InputRefComponent";
import PrimeCalculator from "./components/PrimeCalculator";
import MemoExample from "./components/MemoExample/MemoExample";
import CallbackExample from "./components/CallbackExample/CallbackExample";
import { CallbackExample2 } from "./components/CallbackExample/CallbackExample2";
import ContextExample from "./components/ContextExample/ContextExample";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapExample from "./components/BootstrapExample";
import TodoComponentMain from "./components/Todo/TodoComponentMain";
import MainApp from "./components/board/MainApp";
import StyledExample from "./components/StyledExample";
import TailwindExample from "./components/TailwindExample";
import LazyExample from "./components/LazyExample/LazyExample";

function App() {
  console.log("APP.jsx");
  return (
    <div>
      {
        // <StyledExample />
        <LazyExample />
      }
    </div>
  );
}

export default App;
