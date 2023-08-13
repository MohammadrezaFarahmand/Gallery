import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
    <div className="inline">
      <img className="inline" src={image.url} alt={image.alt} />
      <div className="flex flex-col">
        <p>Category:{image.category}</p>
        <p>PhotoGrapher:{image.photographer}</p>
      </div>
    </div>
  )
}

export default ImageDetail
