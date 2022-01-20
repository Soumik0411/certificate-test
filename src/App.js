import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    Email: "",
    Date: "",
    School: "",
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <img src="logo.png" alt="logo" srcset="" />
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <p>Please enter your Email Id</p>
          <input
            type="text"
            placeholder="Please enter your Email Id..."
            value={this.state.Email}
            onChange={(e) => {
              this.setState({ Email: e.target.value });
            }}
          />
          <p>Please enter your Date</p>
          <input
            type="text"
            placeholder="Please enter your Date..."
            value={this.state.Date}
            onChange={(e) => {
              this.setState({ Date: e.target.value });
            }}
          />
          <p>Please enter your University/School Name</p>
          <input
            type="text"
            placeholder="Please enter University/School Name..."
            value={this.state.School}
            onChange={(e) => {
              this.setState({ School: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <p id="certificateWrapperSchool">{this.state.School}</p>
            <p id="certificateWrapperDate">{this.state.Date}</p>
            <img src="testimage.png" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
