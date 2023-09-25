import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + "child constructor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    // console.log(this.props.name + "mounting");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    // console.log(name + " child render");
    return (
      <div className="user-card">
        <h2>count: {count}</h2>
        <h2>count2: {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shreea_sri</h4>
      </div>
    );
  }
}
export default UserClass;
