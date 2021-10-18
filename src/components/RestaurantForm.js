import React, { useState } from "react"

const RestaurantForm = (props) => {

  const [restaurantField, setRestaurantField] = useState({
    name: "",
    location: "",
    description: ""
  })

  const handleChange = (event) => {

    setRestaurantField({
      ...restaurantField,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    props.setRestaurantList([
      ...props.currentRestaurantList,
      restaurantField
    ])
  }


  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name:
        <input type="text" id="name" name="name" onChange={handleChange} value={restaurantField.name} />
      </label>

      <label htmlFor="location">Location:
        <input type="text" id="location" name="location" onChange={handleChange} value={restaurantField.location} />
      </label>

      <label htmlFor="description">Description:
        <textarea id="description" name="description" onChange={handleChange} value={restaurantField.description} />
      </label>

      <input type="submit" value="Submit" />

    </form>


  )
}


export default RestaurantForm