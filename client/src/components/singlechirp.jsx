import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleChirp extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card bg-light mb-3 m-0" key={key}>
            <div className="card-header bg-primary text-white" >{props.cardDetails.user}</div>
            <div className="card-body ">
              <h5 className="card-title">{props.cardDetails.text}</h5>
            </div>
          </div>
  )
    }
}

export default SingleChirp;