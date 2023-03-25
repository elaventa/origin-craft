import Image from 'next/image'
import React from 'react'
import star from "../../assets/star.png"
const Stars = () => {
  return (
    <div style={{display: "flex"}}>
        <Image placeholder='blur' loading='eager'  src={star} alt="stars"/>
        <Image placeholder='blur' loading='eager'  src={star} alt="stars"/>
        <Image placeholder='blur' loading='eager'  src={star} alt="stars"/>
        <Image placeholder='blur' loading='eager'  src={star} alt="stars"/>
        <Image placeholder='blur' loading='eager'  src={star} alt="stars"/>
    </div>
  )
}

export default Stars