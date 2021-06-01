import React, { Component } from "react";
import { Card, Col, Row, Button, Jumbotron, Container } from "react-bootstrap";
import API from "../utils/API";

class EmployeeCard extends Component {
  // establish state for a person array that can be manipulated by filter and sort functions and another array to hold unmanipulated data
  state = {
    person: [],
    personData: [],
  };

  // api call when mounted
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

    // example for filter criteria
    const filterGender = () => {
      const gender = person.filter((employee) => employee.gender === "male");
      this.setState({ person: gender });
    };

    // creates a copy of the array so original data won't be manipulated by .sort method
    const sortAge = () => {
      const age = []
        .concat(person)
        .sort(
          (employee_a, employee_b) =>
            employee_a.registered.age - employee_b.registered.age
        );
      this.setState({ person: age });
    };

    // undo the effects of the previous functions
    const reset = () => {
      this.setState({ person: personData });
    };

    return (
      <div>
          <Jumbotron>
              <h1>Employee Directory</h1>
          </Jumbotron>
          <Container>
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
        </Container>

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
