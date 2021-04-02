import React from "react";
import ReactDom from "react-dom";

import "./index.css";

class StudentResultsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentResults: [],
    };
  }
  componentDidMount() {
    fetch("https://localhost:44375/api/StudentResults")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ studentResults: result });
      });
  }
  render() {
    return (
      <div>
        <h2>Student Course Result Details</h2>
        <table border="1" cellpadding="5" cellspacing="5">
          <thead>
            <tr>
              <th width="10%">Student Id</th>
              <th width="10%">Last Name</th>
              <th width="10%">First Name</th>
              <th width="25%">Summary / Notes</th>
              <th width="45%">Courses</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentResults.map((sr) => (
              <tr key={sr.Id}>
                <td>{sr.Id}</td>
                <td>{sr.LastName}</td>
                <td>{sr.FirstName}</td>
                <td>{sr.SummaryNotes}</td>
                <td>
                  {sr.ClassResults.map((cr) => (
                    <div>
                      {cr.ClassName} &nbsp; &nbsp; GPA: &nbsp; {cr.GPA}{" "}
                      <br></br>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const element = <StudentResultsComponent></StudentResultsComponent>;

ReactDom.render(element, document.getElementById("root"));
