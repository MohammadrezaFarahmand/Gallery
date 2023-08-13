import React, { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import CategoryButton from "./CategoryButton"
import { getCategory, getPhotos } from "../utils/Api"

interface Image {
  url: string
  alt: string
  id: number
  category: string
}

const GalleryContainer: React.FC = () => {
  const [category, setCategory] = useState<string[]>([])
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res.data)
    })
    getPhotos().then((res) => {
      setImages(res.data)
    })
  }, [])

  return (
    <div>
      <div className="flex justify-evenly">
        {category?.map((item, index) => (
          <CategoryButton
            key={index}
            text={item}
            clickHandler={() => {
              console.log(item)
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {images?.map((item, index) => (
          <ImageCard
            key={index}
            image={item.url}
            alt={item.alt}
            id={item.id}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryContainer
