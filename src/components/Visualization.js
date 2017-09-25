import React, { Component } from "react";

class Visualization extends Component {
  render() {
    let headings = ["Project", "Status", "Budget", "Manager", "Delivery"];
    headings.length = this.props.columns;

    let rows = [
      ["Government", "Pending", "$110M", "Daniel Parker", "17 December 2017"],
      ["Big Bank", "Scoping", "$42M", "Louise Davidson", "8 January 2018"],
      [
        "University",
        "Development",
        "$19M",
        "Constantine Raptis",
        "21 November 2017"
      ]
    ];

    for (let i = 0; i < rows.length; i++) {
      rows[i].length = this.props.columns;
    }

    return (
      <div className="white sans-serif w-100 h4">
        <div className="f3 o-50 pa3">Add a title</div>
        <div className="w-100">
          <table className="w-100">
            {this.props.showHeaderRow && (
              <tr className="f5 white-50 fw4">
                {headings.map(function(heading) {
                  return (
                    <th className="collapse tl bb b--white-10 pa3 fw4">
                      {heading}
                    </th>
                  );
                })}
              </tr>
            )}

            {rows.map(function(row) {
              return (
                <tr className="f4">
                  {row.map(function(cell) {
                    return (
                      <td className="collapse tl bb b--white-10 pa3 fw4">
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Visualization;
