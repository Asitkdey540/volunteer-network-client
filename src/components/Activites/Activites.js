import React from 'react';
import { Link } from 'react-router-dom';
import './Activites.css'

const Activites = ({ detail }) => {

    return (
        <div className="col-md-3">
            <Link to={`/register/${detail.key}`}>
                <div className="img-style">
                    <img className="images" src={require(`../../images/${detail.img}`)} alt="" />
                    <h5>{detail.title}</h5>
                </div>
            </Link>
        </div>
    );
};

export default Activites;