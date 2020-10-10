import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Events from '../Events/Events';

const Dashboard = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext)
    // console.log(signedInUser.email)

    const [volunteerActivites, setVolunteerActivities] = useState([])
    // console.log(volunteerActivites)

    useEffect(() => {
        fetch(`http://localhost:3003/registeredEvents?fromEmail=${signedInUser.email}`)
            .then(res => res.json())
            .then(data => setVolunteerActivities(data))
    }, []);


    const handleCancleActivity = (id) => {
        fetch(`http://localhost:3003/cancleActivity/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(date => {
                if (date) {
                    const others = volunteerActivites.filter(event => event._id !== id)
                    setVolunteerActivities(others)
                }
            })
    }


    return (
        <div>
            <Container>
                <Row className="mt-5">
                    {
                        volunteerActivites.map(data => <Events key={data._id} handleCancleActivity={handleCancleActivity} volunteerActivity={data}></Events>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;