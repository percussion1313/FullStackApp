import React from 'react';

const Newcard = (props) => {

    return (
        <div className="card bg-light mb-3">
            <div className="card-header bg-primary text-white" id="user">{props.cardDetails.user}</div>
            <div className="card-body ">
                <h5 className="card-title" id="text">{props.cardDetails.text}</h5>
                <button className="btn btn-primary float-right">See Details</button>
            </div>
        </div>

    );
}

export default Newcard;