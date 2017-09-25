import React, { Component } from "react";

class ColumnConfig extends Component {
  openColumnMenu(event) {
    this.props.openColumnMenu(event);
  }
  render() {
    return (
      <div>
        {this.props.columns.map(function(column, index) {
          if (index < this.props.numberOfColumns) {
            return (
              <div className="w-100 br2 overflow-hidden mb3">
                <div className="bg-mid-gray hover-bg-gray pv2 pl3 pr2 w-40 dib">
                  <div className="pa1">
                    {this.props.firstRowAsHeader ? (
                      column
                    ) : (
                      "Column " + (index + 1)
                    )}

                    {this.props.multiColumn && (
                      <span
                        className="fr pointer pl2"
                        onClick={this.openColumnMenu.bind(this)}
                        ref={column.key}
                      >
                        <i className="fa fa-ellipsis-v" />
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="pa1 w-60 dib bg-white near-black"
                  style={{ height: 42 }}
                >
                  <input type="text" className="pa2 bn" value={column.value} />
                </div>
              </div>
            );
          }
        }, this)}
      </div>
    );
  }
}

export default ColumnConfig;
