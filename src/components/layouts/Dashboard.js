import React from "react";
import Sidebar from "../layouts/Sidebar";
import Application from "../shifts/Applications";

export default () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Application />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};
