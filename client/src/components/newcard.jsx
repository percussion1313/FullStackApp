import React, { Component } from 'react';

class Newcard extends Component {
    render() {
        return (
            <div className="card bg-light mb-3 m-0 ">
                <div className="card-header bg-primary text-white">{this.props.cardDetail.user}</div>
                <div className="card-body ">
                    <h5 className="card-title">{this.props.cardDetail.text}</h5>
                </div>
            </div>

        );
    }
}


export default Newcard;