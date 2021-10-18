import React from 'react'

import Review from "./Review"

const ReviewList = (props) => {

  const reviewComponents = props.reviewData.map( reviewObj => {

    return(
      <Review
        key={reviewObj.id}
        review={reviewObj}
      />
    )
  })

  return(
    <div>
      <ul>{reviewComponents}</ul>
    </div>
  )
}

export default ReviewList
