import React, { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import CategoryButton from "./CategoryButton"
import { getCategory, getPhotos, showCategory } from "../utils/Api"

interface Image {
  url: string
  alt: string
  id: number
  category: string
}

const GalleryContainer: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [images, setImages] = useState<Image[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [categoryImages, setCategoryImages] = useState<Image[]>([])

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data)
    })
    getPhotos().then((res) => {
      setImages(res.data)
    })
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      showCategory(selectedCategory).then((res) => {
        setCategoryImages(res.data)
      })
    }
  }, [selectedCategory])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <div className="flex justify-evenly">
        {categories.map((item, index) => (
          <CategoryButton
            key={index}
            text={item}
            clickHandler={() => handleCategoryClick(item)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {(selectedCategory ? categoryImages : images).map((item, index) => (
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
