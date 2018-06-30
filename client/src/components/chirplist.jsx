import React, { Component } from 'react';
import Chirp from './staticchirp'
import { render } from 'react-dom';


class ChirpList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            chirps: []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/chirps',  {
                method: 'GET',
                
              });
            let data = await response.json();
            console.log(data);
            this.setState({ chirps: data })
        } catch (e) {
            console.log('Iz broken');
        }

        
    }
    render() {
        return (
            <React.Fragment>
                <div></div>
            </React.Fragment>
        )
    }
}
export default ChirpList;


