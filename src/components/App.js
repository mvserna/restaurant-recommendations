import React, { useState } from "react"

import Restaurant from "./Restaurant"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import RestaurantForm from "./RestaurantForm"

import restaurantData from "../constants/restaurants"

import reviewData from "../constants/reviews"


const App = props => {
  const [reviews, setReviews] = useState(reviewData)

  const [restaurantList, setRestaurantList] = useState(restaurantData)
  
  const restaurantComponents = restaurantList.map((restaurant) => {
    return (
      <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <RestaurantForm
            setRestaurantList={setRestaurantList}
            currentRestaurantList={restaurantList}
          />
          <h3>Restaurants</h3>
          {restaurantComponents}
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>

            <ReviewForm setReviews={setReviews} reviews={reviews} />
          </div>

          <div className="cell">
            <h3>Reviews</h3>

            <ReviewList reviewData={reviews} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
