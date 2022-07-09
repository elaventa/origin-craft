import Image from 'next/image'
import React from 'react'
import star from "../../assets/star.png"
const Stars = () => {
  return (
    <div style={{display: "flex"}}>
        <Image src={star} alt="stars"/>
        <Image src={star} alt="stars"/>
        <Image src={star} alt="stars"/>
        <Image src={star} alt="stars"/>
        <Image src={star} alt="stars"/>
    </div>
  )
}

export default Stars