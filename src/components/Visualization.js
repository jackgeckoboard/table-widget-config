import React, { Component } from "react";

class Visualization extends Component {
  render() {
    return (
      <div className="white sans-serif w-100">
        <div className="f3 o-50 pa3">Add a title</div>
        <div className="w-100">
          <table className="w-100">
            {this.props.showHeaderRow && (
              <tr className="f5 white-50 fw4">
                {this.props.headings.map(function(heading, index) {
                  if (index < this.props.numberOfColumns) {
                    if (this.props.firstRowAsHeader) {
                      return (
                        <th className="collapse tl bb b--white-10 pa3 fw4">
                          {heading}
                        </th>
                      );
                    } else {
                      return (
                        <th className="collapse tl bb b--white-10 pa3 fw4">
                          Column {index + 1}
                        </th>
                      );
                    }
                  }
                }, this)}
              </tr>
            )}
            {!this.props.firstRowAsHeader && (
              <tr className="f4">
                {this.props.headings.map(function(heading, index) {
                  if (index < this.props.numberOfColumns) {
                    return (
                      <th className="collapse tl bb b--white-10 pa3 fw4">
                        {heading}
                      </th>
                    );
                  }
                }, this)}
              </tr>
            )}

            {this.props.rows.map(function(row) {
              return (
                <tr className="f4">
                  {row.map(function(cell, index) {
                    if (index < this.props.numberOfColumns) {
                      return (
                        <td className="collapse tl bb b--white-10 pa3 fw4">
                          {cell}
                        </td>
                      );
                    }
                  }, this)}
                </tr>
              );
            }, this)}
          </table>
        </div>
      </div>
    );
  }
}

export default Visualization;
