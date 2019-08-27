import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from 'prop-types';

class AddShift extends Component {
  state = {
    name: "",
    location: "",
    date: null,
    time: null
  };

  onSubmit = e => {
    e.preventDefault();

    const newShift = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: "shifts" }, newShift)
      .then(() => this.props.history.push("/"));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Function</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.location}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.date}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.time}
                />
              </div>
              <input type="submit" className="btn btn-primary btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddShift.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddShift);
