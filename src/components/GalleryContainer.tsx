import React, { useEffect, useLayoutEffect, useState } from "react"
import ImageCard from "./ImageCard"
import CategoryButton from "./CategoryButton"
import { getCategory, getPhotos, search, showCategory } from "../utils/Api"
import SearchInput from "./SearchInput"

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
  const [userText, setUserText] = useState<string>("")
  const [searchImage, setSearchImage] = useState<Image[]>([])

  useLayoutEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data)
    })
    getPhotos().then((res) => {
      setImages(res.data)
    })
  }, [])

  useLayoutEffect(() => {
    if (selectedCategory) {
      showCategory(selectedCategory).then((res) => {
        setCategoryImages(res.data)
      })
    }
  }, [selectedCategory])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const searchHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(e.target.value)
    search(userText).then((res) => {
      setSearchImage(res.data)
    })
  }

  return (
    <div>
      <div className="mt-2">
        <SearchInput
          onChange={(e: any) => {
            searchHanlder(e)
          }}
          value={userText}
        />
      </div>
      <div className="flex justify-evenly mt-3">
        {categories.map((item, index) => (
          <CategoryButton
            key={index}
            text={item}
            clickHandler={() => handleCategoryClick(item)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {(selectedCategory
          ? categoryImages
          : userText
          ? searchImage
          : images
        ).map((item, index) => (
          <ImageCard
            key={index}
            image={item.url}
            alt={item.alt}
            id={item.id}
            category={item.category}
            name={item.alt}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryContainer
