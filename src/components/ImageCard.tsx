import React from "react"
import { Link } from "react-router-dom"

const ImageCard = (props: {
  image: any
  alt: any
  id?: number
  category: string
}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Link to={`/photo/${props.id}`}>
          <img
            className="w-3/5 aspect-square cursor-pointer"
            src={props.image}
            alt={props.alt}
          />
        </Link>
        <h5 className="text-left">Category:{props.category}</h5>
      </div>
    </>
  )
}

export default ImageCard
