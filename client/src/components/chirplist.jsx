import React from 'react';
import Newcard from './Newcard';


const ChirpList = (props) => {
  
  let cards = props.items.map((card, index) => {
    return <Newcard key={index} cardDetails={card} />;
  });

  return (
      <div className="col-md-6 m-3 justify-content-center mx-auto">
        <div className="row flex-md-row">{cards}</div>
      </div>
  );
};




export default ChirpList;