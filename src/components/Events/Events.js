import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Events = ({ handleCancleActivity, volunteerActivity }) => {

    const { title, date, _id, img } = volunteerActivity
    return (
        <div>
            <Col md={6} className={_id}>
                <div >
                    <Row className="singelEvent ">
                        <Col className=" m-0 p-0" md={5}>
                            <img src={img} alt="" />
                        </Col>
                        <Col className=" m-0 p-3" md={7}>
                            <h4>{title}</h4>
                            <h5 className="singelEventDate">{date}</h5>
                            <Button onClick={() => handleCancleActivity(_id)} className="eventCancleBtn">Cencle</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
};

export default Events;