import React from "react";

function Customer({id, img, name, birth, gender, job}) {
    return(
        <div>
            <h2>{name} ({id})</h2>
            <img src={img}/>
            <p>{birth}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    )
}

export default Customer;