import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shifts extends Component {
  render() {
    const shifts = [
      {
        id: "343533",
        name: "Labia Festival",
        location: "Athlon",
        date: "23/08/2019",
        time: "18:30",
        applications: [
          {
            userid: 1,
            displayName: "Patrick",
            type: "barman"
          },
          {
            userid: 2,
            type: "Service staff",
            displayName: "Ben"
          }
        ]
      }
    ];
    if (shifts) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-book" /> Functions
            </h2>
          </div>
          <div className="col-md-6">
            <h2> </h2>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Shift name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Applicantions</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map(shift => (
                <tr>
                  <td>{shift.name}</td>
                  <td>{shift.date}</td>
                  <td>{shift.location}</td>
                  <td>{shift.applications.length}</td>
                  <td>
                    <Link
                      to={`/shift/${shift.id}/applications`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Shifts;
