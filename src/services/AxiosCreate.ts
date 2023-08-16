import axios from "axios"
export const base_url = "https://frontend-gallery.darkube.app/api"

export const Api = axios.create({
  baseURL: base_url,
})
