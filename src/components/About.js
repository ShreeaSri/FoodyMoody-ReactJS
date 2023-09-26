import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Hello, Welcome to FoodyMoody | Mom's Choice</h2>
        <UserClass name={"Shreea Sri (class)"} location={"Patna (class)"} />
      </div>
    );
  }
}

export default About;
