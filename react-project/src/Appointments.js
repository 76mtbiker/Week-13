import React, { Component } from "react";

export default class Appointments extends Component {
  constructor(props) {
    super(props);
    this.customersArray = props.customers;
  }

  render() {
    return (
      <div>
        <table className="table table-light table-striped table-hover table-bordered shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Appointment Time</th>
            </tr>
          </thead>
          <tbody>
            {this.customersArray.map((custumer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{custumer.firstName}</td>
                <td>{custumer.lastName}</td>
                <td>{custumer.appointmentTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
