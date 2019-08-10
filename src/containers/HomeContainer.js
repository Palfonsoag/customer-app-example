import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomerActions";
class HomeContainer extends Component {
  handleOnClick = () => {
    console.log("handle On click");
    this.props.history.push("/customers");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Initial Screen
              <CustomerActions>
                <button onClick={this.handleOnClick}>Client List </button>
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

export default withRouter(HomeContainer);
