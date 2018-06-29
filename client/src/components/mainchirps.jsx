import React, { Component } from 'react';
import { render } from 'react-dom';

class MainChirps extends Component {

    constructor(props) {
        super(props);
        this.state = {

            chirps: []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/chirps',  {
                method: 'GET'
              });
            let data = await response.json();
            this.setState({ chirps: data })
        } catch (e) {
            console.log

        }

    }
    render() {
        let chirpsDivs = this.state.chirps.map((chirp, index) => {
            return (
                <div key={index}>
                    <div className="card bg-light mb-3 m-0">
                        <div className="card-header bg-primary text-white">{chirp.user}</div>
                        <div className="card-body">
                            <h5 className="card-title">{chirp.text}</h5>
                            <button className="btn btn-primary float-right shadow">See Details</button>
                        </div>
                    </div>
                </div>
            )
        })
        return <div className = "col-md-6 mx-auto">
            <h1 className="col-md-6 d-flex mx-auto">Chirper V.2.0</h1>
            {chirpsDivs}
        </div>
    }
}

export default MainChirps;