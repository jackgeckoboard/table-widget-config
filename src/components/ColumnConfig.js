import React, { Component } from "react";

class ColumnConfig extends Component {
  openColumnMenu(event) {
    this.props.openColumnMenu(event);
  }

  updateColumnNames(index, event) {
    let names = this.props.columnNames;
    names[index] = event.target.value;
    this.props.updateColumnNames(names);
    console.log(index + names);
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
                      <input
                        onChange={this.updateColumnNames.bind(this, index)}
                        value={this.props.columnNames[index]}
                        className="bg-transparent bn white w-90 input-reset"
                        type="text"
                      />
                    ) : (
                      <span>Column {index + 1}</span>
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
                  <input
                    type="text"
                    className="pa2 bn"
                    value={this.props.columnCellReference[index]}
                  />
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
