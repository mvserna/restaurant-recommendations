import React, { useState } from "react"
// import reviews from "../constants/reviews"

const ReviewForm = (props) => {
  const defaultState = {
    name: "",
    rating: "",
    content: ""
  }
  
  const [formValues, setFormValues] = useState(defaultState)

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const clearForm = (event) => {
    event.preventDefault()
    setFormValues(defaultState)
  }

  const submitHandler = event => {
    event.preventDefault()
    props.setReviews( [...props.reviews, formValues] )
    clearForm(event)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="rating">
        Rating:
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Rating"
          value={formValues.rating}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="content">
        Content:
        <textarea
          id="content"
          name="content"
          placeholder="Enter review here"
          value={formValues.content}
          onChange={handleChange}
        />
      </label>

      <input type="submit" id="submit" value="Submit" />
    </form>
  )
}

export default ReviewForm
