import React, { Component } from "react";

class SpreadsheetPreview extends Component {
  render() {
    const headerStyle = {
      borderBottom: "2px solid #aaa"
    };
    return (
      <div className="bg-white near-black aktiv w-100">
        <table className="w-100 f6 collapse">
          <tr className=" bg-near-white">
            <th className=" pa2 ba b--light-gray fw4 tl" />
            <th className="w-20 pa2 ba b--light-gray fw4 tl">A</th>
            <th className="w-20 pa2 ba b--light-gray fw4 tl">B</th>
            <th className="w-20 pa2 ba b--light-gray fw4 tl">C</th>
            <th className="w-20 pa2 ba b--light-gray fw4 tl">D</th>
            <th className="w-20 pa2 ba b--light-gray fw4 tl">E</th>
            <th className="w-20 pa2 ba b--light-gray fw4 tl">F</th>
          </tr>
          {this.props.firstRowAsHeader ? (
            <tr className="">
              <td className="pa2 ba b--light-gray bg-near-white fw4">1</td>
              <td className="w-20 pa2 ba b--light-gray fw4" style={headerStyle}>
                Project
              </td>
              <td className="w-20 pa2 ba b--light-gray fw4" style={headerStyle}>
                Status
              </td>
              <td className="w-20 pa2 ba b--light-gray fw4" style={headerStyle}>
                Budget
              </td>
              <td className="w-20 pa2 ba b--light-gray fw4" style={headerStyle}>
                Manager
              </td>
              <td className="w-20 pa2 ba b--light-gray fw4" style={headerStyle}>
                Delivery
              </td>
              <td className="w-20 pa2 ba b--light-gray fw4" />
            </tr>
          ) : (
            <tr className="">
              <td className="pa2 ba b--light-gray bg-near-white fw4">1</td>
              <td className="w-20 pa2 ba b--light-gray fw4">Project</td>
              <td className="w-20 pa2 ba b--light-gray fw4">Status</td>
              <td className="w-20 pa2 ba b--light-gray fw4">Budget</td>
              <td className="w-20 pa2 ba b--light-gray fw4">Manager</td>
              <td className="w-20 pa2 ba b--light-gray fw4">Delivery</td>
              <td className="w-20 pa2 ba b--light-gray fw4" />
            </tr>
          )}

          <tr className="">
            <td className="pa2 ba b--light-gray bg-near-white fw4">2</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Government</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Pending</td>
            <td className="w-20 pa2 ba b--light-gray fw4">$110M</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Daniel Parker</td>
            <td className="w-20 pa2 ba b--light-gray fw4">17 December 2017</td>
            <td className="w-20 pa2 ba b--light-gray fw4" />
          </tr>
          <tr className="">
            <td className="pa2 ba b--light-gray bg-near-white fw4">3</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Big Bank</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Scoping</td>
            <td className="w-20 pa2 ba b--light-gray fw4">$42M</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Louise Davidson</td>
            <td className="w-20 pa2 ba b--light-gray fw4">8 January 2017</td>
            <td className="w-20 pa2 ba b--light-gray fw4" />
          </tr>
          <tr className="">
            <td className="pa2 ba b--light-gray bg-near-white fw4">4</td>
            <td className="w-20 pa2 ba b--light-gray fw4">University</td>
            <td className="w-20 pa2 ba b--light-gray fw4">Development</td>
            <td className="w-20 pa2 ba b--light-gray fw4">$19M</td>
            <td className="w-20 pa2 ba b--light-gray fw4">
              Constantine Raptis
            </td>
            <td className="w-20 pa2 ba b--light-gray fw4">21 November 2017</td>
            <td className="w-20 pa2 ba b--light-gray fw4" />
          </tr>
          <tr className="">
            <td className="pa2 ba b--light-gray bg-near-white fw4">5</td>
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
          </tr>
          <tr className="">
            <td className="pa2 ba b--light-gray bg-near-white fw4">6</td>
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
            <td className="w-20 pa2 ba b--light-gray fw4" />
          </tr>
        </table>
      </div>
    );
  }
}

export default SpreadsheetPreview;
