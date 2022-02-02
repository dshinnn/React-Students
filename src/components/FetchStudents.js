import React, { Component } from 'react';
import StudentList from '../views/StudentList';

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
      fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => {
            this.setState({
            students: data
            })
        console.log(this.state.students)});   
  }

    render() {
    return (
        <>
            <h1 className="text-center mt-5 text-success fw-bolder">Kemkambas Winter Session</h1>
            <table className="table table-dark table-hover mt-5 text-center w-75 mx-auto">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map((s, i) => <StudentList student={s} key={i}/>)}
                </tbody>
            </table>
        </>
    );
  }
}
