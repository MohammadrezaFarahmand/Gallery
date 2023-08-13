import React from "react"

const CategoryButton = (props: { text: string; clickHandler?: any }) => {
  return (
    <div className="flex justify-evenly ">
      <button
        onClick={props.clickHandler}
        className="bg-gray-500 p-2 rounded-lg	">
        {props.text}
      </button>
    </div>
  )
}

export default CategoryButton
