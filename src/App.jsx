// import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Detail from './Components/Details/Detail'
import ImageSlider from './Components/Slider/ImageSlider'
function App() {

  return (
    <>
      <Header imgsrc = '../Color-2.svg'/>
      <Detail/>
      <ImageSlider>California</ImageSlider>
    </>
  )
}

export default App