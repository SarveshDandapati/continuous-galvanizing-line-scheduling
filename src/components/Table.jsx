import React from "react";

function table({ data }) {
  const Row = ({ row }) => {
    return (
      <tr>
        <td>{row["S. No"]}</td>
        <td>{row["i2 plan date"]}</td>
        <td>{row["Dispatch Week"]}</td>
        <td>{row["Coil ID"]}</td>
        <td>{row["Thickness"]}</td>
        <td>{row["Width"]}</td>
        <td>{row["Weight"]}</td>
        <td>{row["Calc Wt"]}</td>
        <td>{row["Min Wt"]}</td>
        <td>{row["Max Wt"]}</td>
        <td>{row["Prod"]}</td>
        <td>{row["Sf Rou"]}</td>
        <td>{row["Oil/Chrome"]}</td>
        <td>{row["Quality"]}</td>
        <td>{row["Grade"]}</td>
        <td>{row["TDC"]}</td>
        <td>{row["Mk Customer"]}</td>
        <td>{row["Order/Item"]}</td>
        <td>{row["Exit Idia"]}</td>
        <td>{row["New Type"]}</td>
        <td>{row["Order Type"]}</td>
        <td>{row["Coat"]}</td>
        <td>{row["Roll Wk"]}</td>
        <td>{row["Delivery Wk"]}</td>
        <td>{row["LPST"]}</td>
        <td>{row["EPST"]}</td>
      </tr>
    );
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>i2 plan date</th>
            <th>Dispatch Week</th>
            <th>Coil ID</th>
            <th>Thickness</th>
            <th>Width</th>
            <th>Weight</th>
            <th>Calc Wt</th>
            <th>Min Wt</th>
            <th>Max Wt</th>
            <th>Prod</th>
            <th>Sf Rou</th>
            <th>Oil/Chrome</th>
            <th>Quality</th>
            <th>Grade</th>
            <th>TDC</th>
            <th>Mk Customer</th>
            <th>Order/Item</th>
            <th>Exit Idia</th>
            <th>New Type</th>
            <th>Order Type</th>
            <th>Coat</th>
            <th>Roll Wk</th>
            <th>Delivery Wk</th>
            <th>LPST</th>
            <th>EPST</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i) => (
            <Row key={i} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default table;
