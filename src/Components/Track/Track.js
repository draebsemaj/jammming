import React from 'react';
import "./Track.css";

export class Track extends React.Component {
    renderAction(){
        if (isRemoval) {
            return <Button className={Track-action}>-</Button>
        } else {
            return <Button className={Track-action}>+</Button>
        }
    }

    render(){
        return (
            <div className="Track">
            <div className="Track-information">
              <h3><!-- track name will go here --></h3>
              <p><!-- track artist will go here--> | <!-- track album will go here --></p>
            </div>
            <button className="Track-action"><!-- + or - will go here --></button>
          </div> 
        )
    }
}