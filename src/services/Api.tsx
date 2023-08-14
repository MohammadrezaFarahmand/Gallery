import axios from "axios"
export const base_url = "https://frontend-gallery.darkube.app/api"

let Api = axios.create({
  baseURL: base_url,
})

export const getCategory = async () => {
  const response = Api({
    method: "get",
    url: `${base_url}/categories`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const getPhotos = () => {
  const response = Api({
    method: "get",
    url: `${base_url}/photos`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const getPhotoDetail = (id: undefined | string) => {
  const response = Api({
    method: "get",
    url: `${base_url}/photo/${id}`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const showCategory = (category: string) => {
  const response = Api({
    method: "get",
    url: `${base_url}/categories/${category}/photos`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const search = (userText: string) => {
  const response = Api({
    method: "get",
    url: `${base_url}/photos?search=${userText}`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}
