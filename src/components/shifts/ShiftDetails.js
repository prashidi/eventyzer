import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layouts/Spinner";

class ShiftDetails extends Component {
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
)(ShiftDetails);
