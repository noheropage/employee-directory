import React, { Component } from "react";
import { Card, Col, Row, Button, Jumbotron } from "react-bootstrap";
import API from "../utils/API";

class EmployeeCard extends Component {
  state = {
    person: [],
    personData: [],
  };

  async componentDidMount() {
    const { data } = await API.getRandomEmployee();
    this.setState({
      person: data.results,
      personData: data.results,
    });
    console.log(data);
  }

  render() {
    const { person } = this.state;
    const { personData } = this.state;
    // console.log(person);
    const filterGender = () => {
      const gender = person.filter((employee) => employee.gender === "male");
      this.setState({ person: gender });
    };

    const sortAge = () => {
      const age = []
        .concat(person)
        .sort(
          (employee_a, employee_b) =>
            employee_a.registered.age - employee_b.registered.age
        );
      this.setState({ person: age });
    };

    const reset = () => {
      this.setState({ person: personData });
    };

    return (
      <div>
          <Jumbotron>
              <h1>Employee Directory</h1>
          </Jumbotron>
        <Row>
          <Col>
            <Button onClick={filterGender} className="m-1">
              Filter: Show 'male' only
            </Button>
          </Col>
          <Col>
            <Button onClick={sortAge} className="m-1">
              Sort: Youngest registration date to oldest
            </Button>
          </Col>
          <Col>
            <Button onClick={reset} className="m-1">
              Reset
            </Button>
          </Col>
        </Row>

        <Row>
          {this.state.person.map((employees) => (
            <Card
              key={employees.login.uuid}
              style={{ width: "10rem" }}
              className="m-4"
            >
              <Card.Img variant="top" src={employees.picture.large} />
              <Card.Body>
                <Card.Title>
                  {employees.name.first} {employees.name.last}
                </Card.Title>
                <Card.Text>{employees.email}</Card.Text>
                <Card.Text>{employees.phone}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    );
  }
}

export default EmployeeCard;
