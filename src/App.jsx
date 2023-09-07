// import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Detail from './Components/Details/Detail'
import ImageSlider from './Components/Slider/ImageSlider'
import Cards from './Components/Cards/Cards'
function App() {
  // const headings =[
  //   'California',
  //   'New York',
  //   'New Jersey',
  //   'Los Angeles',
  //   'San Francisco',
  //   'Virginia',
  //   'Virginia Beach'
  // ]

  return (
    <>
      <Header imgsrc = '../Color-2.svg'/>
      <Detail/>
      <ImageSlider headings='California'/>
      <h1 className='h1'>Get inspired for your next trip</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Cards image='../vehicle.jpg' title='3-Day Loire Mer Extraordinaire Seine'
            location=' New York, USA' review=' 5 (3 Reviews)' rate='From $225,00'/>
          </div>
          <div className="col-md-4">
            <Cards image='../Alexander.jpg/' title='America’s National Parks with Denver'
            location=' Los Angeles' review=' 5 (2 Reviews)' rate='From $100,00'/>
          </div>
          <div className="col-md-4">
            <Cards image='../Hollywood.jpg' title='American Parks Trail end Rapid City Express'
            location=' Nevada, American' review=' 5 (3 Reviews)' rate='From $127,50'/>
          </div>
          <div className="col-md-4">
            <Cards image='../water.jpg' title='California and the Golden West Summer 2019'
            location=' California, USA' review=' 5 (2 Reviews)' rate='From $250,00'/>
          </div>
          <div className="col-md-4">
            <Cards image='../red-telephone.jpg' title='Cannes and Antibes Night Tour the Seine Extraordinaire'
            location=' California, USA' review='  5 (4 Reviews)' rate='From $91,00'/>
          </div>
          <div className="col-md-4">
            <Cards image='../boat.jpg' title='Eastern Discovery (Start New Orleans)'
            location=' California, USA' review='  5 (3 Reviews)' rate='From $250,00'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App