import axios, { AxiosInstance } from "axios"

const defaultApiClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL as string}${import.meta.env.VITE_API_PATH as string}`,
  withCredentials: false,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
})

export default function apiClient(): AxiosInstance {
  return defaultApiClient
}
