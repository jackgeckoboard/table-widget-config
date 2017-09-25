import React, { Component } from "react";
import Visualization from "./components/Visualization";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          key: 0,
          label: "Column 1",
          value: "A:A"
        },
        {
          key: 1,
          label: "Column 2",
          value: "B:B"
        }
      ],
      firstRowAsHeader: false,
      menuOpen: false,
      menuPositionTop: 0,
      menuPositionLeft: 0,
      showHeaderRow: true
    };
  }

  handleAddColumn() {
    const newColumn = {
      key: this.state.columns.length + 1,
      label: "Column " + (this.state.columns.length + 1),
      value: " "
    };

    this.setState({
      columns: [...this.state.columns, newColumn]
    });
  }

  handleDeleteColumn() {
    if (this.state.columns.length > 2) {
      var newColumns = this.state.columns;
      newColumns.pop();
      this.setState({
        columns: newColumns
      });
    }
    this.setState({
      menuOpen: false
    });
  }

  switchFirstRowAsHeader() {
    if (this.state.firstRowAsHeader) {
      this.setState({
        firstRowAsHeader: false
      });
    } else {
      this.setState({
        firstRowAsHeader: true
      });
    }
  }

  switchShowHeaderRow() {
    if (this.state.showHeaderRow) {
      this.setState({
        showHeaderRow: false
      });
    } else {
      this.setState({
        showHeaderRow: true
      });
    }
  }

  openColumnMenu(event) {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      });
    } else {
      console.log(event.target);
      this.setState({
        menuOpen: true,
        menuPositionTop: event.target.offsetTop - 13,
        menuPositionLeft:
          event.target.offsetLeft + event.target.offsetWidth + 12
      });
    }
  }

  render() {
    const multiColumn = this.state.columns.length > 2;

    const disabled = this.state.columns.length > 4;

    const firstRowAsHeader = this.state.firstRowAsHeader;

    const menuOpen = this.state.menuOpen;

    const showHeaderRow = this.state.showHeaderRow;

    const menuPositionStyle = {
      top: this.state.menuPositionTop,
      left: this.state.menuPositionLeft
    };

    return (
      <div className="white sans-serif">
        <div className="pa2 bg-near-black">
          <div className="h2 w2 br2 bg-green" />
        </div>
        <div className="bg-mid-gray">
          <span className="pa3 dib fw5">Dashboard Name</span>
        </div>
        <div className="w-100 cf">
          <div className="vh-100 bg-dark-gray w-30 pa3 fl">
            <div className="w-100 br2 ba b--gray mb4">
              <div className="bg-gray pa2 tc fw5 f6 w-50 dib">Edit</div>
              <div className="pa2 tc fw5 f6 w-50 dib light-gray">Fine-tune</div>
            </div>

            <div
              className="mb3 cf"
              onClick={this.switchFirstRowAsHeader.bind(this)}
            >
              <div className="fl w-70">Use first row as header</div>
              {firstRowAsHeader ? (
                <div className="fr bg-green br4">
                  <div className="h1 w1 br4 mv1 mr1 ml4 bg-white" />
                </div>
              ) : (
                <div className="fr bg-silver br4">
                  <div className="h1 w1 br4 mv1 mr4 ml1 bg-white" />
                </div>
              )}
            </div>

            {this.state.columns.map(function(column) {
              return (
                <div className="w-100 br2 overflow-hidden mb3">
                  <div className="bg-mid-gray hover-bg-gray pv2 pl3 pr2 w-40 dib">
                    <div className="pa1">
                      {column.label}
                      {multiColumn && (
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
                      value={column.value}
                    />
                  </div>
                </div>
              );
            }, this)}
            {menuOpen && (
              <div
                className="pa2 bg-light-gray br1 absolute ba b--moon-gray dark-gray f6"
                style={menuPositionStyle}
                onClick={this.handleDeleteColumn.bind(this)}
              >
                <div className="pa1 pointer">Delete column</div>
              </div>
            )}
            {disabled ? (
              <div className="mb4 bg-silver dark-gray dib pa2 br2 o-50">
                + Add column
              </div>
            ) : (
              <div
                className="mb4 hover-bg-light-silver bg-animate bg-silver dark-gray dib pa2 br2 pointer"
                onClick={this.handleAddColumn.bind(this)}
              >
                + Add column
              </div>
            )}
            <div
              className="mb3 cf"
              onClick={this.switchShowHeaderRow.bind(this)}
            >
              <div className="fl w-70">Show header row</div>
              {showHeaderRow ? (
                <div className="fr bg-green br4">
                  <div className="h1 w1 br4 mv1 mr1 ml4 bg-white" />
                </div>
              ) : (
                <div className="fr bg-silver br4">
                  <div className="h1 w1 br4 mv1 mr4 ml1 bg-white" />
                </div>
              )}
            </div>
          </div>
          <div className="w-70 fl pa4">
            <Visualization
              showHeaderRow={this.state.showHeaderRow}
              columns={this.state.columns.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
