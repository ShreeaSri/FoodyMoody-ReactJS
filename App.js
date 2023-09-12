import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Hey FoodyMoody
  </h1>
);

//comopnent composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> restaurant container</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
