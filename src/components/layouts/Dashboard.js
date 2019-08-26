import React from "react";
import Sidebar from "../layouts/Sidebar";
import Shifts from "../shifts/Shifts";

export default () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Shifts />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};
