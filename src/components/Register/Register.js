import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css'

const Register = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    // const [activites, setActivities] = useContext(UserContext)
    // const { key } = useParams()


    // const [selectedEvent, setSelectedEvent] = useState([])

    // const { name, email } = signedInUser
    // const { title, img } = selectedEvent
    // useEffect(() => {
    //     fetch(`https://polar-garden-52952.herokuapp.com/opportuniti/${key}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])



    const { register, handleSubmit } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        // console.log(data)
        const fullEventData = { ...data }
        fetch('https://polar-garden-52952.herokuapp.com/addVolunteerEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullEventData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push('/events')
                }
            })
    };


    return (
        <div className="page-bg">
            <Container align="center">
                <div className="register mb-5">
                    <h4 >Register as a volunteer</h4>
                    <form className="registerForm mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="name" defaultValue={signedInUser.name} name="name" ref={register({ required: true, min: 3, maxLength: 100 })} />
                        <input type="text" placeholder="Email" defaultValue={signedInUser.email} name="fromEmail" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="date" name="date" id="" ref={register({ required: true })} />
                        <input type="text" placeholder="Description" name="Description" ref={register({ required: true })} />
                        <input type="text" placeholder="Activity Title" name="title" ref={register({ required: true })} />
                        <input type="submit" />
                    </form>
                </div>
                <Link to="/" >
                    <Button className="rounded-pill back-to-home-btn">Back to home</Button>
                </Link>
            </Container>
        </div>
    );
};

export default Register;