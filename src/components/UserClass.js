import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy location",
        avatar_url: "dummy image",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ShreeaSri");

    const res = await data.json();
    console.log(res);

    this.setState({
      userInfo: res,
    });
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shreea_sri</h4>
      </div>
    );
  }
}
export default UserClass;
