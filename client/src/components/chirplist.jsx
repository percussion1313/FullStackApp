import React from 'react';
import Newcard from './Newcard';


const ChirpList = (props) => {
  
  let cards = props.items.map((card, index) => {
    return <Newcard key={index} cardDetails={card} />;
  });

  return (
      <div className="row col-md-8 d-flex mx-auto">
        <div className="col">{cards}</div>
      </div>
  );
};




export default ChirpList;

