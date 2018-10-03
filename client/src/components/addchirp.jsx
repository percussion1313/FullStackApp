import React, { Component } from 'react';

class AddChirp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            text: ''
        }
    }

    //This took forever for some reason. 
    addChirp() {
        var url = '/api/chirps';
        var data = {
            user: this.state.user,
            text: this.state.text,
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error));
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    render() {

        return (
            <React.Fragment>
                <form>
                    <div className="col-md-6 mx-auto form-text text-muted rounded">
                        <input type="text" id="user" name="user" placeholder="user"
                            onChange={this.handleUserChange.bind(this)} />
                    </div>
                    <textarea className="form-control col-md-6 pagination-centered m-3 position-relative shadow mx-auto"
                        placeholder="WRITE SOMETHING" id="text" type="text"
                        onChange={this.handleTextChange.bind(this)} ></textarea>
                    <div>
                        <button
                            className="btn btn-primary m-3 d-flex mx-auto shadow"
                            name="cardSubmitButton"
                            onClick={this.addChirp.bind(this)}
                        >Chirp!</button>
                    </div>
                </form>
            </React.Fragment>


        );
    }
}

export default AddChirp;









