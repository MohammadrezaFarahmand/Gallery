import React from "react"
import "./App.css"
import GalleryContainer from "./components/GalleryContainer"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ImageDetail from "../src/components/ImageDetail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryContainer />} />
          <Route path="/photo/:id" element={<ImageDetail />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
