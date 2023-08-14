import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPhotoDetail } from "../utils/Api"

interface Image {
  url: string
  category?: string
  alt: string
  photographer?: string
}

const ImageDetail = () => {
  const { id } = useParams()

  const [image, setImage] = useState<Image>({
    url: "",
    alt: "",
    category: "",
    photographer: "",
  })

  useEffect(() => {
    getPhotoDetail(id).then((res) => {
      setImage({
        url: res.data.url,
        alt: res.data.alt,
        category: res.data.category,
        photographer: res.data.photographer,
      })
      console.log(res.data)
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
