import React, { Component } from 'react';

class AddChirp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chirps: []
        }

        this.handleSubmit = (event) => {
            event.preventDefault();
            let data = { 
                user: this.state.user,
                text: this.state.text
            }          
            fetch('/api/chirps', {
                method: 'POST', 
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            console.log(data);
            this.setState({ chirps: data })
        }

    }

    handleUserChange(user) {
        this.setState({ user });
    }

    handleTextChange(text) {
        this.setState({ text });
    }


    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-6 mx-auto form-text text-muted rounded">
                        <input type="text" id="user" name="user" placeholder="user"
                        onChange={(event) => this.handleUserChange(event.target.value)} />
                    </div>
                    <textarea className="form-control col-md-6 pagination-centered m-3 position-relative shadow mx-auto" 
                    placeholder="WRITE SOMETHING" name="text" id="text" type="text"
                    onChange={(event) => this.handleTextChange(event.target.value)}></textarea>
                    <div>
                        <button
                            className="btn btn-primary m-3 d-flex mx-auto shadow"
                            name="cardSubmitButton"
                        >Chirp!</button>
                    </div>
                </form>
            </React.Fragment>


        );
    }
}

export default AddChirp;






