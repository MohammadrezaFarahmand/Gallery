import React from "react"
import { Link } from "react-router-dom"

const ImageCard = (props: {
  image: any
  alt: any
  id?: number
  category: string
  name?: string
}) => {
  return (
    <>
      <div className="flex flex-col justify-center border-4 border-black">
        <Link to={`/photo/${props.id}`}>
          <img
            className="inline w-3/5 aspect-square cursor-pointer p-1"
            src={props.image}
            alt={props.alt}
          />
        </Link>
        <div>
          <h6>{props.name}</h6>
          <h5>Category:{props.category}</h5>
        </div>
      </div>
    </>
  )
}

export default ImageCard
