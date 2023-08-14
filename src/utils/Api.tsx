import axios from "axios"
export const url = "https://frontend-gallery.darkube.app/api/"
export const base_url = url

let defaultApi = axios.create({
  baseURL: base_url,
})

export const getCategory = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}categories`,
  })
    .then((res) => res)
    .catch((err) => err)
}

export const getPhotos = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}photos`,
  })
    .then((res) => res)
    .catch((err) => err)
}

export const getPhotoDetail = (id: undefined | string) => {
  return defaultApi({
    method: "get",
    url: `${base_url}photo/${id}`,
  })
}

export const showCategory = (category: string) => {
  return defaultApi({
    method: "get",
    url: `${base_url}categories/${category}/photos`,
  })
    .then((res) => res)
    .catch((err) => err)
}

export const search = (userText: string) => {
  return defaultApi({
    method: "get",
    url: `${base_url}photos?search=${userText}`,
  })
    .then((res) => res)
    .catch((err) => err)
}
