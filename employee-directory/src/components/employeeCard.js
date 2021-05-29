import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import API from '../utils/API'


class EmployeeCard extends Component {
    state = {
        person: []
    };

    async componentDidMount() {
        const { data } = await API.getRandomEmployee();
        this.setState({ person: data.results })
    }

    render() {

        return (
            <div>
                {this.state.person.map((employees) => (
                    <Card
                    key = {employees.login.uuid}>
                        Name: {employees.name.first}
                        Email: {employees.email}
                        
                </Card>
                ))}
                
            </div>
            
        )
    }
}

export default EmployeeCard;