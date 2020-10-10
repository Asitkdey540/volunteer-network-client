import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Activites from '../Activites/Activites';

const Home = () => {

    const [activites, setActivities] = useState([])


    // const sendAllData = () => {
    //     // const data = fakeData
    //     fetch('http://localhost:3003/addAllData', {
    //         method: 'POST',
    //         body: JSON.stringify(fakeData),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    // }



    useEffect(() => {
        fetch("http://localhost:3003/getVolunteerData")
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    return (
        <div>
            <div className="header">
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <form>
                    <input className="input" type="text" placeholder="Search"></input>
                    <Button variant="outline-primary">Search</Button>
                </form>
            </div>
            <div className="row">
                {
                    activites.map(details => <Activites key={details.key} detail={details}></Activites>)
                }
            </div>
        </div>

    );
};

export default Home;