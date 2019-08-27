import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class Applications extends Component {
  render() {
    const { shift } = this.props;
    if (shift) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back To Dashboard
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/shift/edit/${shift.id}`} className="btn btn-dark">
                  <i className="fas fa-arrow-circle-right" /> Edit
                </Link>
                <button className="btn btn-danger"> Delete</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <h3>
                {shift.name} {"at "} {shift.location}
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <table className="table table-striped">
                    <thead className="thead-inverse">
                      <tr>
                        <th>Username</th>
                        <th>Type</th>
                        <th>Confirmed</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shift.applications
                        ? shift.applications.map(application => (
                            <tr key={application.index}>
                              <td>{application.displayName}</td>
                              <td>{application.type}</td>
                              <td>{application.confirmed ? "Yes" : "No"}</td>
                              <td>
                                {application.confirmed ? (
                                  <button className="btn btn-danger btn-sm">
                                    Remove Confirmation
                                  </button>
                                ) : (
                                  <button className="btn btn-primary btn-sm">
                                    Confirm
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))
                        : "No application found"}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
export default compose(
  firestoreConnect(props => [
    { collection: "shifts", storeAs: "shift", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    shift: ordered.shift && ordered.shift[0]
  }))
)(Applications);
