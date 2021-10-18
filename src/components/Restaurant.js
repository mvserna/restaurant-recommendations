import React from 'react'

const Restaurant = (props) => {

  return(
    <div className="grid-x grid-margin-x grid-padding-y">
      <h3></h3>
      <div className="cell">
        <img src={props.restaurant.image} alt={props.restaurant.name} />
      </div>

      <div className="cell">
        <p>
          <a href="#">
            <strong>{props.restaurant.name}</strong>
          </a>
        </p>

        <p>{props.restaurant.location}</p>
      </div>

    </div>
  )
}

export default Restaurant
