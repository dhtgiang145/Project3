import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Navbar";

// import ManageChefList from "./Components/Admin";
// import UserViewChefList from "./Components/UserViewMenu";
// Global use of fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Library Creation
library.add(fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      isLoading: true,
    };
  }
  increaseQty = (addvalue) => {
    if (addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({ updatedValue });
    }
  };
  decreaseQty = (decvalue) => {
    if (decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({ updatedValue });
    }
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("api/menus")
      .then((response) => response.json())
      .then((data) => this.setState({ menus: data, isLoading: false }));
  }
  render() {
    return (
      <div className="App">
        <Nav
          menus={this.state.menus}
          totalQty={this.state.menus
            .map((menu) => menu.value)
            .reduce((acc, curr) => acc + curr, 0)}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
