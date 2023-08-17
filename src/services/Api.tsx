import { base_url, Api } from "./AxiosCreate"

export const getCategory = async () => {
  const response = await Api({
    method: "get",
    url: `${base_url}/categories`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const getPhotos = async () => {
  const response = await Api({
    method: "get",
    url: `${base_url}/photos`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const getPhotoDetail = async (id: undefined | string) => {
  const response = await Api({
    method: "get",
    url: `${base_url}/photo/${id}`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const showCategory = async (category: string) => {
  const response = await Api({
    method: "get",
    url: `${base_url}/categories/${category}/photos`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}

export const search = async (userText: string) => {
  const response = await Api({
    method: "get",
    url: `${base_url}/photos?search=${userText}`,
  })
    .then((res) => res)
    .catch((err) => err)
  return response
}
