import React, { Component } from "react";
import ColumnConfig from "./components/ColumnConfig";
import Visualization from "./components/Visualization";
import SpreadsheetPreview from "./components/SpreadsheetPreview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRowAsHeader: true,
      menuOpen: false,
      menuPositionTop: 0,
      menuPositionLeft: 0,
      showHeaderRow: true,
      numberOfColumns: 2,
      headings: ["Project", "Status", "Budget", "Manager", "Delivery"],
      rows: [
        ["Government", "Pending", "$110M", "Daniel Parker", "17 December 2017"],
        ["Big Bank", "Scoping", "$42M", "Louise Davidson", "8 January 2018"],
        [
          "University",
          "Development",
          "$19M",
          "Constantine Raptis",
          "21 November 2017"
        ]
      ],
      columnCellReference: ["A:A", "B:B", "C:C", "D:D", "E:E"],
      columnNames: []
    };
  }

  componentWillMount() {
    this.setState({
      columnNames: this.state.headings
    });
  }

  handleAddColumn() {
    this.setState({
      numberOfColumns: this.state.numberOfColumns + 1
    });
  }

  handleDeleteColumn() {
    if (this.state.numberOfColumns > 2) {
      this.setState({
        numberOfColumns: this.state.numberOfColumns - 1
      });
    }
    this.setState({
      menuOpen: false
    });
  }

  switchFirstRowAsHeader() {
    if (this.state.firstRowAsHeader) {
      this.setState({
        firstRowAsHeader: false,
        showHeaderRow: false
      });
    } else {
      this.setState({
        firstRowAsHeader: true,
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

  updateColumnNames(names) {
    this.setState({
      columnNames: names
    });
  }

  render() {
    const disabled = this.state.numberOfColumns > 4;

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
          <div className="h2 w2 br2 bg-ui-green" />
        </div>
        <div className="bg-mid-gray">
          <span className="pa3 dib fw5">Dashboard Name</span>
        </div>
        <div className="w-100 cf">
          <div
            className="bg-dark-gray w-30 pa3 fl"
            style={{ height: "calc(100vh - 98px)" }}
          >
            <div className="w-100 br2 ba b--gray mb4">
              <div className="bg-gray pa2 tc fw5 f6 w-50 dib">Edit</div>
              <div className="pa2 tc fw5 f6 w-50 dib light-gray">Fine-tune</div>
            </div>

            <div
              className="mb3 cf"
              onClick={this.switchFirstRowAsHeader.bind(this)}
            >
              <div className="fl w-80">
                Use first selection cell as column header
              </div>
              {firstRowAsHeader ? (
                <div className="fr bg-ui-green br4">
                  <div className="h1 w1 br4 mv1 mr1 ml4 bg-white" />
                </div>
              ) : (
                <div className="fr bg-silver br4">
                  <div className="h1 w1 br4 mv1 mr4 ml1 bg-white" />
                </div>
              )}
            </div>
            <ColumnConfig
              columns={this.state.headings}
              numberOfColumns={this.state.numberOfColumns}
              firstRowAsHeader={this.state.firstRowAsHeader}
              multiColumn={this.state.numberOfColumns > 2}
              openColumnMenu={this.openColumnMenu.bind(this)}
              columnCellReference={this.state.columnCellReference}
              columnNames={this.state.columnNames}
              updateColumnNames={this.updateColumnNames.bind(this)}
            />
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
              <div className="mb4 bg-ui-light-gray dark-gray dib pa2 br2 o-50">
                + Add column
              </div>
            ) : (
              <div
                className="mb4 hover-bg-light-silver bg-animate bg-ui-silver  ui-text-black dib pa2 br2 pointer"
                onClick={this.handleAddColumn.bind(this)}
              >
                + Add column
              </div>
            )}
          </div>
          <div
            className="w-70 fl pa4 relative"
            style={{ height: "calc(100vh - 98px)" }}
          >
            <Visualization
              firstRowAsHeader={this.state.firstRowAsHeader}
              showHeaderRow={this.state.showHeaderRow}
              numberOfColumns={this.state.numberOfColumns}
              headings={this.state.headings}
              rows={this.state.rows}
            />
            <div className="absolute bottom-0 left-0 right-0">
              <SpreadsheetPreview
                firstRowAsHeader={this.state.firstRowAsHeader}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
