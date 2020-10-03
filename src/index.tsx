import * as React from "react";
import { render } from "react-dom";
import Timeline from "./Timeline";

const App = () => (
  <div>
    <Timeline />
  </div>
);

render(<App />, document.getElementById("root"));
