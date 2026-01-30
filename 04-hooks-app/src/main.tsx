import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TraficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TraficLightWithEffect";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect />
  </StrictMode>,
);
