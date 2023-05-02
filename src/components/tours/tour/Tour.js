import React from "react";
import "./Tour.css";
import { Link } from 'react-router-dom';

export default function Tour(props) {
    return (

    <div className={"mainDiv"} key={props.id}>
    <Link to={`/city/${props.id}`}>
        <div className={"FirstDiv"} key={props.id}>
        <p>{props.tourName}</p>
            <img className={"imgDiv"} src={props.img} alt="no-pic" />
        </div>
    </Link>
    </div>
);
}