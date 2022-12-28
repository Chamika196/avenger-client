import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function Avengerdetails(){
    let params = useParams();
    let navigate = useNavigate();

    function goHome(){
        navigate("/avengers");
    }

    return (
        <React.Fragment>
            <h1>Avenger Details</h1>
            <h2>Avenger Id: {params.id} </h2>
            <button onClick={goHome}>Go to Avengers Page</button>
        </React.Fragment>
    );
}

export default Avengerdetails;