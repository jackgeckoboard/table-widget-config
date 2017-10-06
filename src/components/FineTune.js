import React, { Component } from "react";

class FineTune extends Component {
  toggleFineTune() {
    this.props.toggleFineTune();
  }
  render() {
    return (
      <div>
        <div
          className="w-100 br2 ba b--gray mb4"
          onClick={this.toggleFineTune.bind(this)}
        >
          <div className=" pa2 tc fw5 f6 w-50 dib light-gray">Edit</div>
          <div className="pa2 tc fw5 f6 w-50 dib bg-gray">Fine-tune</div>
        </div>
        <div className="w-100 br2 overflow-hidden mb3">
          <div className="bg-mid-gray hover-bg-gray pv2 pl3 pr2 w-40 dib">
            <div className="pa1">
              <span>Column</span>
            </div>
          </div>
          <div
            className="pa2 w-60 dib bg-white near-black"
            style={{ height: 42, marginTop: -5 }}
          >
            <select className="pa2 bn bg-transparent w-100">
              <option value="budget">Budget</option>
              <option value="conversion-rate">Conversion Rate</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default FineTune;
