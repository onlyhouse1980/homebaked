import React from "react";
import Spreadsheet from "react-spreadsheet";

const RangeView = ({ cell, getValue }) => (
  <input
    type="range"
    value={getValue({ data: cell })}
    disabled
    style={{ pointerEvents: "none" }}
  />
);

const RangeEdit = ({ getValue, cell, onChange }) => (
  <input
    type="range"
    onChange={(e) => {
      onChange({ ...cell, value: e.target.value });
    }}
    value={getValue({ data: cell }) || 0}
    autoFocus
  />
);

const data = [
  [{ value: "Meter Serial #" }, { value: "Oct 07, 2020" }, { value: "Dec 10, 2020" }, { value: "Your Reading" }],
  [({ value: "Vanilla" }, { value: "Reading" }, { value: "{data.oct07_20}" })],
  [{ value: "Gallons Used" }, { value: "" }],
  [
    { value: "1" },
  ],
];

const MyComponent = () => <Spreadsheet data={data} />;

export default MyComponent