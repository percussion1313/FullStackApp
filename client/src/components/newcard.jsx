import React from 'react';

const Newcard = (props) => {

    return (
        <div className="card bg-light mb-3 m-0 ">
            <div className="card-header bg-primary text-white">{props.cardDetails.username}</div>
            <div className="card-body ">
                <h5 className="card-title">{props.cardDetails.chirp}</h5>
            </div>
        </div>

    );
}

export default Newcard;