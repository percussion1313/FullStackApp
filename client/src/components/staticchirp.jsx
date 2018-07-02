import React, { Component } from 'react';



class Cardlist extends Component {

  render() {
    let chirpeys = Object.keys(this.props.items).map((key) => {
      return (
        <div className="card bg-light mb-3 m-0" key={key}>
          <div className="card-header bg-primary text-white" >{this.props.items[key].user}</div>
          <div className="card-body ">
            <h5 className="card-title">{this.props.items[key].user}</h5>
          </div>
        </div>
      )
    });
    return (
      <React.Fragment>
        {chirpeys}
      </React.Fragment>
    )
  }
};




export default Cardlist;

