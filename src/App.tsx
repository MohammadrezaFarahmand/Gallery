import React from "react"
import "./App.css"
import GalleryContainer from "./components/GalleryContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ImageDetail from "../src/components/ImageDetail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryContainer />} />
          <Route path="/photo/:id" element={<ImageDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
