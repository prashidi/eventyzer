import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class Shifts extends Component {
  render() {
    const { shifts } = this.props;

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
                <tr key={shift.id}>
                  <td>{shift.name}</td>
                  <td>{shift.date}</td>
                  <td>{shift.location}</td>
                  <td>{shift.applications ? shift.applications.length : 0}</td>
                  <td>
                    {shift.applications ? (
                      <Link
                        to={`/shift/${shift.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fas fa-arrow-circle-right" /> Applications
                      </Link>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Shifts.propTypes = {
  firestore: PropTypes.object.isRequired,
  shifts: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "shifts" }]),
  connect((state, props) => ({
    shifts: state.firestore.ordered.shifts
  }))
)(Shifts);
