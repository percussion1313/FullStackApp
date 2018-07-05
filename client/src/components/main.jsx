import React, { Component } from 'react';
import ChirpList from './chirplist'
import { render } from 'react-dom';



class GetChirps extends Component {

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
                <ChirpList items={this.state.chirps}/>
            </React.Fragment>
        )
    }
}
export default GetChirps;
