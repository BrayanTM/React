import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TraficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TraficLightWithEffect";

import "./index.css";
import { TrafficLightWithHook } from "./02-useEffect/TraficLightWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHook />
  </StrictMode>,
);
