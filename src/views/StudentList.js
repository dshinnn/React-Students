import React, { Component } from 'react';

export default class StudentList extends Component {
//   constructor(props) {
//       super(props);
//   }
    render() {
    return (
        <tr>
            <td>{this.props.student.id}</td>
            <td>{this.props.student.first_name}</td>
            <td>{this.props.student.last_name}</td>
        </tr>
    );
  }
}
