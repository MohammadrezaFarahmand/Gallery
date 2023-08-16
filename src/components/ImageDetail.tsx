import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPhotoDetail } from "../services/Api"

const ImageDetail = () => {
  const { id } = useParams()
  const [image, setImage] = useState({
    url: "",
    alt: "",
    category: "",
    photographer: "",
  })
  useEffect(() => {
    getPhotoDetail(id).then((res) => {
      if (res.status === 200) {
        setImage({
          url: res.data.url,
          alt: res.data.alt,
          category: res.data.category,
          photographer: res.data.photographer,
        })
      } else {
        window.location.href = "/"
      }
    })
  }, [id])

  return (
    <div className="inline ">
      <img className="inline " src={image.url} alt={image.alt} />
      <div className="flex flex-col">
        <p>Category:{image.category}</p>
        <p>PhotoGrapher:{image.photographer}</p>
        <p>{image.alt}</p>
      </div>
      <div className="mt-2">
        <Link className="bg-black	text-white px-8 py-2 rounded-lg mt-4" to={"/"}>
          BACK
        </Link>
      </div>
    </div>
  )
}

export default ImageDetail
