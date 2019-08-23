import React, { Component } from "react";
import { Link } from "react-router-dom";

class Applications extends Component {
  render() {
    const applications = [
      {
        id: "343533",
        shift: {
          date: "12/09/2019",
          location: "Cape Town",
          name: "FnB",
          time: "12:30"
        },
        user: {
          displayName: "Patrick",
          uid: "12333"
        },
        type: "Barman",
        confirmed: false
      },
      {
        id: "34ff3533",
        shift: {
          date: "12/09/2019",
          location: "Cape Town",
          name: "FnB",
          time: "12:30"
        },
        user: {
          displayName: "Lunga",
          uid: "ddddd"
        },
        type: "Service Staf",
        confirmed: true
      }
    ];
    if (applications) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-book" /> Applications
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
                <th>Applicant</th>
                <th>Type</th>
                <th>Confirmed</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {applications.map(application => (
                <tr key={application.id}>
                  <td>{application.shift.name}</td>
                  <td>{application.shift.date}</td>
                  <td>{application.user.displayName}</td>
                  <td>{application.type}</td>
                  <td>
                    {application.confirmed ? (
                      <i className="fas fa-check" />
                    ) : (
                      <i className="fas fa-times" />
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/application/${application.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
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

export default Applications;
